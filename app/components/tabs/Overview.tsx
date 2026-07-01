"use client";
import dynamic from "next/dynamic";
import { RESULTADOS, META, UFS } from "@/app/data/resultados";
import { useUF } from "@/app/lib/ctx";

const MiniMap = dynamic(() => import("@/app/components/maps/MiniMapBR"), {
  ssr: false, loading: () => <div className="map" style={{ display: "grid", placeItems: "center" }}><span className="muted">carregando mapa…</span></div>,
});

export default function Overview() {
  const { uf } = useUF();
  const baseTotal = META.total_cadeiras;
  const finalC1 = META.bancada_final_total.c1;
  const multi = UFS.flatMap((u) => RESULTADOS[u].multi_distrito.map((m) => ({ ...m, uf: u })));
  const e = RESULTADOS[uf];

  return (
    <div className="section container grid" style={{ gap: 18 }}>
      <div className="hero">
        <h1>E se o Brasil elegesse deputados federais por <span style={{ color: "var(--accent)" }}>voto distrital misto</span>?</h1>
        <p>
          Reconstrução do sistema do <b>PL 9.212/2017</b> sobre os votos reais da eleição de Deputado Federal de 2022,
          em Mato Grosso do Sul, Santa Catarina e Goiás: os {META.total_municipios_soma} municípios foram agrupados em {META.total_distritos} distritos
          contíguos e balanceados por população; metade das cadeiras é eleita por distrito (maioria simples) e metade
          pela lista partidária, com abatimento e overhang. Selecione um estado no topo para navegar.
        </p>
      </div>

      <div className="grid c4">
        <div className="kpi hl"><div className="lab">Municípios agrupados</div><div className="val">{META.total_municipios_soma}</div><div className="lab" style={{ marginTop: 4 }}>MS 79 · SC 295 · GO 246</div></div>
        <div className="kpi hl"><div className="lab">Distritos desenhados</div><div className="val">{META.total_distritos}</div><div className="lab" style={{ marginTop: 4 }}>MS 4 · SC 8 · GO 8</div></div>
        <div className="kpi"><div className="lab">Cadeiras (base) → com overhang</div><div className="val">{baseTotal} <small>→ {finalC1}</small></div><div className="lab" style={{ marginTop: 4 }}>cenário 1 · +{META.overhang_total.c1} overhang</div></div>
        <div className="kpi"><div className="lab">Fidelidade ao real (cenário 2)</div><div className="val">{UFS.reduce((a, u) => a + META.fidelidade[u].c2, 0)}<small>/{baseTotal}</small></div><div className="lab" style={{ marginTop: 4 }}>eleitos reais que permanecem</div></div>
      </div>

      <div className="grid c2w">
        <div className="card">
          <h3>Os 3 estados <span className="muted" style={{ textTransform: "none" }}>distritos desenhados</span></h3>
          <MiniMap />
        </div>
        <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 14 }}>
          <div className="card"><div className="bd">
            <div className="lab muted" style={{ fontSize: 11, letterSpacing: ".5px", textTransform: "uppercase" }}>Achado 1 · Desenho</div>
            <div style={{ fontSize: 16, fontWeight: 700, marginTop: 5 }}>Os {META.total_distritos} distritos ficaram dentro da tolerância populacional</div>
            <div className="muted" style={{ fontSize: 13, marginTop: 5 }}>
              Desvio máximo: MS {RESULTADOS.MS.desvio_max}% · SC {RESULTADOS.SC.desvio_max}% · GO {RESULTADOS.GO.desvio_max}%
              (regra: ±5%, com até 1 distrito a ±10%). Capitais grandes demais foram subdivididas por zona eleitoral.
            </div>
          </div></div>
          <div className="card"><div className="bd">
            <div className="lab muted" style={{ fontSize: 11, letterSpacing: ".5px", textTransform: "uppercase" }}>Achado 2 · Overhang</div>
            <div style={{ fontSize: 16, fontWeight: 700, marginTop: 5 }}>A bancada cresce de {baseTotal} para {finalC1} cadeiras (cenário 1)</div>
            <div className="muted" style={{ fontSize: 13, marginTop: 5 }}>
              Quando um partido ganha mais distritos do que sua cota proporcional, mantém as cadeiras e a bancada aumenta:
              MS 8→{RESULTADOS.MS.combos.c1_unico_A.bancada_final} · SC 16→{RESULTADOS.SC.combos.c1_unico_A.bancada_final} · GO 17→{RESULTADOS.GO.combos.c1_unico_A.bancada_final}.
            </div>
          </div></div>
          <div className="card"><div className="bd">
            <div className="lab muted" style={{ fontSize: 11, letterSpacing: ".5px", textTransform: "uppercase" }}>Achado 3 · Concentração</div>
            <div style={{ fontSize: 16, fontWeight: 700, marginTop: 5 }}>Candidatos fortes vencem vários distritos ao mesmo tempo</div>
            <div className="muted" style={{ fontSize: 13, marginTop: 5 }}>
              {multi.length ? multi.map((m) => `${m.candidato} (${m.partido}/${m.uf}) venceu ${m.distritos.length} distritos`).join(" · ") : "nenhum"}.
              No sistema real de circunscrição estadual isso não ocorre.
            </div>
          </div></div>
        </div>
      </div>

      <div className="muted" style={{ fontSize: 12 }}>{e.nota_proxy}</div>
    </div>
  );
}
