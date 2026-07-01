"use client";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap, Marker } from "react-leaflet";
import L from "leaflet";
import type { Feature, FeatureCollection } from "geojson";

export function BaseMap({ children }: { children: React.ReactNode }) {
  return (
    <MapContainer center={[-16, -52]} zoom={5} className="map" scrollWheelZoom>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; OpenStreetMap &copy; CARTO'
        subdomains="abcd"
      />
      {children}
    </MapContainer>
  );
}

// Ajusta o mapa aos limites de uma coleção de features
export function FitBounds({ data }: { data: FeatureCollection | null }) {
  const map = useMap();
  useEffect(() => {
    if (!data || !data.features?.length) return;
    const b = L.geoJSON(data).getBounds();
    if (b.isValid()) map.fitBounds(b, { padding: [18, 18] });
  }, [data, map]);
  return null;
}

interface GeoLayerProps {
  url: string;
  styleFn: (p: any) => L.PathOptions;
  tooltip?: (p: any) => string;
  onClick?: (p: any) => void;
  fit?: boolean;
}

// Carrega um GeoJSON estático e o desenha
export function GeoLayer({ url, styleFn, tooltip, onClick, fit }: GeoLayerProps) {
  const [data, setData] = useState<FeatureCollection | null>(null);
  useEffect(() => {
    let alive = true;
    fetch(url).then((r) => r.json()).then((d) => alive && setData(d)).catch(() => {});
    return () => { alive = false; };
  }, [url]);

  if (!data) return null;
  return (
    <>
      <GeoJSON
        key={url}
        data={data as any}
        style={(f) => styleFn((f as Feature).properties)}
        onEachFeature={(f, layer) => {
          const p = (f as Feature).properties as any;
          if (tooltip) layer.bindTooltip(tooltip(p), { className: "tt", sticky: true });
          layer.on("mouseover", () => (layer as L.Path).setStyle({ weight: 3, color: "#fff" }));
          layer.on("mouseout", () => (layer as L.Path).setStyle(styleFn(p)));
          if (onClick) layer.on("click", () => onClick(p));
        }}
      />
      {fit && <FitBounds data={data} />}
    </>
  );
}

// Rótulos (nome do vencedor) posicionados no ponto representativo do distrito
export function DistrictLabels({ url }: { url: string }) {
  const [data, setData] = useState<FeatureCollection | null>(null);
  useEffect(() => {
    let alive = true;
    fetch(url).then((r) => r.json()).then((d) => alive && setData(d)).catch(() => {});
    return () => { alive = false; };
  }, [url]);
  if (!data) return null;
  return (
    <>
      {data.features.map((f, i) => {
        const p: any = f.properties;
        if (p.lat == null || p.lon == null) return null;
        const icon = L.divIcon({
          className: "",
          html: `<div class="dlabel">${p.distrito}·${p.vencedor ?? ""}<br>(${p.partido ?? ""})</div>`,
          iconSize: [1, 1],
        });
        return <Marker key={i} position={[p.lat, p.lon]} icon={icon} interactive={false} />;
      })}
    </>
  );
}
