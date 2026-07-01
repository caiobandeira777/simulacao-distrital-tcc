"use client";
import { BaseMap, GeoLayer } from "./parts";
import { districtColor } from "@/app/lib/colors";
import type { UF } from "@/app/data/resultados";
import { fmt } from "@/app/lib/ctx";

// Mapa da aba DISTRITOS. modo "antes" = municípios soltos; "depois" = distritos agrupados.
export default function MapDistritos({ uf, modo }: { uf: UF; modo: "antes" | "depois" }) {
  if (modo === "antes") {
    return (
      <BaseMap>
        <GeoLayer
          key={`m-${uf}`}
          url={`/geo/malha_${uf}.geojson`}
          fit
          styleFn={() => ({ color: "#8aa0b8", weight: 0.7, fillColor: "#33465c", fillOpacity: 0.55 })}
          tooltip={() => "município"}
        />
      </BaseMap>
    );
  }
  return (
    <BaseMap>
      <GeoLayer
        key={`d-${uf}`}
        url={`/geo/distritos_${uf}.geojson`}
        fit
        styleFn={(p) => ({ color: "#0b1017", weight: 1.4, fillColor: districtColor(p.distrito), fillOpacity: 0.82 })}
        tooltip={(p) =>
          `<b>Distrito ${p.distrito}</b><br>População: ${fmt(p.pop)} (${p.desvio > 0 ? "+" : ""}${p.desvio}%)<br>` +
          `Municípios: ${p.n_mun} · Compacidade: ${p.compacidade}`}
      />
    </BaseMap>
  );
}
