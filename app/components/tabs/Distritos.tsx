"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine, ResponsiveContainer, Cell } from "recharts";
import { RESULTADOS, META } from "@/app/data/resultados";
import { fmt, useUF } from "@/app/lib/ctx";
import { districtColor } from "@/app/lib/colors";

const Mapa = dynamic(() => import("@/app/components/maps/MapDistritos"), {
  ssr: false, loading: () => <div className="map" style={{ display: "grid", placeItems: "center" }}><span className="muted">carregando mapa…</span></div>,
});

export default function Distritos() {
  const { uf } = useUF();
  const e = RESULTADOS[uf];
  const [modo, setModo] = useState<"antes" | "depois">("depois");
  const chart = e.distritos.map((d) => ({ nome: `D${d.distrito}`, desvio: d.desvio, distrito: d.distrito }));

  return (
    <div className="section container grid" style={{ gap: 16 }}>
      <div className="grid c2w">
        <div className="card">
          <h3>
            Do município ao distrito — {uf}
            <span className="seg">
              <button className={modo === "antes" ? "on" : ""} onClick={() => setModo("antes")}>Antes ({META.municipios_por_uf[uf]} municípios)</button>
              <button className={modo === "depois" ? "on" : ""} onClick={() => setModo("depois")}>Depois ({e.n_distritos} distritos)</button>
            </span>
          </h3>
          <Mapa uf={uf} modo={modo} />
          <div className="legend">
            {modo === "depois"
              ? e.distritos.map((d) => (
                  <span className="it" key={d.distrito}><span className="sw" style={{ background: districtColor(d.distrito) }} />Distrito {d.distrito}</span>
                ))
              : <span className="muted">municípios individuais (antes do agrupamento)</span>}
          </div>
        </div>

        <div className="card">
          <h3>Conformidade populacional (desvio por distrito)</h3>
          <div className="bd" style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chart} margin={{ top: 8, right: 10, left: -12, bottom: 0 }}>
                <XAxis dataKey="nome" tick={{ fill: "#9fb4c9", fontSize: 12 }} />
                <YAxis tick={{ fill: "#9fb4c9", fontSize: 12 }} unit="%" domain={[-15, 15]} />
                <Tooltip contentStyle={{ background: "#0d1826", border: "1px solid #274056", borderRadius: 8, color: "#e8eef5" }} formatter={(v: any) => [`${v}%`, "desvio"]} />
                <ReferenceLine y={5} stroke="#37d6a0" strokeDasharray="4 4" />
                <ReferenceLine y={-5} stroke="#37d6a0" strokeDasharray="4 4" />
                <ReferenceLine y={10} stroke="#ff9d5c" strokeDasharray="4 4" />
                <ReferenceLine y={-10} stroke="#ff9d5c" strokeDasharray="4 4" />
                <ReferenceLine y={0} stroke="#274056" />
                <Bar dataKey="desvio" radius={[3, 3, 0, 0]}>
                  {chart.map((c) => <Cell key={c.distrito} fill={districtColor(c.distrito)} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="legend"><span className="muted">linhas: <span className="good">±5%</span> (regra estrita) · <span className="warn">±10%</span> (folga de 1 distrito)</span></div>
        </div>
      </div>

      <div className="grid c2w">
        <div className="card">
          <h3>Distritos — população, desvio, municípios, compacidade</h3>
          <div className="scroll">
            <table className="tbl">
              <thead><tr><th>Distrito</th><th>População</th><th>Desvio</th><th>Nº mun.</th><th>Compac.</th><th>Faixa</th></tr></thead>
              <tbody>
                {e.distritos.map((d) => (
                  <tr key={d.distrito}>
                    <td><span className="sw" style={{ display: "inline-block", width: 11, height: 11, borderRadius: 3, background: districtColor(d.distrito), marginRight: 6 }} />{d.distrito}</td>
                    <td>{fmt(d.pop)}</td>
                    <td style={{ color: Math.abs(d.desvio) > 5 ? "#ff9d5c" : "#37d6a0" }}>{d.desvio > 0 ? "+" : ""}{d.desvio}%</td>
                    <td>{d.n_mun}</td><td>{d.compacidade}</td><td>{d.faixa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h3>Capitais subdivididas por zona eleitoral</h3>
          <div className="bd">
            {e.capitais.length ? e.capitais.map((c) => (
              <div key={c.municipio} style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 15, fontWeight: 700 }}>{c.municipio}</div>
                <div className="muted" style={{ fontSize: 13, marginTop: 3 }}>
                  População = <b>{c.excede_pct.toFixed(0)}%</b> do ideal de um distrito → não cabe inteira.
                  Foi dividida em <b>{c.n_zonas} zonas eleitorais</b>, distribuídas entre distritos vizinhos
                  (proxy: população rateada pelos votos por zona; geometria por partição Voronoi).
                </div>
              </div>
            )) : <span className="muted">Nenhuma capital precisou ser subdividida neste estado (a capital cabe em um distrito).</span>}
            <div className="row" style={{ marginTop: 8 }}><span className="k muted">Conformidade</span><span>{e.resumo["<=5%"]} ≤5% · {e.resumo["5-10%"]} em 5-10% · {e.resumo[">10%"]} &gt;10% — <b className="good">{e.conforme ? "CONFORME" : "não conforme"}</b></span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
