"use client";
import { BaseMap, GeoLayer, DistrictLabels } from "./parts";
import { partyColor } from "@/app/lib/colors";
import type { UF } from "@/app/data/resultados";
import { fmt } from "@/app/lib/ctx";

// Mapa da aba ELEIÇÃO: distritos pintados pela cor do partido vencedor.
export default function MapEleicao({ uf, onSelect }: { uf: UF; onSelect: (p: any) => void }) {
  return (
    <BaseMap>
      <GeoLayer
        key={`e-${uf}`}
        url={`/geo/distritos_${uf}.geojson`}
        fit
        styleFn={(p) => ({ color: "#0b1017", weight: 1.4, fillColor: partyColor(p.partido), fillOpacity: 0.85 })}
        tooltip={(p) =>
          `<b>Distrito ${p.distrito}</b> — ${p.vencedor} (${p.partido})<br>` +
          `${fmt(p.votos)} votos (${p.pct}%) · margem ${fmt(p.margem_votos)} (${p.margem_pct}%)`}
        onClick={onSelect}
      />
      <DistrictLabels url={`/geo/distritos_${uf}.geojson`} />
    </BaseMap>
  );
}
