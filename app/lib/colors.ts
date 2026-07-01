// Cores partidárias reais (aproximadas às identidades visuais dos partidos).
export const PARTY_COLORS: Record<string, string> = {
  PT: "#C4122E", PL: "#15489E", PSDB: "#0080C6", MDB: "#0a9e3e", "UNIÃO": "#2f6fb0",
  PP: "#5aa9e6", PDT: "#E30613", PSD: "#2E8B57", PODE: "#12a05a", NOVO: "#FF8C00",
  REPUBLICANOS: "#123A6B", CIDADANIA: "#e0324a", PSB: "#F58220", "PC do B": "#B30000",
  AVANTE: "#00A0DF", PSC: "#6A1B9A", PATRIOTA: "#6D4C41", SOLIDARIEDADE: "#ff5252",
  AGIR: "#8e6bd6", DC: "#00aaaa", PROS: "#e91e63", REDE: "#2bb86b", PV: "#66bb00", PMB: "#e67e22",
};

// Paleta categórica VIVA e de alto contraste — usada para identificar cada
// DISTRITO (não o partido) no mapa de vencedores. Hues bem separados e ordenados
// para que distritos vizinhos raramente compartilhem tons parecidos.
export const DISTRICT_PALETTE = [
  "#FF6B35", // laranja
  "#3BA9FF", // azul-céu
  "#FFD23F", // amarelo
  "#FF3CAC", // magenta
  "#7DDA58", // verde-lima
  "#A66CFF", // roxo
  "#00D4E0", // ciano
  "#FF5C5C", // vermelho-coral
  "#2EE6A6", // verde-água
  "#FF9F1C", // âmbar
  "#C0F03C", // chartreuse
  "#F76ED6", // rosa
];

function hash(s: string): number {
  let h = 0;
  for (const c of s) h += c.charCodeAt(0);
  return h;
}

export function partyColor(p?: string | null): string {
  if (!p) return "#7a8ca0";
  return PARTY_COLORS[p] ?? DISTRICT_PALETTE[hash(p) % DISTRICT_PALETTE.length];
}

export function districtColor(d: number): string {
  return DISTRICT_PALETTE[(d - 1) % DISTRICT_PALETTE.length];
}

// Escala sequencial YlOrRd (ColorBrewer) para o mapa de calor de votação real.
// t ∈ [0,1] → do amarelo claro ao vermelho forte (legível sobre fundo escuro).
const HEAT_STOPS = ["#ffffb2", "#fed976", "#feb24c", "#fd8d3c", "#f03b20", "#bd0026"];

function lerp(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t);
}
function hexToRgb(h: string) {
  return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
}

export function heatColor(t: number): string {
  const x = Math.max(0, Math.min(1, isFinite(t) ? t : 0));
  const seg = x * (HEAT_STOPS.length - 1);
  const i = Math.min(HEAT_STOPS.length - 2, Math.floor(seg));
  const f = seg - i;
  const [r1, g1, b1] = hexToRgb(HEAT_STOPS[i]);
  const [r2, g2, b2] = hexToRgb(HEAT_STOPS[i + 1]);
  return `rgb(${lerp(r1, r2, f)},${lerp(g1, g2, f)},${lerp(b1, b2, f)})`;
}

export const HEAT_LEGEND = HEAT_STOPS;
