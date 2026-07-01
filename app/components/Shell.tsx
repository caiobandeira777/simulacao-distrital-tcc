"use client";
import { useState } from "react";
import { AppProvider, useUF } from "@/app/lib/ctx";
import { UFS } from "@/app/data/resultados";
import Overview from "@/app/components/tabs/Overview";
import Distritos from "@/app/components/tabs/Distritos";
import Eleicao from "@/app/components/tabs/Eleicao";
import Resultado from "@/app/components/tabs/Resultado";
import Metodologia from "@/app/components/tabs/Metodologia";

const TABS = [
  ["visao", "Visão geral", Overview],
  ["distritos", "Distritos", Distritos],
  ["eleicao", "Eleição", Eleicao],
  ["resultado", "Resultado", Resultado],
  ["metodo", "Metodologia", Metodologia],
] as const;

function Inner() {
  const { uf, setUf } = useUF();
  const [tab, setTab] = useState<string>("visao");
  const Active = (TABS.find((t) => t[0] === tab) ?? TABS[0])[2];

  return (
    <>
      <header className="hdr">
        <div className="hdr-in">
          <div className="brand">
            Voto Distrital Misto · PL 9.212/2017
            <small>Simulação sobre a eleição de Deputado Federal de 2022 — MS · SC · GO</small>
          </div>
          <div className="ufsel">
            {UFS.map((u) => (
              <button key={u} className={u === uf ? "on" : ""} onClick={() => setUf(u)}>{u}</button>
            ))}
          </div>
        </div>
        <nav className="tabs">
          {TABS.map(([id, label]) => (
            <button key={id} className={tab === id ? "on" : ""} onClick={() => setTab(id)}>{label}</button>
          ))}
        </nav>
      </header>
      <main>
        <Active />
      </main>
    </>
  );
}

export default function Shell() {
  return (
    <AppProvider>
      <Inner />
    </AppProvider>
  );
}
