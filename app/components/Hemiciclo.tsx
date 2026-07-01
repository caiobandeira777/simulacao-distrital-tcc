"use client";
import { partyColor } from "@/app/lib/colors";
import type { EleitoProp } from "@/app/data/resultados";

// Semicírculo de assentos, colorido por partido; overhang com anel branco, lista mais claro.
export default function Hemiciclo({ eleitos, base, overhang }: { eleitos: EleitoProp[]; base: number; overhang: number }) {
  const order: Record<string, number> = { distrital: 0, overhang: 1, lista: 2 };
  const seats = [...eleitos].sort((a, b) =>
    a.partido.localeCompare(b.partido) || order[a.tipo] - order[b.tipo]);
  const N = seats.length;
  const cx = 260, cy = 232, rIn = 96, rOut = 212;
  const nRings: number = N <= 10 ? 2 : 3;
  const ringR: number[] = [];
  for (let i = 0; i < nRings; i++) ringR.push(rIn + (rOut - rIn) * (nRings === 1 ? 0 : i / (nRings - 1)));
  const capSum = ringR.reduce((a, b) => a + b, 0);
  const counts = ringR.map((r) => Math.max(1, Math.round((N * r) / capSum)));
  counts[counts.length - 1] += N - counts.reduce((a, b) => a + b, 0);

  const circles: React.ReactNode[] = [];
  let idx = 0;
  for (let ri = 0; ri < nRings; ri++) {
    const cnt = counts[ri], r = ringR[ri];
    for (let s = 0; s < cnt && idx < N; s++, idx++) {
      const t = cnt === 1 ? 0.5 : s / (cnt - 1);
      const ang = Math.PI * (1 - t);
      const x = cx + r * Math.cos(ang), y = cy - r * Math.sin(ang);
      const seat = seats[idx], col = partyColor(seat.partido);
      circles.push(
        <circle key={idx} cx={x} cy={y} r={7.6}
          fill={col} fillOpacity={seat.tipo === "lista" ? 0.5 : 1}
          stroke={seat.tipo === "overhang" ? "#fff" : "#0b1017"}
          strokeWidth={seat.tipo === "overhang" ? 2.3 : 1}
          strokeDasharray={seat.tipo === "lista" ? "2 2" : ""}>
          <title>{`${seat.nome} (${seat.partido}) — ${seat.tipo}${seat.distrito ? ` · distrito ${seat.distrito}` : ""}`}</title>
        </circle>
      );
    }
  }
  const parts = [...new Set(seats.map((s) => s.partido))];
  return (
    <div>
      <svg viewBox="0 0 520 250" style={{ width: "100%", maxWidth: 520, display: "block", margin: "0 auto" }}>
        {circles}
        <text x={cx} y={cy - 8} textAnchor="middle" fill="#e8eef5" fontSize={32} fontWeight={800}>{N}</text>
        <text x={cx} y={cy + 14} textAnchor="middle" fill="#9fb4c9" fontSize={12}>
          cadeiras (base {base}{overhang ? ` + ${overhang} overhang` : ""})
        </text>
      </svg>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px 12px", justifyContent: "center", fontSize: 12, marginTop: 4 }}>
        {parts.map((p) => (
          <span key={p}><span style={{ display: "inline-block", width: 11, height: 11, borderRadius: "50%", background: partyColor(p), verticalAlign: "middle", marginRight: 4 }} />{p}</span>
        ))}
        <span className="muted">| ● distrital · ◌ lista · <span style={{ color: "#fff" }}>◍ overhang</span></span>
      </div>
    </div>
  );
}
