"use client";
import { RESULTADOS } from "@/app/data/resultados";
import { useUF } from "@/app/lib/ctx";

const PIPE = [
  ["A", "Malha, população e de-para", "Malha municipal do IBGE (2022), população do Censo 2022 (SIDRA t.4709) e de-para código TSE ↔ IBGE — os 620 municípios de MS/SC/GO."],
  ["B", "Desenho dos distritos", "Metade das cadeiras = distritos. Agrupamento contíguo por Simulated Annealing + multi-restart, balanceado por população (±5%, folga de ±10% para 1 distrito). Capitais grandes subdivididas por zona eleitoral."],
  ["C", "Eleição distrital", "Votos nominais reais de dep. federal 2022 (todos os candidatos) reatribuídos ao distrito de cada município/zona. Mais votado por distrito = eleito distrital."],
  ["D", "Parte proporcional", "Voto partidário (proxy) distribuído por maiores médias (D'Hondt); abatimento das cadeiras distritais; overhang quando o partido ganha mais distritos que sua cota."],
  ["E", "Cadeiras de lista", "Preenchimento das vagas de lista por ordem de votação nominal estadual (modelo A) ou melhor desempenho distrital (modelo B), excluindo quem já pegou distrital."],
  ["F", "Comparação com 2022 real", "Eleitos reais (DS_SIT_TOT_TURNO) vs. simulados: quem se mantém, quem entra e quem sai; cadeiras por partido; mapas."],
];

function baixarCSV(nome: string, linhas: Record<string, any>[]) {
  if (!linhas.length) return;
  const cols = Object.keys(linhas[0]);
  const esc = (v: any) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const csv = [cols.join(","), ...linhas.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url; a.download = nome; a.click(); URL.revokeObjectURL(url);
}

export default function Metodologia() {
  const { uf } = useUF();
  const e = RESULTADOS[uf];

  return (
    <div className="section container grid" style={{ gap: 16 }}>
      <div className="card">
        <h3>Pipeline metodológico A → F</h3>
        <div className="bd grid" style={{ gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
          {PIPE.map(([l, t, d]) => (
            <div key={l} className="kpi">
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span className="badge" style={{ background: "#4fa3ff", color: "#04121f", fontSize: 14, width: 26, height: 26, display: "grid", placeItems: "center", borderRadius: 8 }}>{l}</span>
                <b>{t}</b>
              </div>
              <div className="muted" style={{ fontSize: 13, marginTop: 7 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div className="card">
          <h3>Limitações (leitura honesta)</h3>
          <div className="bd" style={{ fontSize: 13.5, lineHeight: 1.6 }}>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li><b>Voto partidário é um proxy.</b> Em 2022 não havia voto partidário separado; usamos voto de legenda (cenário 1) ou nominais+legenda (cenário 2). {e.nota_proxy}</li>
              <li><b>Circunscrição.</b> Os candidatos concorreram no estado inteiro, não em distritos — a simulação reatribui os votos reais ao distrito que contém cada município/zona.</li>
              <li><b>Capitais.</b> Campo Grande e Goiânia excedem o tamanho de um distrito; foram subdivididas por zona eleitoral, com população rateada pelos votos por zona e geometria aproximada por partição Voronoi (as zonas não têm malha oficial).</li>
              <li><b>Federações e cláusulas.</b> Federações são tratadas como partidos isolados (SG_PARTIDO); não se aplicou cláusula de desempenho.</li>
              <li><b>Múltiplos distritos.</b> Um mesmo candidato pode vencer vários distritos; tratamos em dois sub-cenários (único / literal).</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h3>Downloads — dados desta simulação ({uf})</h3>
          <div className="bd" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <a className="btn" href={`/geo/distritos_${uf}.geojson`} download>⬇ distritos_{uf}.geojson</a>
            <a className="btn" href={`/geo/malha_${uf}.geojson`} download>⬇ malha_{uf}.geojson</a>
            <button className="btn" onClick={() => baixarCSV(`vencedores_${uf}.csv`, e.vencedores)}>⬇ vencedores_{uf}.csv</button>
            <button className="btn" onClick={() => baixarCSV(`cadeiras_partido_${uf}.csv`, e.cadeiras_partido)}>⬇ cadeiras_partido_{uf}.csv</button>
            <button className="btn" onClick={() => baixarCSV(`distritos_${uf}.csv`, e.distritos)}>⬇ distritos_{uf}.csv</button>
            <button className="btn" onClick={() => baixarCSV(`eleitos_reais_${uf}.csv`, e.eleitos_reais)}>⬇ eleitos_reais_2022_{uf}.csv</button>
          </div>
          <div className="legend"><span className="muted">GeoJSON servidos de /public/geo · CSVs gerados no navegador a partir dos dados tipados em app/data/resultados.ts</span></div>
        </div>
      </div>
    </div>
  );
}
