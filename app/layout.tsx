import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simulação Voto Distrital Misto — PL 9.212/2017 (MS · SC · GO, 2022)",
  description:
    "Simulação do sistema distrital misto (PL 9.212/2017) sobre a eleição de Deputado Federal de 2022 em MS, SC e GO — TCC.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
