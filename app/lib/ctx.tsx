"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import type { UF } from "@/app/data/resultados";

interface AppState { uf: UF; setUf: (u: UF) => void; }
const Ctx = createContext<AppState>({ uf: "MS", setUf: () => {} });

export function AppProvider({ children }: { children: ReactNode }) {
  const [uf, setUf] = useState<UF>("MS");
  return <Ctx.Provider value={{ uf, setUf }}>{children}</Ctx.Provider>;
}

export const useUF = () => useContext(Ctx);

export const fmt = (n: number | null | undefined) =>
  n == null ? "—" : Number(n).toLocaleString("pt-BR");
