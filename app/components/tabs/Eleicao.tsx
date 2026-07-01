"use client";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { RESULTADOS } from "@/app/data/resultados";
import { fmt, useUF } from "@/app/lib/ctx";
import { partyColor, districtColor, HEAT_LEGEND } from "@/app/lib/colors";
import type { MunInfo } from "@/app/components/maps/MapVotosReais";

const MapaVenc = dynamic(() => import("@/app/components/maps/MapEleicao"), {
  ssr: false, loading: () => <div className="map" style={{ display: "grid", placeItems: "center" }}><span className="muted">carregando mapa…</span></div>,
});
const MapaReal = dynamic(() => import("@/app/components/maps/MapVotosReais"), {
  ssr: false, loading: () => <div className="map" style={{ display: "grid", placeItems: "center" }}><span className="muted">carregando mapa…</span></div>,
});

interface VotosReais {
  uf: string;
  n_municipios: number;
  top_candidatos: number;
  municipios: Record<string, MunInfo>;
  partidos: { sigla: string; total: number }[];
  candidatos: { id: string; nome: string; partido: string; total: number }[];
  porPartido: Record<string, Record<string, number>>;
  porCandidato: Record<string, Record<string, number>>;
}

export default function Eleicao() {
  const { uf } = useUF();
  const e = RESULTADOS[uf];

  // ── estado compartilhado do distrito selecionado (mapa ↔ dropdown ↔ ranking) ──
  const [distSel, setDistSel] = useState<number>(e.vencedores[0]?.distrito ?? 1);
  useEffect(() => { setDistSel(e.vencedores[0]?.distrito ?? 1); }, [uf]); // reset ao trocar UF

  const sel = e.vencedores.find((v) => v.distrito === distSel) ?? null;
  const rankDist = e.ranking.filter((r) => r.distrito === distSel);
  const margens = [...e.vencedores].sort((a, b) => a.margem_votos - b.margem_votos).slice(0, 3);

  // ── modo do mapa: vencedores simulados ↔ votação real 2022 ──
  const [modo, setModo] = useState<"sim" | "real">("sim");

  return (
    <div className="section container grid" style={{ gap: 16 }}>
      <div className="grid c2w">
        <div className="card">
          <h3 className="wrap">
            <span>Mapa da eleição — {uf}</span>
            <span className="seg" role="tablist" aria-label="Modo do mapa">
              <button role="tab" aria-selected={modo === "sim"} className={modo === "sim" ? "on" : ""} onClick={() => setModo("sim")}>Vencedores simulados</button>
              <button role="tab" aria-selected={modo === "real"} className={modo === "real" ? "on" : ""} onClick={() => setModo("real")}>Votação real 2022</button>
            </span>
          </h3>

          {modo === "sim" ? (
            <>
              <MapaVenc uf={uf} onSelect={(p: any) => setDistSel(p.distrito)} selected={distSel} />
              <div className="legend">
                <span className="muted" style={{ width: "100%", marginBottom: 2 }}>Cada cor = um distrito · clique para ver o ranking. Rótulo mostra o partido do vencedor.</span>
                {e.vencedores.map((v) => (
                  <button
                    key={v.distrito}
                    className={`it it-btn${v.distrito === distSel ? " on" : ""}`}
                    onClick={() => setDistSel(v.distrito)}
                    aria-pressed={v.distrito === distSel}
                  >
                    <span className="sw" style={{ background: districtColor(v.distrito) }} />Distrito {v.distrito}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <RealMap uf={uf} />
          )}
        </div>

        <div className="grid" style={{ gap: 14 }}>
          <div className="card">
            <h3>Detalhe do distrito {sel ? `· D${sel.distrito}` : ""}</h3>
            <div className="bd">
              {!sel ? <span className="muted">Selecione um distrito no mapa (ou no dropdown abaixo).</span> : (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                    <div style={{ fontSize: 18, fontWeight: 800 }}>
                      <span className="sw" style={{ display: "inline-block", width: 12, height: 12, borderRadius: 3, background: districtColor(sel.distrito), marginRight: 7, verticalAlign: "middle" }} />
                      {sel.candidato}
                    </div>
                    <span className="badge" style={{ background: partyColor(sel.partido) }}>{sel.partido}</span>
                  </div>
                  <div className="row"><span className="k muted">Votos no distrito</span><span>{fmt(sel.votos)} ({sel.pct}%)</span></div>
                  <div className="row"><span className="k muted">2º colocado</span><span>{sel.segundo ?? "—"} <b style={{ color: partyColor(sel.partido2) }}>{sel.partido2 ?? ""}</b></span></div>
                  <div className="row"><span className="k muted">Margem de vitória</span><span>{fmt(sel.margem_votos)} votos ({sel.margem_pct}%)</span></div>
                  <div className="row"><span className="k muted">Municípios / válidos</span><span>{sel.municipios} · {fmt(sel.total_validos)}</span></div>
                </>
              )}
            </div>
          </div>

          <div className="card">
            <h3>Destaques</h3>
            <div className="bd">
              <div className="lab muted" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".5px" }}>Venceu múltiplos distritos</div>
              <div style={{ marginTop: 5, fontSize: 14 }}>
                {e.multi_distrito.length ? e.multi_distrito.map((m) => (
                  <div key={m.candidato}><b>{m.candidato}</b> <span className="badge" style={{ background: partyColor(m.partido), fontSize: 11 }}>{m.partido}</span> — distritos {m.distritos.join(", ")}</div>
                )) : <span className="muted">nenhum</span>}
              </div>
              <div className="lab muted" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".5px", marginTop: 12 }}>Margens mais apertadas</div>
              <div style={{ marginTop: 5, fontSize: 14 }}>
                {margens.map((m) => (
                  <button key={m.distrito} className="row row-btn" onClick={() => setDistSel(m.distrito)}>
                    <span className="k">D{m.distrito} · {m.candidato} <span className="muted">({m.partido})</span></span><span className="warn">{fmt(m.margem_votos)} ({m.margem_pct}%)</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="wrap">
          <span>Ranking por distrito</span>
          <select value={distSel} onChange={(ev) => setDistSel(Number(ev.target.value))} aria-label="Selecionar distrito"
            style={{ background: "#1b2a3a", color: "#e8eef5", border: "1px solid #274056", borderRadius: 8, padding: "6px 9px" }}>
            {e.vencedores.map((v) => <option key={v.distrito} value={v.distrito}>Distrito {v.distrito}</option>)}
          </select>
        </h3>
        <div className="scroll">
          <table className="tbl">
            <thead><tr><th>#</th><th>Candidato</th><th>Partido</th><th>Votos</th><th>% válidos</th></tr></thead>
            <tbody>
              {rankDist.map((r) => (
                <tr key={r.posicao}>
                  <td>{r.posicao}</td>
                  <td>{r.candidato}</td>
                  <td><span className="badge" style={{ background: partyColor(r.partido), fontSize: 11 }}>{r.partido}</span></td>
                  <td>{fmt(r.votos)}</td><td>{r.pct}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────── Votação real 2022 ───────────────────────────────
function RealMap({ uf }: { uf: string }) {
  const [data, setData] = useState<VotosReais | null>(null);
  const [erro, setErro] = useState(false);
  const [serie, setSerie] = useState<string>(""); // "p:SIGLA" | "c:ID"

  useEffect(() => {
    let alive = true;
    setData(null); setErro(false);
    fetch(`/data/votos_reais_${uf}.json`)
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((d: VotosReais) => { if (alive) { setData(d); setSerie(`p:${d.partidos[0]?.sigla ?? ""}`); } })
      .catch(() => alive && setErro(true));
    return () => { alive = false; };
  }, [uf]);

  const view = useMemo(() => {
    if (!data || !serie) return null;
    const [tipo, id] = [serie.slice(0, 1), serie.slice(2)];
    const valores = (tipo === "p" ? data.porPartido[id] : data.porCandidato[id]) ?? {};
    let rotulo = id;
    if (tipo === "p") rotulo = `Partido ${id}`;
    else {
      const c = data.candidatos.find((x) => x.id === id);
      rotulo = c ? `${c.nome} (${c.partido})` : id;
    }
    let maxShare = 0;
    for (const cod in valores) {
      const info = data.municipios[cod];
      if (info && info.total > 0) maxShare = Math.max(maxShare, (100 * valores[cod]) / info.total);
    }
    return { valores, rotulo, maxShare };
  }, [data, serie]);

  if (erro) return <div className="map" style={{ display: "grid", placeItems: "center" }}><span className="muted">dados de votação real indisponíveis para {uf}</span></div>;
  if (!data || !view) return <div className="map" style={{ display: "grid", placeItems: "center" }}><span className="muted">carregando dados…</span></div>;

  return (
    <>
      <div className="bd" style={{ paddingBottom: 8 }}>
        <label className="muted" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".5px", display: "block", marginBottom: 5 }}>Visualizar votação de</label>
        <select value={serie} onChange={(ev) => setSerie(ev.target.value)} aria-label="Candidato ou partido"
          style={{ width: "100%", background: "#1b2a3a", color: "#e8eef5", border: "1px solid #274056", borderRadius: 8, padding: "8px 10px", fontSize: 14 }}>
          <optgroup label="Partidos (soma dos candidatos)">
            {data.partidos.map((p) => <option key={p.sigla} value={`p:${p.sigla}`}>{p.sigla} — {fmt(p.total)} votos</option>)}
          </optgroup>
          <optgroup label={`Candidatos (top ${data.top_candidatos})`}>
            {data.candidatos.map((c) => <option key={c.id} value={`c:${c.id}`}>{c.nome} ({c.partido}) — {fmt(c.total)}</option>)}
          </optgroup>
        </select>
      </div>
      <MapaReal uf={uf as any} valores={view.valores} municipios={data.municipios} maxShare={view.maxShare} rotulo={view.rotulo} />
      <div className="legend" style={{ flexDirection: "column", alignItems: "stretch", gap: 6 }}>
        <span className="muted">{view.rotulo} · intensidade = % dos votos válidos do município</span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 11 }} className="muted">0%</span>
          <div style={{ flex: 1, height: 12, borderRadius: 6, border: "1px solid #0006", background: `linear-gradient(90deg, ${HEAT_LEGEND.join(",")})` }} />
          <span style={{ fontSize: 11 }} className="muted">{view.maxShare.toFixed(0)}%</span>
        </div>
      </div>
    </>
  );
}
