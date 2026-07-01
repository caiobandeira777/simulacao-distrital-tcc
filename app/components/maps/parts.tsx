"use client";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap, Marker } from "react-leaflet";
import L from "leaflet";
import type { Feature, FeatureCollection } from "geojson";

// scrollWheelZoom só faz sentido no desktop: no mobile ele "sequestra" a rolagem
// da página. Detecta uma vez no cliente (o mapa só renderiza com ssr:false).
function useIsDesktop() {
  const [d, setD] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const on = () => setD(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return d;
}

export function BaseMap({ children, className }: { children: React.ReactNode; className?: string }) {
  const isDesktop = useIsDesktop();
  return (
    <MapContainer center={[-16, -52]} zoom={5} className={className ?? "map"} scrollWheelZoom={isDesktop}>
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
  // Quando muda, re-aplica styleFn em todas as feições (ex.: destacar o distrito
  // selecionado) sem remontar a camada nem re-enquadrar o mapa.
  styleDep?: unknown;
  // Realce de hover mais forte (borda branca grossa) — usado no coroplético.
  hoverWeight?: number;
}

// Carrega um GeoJSON estático e o desenha
export function GeoLayer({ url, styleFn, tooltip, onClick, fit, styleDep, hoverWeight = 3 }: GeoLayerProps) {
  const [data, setData] = useState<FeatureCollection | null>(null);
  const geoRef = useRef<L.GeoJSON | null>(null);
  // styleFn/tooltip mudam de identidade a cada render; guardamos em refs para os
  // handlers ligados uma única vez em onEachFeature enxergarem a versão atual.
  const styleRef = useRef(styleFn);
  styleRef.current = styleFn;
  const tipRef = useRef(tooltip);
  tipRef.current = tooltip;

  useEffect(() => {
    let alive = true;
    fetch(url).then((r) => r.json()).then((d) => alive && setData(d)).catch(() => {});
    return () => { alive = false; };
  }, [url]);

  // Re-aplica estilos e tooltips quando a dependência de estilo muda.
  useEffect(() => {
    const g = geoRef.current;
    if (!g) return;
    g.setStyle((f) => styleRef.current((f as Feature).properties) as L.PathOptions);
    if (tipRef.current) {
      g.eachLayer((layer) => {
        const p = ((layer as any).feature as Feature)?.properties as any;
        if (p) (layer as L.Layer).setTooltipContent?.(tipRef.current!(p));
      });
    }
  }, [styleDep, data]);

  if (!data) return null;
  return (
    <>
      <GeoJSON
        key={url}
        ref={geoRef as any}
        data={data as any}
        style={(f) => styleFn((f as Feature).properties)}
        onEachFeature={(f, layer) => {
          const p = (f as Feature).properties as any;
          if (tipRef.current) layer.bindTooltip(tipRef.current(p), { className: "tt", sticky: true });
          layer.on("mouseover", () => (layer as L.Path).setStyle({ weight: hoverWeight, color: "#fff" }));
          layer.on("mouseout", () => (layer as L.Path).setStyle(styleRef.current(p)));
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
