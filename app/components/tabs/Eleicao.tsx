"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { RESULTADOS } from "@/app/data/resultados";
import { fmt, useUF } from "@/app/lib/ctx";
import { partyColor } from "@/app/lib/colors";

const Mapa = dynamic(() => import("@/app/components/maps/MapEleicao"), {
  ssr: false, loading: () => <div className="map" style={{ display: "grid", placeItems: "center" }}><span className="muted">carregando mapa…</span></div>,
});

export default function Eleicao() {
  const { uf } = useUF();
  const e = RESULTADOS[uf];
  const [sel, setSel] = useState<any | null>(null);
  const [distFiltro, setDistFiltro] = useState<number>(e.vencedores[0]?.distrito ?? 1);
  const margens = [...e.vencedores].sort((a, b) => a.margem_votos - b.margem_votos).slice(0, 3);
  const rankDist = e.ranking.filter((r) => r.distrito === distFiltro);

  return (
    <div className="section container grid" style={{ gap: 16 }}>
      <div className="grid" style={{ gridTemplateColumns: "1.5fr 1fr" }}>
        <div className="card">
          <h3>Vencedores distritais — {uf} <span className="muted" style={{ textTransform: "none" }}>cor = partido · clique num distrito</span></h3>
          <Mapa uf={uf} onSelect={setSel} />
          <div className="legend">
            {[...new Set(e.vencedores.map((v) => v.partido))].map((p) => (
              <span className="it" key={p}><span className="sw" style={{ background: partyColor(p) }} />{p}</span>
            ))}
          </div>
        </div>

        <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 14 }}>
          <div className="card">
            <h3>Detalhe do distrito {sel ? `· D${sel.distrito}` : ""}</h3>
            <div className="bd">
              {!sel ? <span className="muted">Clique num distrito no mapa para ver vencedor, 2º colocado e margem.</span> : (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: 18, fontWeight: 800 }}>{sel.vencedor}</div>
                    <span className="badge" style={{ background: partyColor(sel.partido) }}>{sel.partido}</span>
                  </div>
                  <div className="row"><span className="k muted">Votos no distrito</span><span>{fmt(sel.votos)} ({sel.pct}%)</span></div>
                  <div className="row"><span className="k muted">2º colocado</span><span>{sel.segundo ?? "—"} <b style={{ color: partyColor(sel.partido2) }}>{sel.partido2 ?? ""}</b></span></div>
                  <div className="row"><span className="k muted">Margem de vitória</span><span>{fmt(sel.margem_votos)} votos ({sel.margem_pct}%)</span></div>
                  <div className="row"><span className="k muted">Municípios / válidos</span><span>{sel.n_mun} · {fmt(sel.total_validos)}</span></div>
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
                  <div key={m.distrito} className="row"><span className="k">D{m.distrito} · {m.candidato} <span className="muted">({m.partido})</span></span><span className="warn">{fmt(m.margem_votos)} ({m.margem_pct}%)</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>
          Ranking por distrito
          <select value={distFiltro} onChange={(ev) => setDistFiltro(Number(ev.target.value))}
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
