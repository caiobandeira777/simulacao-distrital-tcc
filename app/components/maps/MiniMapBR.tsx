"use client";
import { BaseMap, GeoLayer } from "./parts";
import { districtColor } from "@/app/lib/colors";
import { UFS } from "@/app/data/resultados";

// Mini-mapa da VISÃO GERAL: os 3 estados com seus distritos.
export default function MiniMapBR() {
  return (
    <BaseMap>
      {UFS.map((uf, i) => (
        <GeoLayer
          key={uf}
          url={`/geo/distritos_${uf}.geojson`}
          fit={i === 0}
          styleFn={(p) => ({ color: "#0b1017", weight: 1, fillColor: districtColor(p.distrito), fillOpacity: 0.75 })}
          tooltip={(p) => `<b>${uf}</b> · Distrito ${p.distrito}`}
        />
      ))}
    </BaseMap>
  );
}
