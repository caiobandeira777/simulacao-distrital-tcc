"use client";
import { BaseMap, GeoLayer, DistrictLabels } from "./parts";
import { districtColor } from "@/app/lib/colors";
import type { UF } from "@/app/data/resultados";
import { fmt } from "@/app/lib/ctx";

// Mapa da aba ELEIÇÃO (vencedores simulados). A COR identifica o DISTRITO
// (paleta categórica de alto contraste) — o partido do vencedor aparece no
// rótulo/tooltip, não na cor do polígono. O distrito selecionado é destacado.
export default function MapEleicao({
  uf,
  onSelect,
  selected,
}: {
  uf: UF;
  onSelect: (p: any) => void;
  selected: number | null;
}) {
  return (
    <BaseMap>
      <GeoLayer
        key={`e-${uf}`}
        url={`/geo/distritos_${uf}.geojson`}
        fit
        styleDep={selected}
        styleFn={(p) => {
          const on = p.distrito === selected;
          return {
            color: on ? "#ffffff" : "#ffffff",
            weight: on ? 4 : 2,
            fillColor: districtColor(p.distrito),
            fillOpacity: on ? 0.92 : 0.75,
            dashArray: undefined,
            // "brilho" no distrito selecionado
            className: on ? "dist-sel" : "",
          } as any;
        }}
        tooltip={(p) =>
          `<b>Distrito ${p.distrito}</b> — ${p.vencedor} (${p.partido})<br>` +
          `${fmt(p.votos)} votos (${p.pct}%) · margem ${fmt(p.margem_votos)} (${p.margem_pct}%)`}
        onClick={onSelect}
      />
      <DistrictLabels url={`/geo/distritos_${uf}.geojson`} />
    </BaseMap>
  );
}
