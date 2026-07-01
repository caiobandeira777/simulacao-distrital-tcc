// Gera public/data/votos_reais_{UF}.json — distribuição de votos REAIS de
// Deputado Federal 2022 por MUNICÍPIO (IBGE), para o mapa coroplético da aba Eleição.
//
// Fonte (TSE, já consolidado pelo ETL do projeto mandato365):
//   - votos_municipios_2022.csv          (votos por município/candidato)
//   - depara_tse_ibge_MS_SC_GO.csv       (código TSE -> código IBGE da malha)
// A malha municipal (public/geo/malha_{UF}.geojson) usa o código IBGE em `cod`.
//
// Uso:  node scripts/gerar_votos_reais.mjs
// Ajuste SRC caso os CSVs estejam em outro caminho (env VOTOS_SRC).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC =
  process.env.VOTOS_SRC ??
  "C:/Users/caiob/OneDrive/Área de Trabalho/codigos/claude code/mandatoai/etl/output";

const UFS = ["MS", "SC", "GO"];
const TOP_CANDIDATOS = 60; // maiores votações por UF (mantém o dropdown e o arquivo enxutos)

// CSV simples (sem aspas/; nos campos usados) — separador vírgula.
function readCsv(file) {
  const raw = fs.readFileSync(file, "utf8");
  const lines = raw.split(/\r?\n/);
  const header = lines[0].split(",");
  const idx = Object.fromEntries(header.map((h, i) => [h.trim(), i]));
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i]) continue;
    rows.push(lines[i].split(","));
  }
  return { idx, rows };
}

// de-para código TSE -> IBGE
const dep = readCsv(path.join(SRC, "depara_tse_ibge_MS_SC_GO.csv"));
const tse2ibge = {};
for (const c of dep.rows) tse2ibge[c[dep.idx.codigo_tse]] = c[dep.idx.codigo_ibge];

const votos = readCsv(path.join(SRC, "votos_municipios_2022.csv"));
const V = votos.idx;

const outDir = path.join(ROOT, "public", "data");
fs.mkdirSync(outDir, { recursive: true });

for (const uf of UFS) {
  // códigos IBGE presentes na malha (o mapa só pinta esses)
  const malha = JSON.parse(
    fs.readFileSync(path.join(ROOT, "public", "geo", `malha_${uf}.geojson`), "utf8")
  );
  const ibgeMalha = new Set(malha.features.map((f) => String(f.properties.cod)));

  const municipios = {}; // ibge -> { nome, total }
  const porPartido = {}; // sigla -> { ibge -> votos }
  const porCandidato = {}; // id -> { ibge -> votos }
  const candMeta = {}; // id -> { nome, partido, total }
  const partTotal = {}; // sigla -> total UF

  let semMapa = 0;
  for (const c of votos.rows) {
    if (c[V.uf] !== uf) continue;
    if (c[V.cargo] !== "deputado_federal") continue;
    const ibge = tse2ibge[c[V.municipio_cod]];
    if (!ibge || !ibgeMalha.has(ibge)) {
      semMapa++;
      continue;
    }
    const nome = c[V.municipio_nome];
    const totalMun = Number(c[V.total_municipio]) || 0;
    const votosC = Number(c[V.total_votos]) || 0;
    const partido = c[V.partido];
    const id = c[V.candidato_id];
    const candNome = c[V.candidato_nome];

    if (!municipios[ibge]) municipios[ibge] = { nome, total: totalMun };

    // por partido
    (porPartido[partido] ??= {});
    porPartido[partido][ibge] = (porPartido[partido][ibge] ?? 0) + votosC;
    partTotal[partido] = (partTotal[partido] ?? 0) + votosC;

    // por candidato
    (porCandidato[id] ??= {});
    porCandidato[id][ibge] = (porCandidato[id][ibge] ?? 0) + votosC;
    if (!candMeta[id]) candMeta[id] = { id, nome: candNome, partido, total: 0 };
    candMeta[id].total += votosC;
  }

  // partidos ordenados por votação total no estado
  const partidos = Object.entries(partTotal)
    .map(([sigla, total]) => ({ sigla, total }))
    .sort((a, b) => b.total - a.total);

  // top candidatos
  const candidatos = Object.values(candMeta)
    .sort((a, b) => b.total - a.total)
    .slice(0, TOP_CANDIDATOS)
    .map(({ id, nome, partido, total }) => ({ id, nome, partido, total }));

  // mantém em porCandidato só os top (reduz o arquivo)
  const keepIds = new Set(candidatos.map((c) => c.id));
  const porCandidatoTop = {};
  for (const id of keepIds) porCandidatoTop[id] = porCandidato[id];

  const out = {
    uf,
    n_municipios: Object.keys(municipios).length,
    top_candidatos: TOP_CANDIDATOS,
    municipios,
    partidos,
    candidatos,
    porPartido,
    porCandidato: porCandidatoTop,
  };
  const file = path.join(outDir, `votos_reais_${uf}.json`);
  fs.writeFileSync(file, JSON.stringify(out));
  const kb = (fs.statSync(file).size / 1024).toFixed(0);
  console.log(
    `${uf}: ${out.n_municipios} municípios · ${partidos.length} partidos · ${candidatos.length} candidatos (top) · ${kb} KB` +
      (semMapa ? ` · ${semMapa} linhas sem match na malha` : "")
  );
}
