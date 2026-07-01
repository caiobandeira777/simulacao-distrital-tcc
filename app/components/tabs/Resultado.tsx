"use client";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { RESULTADOS, UFS } from "@/app/data/resultados";
import { fmt, useUF } from "@/app/lib/ctx";
import { partyColor } from "@/app/lib/colors";
import Hemiciclo from "@/app/components/Hemiciclo";

export default function Resultado() {
  const { uf } = useUF();
  const e = RESULTADOS[uf];
  const [cen, setCen] = useState<"c1" | "c2">("c1");
  const [sub, setSub] = useState<"unico" | "literal">("unico");
  const [mod, setMod] = useState<"A" | "B">("A");
  const key = `${cen}_${sub}_${mod}`;
  const combo = e.combos[key] ?? e.combos["c1_unico_A"];

  const bars = e.cadeiras_partido.map((p) => ({ partido: p.partido, Real: p.real, "Cenário 1": p.c1, "Cenário 2": p.c2 }));
  const es = e.entra_sai.filter((x) => x.cenario === cen);
  const entram = es.filter((x) => x.status === "entram");
  const saem = es.filter((x) => x.status === "saem");
  const mant = e.mantidos[cen];

  return (
    <div className="section container grid" style={{ gap: 16 }}>
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div className="card">
          <h3>
            Composição da bancada — {uf}
            <span style={{ display: "flex", gap: 8 }}>
              <span className="seg"><button className={cen === "c1" ? "on" : ""} onClick={() => setCen("c1")}>c1 legenda</button><button className={cen === "c2" ? "on" : ""} onClick={() => setCen("c2")}>c2 nom+leg</button></span>
            </span>
          </h3>
          <div className="bd">
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span className="seg"><button className={sub === "unico" ? "on" : ""} onClick={() => setSub("unico")}>único</button><button className={sub === "literal" ? "on" : ""} onClick={() => setSub("literal")}>literal</button></span>
              <span className="seg"><button className={mod === "A" ? "on" : ""} onClick={() => setMod("A")}>lista A</button><button className={mod === "B" ? "on" : ""} onClick={() => setMod("B")}>lista B</button></span>
              <span className="pill">bancada <b>{combo.bancada_final}</b> = base {combo.bancada_base}{combo.overhang ? ` + ${combo.overhang} overhang` : ""}</span>
            </div>
            <Hemiciclo eleitos={combo.eleitos} base={combo.bancada_base} overhang={combo.overhang} />
          </div>
        </div>

        <div className="card">
          <h3>Cadeiras por partido — Real 2022 × Cenário 1 × Cenário 2</h3>
          <div className="bd" style={{ height: 360 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bars} margin={{ top: 8, right: 10, left: -14, bottom: 0 }}>
                <XAxis dataKey="partido" tick={{ fill: "#9fb4c9", fontSize: 11 }} interval={0} angle={-25} textAnchor="end" height={54} />
                <YAxis tick={{ fill: "#9fb4c9", fontSize: 12 }} allowDecimals={false} />
                <Tooltip contentStyle={{ background: "#0d1826", border: "1px solid #274056", borderRadius: 8, color: "#e8eef5" }} cursor={{ fill: "#ffffff10" }} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="Real" fill="#7ee081" radius={[3, 3, 0, 0]} />
                <Bar dataKey="Cenário 1" fill="#4fa3ff" radius={[3, 3, 0, 0]} />
                <Bar dataKey="Cenário 2" fill="#ffb454" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "1.3fr 1fr" }}>
        <div className="card">
          <h3>Quem entra / quem sai <span className="muted" style={{ textTransform: "none" }}>vs. eleitos reais de 2022 · cenário {cen === "c1" ? "1" : "2"}</span></h3>
          <div className="bd grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div>
              <div className="lab" style={{ color: "#37d6a0", fontSize: 11, textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 6 }}>Entram ({entram.length})</div>
              {entram.length ? entram.map((x, i) => (
                <div key={i} className="row"><span>{x.nome}</span><span className="badge" style={{ background: partyColor(x.partido), fontSize: 11 }}>{x.partido}</span></div>
              )) : <span className="muted">—</span>}
            </div>
            <div>
              <div className="lab" style={{ color: "#ff6b6b", fontSize: 11, textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 6 }}>Saem ({saem.length})</div>
              {saem.length ? saem.map((x, i) => (
                <div key={i} className="row"><span>{x.nome}</span><span className="badge" style={{ background: partyColor(x.partido), fontSize: 11 }}>{x.partido}</span></div>
              )) : <span className="muted">—</span>}
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Placar de fidelidade <span className="muted" style={{ textTransform: "none" }}>eleitos reais que permanecem</span></h3>
          <div className="bd">
            <div className="grid" style={{ gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
              {UFS.map((u) => {
                const st = RESULTADOS[u];
                const cur = u === uf;
                return (
                  <div key={u} className="kpi" style={{ borderColor: cur ? "#4fa3ff" : undefined }}>
                    <div className="lab">{u}</div>
                    <div className="val" style={{ fontSize: 22 }}>{st.mantidos[cen]}<small>/{st.cadeiras}</small></div>
                    <div className="lab" style={{ marginTop: 4 }}>{Math.round((100 * st.mantidos[cen]) / st.cadeiras)}%</div>
                  </div>
                );
              })}
            </div>
            <div className="muted" style={{ fontSize: 13, marginTop: 12 }}>
              Neste estado ({uf}), o cenário {cen === "c1" ? "1" : "2"} mantém <b className="good">{mant} de {e.cadeiras}</b> dos eleitos reais de 2022.
              O cenário 2 (nominais + legenda) costuma reproduzir melhor o resultado real do que o cenário 1 (só legenda).
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Cadeiras por partido no cenário {cen === "c1" ? "1" : "2"} ({key}) — maiores médias · distritais · lista · overhang</h3>
        <div className="scroll">
          <table className="tbl">
            <thead><tr><th>Partido</th><th>Votos partid.</th><th>Maiores médias</th><th>Distritais</th><th>Lista</th><th>Overhang</th><th>Total</th></tr></thead>
            <tbody>
              {[...combo.tabela].filter((t) => t.total > 0).sort((a, b) => b.total - a.total).map((t) => (
                <tr key={t.partido}>
                  <td><span className="badge" style={{ background: partyColor(t.partido), fontSize: 11 }}>{t.partido}</span></td>
                  <td>{fmt(t.votos)}</td><td>{t.medias}</td><td>{t.distritais}</td><td>{t.lista}</td>
                  <td style={{ color: t.overhang ? "#ff9d5c" : undefined }}>{t.overhang || ""}</td><td><b>{t.total}</b></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
