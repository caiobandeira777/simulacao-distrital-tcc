// Cores partidárias reais (aproximadas às identidades visuais dos partidos).
export const PARTY_COLORS: Record<string, string> = {
  PT: "#C4122E", PL: "#15489E", PSDB: "#0080C6", MDB: "#0a9e3e", "UNIÃO": "#2f6fb0",
  PP: "#5aa9e6", PDT: "#E30613", PSD: "#2E8B57", PODE: "#12a05a", NOVO: "#FF8C00",
  REPUBLICANOS: "#123A6B", CIDADANIA: "#e0324a", PSB: "#F58220", "PC do B": "#B30000",
  AVANTE: "#00A0DF", PSC: "#6A1B9A", PATRIOTA: "#6D4C41", SOLIDARIEDADE: "#ff5252",
  AGIR: "#8e6bd6", DC: "#00aaaa", PROS: "#e91e63", REDE: "#2bb86b", PV: "#66bb00", PMB: "#e67e22",
};

export const DISTRICT_PALETTE = [
  "#4fa3ff", "#37d6a0", "#ffb454", "#ff6b8a", "#a78bfa", "#f2d94e",
  "#5ee0e0", "#ff9d5c", "#7ee081", "#e17ad6", "#6fb0ff", "#c9d94e",
  "#ff8f6b", "#54c6a8", "#b98bff", "#f272aa", "#8ad0ff",
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
