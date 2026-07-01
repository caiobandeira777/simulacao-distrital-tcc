"use client";
import { BaseMap, GeoLayer } from "./parts";
import { heatColor } from "@/app/lib/colors";
import type { UF } from "@/app/data/resultados";
import { fmt } from "@/app/lib/ctx";

export interface MunInfo { nome: string; total: number }

// Mapa de calor da VOTAÇÃO REAL 2022 por MUNICÍPIO. A cor = intensidade do voto
// (% dos votos válidos municipais) do candidato/partido selecionado. Escala
// sequencial YlOrRd (amarelo claro → vermelho forte), legível sobre fundo escuro.
export default function MapVotosReais({
  uf,
  valores,
  municipios,
  maxShare,
  rotulo,
}: {
  uf: UF;
  valores: Record<string, number>;
  municipios: Record<string, MunInfo>;
  maxShare: number;
  rotulo: string;
}) {
  const share = (cod: string) => {
    const info = municipios[cod];
    const v = valores[cod] ?? 0;
    return info && info.total > 0 ? (100 * v) / info.total : 0;
  };
  return (
    <BaseMap>
      <GeoLayer
        // remonta ao trocar de estado; re-estiliza ao trocar a série selecionada
        key={`vr-${uf}`}
        url={`/geo/malha_${uf}.geojson`}
        fit
        styleDep={rotulo}
        hoverWeight={2.2}
        styleFn={(p) => {
          const s = share(String(p.cod));
          const t = maxShare > 0 ? s / maxShare : 0;
          return {
            color: "#0b1017",
            weight: 0.6,
            fillColor: s > 0 ? heatColor(t) : "#26333f",
            fillOpacity: s > 0 ? 0.88 : 0.35,
          };
        }}
        tooltip={(p) => {
          const cod = String(p.cod);
          const info = municipios[cod];
          const v = valores[cod] ?? 0;
          const nome = info?.nome ?? cod;
          return (
            `<b>${nome}</b><br>${rotulo}<br>` +
            `${fmt(v)} votos · ${share(cod).toFixed(1)}% dos válidos do município`
          );
        }}
      />
    </BaseMap>
  );
}
