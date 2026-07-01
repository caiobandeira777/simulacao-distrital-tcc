// AUTO-GERADO por etl/scripts/exportar_para_tcc.py — NÃO editar à mão.
// Fonte: resultados da simulação de voto distrital misto (PL 9.212/2017), eleição 2022.
export type UF = "MS" | "SC" | "GO";

export interface DistritoStat { distrito: number; pop: number; desvio: number; n_mun: number; compacidade: number; faixa: string; }
export interface Vencedor { distrito: number; candidato: string; partido: string; votos: number; pct: number; segundo: string | null; partido2: string | null; margem_votos: number; margem_pct: number; total_validos: number; municipios: number; }
export interface RankingRow { distrito: number; posicao: number; candidato: string; partido: string; votos: number; pct: number; }
export interface CadeirasPartido { partido: string; real: number; c1: number; c2: number; saldo_c1: number; saldo_c2: number; }
export interface EleitoProp { nome: string; partido: string; tipo: "distrital" | "lista" | "overhang"; distrito: number | string; }
export interface TabelaPartidoRow { partido: string; votos: number; medias: number; distritais: number; lista: number; overhang: number; total: number; }
export interface Combo { cenario: string; sub: string; modelo: string; bancada_base: number; bancada_final: number; overhang: number; tabela: TabelaPartidoRow[]; eleitos: EleitoProp[]; }
export interface EntraSai { cenario: "c1" | "c2"; status: "mantidos" | "saem" | "entram"; nome: string; partido: string; }
export interface EleitoReal { nome: string; partido: string; votos: number; tipo: string; }
export interface Capital { municipio: string; n_zonas: number; excede_pct: number; }
export interface MultiDistrito { candidato: string; partido: string; distritos: number[]; }
export interface EstadoData {
  uf: UF; cadeiras: number; n_distritos: number; pop_total: number; pop_ideal: number;
  desvio_max: number; conforme: boolean; resumo: Record<string, number>;
  distritos: DistritoStat[]; vencedores: Vencedor[]; ranking: RankingRow[];
  cadeiras_partido: CadeirasPartido[]; combos: Record<string, Combo>; entra_sai: EntraSai[];
  eleitos_reais: EleitoReal[]; mantidos: { c1: number; c2: number }; capitais: Capital[];
  multi_distrito: MultiDistrito[]; nota_proxy: string;
}
export interface Meta {
  municipios_por_uf: Record<UF, number>; total_municipios_soma: number; total_distritos: number;
  total_cadeiras: number; overhang_total: { c1: number; c2: number };
  bancada_final_total: { c1: number; c2: number }; fidelidade: Record<UF, { c1: number; c2: number }>;
}

export const RESULTADOS: Record<UF, EstadoData> = {
  "MS": {
    "uf": "MS",
    "cadeiras": 8,
    "n_distritos": 4,
    "pop_total": 2757013,
    "pop_ideal": 689253,
    "desvio_max": 7.3,
    "conforme": true,
    "resumo": {
      "<=5%": 3,
      "5-10%": 1,
      ">10%": 0
    },
    "distritos": [
      {
        "distrito": 1,
        "pop": 656448,
        "desvio": -4.8,
        "n_mun": 16,
        "compacidade": 0.089,
        "faixa": "<=5%"
      },
      {
        "distrito": 2,
        "pop": 739741,
        "desvio": 7.3,
        "n_mun": 13,
        "compacidade": 0.075,
        "faixa": "5-10%"
      },
      {
        "distrito": 3,
        "pop": 688658,
        "desvio": -0.1,
        "n_mun": 26,
        "compacidade": 0.044,
        "faixa": "<=5%"
      },
      {
        "distrito": 4,
        "pop": 672166,
        "desvio": -2.5,
        "n_mun": 25,
        "compacidade": 0.042,
        "faixa": "<=5%"
      }
    ],
    "vencedores": [
      {
        "distrito": 1,
        "candidato": "MARCOS POLLON",
        "partido": "PL",
        "votos": 31069,
        "pct": 9.8,
        "segundo": "BETO PEREIRA",
        "partido2": "PSDB",
        "margem_votos": 5375,
        "margem_pct": 1.7,
        "total_validos": 317097,
        "municipios": 16
      },
      {
        "distrito": 2,
        "candidato": "MARCOS POLLON",
        "partido": "PL",
        "votos": 26324,
        "pct": 7.31,
        "segundo": "CAMILA JARA",
        "partido2": "PT",
        "margem_votos": 3853,
        "margem_pct": 1.07,
        "total_validos": 360178,
        "municipios": 13
      },
      {
        "distrito": 3,
        "candidato": "DR. GERALDO RESENDE",
        "partido": "PSDB",
        "votos": 43174,
        "pct": 13.1,
        "segundo": "VANDER LOUBET",
        "partido2": "PT",
        "margem_votos": 18703,
        "margem_pct": 5.68,
        "total_validos": 329497,
        "municipios": 26
      },
      {
        "distrito": 4,
        "candidato": "BETO PEREIRA",
        "partido": "PSDB",
        "votos": 26929,
        "pct": 8.79,
        "segundo": "MARCOS POLLON",
        "partido2": "PL",
        "margem_votos": 3456,
        "margem_pct": 1.13,
        "total_validos": 306262,
        "municipios": 25
      }
    ],
    "ranking": [
      {
        "distrito": 1,
        "posicao": 1,
        "candidato": "MARCOS POLLON",
        "partido": "PL",
        "votos": 31069,
        "pct": 9.8
      },
      {
        "distrito": 1,
        "posicao": 2,
        "candidato": "BETO PEREIRA",
        "partido": "PSDB",
        "votos": 25694,
        "pct": 8.1
      },
      {
        "distrito": 1,
        "posicao": 3,
        "candidato": "CAMILA JARA",
        "partido": "PT",
        "votos": 21741,
        "pct": 6.86
      },
      {
        "distrito": 1,
        "posicao": 4,
        "candidato": "FÁBIO TRAD",
        "partido": "PSD",
        "votos": 18803,
        "pct": 5.93
      },
      {
        "distrito": 1,
        "posicao": 5,
        "candidato": "DR. GERALDO RESENDE",
        "partido": "PSDB",
        "votos": 16656,
        "pct": 5.25
      },
      {
        "distrito": 1,
        "posicao": 6,
        "candidato": "DR. LUIZ OVANDO",
        "partido": "PP",
        "votos": 15916,
        "pct": 5.02
      },
      {
        "distrito": 1,
        "posicao": 7,
        "candidato": "VANDER LOUBET",
        "partido": "PT",
        "votos": 11990,
        "pct": 3.78
      },
      {
        "distrito": 1,
        "posicao": 8,
        "candidato": "MOKA",
        "partido": "MDB",
        "votos": 11274,
        "pct": 3.56
      },
      {
        "distrito": 1,
        "posicao": 9,
        "candidato": "PROMOTOR HARFOUCHE",
        "partido": "AVANTE",
        "votos": 7671,
        "pct": 2.42
      },
      {
        "distrito": 1,
        "posicao": 10,
        "candidato": "PROFESSOR JUARI",
        "partido": "PSDB",
        "votos": 7620,
        "pct": 2.4
      },
      {
        "distrito": 1,
        "posicao": 11,
        "candidato": "DAGOBERTO",
        "partido": "PSDB",
        "votos": 7341,
        "pct": 2.32
      },
      {
        "distrito": 1,
        "posicao": 12,
        "candidato": "WILTON ACOSTA",
        "partido": "REPUBLICANOS",
        "votos": 7216,
        "pct": 2.28
      },
      {
        "distrito": 2,
        "posicao": 1,
        "candidato": "MARCOS POLLON",
        "partido": "PL",
        "votos": 26324,
        "pct": 7.31
      },
      {
        "distrito": 2,
        "posicao": 2,
        "candidato": "CAMILA JARA",
        "partido": "PT",
        "votos": 22471,
        "pct": 6.24
      },
      {
        "distrito": 2,
        "posicao": 3,
        "candidato": "BETO PEREIRA",
        "partido": "PSDB",
        "votos": 21138,
        "pct": 5.87
      },
      {
        "distrito": 2,
        "posicao": 4,
        "candidato": "VANDER LOUBET",
        "partido": "PT",
        "votos": 17312,
        "pct": 4.81
      },
      {
        "distrito": 2,
        "posicao": 5,
        "candidato": "FLÁVIO CABO ALMI",
        "partido": "PODE",
        "votos": 16271,
        "pct": 4.52
      },
      {
        "distrito": 2,
        "posicao": 6,
        "candidato": "FÁBIO TRAD",
        "partido": "PSD",
        "votos": 15554,
        "pct": 4.32
      },
      {
        "distrito": 2,
        "posicao": 7,
        "candidato": "DR. LUIZ OVANDO",
        "partido": "PP",
        "votos": 14425,
        "pct": 4.0
      },
      {
        "distrito": 2,
        "posicao": 8,
        "candidato": "DR. GERALDO RESENDE",
        "partido": "PSDB",
        "votos": 13558,
        "pct": 3.76
      },
      {
        "distrito": 2,
        "posicao": 9,
        "candidato": "BIA CAVASSA",
        "partido": "PSDB",
        "votos": 11743,
        "pct": 3.26
      },
      {
        "distrito": 2,
        "posicao": 10,
        "candidato": "CHICÃO VIANNA",
        "partido": "PSD",
        "votos": 9089,
        "pct": 2.52
      },
      {
        "distrito": 2,
        "posicao": 11,
        "candidato": "DAGOBERTO",
        "partido": "PSDB",
        "votos": 8338,
        "pct": 2.31
      },
      {
        "distrito": 2,
        "posicao": 12,
        "candidato": "MOKA",
        "partido": "MDB",
        "votos": 8263,
        "pct": 2.29
      },
      {
        "distrito": 3,
        "posicao": 1,
        "candidato": "DR. GERALDO RESENDE",
        "partido": "PSDB",
        "votos": 43174,
        "pct": 13.1
      },
      {
        "distrito": 3,
        "posicao": 2,
        "candidato": "VANDER LOUBET",
        "partido": "PT",
        "votos": 24471,
        "pct": 7.43
      },
      {
        "distrito": 3,
        "posicao": 3,
        "candidato": "BETO PEREIRA",
        "partido": "PSDB",
        "votos": 24111,
        "pct": 7.32
      },
      {
        "distrito": 3,
        "posicao": 4,
        "candidato": "MARCOS POLLON",
        "partido": "PL",
        "votos": 22245,
        "pct": 6.75
      },
      {
        "distrito": 3,
        "posicao": 5,
        "candidato": "RODOLFO NOGUEIRA",
        "partido": "PL",
        "votos": 20161,
        "pct": 6.12
      },
      {
        "distrito": 3,
        "posicao": 6,
        "candidato": "WALTER CARNEIRO JR",
        "partido": "PP",
        "votos": 18480,
        "pct": 5.61
      },
      {
        "distrito": 3,
        "posicao": 7,
        "candidato": "ELIAS ISHY",
        "partido": "PT",
        "votos": 17181,
        "pct": 5.21
      },
      {
        "distrito": 3,
        "posicao": 8,
        "candidato": "DAGOBERTO",
        "partido": "PSDB",
        "votos": 16731,
        "pct": 5.08
      },
      {
        "distrito": 3,
        "posicao": 9,
        "candidato": "MÁRCIO ARAGUAIA ",
        "partido": "PP",
        "votos": 9248,
        "pct": 2.81
      },
      {
        "distrito": 3,
        "posicao": 10,
        "candidato": "MOKA",
        "partido": "MDB",
        "votos": 8554,
        "pct": 2.6
      },
      {
        "distrito": 3,
        "posicao": 11,
        "candidato": "LUANA RUIZ",
        "partido": "PL",
        "votos": 8394,
        "pct": 2.55
      },
      {
        "distrito": 3,
        "posicao": 12,
        "candidato": "DR. EUDÉLIO",
        "partido": "PP",
        "votos": 8049,
        "pct": 2.44
      },
      {
        "distrito": 4,
        "posicao": 1,
        "candidato": "BETO PEREIRA",
        "partido": "PSDB",
        "votos": 26929,
        "pct": 8.79
      },
      {
        "distrito": 4,
        "posicao": 2,
        "candidato": "MARCOS POLLON",
        "partido": "PL",
        "votos": 23473,
        "pct": 7.66
      },
      {
        "distrito": 4,
        "posicao": 3,
        "candidato": "DR. GERALDO RESENDE",
        "partido": "PSDB",
        "votos": 23131,
        "pct": 7.55
      },
      {
        "distrito": 4,
        "posicao": 4,
        "candidato": "VANDER LOUBET",
        "partido": "PT",
        "votos": 22798,
        "pct": 7.44
      },
      {
        "distrito": 4,
        "posicao": 5,
        "candidato": "DAGOBERTO",
        "partido": "PSDB",
        "votos": 15807,
        "pct": 5.16
      },
      {
        "distrito": 4,
        "posicao": 6,
        "candidato": "DR CASSIANO MAIA",
        "partido": "PSDB",
        "votos": 14733,
        "pct": 4.81
      },
      {
        "distrito": 4,
        "posicao": 7,
        "candidato": "RODOLFO NOGUEIRA",
        "partido": "PL",
        "votos": 11693,
        "pct": 3.82
      },
      {
        "distrito": 4,
        "posicao": 8,
        "candidato": "DIONE HASHIOKA",
        "partido": "PODE",
        "votos": 11044,
        "pct": 3.61
      },
      {
        "distrito": 4,
        "posicao": 9,
        "candidato": "WALTER CARNEIRO JR",
        "partido": "PP",
        "votos": 9665,
        "pct": 3.16
      },
      {
        "distrito": 4,
        "posicao": 10,
        "candidato": "SINDOLEY MORAIS",
        "partido": "UNIÃO",
        "votos": 9570,
        "pct": 3.12
      },
      {
        "distrito": 4,
        "posicao": 11,
        "candidato": "LUANA RUIZ",
        "partido": "PL",
        "votos": 9135,
        "pct": 2.98
      },
      {
        "distrito": 4,
        "posicao": 12,
        "candidato": "LOURDES MONTEIRO",
        "partido": "MDB",
        "votos": 9106,
        "pct": 2.97
      }
    ],
    "cadeiras_partido": [
      {
        "partido": "PSDB",
        "real": 3,
        "c1": 2,
        "c2": 3,
        "saldo_c1": -1,
        "saldo_c2": 0
      },
      {
        "partido": "PT",
        "real": 2,
        "c1": 4,
        "c2": 2,
        "saldo_c1": 2,
        "saldo_c2": 0
      },
      {
        "partido": "PL",
        "real": 2,
        "c1": 1,
        "c2": 2,
        "saldo_c1": -1,
        "saldo_c2": 0
      },
      {
        "partido": "PP",
        "real": 1,
        "c1": 1,
        "c2": 1,
        "saldo_c1": 0,
        "saldo_c2": 0
      },
      {
        "partido": "MDB",
        "real": 0,
        "c1": 1,
        "c2": 0,
        "saldo_c1": 1,
        "saldo_c2": 0
      }
    ],
    "combos": {
      "c1_unico_A": {
        "cenario": "legenda",
        "sub": "unico",
        "modelo": "A",
        "bancada_base": 8,
        "bancada_final": 9,
        "overhang": 1,
        "tabela": [
          {
            "partido": "PT",
            "votos": 19499,
            "medias": 4,
            "distritais": 1,
            "lista": 3,
            "overhang": 0,
            "total": 4
          },
          {
            "partido": "PSDB",
            "votos": 6020,
            "medias": 1,
            "distritais": 2,
            "lista": 0,
            "overhang": 1,
            "total": 2
          },
          {
            "partido": "PL",
            "votos": 7639,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PP",
            "votos": 5072,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "MDB",
            "votos": 3942,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PDT",
            "votos": 3881,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "UNIÃO",
            "votos": 3065,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSD",
            "votos": 2599,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PODE",
            "votos": 1601,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 1575,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 1370,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 1115,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 1026,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "NOVO",
            "votos": 722,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 659,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "CIDADANIA",
            "votos": 536,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 333,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 289,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 262,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 190,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AGIR",
            "votos": 141,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 116,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 89,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 33,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "MARCOS POLLON",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "CAMILA JARA",
            "partido": "PT",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "DR. GERALDO RESENDE",
            "partido": "PSDB",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "BETO PEREIRA",
            "partido": "PSDB",
            "tipo": "overhang",
            "distrito": 4
          },
          {
            "nome": "MOKA",
            "partido": "MDB",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DR. LUIZ OVANDO",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "VANDER LOUBET",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ELIAS ISHY",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "JAIME TEIXEIRA",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      },
      "c1_unico_B": {
        "cenario": "legenda",
        "sub": "unico",
        "modelo": "B",
        "bancada_base": 8,
        "bancada_final": 9,
        "overhang": 1,
        "tabela": [
          {
            "partido": "PT",
            "votos": 19499,
            "medias": 4,
            "distritais": 1,
            "lista": 3,
            "overhang": 0,
            "total": 4
          },
          {
            "partido": "PSDB",
            "votos": 6020,
            "medias": 1,
            "distritais": 2,
            "lista": 0,
            "overhang": 1,
            "total": 2
          },
          {
            "partido": "PL",
            "votos": 7639,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PP",
            "votos": 5072,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "MDB",
            "votos": 3942,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PDT",
            "votos": 3881,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "UNIÃO",
            "votos": 3065,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSD",
            "votos": 2599,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PODE",
            "votos": 1601,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 1575,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 1370,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 1115,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 1026,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "NOVO",
            "votos": 722,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 659,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "CIDADANIA",
            "votos": 536,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 333,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 289,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 262,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 190,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AGIR",
            "votos": 141,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 116,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 89,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 33,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "MARCOS POLLON",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "CAMILA JARA",
            "partido": "PT",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "DR. GERALDO RESENDE",
            "partido": "PSDB",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "BETO PEREIRA",
            "partido": "PSDB",
            "tipo": "overhang",
            "distrito": 4
          },
          {
            "nome": "MOKA",
            "partido": "MDB",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "WALTER CARNEIRO JR",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "VANDER LOUBET",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ELIAS ISHY",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "JAIME TEIXEIRA",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      },
      "c1_literal_A": {
        "cenario": "legenda",
        "sub": "literal",
        "modelo": "A",
        "bancada_base": 8,
        "bancada_final": 10,
        "overhang": 2,
        "tabela": [
          {
            "partido": "PT",
            "votos": 19499,
            "medias": 4,
            "distritais": 0,
            "lista": 4,
            "overhang": 0,
            "total": 4
          },
          {
            "partido": "PL",
            "votos": 7639,
            "medias": 1,
            "distritais": 2,
            "lista": 0,
            "overhang": 1,
            "total": 2
          },
          {
            "partido": "PSDB",
            "votos": 6020,
            "medias": 1,
            "distritais": 2,
            "lista": 0,
            "overhang": 1,
            "total": 2
          },
          {
            "partido": "PP",
            "votos": 5072,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "MDB",
            "votos": 3942,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PDT",
            "votos": 3881,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "UNIÃO",
            "votos": 3065,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSD",
            "votos": 2599,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PODE",
            "votos": 1601,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 1575,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 1370,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 1115,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 1026,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "NOVO",
            "votos": 722,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 659,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "CIDADANIA",
            "votos": 536,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 333,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 289,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 262,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 190,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AGIR",
            "votos": 141,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 116,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 89,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 33,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "MARCOS POLLON",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "MARCOS POLLON",
            "partido": "PL",
            "tipo": "overhang",
            "distrito": 2
          },
          {
            "nome": "DR. GERALDO RESENDE",
            "partido": "PSDB",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "BETO PEREIRA",
            "partido": "PSDB",
            "tipo": "overhang",
            "distrito": 4
          },
          {
            "nome": "MOKA",
            "partido": "MDB",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DR. LUIZ OVANDO",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "VANDER LOUBET",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CAMILA JARA",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ELIAS ISHY",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "JAIME TEIXEIRA",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      },
      "c1_literal_B": {
        "cenario": "legenda",
        "sub": "literal",
        "modelo": "B",
        "bancada_base": 8,
        "bancada_final": 10,
        "overhang": 2,
        "tabela": [
          {
            "partido": "PT",
            "votos": 19499,
            "medias": 4,
            "distritais": 0,
            "lista": 4,
            "overhang": 0,
            "total": 4
          },
          {
            "partido": "PL",
            "votos": 7639,
            "medias": 1,
            "distritais": 2,
            "lista": 0,
            "overhang": 1,
            "total": 2
          },
          {
            "partido": "PSDB",
            "votos": 6020,
            "medias": 1,
            "distritais": 2,
            "lista": 0,
            "overhang": 1,
            "total": 2
          },
          {
            "partido": "PP",
            "votos": 5072,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "MDB",
            "votos": 3942,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PDT",
            "votos": 3881,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "UNIÃO",
            "votos": 3065,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSD",
            "votos": 2599,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PODE",
            "votos": 1601,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 1575,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 1370,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 1115,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 1026,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "NOVO",
            "votos": 722,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 659,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "CIDADANIA",
            "votos": 536,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 333,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 289,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 262,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 190,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AGIR",
            "votos": 141,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 116,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 89,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 33,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "MARCOS POLLON",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "MARCOS POLLON",
            "partido": "PL",
            "tipo": "overhang",
            "distrito": 2
          },
          {
            "nome": "DR. GERALDO RESENDE",
            "partido": "PSDB",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "BETO PEREIRA",
            "partido": "PSDB",
            "tipo": "overhang",
            "distrito": 4
          },
          {
            "nome": "MOKA",
            "partido": "MDB",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "WALTER CARNEIRO JR",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "VANDER LOUBET",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CAMILA JARA",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ELIAS ISHY",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "JAIME TEIXEIRA",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      },
      "c2_unico_A": {
        "cenario": "nominais+legenda",
        "sub": "unico",
        "modelo": "A",
        "bancada_base": 8,
        "bancada_final": 8,
        "overhang": 0,
        "tabela": [
          {
            "partido": "PSDB",
            "votos": 316966,
            "medias": 3,
            "distritais": 2,
            "lista": 1,
            "overhang": 0,
            "total": 3
          },
          {
            "partido": "PL",
            "votos": 218427,
            "medias": 2,
            "distritais": 1,
            "lista": 1,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PT",
            "votos": 201961,
            "medias": 2,
            "distritais": 1,
            "lista": 1,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PP",
            "votos": 146606,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSD",
            "votos": 82584,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "MDB",
            "votos": 77614,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 75274,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PODE",
            "votos": 63976,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "UNIÃO",
            "votos": 63354,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 30038,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 23629,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 22135,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PDT",
            "votos": 12566,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 9219,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 8599,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "NOVO",
            "votos": 7183,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 5806,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 2264,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 1869,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 1486,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 1365,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AGIR",
            "votos": 823,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "CIDADANIA",
            "votos": 536,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 528,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "MARCOS POLLON",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "CAMILA JARA",
            "partido": "PT",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "DR. GERALDO RESENDE",
            "partido": "PSDB",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "BETO PEREIRA",
            "partido": "PSDB",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "RODOLFO NOGUEIRA",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DR. LUIZ OVANDO",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DAGOBERTO",
            "partido": "PSDB",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "VANDER LOUBET",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      },
      "c2_unico_B": {
        "cenario": "nominais+legenda",
        "sub": "unico",
        "modelo": "B",
        "bancada_base": 8,
        "bancada_final": 8,
        "overhang": 0,
        "tabela": [
          {
            "partido": "PSDB",
            "votos": 316966,
            "medias": 3,
            "distritais": 2,
            "lista": 1,
            "overhang": 0,
            "total": 3
          },
          {
            "partido": "PL",
            "votos": 218427,
            "medias": 2,
            "distritais": 1,
            "lista": 1,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PT",
            "votos": 201961,
            "medias": 2,
            "distritais": 1,
            "lista": 1,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PP",
            "votos": 146606,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSD",
            "votos": 82584,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "MDB",
            "votos": 77614,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 75274,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PODE",
            "votos": 63976,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "UNIÃO",
            "votos": 63354,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 30038,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 23629,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 22135,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PDT",
            "votos": 12566,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 9219,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 8599,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "NOVO",
            "votos": 7183,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 5806,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 2264,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 1869,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 1486,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 1365,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AGIR",
            "votos": 823,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "CIDADANIA",
            "votos": 536,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 528,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "MARCOS POLLON",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "CAMILA JARA",
            "partido": "PT",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "DR. GERALDO RESENDE",
            "partido": "PSDB",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "BETO PEREIRA",
            "partido": "PSDB",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "RODOLFO NOGUEIRA",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "WALTER CARNEIRO JR",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DAGOBERTO",
            "partido": "PSDB",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "VANDER LOUBET",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      },
      "c2_literal_A": {
        "cenario": "nominais+legenda",
        "sub": "literal",
        "modelo": "A",
        "bancada_base": 8,
        "bancada_final": 8,
        "overhang": 0,
        "tabela": [
          {
            "partido": "PSDB",
            "votos": 316966,
            "medias": 3,
            "distritais": 2,
            "lista": 1,
            "overhang": 0,
            "total": 3
          },
          {
            "partido": "PL",
            "votos": 218427,
            "medias": 2,
            "distritais": 2,
            "lista": 0,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PT",
            "votos": 201961,
            "medias": 2,
            "distritais": 0,
            "lista": 2,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PP",
            "votos": 146606,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSD",
            "votos": 82584,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "MDB",
            "votos": 77614,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 75274,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PODE",
            "votos": 63976,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "UNIÃO",
            "votos": 63354,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 30038,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 23629,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 22135,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PDT",
            "votos": 12566,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 9219,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 8599,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "NOVO",
            "votos": 7183,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 5806,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 2264,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 1869,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 1486,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 1365,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AGIR",
            "votos": 823,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "CIDADANIA",
            "votos": 536,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 528,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "MARCOS POLLON",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "MARCOS POLLON",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "DR. GERALDO RESENDE",
            "partido": "PSDB",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "BETO PEREIRA",
            "partido": "PSDB",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "DR. LUIZ OVANDO",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DAGOBERTO",
            "partido": "PSDB",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "VANDER LOUBET",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CAMILA JARA",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      },
      "c2_literal_B": {
        "cenario": "nominais+legenda",
        "sub": "literal",
        "modelo": "B",
        "bancada_base": 8,
        "bancada_final": 8,
        "overhang": 0,
        "tabela": [
          {
            "partido": "PSDB",
            "votos": 316966,
            "medias": 3,
            "distritais": 2,
            "lista": 1,
            "overhang": 0,
            "total": 3
          },
          {
            "partido": "PL",
            "votos": 218427,
            "medias": 2,
            "distritais": 2,
            "lista": 0,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PT",
            "votos": 201961,
            "medias": 2,
            "distritais": 0,
            "lista": 2,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PP",
            "votos": 146606,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSD",
            "votos": 82584,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "MDB",
            "votos": 77614,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 75274,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PODE",
            "votos": 63976,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "UNIÃO",
            "votos": 63354,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 30038,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 23629,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 22135,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PDT",
            "votos": 12566,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 9219,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 8599,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "NOVO",
            "votos": 7183,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 5806,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 2264,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 1869,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 1486,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 1365,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AGIR",
            "votos": 823,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "CIDADANIA",
            "votos": 536,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 528,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "MARCOS POLLON",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "MARCOS POLLON",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "DR. GERALDO RESENDE",
            "partido": "PSDB",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "BETO PEREIRA",
            "partido": "PSDB",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "WALTER CARNEIRO JR",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DAGOBERTO",
            "partido": "PSDB",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "VANDER LOUBET",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CAMILA JARA",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      }
    },
    "entra_sai": [
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "BETO PEREIRA",
        "partido": "PSDB"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "CAMILA JARA",
        "partido": "PT"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "DR. GERALDO RESENDE",
        "partido": "PSDB"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "DR. LUIZ OVANDO",
        "partido": "PP"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "MARCOS POLLON",
        "partido": "PL"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "VANDER LOUBET",
        "partido": "PT"
      },
      {
        "cenario": "c1",
        "status": "saem",
        "nome": "DAGOBERTO",
        "partido": "PSDB"
      },
      {
        "cenario": "c1",
        "status": "saem",
        "nome": "RODOLFO NOGUEIRA",
        "partido": "PL"
      },
      {
        "cenario": "c1",
        "status": "entram",
        "nome": "ELIAS ISHY",
        "partido": "PT"
      },
      {
        "cenario": "c1",
        "status": "entram",
        "nome": "JAIME TEIXEIRA",
        "partido": "PT"
      },
      {
        "cenario": "c1",
        "status": "entram",
        "nome": "MOKA",
        "partido": "MDB"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "BETO PEREIRA",
        "partido": "PSDB"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "CAMILA JARA",
        "partido": "PT"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "DAGOBERTO",
        "partido": "PSDB"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "DR. GERALDO RESENDE",
        "partido": "PSDB"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "DR. LUIZ OVANDO",
        "partido": "PP"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "MARCOS POLLON",
        "partido": "PL"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "RODOLFO NOGUEIRA",
        "partido": "PL"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "VANDER LOUBET",
        "partido": "PT"
      }
    ],
    "eleitos_reais": [
      {
        "nome": "MARCOS POLLON",
        "partido": "PL",
        "votos": 103111,
        "tipo": "QP"
      },
      {
        "nome": "BETO PEREIRA",
        "partido": "PSDB",
        "votos": 97872,
        "tipo": "QP"
      },
      {
        "nome": "DR. GERALDO RESENDE",
        "partido": "PSDB",
        "votos": 96519,
        "tipo": "media"
      },
      {
        "nome": "VANDER LOUBET",
        "partido": "PT",
        "votos": 76571,
        "tipo": "QP"
      },
      {
        "nome": "CAMILA JARA",
        "partido": "PT",
        "votos": 56552,
        "tipo": "media"
      },
      {
        "nome": "DAGOBERTO",
        "partido": "PSDB",
        "votos": 48217,
        "tipo": "media"
      },
      {
        "nome": "DR. LUIZ OVANDO",
        "partido": "PP",
        "votos": 45491,
        "tipo": "media"
      },
      {
        "nome": "RODOLFO NOGUEIRA",
        "partido": "PL",
        "votos": 41773,
        "tipo": "media"
      }
    ],
    "mantidos": {
      "c1": 6,
      "c2": 8
    },
    "capitais": [
      {
        "municipio": "Campo Grande",
        "n_zonas": 6,
        "excede_pct": 130.3
      }
    ],
    "multi_distrito": [
      {
        "candidato": "MARCOS POLLON",
        "partido": "PL",
        "distritos": [
          1,
          2
        ]
      }
    ],
    "nota_proxy": "Em 2022 nao havia voto partidario separado (voto de legenda existe, mas a maior parte do eleitorado vota nominalmente). Por isso o 'voto partidario' e um PROXY: cenario 1 usa apenas o voto de legenda (QT_VOTOS_LEGENDA_VALIDOS); cenario 2 soma os votos nominais de todos os candidatos do partido + o voto de legenda. Federacoes sao tratadas como partidos individuais (SG_PARTIDO)."
  },
  "SC": {
    "uf": "SC",
    "cadeiras": 16,
    "n_distritos": 8,
    "pop_total": 7610361,
    "pop_ideal": 951295,
    "desvio_max": 5.2,
    "conforme": true,
    "resumo": {
      "<=5%": 7,
      "5-10%": 1,
      ">10%": 0
    },
    "distritos": [
      {
        "distrito": 1,
        "pop": 998140,
        "desvio": 4.9,
        "n_mun": 15,
        "compacidade": 0.059,
        "faixa": "<=5%"
      },
      {
        "distrito": 2,
        "pop": 969893,
        "desvio": 2.0,
        "n_mun": 92,
        "compacidade": 0.11,
        "faixa": "<=5%"
      },
      {
        "distrito": 3,
        "pop": 943629,
        "desvio": -0.8,
        "n_mun": 70,
        "compacidade": 0.022,
        "faixa": "<=5%"
      },
      {
        "distrito": 4,
        "pop": 901604,
        "desvio": -5.2,
        "n_mun": 11,
        "compacidade": 0.182,
        "faixa": "5-10%"
      },
      {
        "distrito": 5,
        "pop": 946660,
        "desvio": -0.5,
        "n_mun": 14,
        "compacidade": 0.096,
        "faixa": "<=5%"
      },
      {
        "distrito": 6,
        "pop": 989699,
        "desvio": 4.0,
        "n_mun": 31,
        "compacidade": 0.041,
        "faixa": "<=5%"
      },
      {
        "distrito": 7,
        "pop": 950332,
        "desvio": -0.1,
        "n_mun": 8,
        "compacidade": 0.099,
        "faixa": "<=5%"
      },
      {
        "distrito": 8,
        "pop": 910404,
        "desvio": -4.3,
        "n_mun": 54,
        "compacidade": 0.039,
        "faixa": "<=5%"
      }
    ],
    "vencedores": [
      {
        "distrito": 1,
        "candidato": "DANIEL FREITAS",
        "partido": "PL",
        "votos": 38068,
        "pct": 7.96,
        "segundo": "CAIO TOKARSKI",
        "partido2": "UNIÃO",
        "margem_votos": 7490,
        "margem_pct": 1.57,
        "total_validos": 478296,
        "municipios": 15
      },
      {
        "distrito": 2,
        "candidato": "PROFESSOR PEDRO UCZAI",
        "partido": "PT",
        "votos": 98267,
        "pct": 19.01,
        "segundo": "CAROL DE TONI",
        "partido2": "PL",
        "margem_votos": 29201,
        "margem_pct": 5.65,
        "total_validos": 516906,
        "municipios": 92
      },
      {
        "distrito": 3,
        "candidato": "CARMEN ZANOTTO",
        "partido": "CIDADANIA",
        "votos": 73156,
        "pct": 14.29,
        "segundo": "CAROL DE TONI",
        "partido2": "PL",
        "margem_votos": 40872,
        "margem_pct": 7.98,
        "total_validos": 512034,
        "municipios": 70
      },
      {
        "distrito": 4,
        "candidato": "RODRIGO COELHO",
        "partido": "PODE",
        "votos": 40076,
        "pct": 9.56,
        "segundo": "DELEGADA TÂNIA HARADA",
        "partido2": "NOVO",
        "margem_votos": 8127,
        "margem_pct": 1.94,
        "total_validos": 419146,
        "municipios": 11
      },
      {
        "distrito": 5,
        "candidato": "GILSON MARQUES",
        "partido": "NOVO",
        "votos": 35640,
        "pct": 7.54,
        "segundo": "ANA PAULA LIMA",
        "partido2": "PT",
        "margem_votos": 1051,
        "margem_pct": 0.22,
        "total_validos": 472829,
        "municipios": 14
      },
      {
        "distrito": 6,
        "candidato": "JORGE GOETTEN",
        "partido": "PL",
        "votos": 27432,
        "pct": 5.82,
        "segundo": "MARCIO DEDÉ",
        "partido2": "UNIÃO",
        "margem_votos": 4628,
        "margem_pct": 0.98,
        "total_validos": 471453,
        "municipios": 31
      },
      {
        "distrito": 7,
        "candidato": "BRUNO SOUZA",
        "partido": "NOVO",
        "votos": 31098,
        "pct": 6.62,
        "segundo": "ED PEREIRA",
        "partido2": "UNIÃO",
        "margem_votos": 3468,
        "margem_pct": 0.74,
        "total_validos": 470080,
        "municipios": 8
      },
      {
        "distrito": 8,
        "candidato": "COBALCHINI",
        "partido": "MDB",
        "votos": 29707,
        "pct": 6.3,
        "segundo": "RAFAEL PEZENTI",
        "partido2": "MDB",
        "margem_votos": 532,
        "margem_pct": 0.11,
        "total_validos": 471301,
        "municipios": 54
      }
    ],
    "ranking": [
      {
        "distrito": 1,
        "posicao": 1,
        "candidato": "DANIEL FREITAS",
        "partido": "PL",
        "votos": 38068,
        "pct": 7.96
      },
      {
        "distrito": 1,
        "posicao": 2,
        "candidato": "CAIO TOKARSKI",
        "partido": "UNIÃO",
        "votos": 30578,
        "pct": 6.39
      },
      {
        "distrito": 1,
        "posicao": 3,
        "candidato": "RICARDO GUIDI",
        "partido": "PSD",
        "votos": 23774,
        "pct": 4.97
      },
      {
        "distrito": 1,
        "posicao": 4,
        "candidato": "JULIA ZANATTA",
        "partido": "PL",
        "votos": 22270,
        "pct": 4.66
      },
      {
        "distrito": 1,
        "posicao": 5,
        "candidato": "BRUNO SOUZA",
        "partido": "NOVO",
        "votos": 21885,
        "pct": 4.58
      },
      {
        "distrito": 1,
        "posicao": 6,
        "candidato": "GEOVANIA DE SÁ",
        "partido": "PSDB",
        "votos": 19863,
        "pct": 4.15
      },
      {
        "distrito": 1,
        "posicao": 7,
        "candidato": "CAROL DE TONI",
        "partido": "PL",
        "votos": 18513,
        "pct": 3.87
      },
      {
        "distrito": 1,
        "posicao": 8,
        "candidato": "LUCIANO PEREIRA",
        "partido": "UNIÃO",
        "votos": 17552,
        "pct": 3.67
      },
      {
        "distrito": 1,
        "posicao": 9,
        "candidato": "VAMPIRO",
        "partido": "MDB",
        "votos": 16104,
        "pct": 3.37
      },
      {
        "distrito": 1,
        "posicao": 10,
        "candidato": "ROSINEY HORACIO",
        "partido": "PODE",
        "votos": 15302,
        "pct": 3.2
      },
      {
        "distrito": 1,
        "posicao": 11,
        "candidato": "ANA PAULA LIMA",
        "partido": "PT",
        "votos": 15281,
        "pct": 3.19
      },
      {
        "distrito": 1,
        "posicao": 12,
        "candidato": "GIOVANA MONDARDO",
        "partido": "PC do B",
        "votos": 13975,
        "pct": 2.92
      },
      {
        "distrito": 2,
        "posicao": 1,
        "candidato": "PROFESSOR PEDRO UCZAI",
        "partido": "PT",
        "votos": 98267,
        "pct": 19.01
      },
      {
        "distrito": 2,
        "posicao": 2,
        "candidato": "CAROL DE TONI",
        "partido": "PL",
        "votos": 69066,
        "pct": 13.36
      },
      {
        "distrito": 2,
        "posicao": 3,
        "candidato": "COBALCHINI",
        "partido": "MDB",
        "votos": 32140,
        "pct": 6.22
      },
      {
        "distrito": 2,
        "posicao": 4,
        "candidato": "MARLENE FENGLER",
        "partido": "PSD",
        "votos": 31595,
        "pct": 6.11
      },
      {
        "distrito": 2,
        "posicao": 5,
        "candidato": "SORGATTO",
        "partido": "MDB",
        "votos": 29816,
        "pct": 5.77
      },
      {
        "distrito": 2,
        "posicao": 6,
        "candidato": "VALDIR COLATTO",
        "partido": "PL",
        "votos": 25881,
        "pct": 5.01
      },
      {
        "distrito": 2,
        "posicao": 7,
        "candidato": "DANIELA REINEHR",
        "partido": "PL",
        "votos": 17369,
        "pct": 3.36
      },
      {
        "distrito": 2,
        "posicao": 8,
        "candidato": "VIGNATTI",
        "partido": "PSB",
        "votos": 14219,
        "pct": 2.75
      },
      {
        "distrito": 2,
        "posicao": 9,
        "candidato": "JORGE GOETTEN",
        "partido": "PL",
        "votos": 12971,
        "pct": 2.51
      },
      {
        "distrito": 2,
        "posicao": 10,
        "candidato": "JAY",
        "partido": "PP",
        "votos": 12217,
        "pct": 2.36
      },
      {
        "distrito": 2,
        "posicao": 11,
        "candidato": "FABIO SCHIOCHET",
        "partido": "UNIÃO",
        "votos": 10803,
        "pct": 2.09
      },
      {
        "distrito": 2,
        "posicao": 12,
        "candidato": "GEOVANIA DE SÁ",
        "partido": "PSDB",
        "votos": 9015,
        "pct": 1.74
      },
      {
        "distrito": 3,
        "posicao": 1,
        "candidato": "CARMEN ZANOTTO",
        "partido": "CIDADANIA",
        "votos": 73156,
        "pct": 14.29
      },
      {
        "distrito": 3,
        "posicao": 2,
        "candidato": "CAROL DE TONI",
        "partido": "PL",
        "votos": 32284,
        "pct": 6.31
      },
      {
        "distrito": 3,
        "posicao": 3,
        "candidato": "PROFESSOR PEDRO UCZAI",
        "partido": "PT",
        "votos": 29694,
        "pct": 5.8
      },
      {
        "distrito": 3,
        "posicao": 4,
        "candidato": "GEOVANIA DE SÁ",
        "partido": "PSDB",
        "votos": 23280,
        "pct": 4.55
      },
      {
        "distrito": 3,
        "posicao": 5,
        "candidato": "JORGE GOETTEN",
        "partido": "PL",
        "votos": 22216,
        "pct": 4.34
      },
      {
        "distrito": 3,
        "posicao": 6,
        "candidato": "RAFAEL PEZENTI",
        "partido": "MDB",
        "votos": 20162,
        "pct": 3.94
      },
      {
        "distrito": 3,
        "posicao": 7,
        "candidato": "COBALCHINI",
        "partido": "MDB",
        "votos": 18605,
        "pct": 3.63
      },
      {
        "distrito": 3,
        "posicao": 8,
        "candidato": "RICARDO GUIDI",
        "partido": "PSD",
        "votos": 15595,
        "pct": 3.05
      },
      {
        "distrito": 3,
        "posicao": 9,
        "candidato": "ANA PAULA LIMA",
        "partido": "PT",
        "votos": 14105,
        "pct": 2.75
      },
      {
        "distrito": 3,
        "posicao": 10,
        "candidato": "FABIANO CAITANO",
        "partido": "PSDB",
        "votos": 14087,
        "pct": 2.75
      },
      {
        "distrito": 3,
        "posicao": 11,
        "candidato": "PAULO CUNHA",
        "partido": "PSD",
        "votos": 13776,
        "pct": 2.69
      },
      {
        "distrito": 3,
        "posicao": 12,
        "candidato": "JULIA ZANATTA",
        "partido": "PL",
        "votos": 13689,
        "pct": 2.67
      },
      {
        "distrito": 4,
        "posicao": 1,
        "candidato": "RODRIGO COELHO",
        "partido": "PODE",
        "votos": 40076,
        "pct": 9.56
      },
      {
        "distrito": 4,
        "posicao": 2,
        "candidato": "DELEGADA TÂNIA HARADA",
        "partido": "NOVO",
        "votos": 31949,
        "pct": 7.62
      },
      {
        "distrito": 4,
        "posicao": 3,
        "candidato": "CORONEL ARMANDO",
        "partido": "PL",
        "votos": 27119,
        "pct": 6.47
      },
      {
        "distrito": 4,
        "posicao": 4,
        "candidato": "ZÉ TROVÃO",
        "partido": "PL",
        "votos": 25254,
        "pct": 6.03
      },
      {
        "distrito": 4,
        "posicao": 5,
        "candidato": "HELBER SÁ",
        "partido": "PATRIOTA",
        "votos": 22717,
        "pct": 5.42
      },
      {
        "distrito": 4,
        "posicao": 6,
        "candidato": "ASSIS",
        "partido": "PT",
        "votos": 18496,
        "pct": 4.41
      },
      {
        "distrito": 4,
        "posicao": 7,
        "candidato": "DARCI DE MATOS",
        "partido": "PSD",
        "votos": 18108,
        "pct": 4.32
      },
      {
        "distrito": 4,
        "posicao": 8,
        "candidato": "CAROL DE TONI",
        "partido": "PL",
        "votos": 15698,
        "pct": 3.75
      },
      {
        "distrito": 4,
        "posicao": 9,
        "candidato": "ARI RABAIOLLI",
        "partido": "PL",
        "votos": 13918,
        "pct": 3.32
      },
      {
        "distrito": 4,
        "posicao": 10,
        "candidato": "JORGE GOETTEN",
        "partido": "PL",
        "votos": 13884,
        "pct": 3.31
      },
      {
        "distrito": 4,
        "posicao": 11,
        "candidato": "ISMAEL",
        "partido": "PSD",
        "votos": 12530,
        "pct": 2.99
      },
      {
        "distrito": 4,
        "posicao": 12,
        "candidato": "ANA PAULA LIMA",
        "partido": "PT",
        "votos": 11328,
        "pct": 2.7
      },
      {
        "distrito": 5,
        "posicao": 1,
        "candidato": "GILSON MARQUES",
        "partido": "NOVO",
        "votos": 35640,
        "pct": 7.54
      },
      {
        "distrito": 5,
        "posicao": 2,
        "candidato": "ANA PAULA LIMA",
        "partido": "PT",
        "votos": 34589,
        "pct": 7.32
      },
      {
        "distrito": 5,
        "posicao": 3,
        "candidato": "JORGE GOETTEN",
        "partido": "PL",
        "votos": 32417,
        "pct": 6.86
      },
      {
        "distrito": 5,
        "posicao": 4,
        "candidato": "SILVIO DREVECK",
        "partido": "PP",
        "votos": 25945,
        "pct": 5.49
      },
      {
        "distrito": 5,
        "posicao": 5,
        "candidato": "CARLOS CHIODINI",
        "partido": "MDB",
        "votos": 25182,
        "pct": 5.33
      },
      {
        "distrito": 5,
        "posicao": 6,
        "candidato": "CAROL DE TONI",
        "partido": "PL",
        "votos": 23238,
        "pct": 4.91
      },
      {
        "distrito": 5,
        "posicao": 7,
        "candidato": "ALBA",
        "partido": "UNIÃO",
        "votos": 22652,
        "pct": 4.79
      },
      {
        "distrito": 5,
        "posicao": 8,
        "candidato": "ISMAEL",
        "partido": "PSD",
        "votos": 21739,
        "pct": 4.6
      },
      {
        "distrito": 5,
        "posicao": 9,
        "candidato": "NORMA PEREIRA",
        "partido": "PODE",
        "votos": 16652,
        "pct": 3.52
      },
      {
        "distrito": 5,
        "posicao": 10,
        "candidato": "JULIA ZANATTA",
        "partido": "PL",
        "votos": 15834,
        "pct": 3.35
      },
      {
        "distrito": 5,
        "posicao": 11,
        "candidato": "DANIELA REINEHR",
        "partido": "PL",
        "votos": 10213,
        "pct": 2.16
      },
      {
        "distrito": 5,
        "posicao": 12,
        "candidato": "ANDRE ESPEZIM",
        "partido": "PODE",
        "votos": 10195,
        "pct": 2.16
      },
      {
        "distrito": 6,
        "posicao": 1,
        "candidato": "JORGE GOETTEN",
        "partido": "PL",
        "votos": 27432,
        "pct": 5.82
      },
      {
        "distrito": 6,
        "posicao": 2,
        "candidato": "MARCIO DEDÉ",
        "partido": "UNIÃO",
        "votos": 22804,
        "pct": 4.84
      },
      {
        "distrito": 6,
        "posicao": 3,
        "candidato": "ANA PAULA LIMA",
        "partido": "PT",
        "votos": 21193,
        "pct": 4.5
      },
      {
        "distrito": 6,
        "posicao": 4,
        "candidato": "CAROL DE TONI",
        "partido": "PL",
        "votos": 21092,
        "pct": 4.47
      },
      {
        "distrito": 6,
        "posicao": 5,
        "candidato": "MARCELO WERNER",
        "partido": "PSC",
        "votos": 19016,
        "pct": 4.03
      },
      {
        "distrito": 6,
        "posicao": 6,
        "candidato": "VAMPIRO",
        "partido": "MDB",
        "votos": 18993,
        "pct": 4.03
      },
      {
        "distrito": 6,
        "posicao": 7,
        "candidato": "DANIEL FREITAS",
        "partido": "PL",
        "votos": 18179,
        "pct": 3.86
      },
      {
        "distrito": 6,
        "posicao": 8,
        "candidato": "JULIA ZANATTA",
        "partido": "PL",
        "votos": 17516,
        "pct": 3.72
      },
      {
        "distrito": 6,
        "posicao": 9,
        "candidato": "ISMAEL",
        "partido": "PSD",
        "votos": 16015,
        "pct": 3.4
      },
      {
        "distrito": 6,
        "posicao": 10,
        "candidato": "CARLOS CHIODINI",
        "partido": "MDB",
        "votos": 15623,
        "pct": 3.31
      },
      {
        "distrito": 6,
        "posicao": 11,
        "candidato": "RICARDO GUIDI",
        "partido": "PSD",
        "votos": 14860,
        "pct": 3.15
      },
      {
        "distrito": 6,
        "posicao": 12,
        "candidato": "GEOVANIA DE SÁ",
        "partido": "PSDB",
        "votos": 13406,
        "pct": 2.84
      },
      {
        "distrito": 7,
        "posicao": 1,
        "candidato": "BRUNO SOUZA",
        "partido": "NOVO",
        "votos": 31098,
        "pct": 6.62
      },
      {
        "distrito": 7,
        "posicao": 2,
        "candidato": "ED PEREIRA",
        "partido": "UNIÃO",
        "votos": 27630,
        "pct": 5.88
      },
      {
        "distrito": 7,
        "posicao": 3,
        "candidato": "CAROL DE TONI",
        "partido": "PL",
        "votos": 27594,
        "pct": 5.87
      },
      {
        "distrito": 7,
        "posicao": 4,
        "candidato": "CARLA AYRES",
        "partido": "PT",
        "votos": 21475,
        "pct": 4.57
      },
      {
        "distrito": 7,
        "posicao": 5,
        "candidato": "ANA PAULA LIMA",
        "partido": "PT",
        "votos": 20533,
        "pct": 4.37
      },
      {
        "distrito": 7,
        "posicao": 6,
        "candidato": "KEREXU",
        "partido": "PSOL",
        "votos": 18182,
        "pct": 3.87
      },
      {
        "distrito": 7,
        "posicao": 7,
        "candidato": "JORGE GOETTEN",
        "partido": "PL",
        "votos": 16346,
        "pct": 3.48
      },
      {
        "distrito": 7,
        "posicao": 8,
        "candidato": "DANIELA REINEHR",
        "partido": "PL",
        "votos": 15559,
        "pct": 3.31
      },
      {
        "distrito": 7,
        "posicao": 9,
        "candidato": "JULIA ZANATTA",
        "partido": "PL",
        "votos": 13595,
        "pct": 2.89
      },
      {
        "distrito": 7,
        "posicao": 10,
        "candidato": "DANIEL FREITAS",
        "partido": "PL",
        "votos": 13382,
        "pct": 2.85
      },
      {
        "distrito": 7,
        "posicao": 11,
        "candidato": "PAULO BORNHAUSEN",
        "partido": "PSD",
        "votos": 12177,
        "pct": 2.59
      },
      {
        "distrito": 7,
        "posicao": 12,
        "candidato": "PROFESSOR PEDRO UCZAI",
        "partido": "PT",
        "votos": 10718,
        "pct": 2.28
      },
      {
        "distrito": 8,
        "posicao": 1,
        "candidato": "COBALCHINI",
        "partido": "MDB",
        "votos": 29707,
        "pct": 6.3
      },
      {
        "distrito": 8,
        "posicao": 2,
        "candidato": "RAFAEL PEZENTI",
        "partido": "MDB",
        "votos": 29175,
        "pct": 6.19
      },
      {
        "distrito": 8,
        "posicao": 3,
        "candidato": "JORGE GOETTEN",
        "partido": "PL",
        "votos": 26970,
        "pct": 5.72
      },
      {
        "distrito": 8,
        "posicao": 4,
        "candidato": "ANA PAULA LIMA",
        "partido": "PT",
        "votos": 26573,
        "pct": 5.64
      },
      {
        "distrito": 8,
        "posicao": 5,
        "candidato": "CARMEN ZANOTTO",
        "partido": "CIDADANIA",
        "votos": 22196,
        "pct": 4.71
      },
      {
        "distrito": 8,
        "posicao": 6,
        "candidato": "CAROL DE TONI",
        "partido": "PL",
        "votos": 20147,
        "pct": 4.27
      },
      {
        "distrito": 8,
        "posicao": 7,
        "candidato": "ISMAEL",
        "partido": "PSD",
        "votos": 18164,
        "pct": 3.85
      },
      {
        "distrito": 8,
        "posicao": 8,
        "candidato": "ALESSANDRO SIMAS",
        "partido": "PP",
        "votos": 17829,
        "pct": 3.78
      },
      {
        "distrito": 8,
        "posicao": 9,
        "candidato": "JULIA ZANATTA",
        "partido": "PL",
        "votos": 16821,
        "pct": 3.57
      },
      {
        "distrito": 8,
        "posicao": 10,
        "candidato": "GILSON MARQUES",
        "partido": "NOVO",
        "votos": 13656,
        "pct": 2.9
      },
      {
        "distrito": 8,
        "posicao": 11,
        "candidato": "GEOVANIA DE SÁ",
        "partido": "PSDB",
        "votos": 11881,
        "pct": 2.52
      },
      {
        "distrito": 8,
        "posicao": 12,
        "candidato": "RICARDO GUIDI",
        "partido": "PSD",
        "votos": 11497,
        "pct": 2.44
      }
    ],
    "cadeiras_partido": [
      {
        "partido": "PL",
        "real": 6,
        "c1": 5,
        "c2": 6,
        "saldo_c1": -1,
        "saldo_c2": 0
      },
      {
        "partido": "MDB",
        "real": 3,
        "c1": 1,
        "c2": 2,
        "saldo_c1": -2,
        "saldo_c2": -1
      },
      {
        "partido": "PT",
        "real": 2,
        "c1": 6,
        "c2": 2,
        "saldo_c1": 4,
        "saldo_c2": 0
      },
      {
        "partido": "PSD",
        "real": 2,
        "c1": 1,
        "c2": 2,
        "saldo_c1": -1,
        "saldo_c2": 0
      },
      {
        "partido": "NOVO",
        "real": 1,
        "c1": 2,
        "c2": 2,
        "saldo_c1": 1,
        "saldo_c2": 1
      },
      {
        "partido": "CIDADANIA",
        "real": 1,
        "c1": 1,
        "c2": 1,
        "saldo_c1": 0,
        "saldo_c2": 0
      },
      {
        "partido": "UNIÃO",
        "real": 1,
        "c1": 0,
        "c2": 1,
        "saldo_c1": -1,
        "saldo_c2": 0
      },
      {
        "partido": "PDT",
        "real": 0,
        "c1": 1,
        "c2": 0,
        "saldo_c1": 1,
        "saldo_c2": 0
      },
      {
        "partido": "PODE",
        "real": 0,
        "c1": 1,
        "c2": 1,
        "saldo_c1": 1,
        "saldo_c2": 1
      },
      {
        "partido": "PP",
        "real": 0,
        "c1": 1,
        "c2": 1,
        "saldo_c1": 1,
        "saldo_c2": 1
      }
    ],
    "combos": {
      "c1_unico_A": {
        "cenario": "legenda",
        "sub": "unico",
        "modelo": "A",
        "bancada_base": 16,
        "bancada_final": 19,
        "overhang": 3,
        "tabela": [
          {
            "partido": "PT",
            "votos": 40810,
            "medias": 6,
            "distritais": 1,
            "lista": 5,
            "overhang": 0,
            "total": 6
          },
          {
            "partido": "PL",
            "votos": 38896,
            "medias": 5,
            "distritais": 2,
            "lista": 3,
            "overhang": 0,
            "total": 5
          },
          {
            "partido": "NOVO",
            "votos": 8177,
            "medias": 1,
            "distritais": 2,
            "lista": 0,
            "overhang": 1,
            "total": 2
          },
          {
            "partido": "MDB",
            "votos": 10107,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PDT",
            "votos": 8403,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSD",
            "votos": 6887,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PP",
            "votos": 6729,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PODE",
            "votos": 3783,
            "medias": 0,
            "distritais": 1,
            "lista": 0,
            "overhang": 1,
            "total": 1
          },
          {
            "partido": "CIDADANIA",
            "votos": 2226,
            "medias": 0,
            "distritais": 1,
            "lista": 0,
            "overhang": 1,
            "total": 1
          },
          {
            "partido": "UNIÃO",
            "votos": 6323,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSDB",
            "votos": 4607,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 3879,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 3532,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 3306,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 3195,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PATRIOTA",
            "votos": 1248,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 892,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSC",
            "votos": 867,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 771,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSTU",
            "votos": 648,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 599,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 445,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 365,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 334,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 298,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 298,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "UP",
            "votos": 178,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "DANIEL FREITAS",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "PROFESSOR PEDRO UCZAI",
            "partido": "PT",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "CARMEN ZANOTTO",
            "partido": "CIDADANIA",
            "tipo": "overhang",
            "distrito": 3
          },
          {
            "nome": "RODRIGO COELHO",
            "partido": "PODE",
            "tipo": "overhang",
            "distrito": 4
          },
          {
            "nome": "GILSON MARQUES",
            "partido": "NOVO",
            "tipo": "distrital",
            "distrito": 5
          },
          {
            "nome": "JORGE GOETTEN",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 6
          },
          {
            "nome": "BRUNO SOUZA",
            "partido": "NOVO",
            "tipo": "overhang",
            "distrito": 7
          },
          {
            "nome": "COBALCHINI",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 8
          },
          {
            "nome": "ALLAN SCHROEDER",
            "partido": "PDT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CAROL DE TONI",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "JULIA ZANATTA",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DANIELA REINEHR",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "SILVIO DREVECK",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ISMAEL",
            "partido": "PSD",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ANA PAULA LIMA",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CARLA AYRES",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ASSIS",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CIDA",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "RENÊ MUNARO",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      },
      "c1_unico_B": {
        "cenario": "legenda",
        "sub": "unico",
        "modelo": "B",
        "bancada_base": 16,
        "bancada_final": 19,
        "overhang": 3,
        "tabela": [
          {
            "partido": "PT",
            "votos": 40810,
            "medias": 6,
            "distritais": 1,
            "lista": 5,
            "overhang": 0,
            "total": 6
          },
          {
            "partido": "PL",
            "votos": 38896,
            "medias": 5,
            "distritais": 2,
            "lista": 3,
            "overhang": 0,
            "total": 5
          },
          {
            "partido": "NOVO",
            "votos": 8177,
            "medias": 1,
            "distritais": 2,
            "lista": 0,
            "overhang": 1,
            "total": 2
          },
          {
            "partido": "MDB",
            "votos": 10107,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PDT",
            "votos": 8403,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSD",
            "votos": 6887,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PP",
            "votos": 6729,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PODE",
            "votos": 3783,
            "medias": 0,
            "distritais": 1,
            "lista": 0,
            "overhang": 1,
            "total": 1
          },
          {
            "partido": "CIDADANIA",
            "votos": 2226,
            "medias": 0,
            "distritais": 1,
            "lista": 0,
            "overhang": 1,
            "total": 1
          },
          {
            "partido": "UNIÃO",
            "votos": 6323,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSDB",
            "votos": 4607,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 3879,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 3532,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 3306,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 3195,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PATRIOTA",
            "votos": 1248,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 892,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSC",
            "votos": 867,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 771,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSTU",
            "votos": 648,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 599,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 445,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 365,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 334,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 298,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 298,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "UP",
            "votos": 178,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "DANIEL FREITAS",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "PROFESSOR PEDRO UCZAI",
            "partido": "PT",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "CARMEN ZANOTTO",
            "partido": "CIDADANIA",
            "tipo": "overhang",
            "distrito": 3
          },
          {
            "nome": "RODRIGO COELHO",
            "partido": "PODE",
            "tipo": "overhang",
            "distrito": 4
          },
          {
            "nome": "GILSON MARQUES",
            "partido": "NOVO",
            "tipo": "distrital",
            "distrito": 5
          },
          {
            "nome": "JORGE GOETTEN",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 6
          },
          {
            "nome": "BRUNO SOUZA",
            "partido": "NOVO",
            "tipo": "overhang",
            "distrito": 7
          },
          {
            "nome": "COBALCHINI",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 8
          },
          {
            "nome": "DIEGO PIRES",
            "partido": "PDT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CAROL DE TONI",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CORONEL ARMANDO",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "VALDIR COLATTO",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "SILVIO DREVECK",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "MARLENE FENGLER",
            "partido": "PSD",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ANA PAULA LIMA",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CARLA AYRES",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ASSIS",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "RENÊ MUNARO",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "PROFESSORA KATIA",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      },
      "c1_literal_A": {
        "cenario": "legenda",
        "sub": "literal",
        "modelo": "A",
        "bancada_base": 16,
        "bancada_final": 19,
        "overhang": 3,
        "tabela": [
          {
            "partido": "PT",
            "votos": 40810,
            "medias": 6,
            "distritais": 1,
            "lista": 5,
            "overhang": 0,
            "total": 6
          },
          {
            "partido": "PL",
            "votos": 38896,
            "medias": 5,
            "distritais": 2,
            "lista": 3,
            "overhang": 0,
            "total": 5
          },
          {
            "partido": "NOVO",
            "votos": 8177,
            "medias": 1,
            "distritais": 2,
            "lista": 0,
            "overhang": 1,
            "total": 2
          },
          {
            "partido": "MDB",
            "votos": 10107,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PDT",
            "votos": 8403,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSD",
            "votos": 6887,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PP",
            "votos": 6729,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PODE",
            "votos": 3783,
            "medias": 0,
            "distritais": 1,
            "lista": 0,
            "overhang": 1,
            "total": 1
          },
          {
            "partido": "CIDADANIA",
            "votos": 2226,
            "medias": 0,
            "distritais": 1,
            "lista": 0,
            "overhang": 1,
            "total": 1
          },
          {
            "partido": "UNIÃO",
            "votos": 6323,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSDB",
            "votos": 4607,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 3879,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 3532,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 3306,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 3195,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PATRIOTA",
            "votos": 1248,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 892,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSC",
            "votos": 867,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 771,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSTU",
            "votos": 648,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 599,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 445,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 365,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 334,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 298,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 298,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "UP",
            "votos": 178,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "DANIEL FREITAS",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "PROFESSOR PEDRO UCZAI",
            "partido": "PT",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "CARMEN ZANOTTO",
            "partido": "CIDADANIA",
            "tipo": "overhang",
            "distrito": 3
          },
          {
            "nome": "RODRIGO COELHO",
            "partido": "PODE",
            "tipo": "overhang",
            "distrito": 4
          },
          {
            "nome": "GILSON MARQUES",
            "partido": "NOVO",
            "tipo": "distrital",
            "distrito": 5
          },
          {
            "nome": "JORGE GOETTEN",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 6
          },
          {
            "nome": "BRUNO SOUZA",
            "partido": "NOVO",
            "tipo": "overhang",
            "distrito": 7
          },
          {
            "nome": "COBALCHINI",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 8
          },
          {
            "nome": "ALLAN SCHROEDER",
            "partido": "PDT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CAROL DE TONI",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "JULIA ZANATTA",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DANIELA REINEHR",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "SILVIO DREVECK",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ISMAEL",
            "partido": "PSD",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ANA PAULA LIMA",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CARLA AYRES",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ASSIS",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CIDA",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "RENÊ MUNARO",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      },
      "c1_literal_B": {
        "cenario": "legenda",
        "sub": "literal",
        "modelo": "B",
        "bancada_base": 16,
        "bancada_final": 19,
        "overhang": 3,
        "tabela": [
          {
            "partido": "PT",
            "votos": 40810,
            "medias": 6,
            "distritais": 1,
            "lista": 5,
            "overhang": 0,
            "total": 6
          },
          {
            "partido": "PL",
            "votos": 38896,
            "medias": 5,
            "distritais": 2,
            "lista": 3,
            "overhang": 0,
            "total": 5
          },
          {
            "partido": "NOVO",
            "votos": 8177,
            "medias": 1,
            "distritais": 2,
            "lista": 0,
            "overhang": 1,
            "total": 2
          },
          {
            "partido": "MDB",
            "votos": 10107,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PDT",
            "votos": 8403,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSD",
            "votos": 6887,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PP",
            "votos": 6729,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PODE",
            "votos": 3783,
            "medias": 0,
            "distritais": 1,
            "lista": 0,
            "overhang": 1,
            "total": 1
          },
          {
            "partido": "CIDADANIA",
            "votos": 2226,
            "medias": 0,
            "distritais": 1,
            "lista": 0,
            "overhang": 1,
            "total": 1
          },
          {
            "partido": "UNIÃO",
            "votos": 6323,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSDB",
            "votos": 4607,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 3879,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 3532,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 3306,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 3195,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PATRIOTA",
            "votos": 1248,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 892,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSC",
            "votos": 867,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 771,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSTU",
            "votos": 648,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 599,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 445,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 365,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 334,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 298,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 298,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "UP",
            "votos": 178,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "DANIEL FREITAS",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "PROFESSOR PEDRO UCZAI",
            "partido": "PT",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "CARMEN ZANOTTO",
            "partido": "CIDADANIA",
            "tipo": "overhang",
            "distrito": 3
          },
          {
            "nome": "RODRIGO COELHO",
            "partido": "PODE",
            "tipo": "overhang",
            "distrito": 4
          },
          {
            "nome": "GILSON MARQUES",
            "partido": "NOVO",
            "tipo": "distrital",
            "distrito": 5
          },
          {
            "nome": "JORGE GOETTEN",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 6
          },
          {
            "nome": "BRUNO SOUZA",
            "partido": "NOVO",
            "tipo": "overhang",
            "distrito": 7
          },
          {
            "nome": "COBALCHINI",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 8
          },
          {
            "nome": "DIEGO PIRES",
            "partido": "PDT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CAROL DE TONI",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CORONEL ARMANDO",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "VALDIR COLATTO",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "SILVIO DREVECK",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "MARLENE FENGLER",
            "partido": "PSD",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ANA PAULA LIMA",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CARLA AYRES",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ASSIS",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "RENÊ MUNARO",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "PROFESSORA KATIA",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      },
      "c2_unico_A": {
        "cenario": "nominais+legenda",
        "sub": "unico",
        "modelo": "A",
        "bancada_base": 16,
        "bancada_final": 18,
        "overhang": 2,
        "tabela": [
          {
            "partido": "PL",
            "votos": 962053,
            "medias": 6,
            "distritais": 2,
            "lista": 4,
            "overhang": 0,
            "total": 6
          },
          {
            "partido": "PT",
            "votos": 480911,
            "medias": 2,
            "distritais": 1,
            "lista": 1,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "MDB",
            "votos": 415237,
            "medias": 2,
            "distritais": 1,
            "lista": 1,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PSD",
            "votos": 391429,
            "medias": 2,
            "distritais": 0,
            "lista": 2,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "NOVO",
            "votos": 243668,
            "medias": 1,
            "distritais": 2,
            "lista": 0,
            "overhang": 1,
            "total": 2
          },
          {
            "partido": "UNIÃO",
            "votos": 279432,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PP",
            "votos": 209318,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PODE",
            "votos": 185454,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "CIDADANIA",
            "votos": 135368,
            "medias": 0,
            "distritais": 1,
            "lista": 0,
            "overhang": 1,
            "total": 1
          },
          {
            "partido": "PSDB",
            "votos": 138407,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 120494,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PATRIOTA",
            "votos": 71669,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 63485,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 62709,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 60893,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 39868,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSC",
            "votos": 35820,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PDT",
            "votos": 31296,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 12509,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 10955,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 4679,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 3654,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "UP",
            "votos": 3548,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 2503,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 1927,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 1490,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSTU",
            "votos": 1072,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "DANIEL FREITAS",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "PROFESSOR PEDRO UCZAI",
            "partido": "PT",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "CARMEN ZANOTTO",
            "partido": "CIDADANIA",
            "tipo": "overhang",
            "distrito": 3
          },
          {
            "nome": "RODRIGO COELHO",
            "partido": "PODE",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "GILSON MARQUES",
            "partido": "NOVO",
            "tipo": "distrital",
            "distrito": 5
          },
          {
            "nome": "JORGE GOETTEN",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 6
          },
          {
            "nome": "BRUNO SOUZA",
            "partido": "NOVO",
            "tipo": "overhang",
            "distrito": 7
          },
          {
            "nome": "COBALCHINI",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 8
          },
          {
            "nome": "CARLOS CHIODINI",
            "partido": "MDB",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CAROL DE TONI",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "JULIA ZANATTA",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DANIELA REINEHR",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ZÉ TROVÃO",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "SILVIO DREVECK",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ISMAEL",
            "partido": "PSD",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "RICARDO GUIDI",
            "partido": "PSD",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ANA PAULA LIMA",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "FABIO SCHIOCHET",
            "partido": "UNIÃO",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      },
      "c2_unico_B": {
        "cenario": "nominais+legenda",
        "sub": "unico",
        "modelo": "B",
        "bancada_base": 16,
        "bancada_final": 18,
        "overhang": 2,
        "tabela": [
          {
            "partido": "PL",
            "votos": 962053,
            "medias": 6,
            "distritais": 2,
            "lista": 4,
            "overhang": 0,
            "total": 6
          },
          {
            "partido": "PT",
            "votos": 480911,
            "medias": 2,
            "distritais": 1,
            "lista": 1,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "MDB",
            "votos": 415237,
            "medias": 2,
            "distritais": 1,
            "lista": 1,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PSD",
            "votos": 391429,
            "medias": 2,
            "distritais": 0,
            "lista": 2,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "NOVO",
            "votos": 243668,
            "medias": 1,
            "distritais": 2,
            "lista": 0,
            "overhang": 1,
            "total": 2
          },
          {
            "partido": "UNIÃO",
            "votos": 279432,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PP",
            "votos": 209318,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PODE",
            "votos": 185454,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "CIDADANIA",
            "votos": 135368,
            "medias": 0,
            "distritais": 1,
            "lista": 0,
            "overhang": 1,
            "total": 1
          },
          {
            "partido": "PSDB",
            "votos": 138407,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 120494,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PATRIOTA",
            "votos": 71669,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 63485,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 62709,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 60893,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 39868,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSC",
            "votos": 35820,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PDT",
            "votos": 31296,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 12509,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 10955,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 4679,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 3654,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "UP",
            "votos": 3548,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 2503,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 1927,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 1490,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSTU",
            "votos": 1072,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "DANIEL FREITAS",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "PROFESSOR PEDRO UCZAI",
            "partido": "PT",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "CARMEN ZANOTTO",
            "partido": "CIDADANIA",
            "tipo": "overhang",
            "distrito": 3
          },
          {
            "nome": "RODRIGO COELHO",
            "partido": "PODE",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "GILSON MARQUES",
            "partido": "NOVO",
            "tipo": "distrital",
            "distrito": 5
          },
          {
            "nome": "JORGE GOETTEN",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 6
          },
          {
            "nome": "BRUNO SOUZA",
            "partido": "NOVO",
            "tipo": "overhang",
            "distrito": 7
          },
          {
            "nome": "COBALCHINI",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 8
          },
          {
            "nome": "SORGATTO",
            "partido": "MDB",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CAROL DE TONI",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CORONEL ARMANDO",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "VALDIR COLATTO",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ZÉ TROVÃO",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "SILVIO DREVECK",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "MARLENE FENGLER",
            "partido": "PSD",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "RICARDO GUIDI",
            "partido": "PSD",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ANA PAULA LIMA",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CAIO TOKARSKI",
            "partido": "UNIÃO",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      },
      "c2_literal_A": {
        "cenario": "nominais+legenda",
        "sub": "literal",
        "modelo": "A",
        "bancada_base": 16,
        "bancada_final": 18,
        "overhang": 2,
        "tabela": [
          {
            "partido": "PL",
            "votos": 962053,
            "medias": 6,
            "distritais": 2,
            "lista": 4,
            "overhang": 0,
            "total": 6
          },
          {
            "partido": "PT",
            "votos": 480911,
            "medias": 2,
            "distritais": 1,
            "lista": 1,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "MDB",
            "votos": 415237,
            "medias": 2,
            "distritais": 1,
            "lista": 1,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PSD",
            "votos": 391429,
            "medias": 2,
            "distritais": 0,
            "lista": 2,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "NOVO",
            "votos": 243668,
            "medias": 1,
            "distritais": 2,
            "lista": 0,
            "overhang": 1,
            "total": 2
          },
          {
            "partido": "UNIÃO",
            "votos": 279432,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PP",
            "votos": 209318,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PODE",
            "votos": 185454,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "CIDADANIA",
            "votos": 135368,
            "medias": 0,
            "distritais": 1,
            "lista": 0,
            "overhang": 1,
            "total": 1
          },
          {
            "partido": "PSDB",
            "votos": 138407,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 120494,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PATRIOTA",
            "votos": 71669,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 63485,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 62709,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 60893,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 39868,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSC",
            "votos": 35820,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PDT",
            "votos": 31296,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 12509,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 10955,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 4679,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 3654,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "UP",
            "votos": 3548,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 2503,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 1927,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 1490,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSTU",
            "votos": 1072,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "DANIEL FREITAS",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "PROFESSOR PEDRO UCZAI",
            "partido": "PT",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "CARMEN ZANOTTO",
            "partido": "CIDADANIA",
            "tipo": "overhang",
            "distrito": 3
          },
          {
            "nome": "RODRIGO COELHO",
            "partido": "PODE",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "GILSON MARQUES",
            "partido": "NOVO",
            "tipo": "distrital",
            "distrito": 5
          },
          {
            "nome": "JORGE GOETTEN",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 6
          },
          {
            "nome": "BRUNO SOUZA",
            "partido": "NOVO",
            "tipo": "overhang",
            "distrito": 7
          },
          {
            "nome": "COBALCHINI",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 8
          },
          {
            "nome": "CARLOS CHIODINI",
            "partido": "MDB",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CAROL DE TONI",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "JULIA ZANATTA",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DANIELA REINEHR",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ZÉ TROVÃO",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "SILVIO DREVECK",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ISMAEL",
            "partido": "PSD",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "RICARDO GUIDI",
            "partido": "PSD",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ANA PAULA LIMA",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "FABIO SCHIOCHET",
            "partido": "UNIÃO",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      },
      "c2_literal_B": {
        "cenario": "nominais+legenda",
        "sub": "literal",
        "modelo": "B",
        "bancada_base": 16,
        "bancada_final": 18,
        "overhang": 2,
        "tabela": [
          {
            "partido": "PL",
            "votos": 962053,
            "medias": 6,
            "distritais": 2,
            "lista": 4,
            "overhang": 0,
            "total": 6
          },
          {
            "partido": "PT",
            "votos": 480911,
            "medias": 2,
            "distritais": 1,
            "lista": 1,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "MDB",
            "votos": 415237,
            "medias": 2,
            "distritais": 1,
            "lista": 1,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PSD",
            "votos": 391429,
            "medias": 2,
            "distritais": 0,
            "lista": 2,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "NOVO",
            "votos": 243668,
            "medias": 1,
            "distritais": 2,
            "lista": 0,
            "overhang": 1,
            "total": 2
          },
          {
            "partido": "UNIÃO",
            "votos": 279432,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PP",
            "votos": 209318,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PODE",
            "votos": 185454,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "CIDADANIA",
            "votos": 135368,
            "medias": 0,
            "distritais": 1,
            "lista": 0,
            "overhang": 1,
            "total": 1
          },
          {
            "partido": "PSDB",
            "votos": 138407,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 120494,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PATRIOTA",
            "votos": 71669,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 63485,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 62709,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 60893,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 39868,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSC",
            "votos": 35820,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PDT",
            "votos": 31296,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 12509,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 10955,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 4679,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 3654,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "UP",
            "votos": 3548,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 2503,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 1927,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 1490,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSTU",
            "votos": 1072,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "DANIEL FREITAS",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "PROFESSOR PEDRO UCZAI",
            "partido": "PT",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "CARMEN ZANOTTO",
            "partido": "CIDADANIA",
            "tipo": "overhang",
            "distrito": 3
          },
          {
            "nome": "RODRIGO COELHO",
            "partido": "PODE",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "GILSON MARQUES",
            "partido": "NOVO",
            "tipo": "distrital",
            "distrito": 5
          },
          {
            "nome": "JORGE GOETTEN",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 6
          },
          {
            "nome": "BRUNO SOUZA",
            "partido": "NOVO",
            "tipo": "overhang",
            "distrito": 7
          },
          {
            "nome": "COBALCHINI",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 8
          },
          {
            "nome": "SORGATTO",
            "partido": "MDB",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CAROL DE TONI",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CORONEL ARMANDO",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "VALDIR COLATTO",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ZÉ TROVÃO",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "SILVIO DREVECK",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "MARLENE FENGLER",
            "partido": "PSD",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "RICARDO GUIDI",
            "partido": "PSD",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ANA PAULA LIMA",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "CAIO TOKARSKI",
            "partido": "UNIÃO",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      }
    },
    "entra_sai": [
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "ANA PAULA LIMA",
        "partido": "PT"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "CARMEN ZANOTTO",
        "partido": "CIDADANIA"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "CAROL DE TONI",
        "partido": "PL"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "COBALCHINI",
        "partido": "MDB"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "DANIEL FREITAS",
        "partido": "PL"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "DANIELA REINEHR",
        "partido": "PL"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "GILSON MARQUES",
        "partido": "NOVO"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "ISMAEL",
        "partido": "PSD"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "JORGE GOETTEN",
        "partido": "PL"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "JULIA ZANATTA",
        "partido": "PL"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "PROFESSOR PEDRO UCZAI",
        "partido": "PT"
      },
      {
        "cenario": "c1",
        "status": "saem",
        "nome": "CARLOS CHIODINI",
        "partido": "MDB"
      },
      {
        "cenario": "c1",
        "status": "saem",
        "nome": "FABIO SCHIOCHET",
        "partido": "UNIÃO"
      },
      {
        "cenario": "c1",
        "status": "saem",
        "nome": "RAFAEL PEZENTI",
        "partido": "MDB"
      },
      {
        "cenario": "c1",
        "status": "saem",
        "nome": "RICARDO GUIDI",
        "partido": "PSD"
      },
      {
        "cenario": "c1",
        "status": "saem",
        "nome": "ZÉ TROVÃO",
        "partido": "PL"
      },
      {
        "cenario": "c1",
        "status": "entram",
        "nome": "ALLAN SCHROEDER",
        "partido": "PDT"
      },
      {
        "cenario": "c1",
        "status": "entram",
        "nome": "ASSIS",
        "partido": "PT"
      },
      {
        "cenario": "c1",
        "status": "entram",
        "nome": "BRUNO SOUZA",
        "partido": "NOVO"
      },
      {
        "cenario": "c1",
        "status": "entram",
        "nome": "CARLA AYRES",
        "partido": "PT"
      },
      {
        "cenario": "c1",
        "status": "entram",
        "nome": "CIDA",
        "partido": "PT"
      },
      {
        "cenario": "c1",
        "status": "entram",
        "nome": "RENÊ MUNARO",
        "partido": "PT"
      },
      {
        "cenario": "c1",
        "status": "entram",
        "nome": "RODRIGO COELHO",
        "partido": "PODE"
      },
      {
        "cenario": "c1",
        "status": "entram",
        "nome": "SILVIO DREVECK",
        "partido": "PP"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "ANA PAULA LIMA",
        "partido": "PT"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "CARLOS CHIODINI",
        "partido": "MDB"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "CARMEN ZANOTTO",
        "partido": "CIDADANIA"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "CAROL DE TONI",
        "partido": "PL"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "COBALCHINI",
        "partido": "MDB"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "DANIEL FREITAS",
        "partido": "PL"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "DANIELA REINEHR",
        "partido": "PL"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "FABIO SCHIOCHET",
        "partido": "UNIÃO"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "GILSON MARQUES",
        "partido": "NOVO"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "ISMAEL",
        "partido": "PSD"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "JORGE GOETTEN",
        "partido": "PL"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "JULIA ZANATTA",
        "partido": "PL"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "PROFESSOR PEDRO UCZAI",
        "partido": "PT"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "RICARDO GUIDI",
        "partido": "PSD"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "ZÉ TROVÃO",
        "partido": "PL"
      },
      {
        "cenario": "c2",
        "status": "saem",
        "nome": "RAFAEL PEZENTI",
        "partido": "MDB"
      },
      {
        "cenario": "c2",
        "status": "entram",
        "nome": "BRUNO SOUZA",
        "partido": "NOVO"
      },
      {
        "cenario": "c2",
        "status": "entram",
        "nome": "RODRIGO COELHO",
        "partido": "PODE"
      },
      {
        "cenario": "c2",
        "status": "entram",
        "nome": "SILVIO DREVECK",
        "partido": "PP"
      }
    ],
    "eleitos_reais": [
      {
        "nome": "CAROL DE TONI",
        "partido": "PL",
        "votos": 227632,
        "tipo": "QP"
      },
      {
        "nome": "PROFESSOR PEDRO UCZAI",
        "partido": "PT",
        "votos": 173531,
        "tipo": "QP"
      },
      {
        "nome": "JORGE GOETTEN",
        "partido": "PL",
        "votos": 159339,
        "tipo": "QP"
      },
      {
        "nome": "ANA PAULA LIMA",
        "partido": "PT",
        "votos": 148781,
        "tipo": "QP"
      },
      {
        "nome": "CARMEN ZANOTTO",
        "partido": "CIDADANIA",
        "votos": 130138,
        "tipo": "QP"
      },
      {
        "nome": "JULIA ZANATTA",
        "partido": "PL",
        "votos": 111588,
        "tipo": "QP"
      },
      {
        "nome": "ISMAEL",
        "partido": "PSD",
        "votos": 110531,
        "tipo": "QP"
      },
      {
        "nome": "DANIEL FREITAS",
        "partido": "PL",
        "votos": 108001,
        "tipo": "media"
      },
      {
        "nome": "COBALCHINI",
        "partido": "MDB",
        "votos": 98124,
        "tipo": "QP"
      },
      {
        "nome": "GILSON MARQUES",
        "partido": "NOVO",
        "votos": 87894,
        "tipo": "media"
      },
      {
        "nome": "DANIELA REINEHR",
        "partido": "PL",
        "votos": 84631,
        "tipo": "media"
      },
      {
        "nome": "CARLOS CHIODINI",
        "partido": "MDB",
        "votos": 80089,
        "tipo": "media"
      },
      {
        "nome": "RICARDO GUIDI",
        "partido": "PSD",
        "votos": 74066,
        "tipo": "media"
      },
      {
        "nome": "ZÉ TROVÃO",
        "partido": "PL",
        "votos": 71140,
        "tipo": "media"
      },
      {
        "nome": "RAFAEL PEZENTI",
        "partido": "MDB",
        "votos": 68208,
        "tipo": "media"
      },
      {
        "nome": "FABIO SCHIOCHET",
        "partido": "UNIÃO",
        "votos": 51824,
        "tipo": "QP"
      }
    ],
    "mantidos": {
      "c1": 11,
      "c2": 15
    },
    "capitais": [],
    "multi_distrito": [],
    "nota_proxy": "Em 2022 nao havia voto partidario separado (voto de legenda existe, mas a maior parte do eleitorado vota nominalmente). Por isso o 'voto partidario' e um PROXY: cenario 1 usa apenas o voto de legenda (QT_VOTOS_LEGENDA_VALIDOS); cenario 2 soma os votos nominais de todos os candidatos do partido + o voto de legenda. Federacoes sao tratadas como partidos individuais (SG_PARTIDO)."
  },
  "GO": {
    "uf": "GO",
    "cadeiras": 17,
    "n_distritos": 8,
    "pop_total": 7056495,
    "pop_ideal": 882061,
    "desvio_max": 6.1,
    "conforme": true,
    "resumo": {
      "<=5%": 7,
      "5-10%": 1,
      ">10%": 0
    },
    "distritos": [
      {
        "distrito": 1,
        "pop": 913928,
        "desvio": 3.6,
        "n_mun": 31,
        "compacidade": 0.041,
        "faixa": "<=5%"
      },
      {
        "distrito": 2,
        "pop": 827867,
        "desvio": -6.1,
        "n_mun": 75,
        "compacidade": 0.093,
        "faixa": "5-10%"
      },
      {
        "distrito": 3,
        "pop": 851429,
        "desvio": -3.5,
        "n_mun": 40,
        "compacidade": 0.058,
        "faixa": "<=5%"
      },
      {
        "distrito": 4,
        "pop": 906852,
        "desvio": 2.8,
        "n_mun": 21,
        "compacidade": 0.071,
        "faixa": "<=5%"
      },
      {
        "distrito": 5,
        "pop": 916652,
        "desvio": 3.9,
        "n_mun": 32,
        "compacidade": 0.038,
        "faixa": "<=5%"
      },
      {
        "distrito": 6,
        "pop": 872329,
        "desvio": -1.1,
        "n_mun": 28,
        "compacidade": 0.113,
        "faixa": "<=5%"
      },
      {
        "distrito": 7,
        "pop": 884774,
        "desvio": 0.3,
        "n_mun": 9,
        "compacidade": 0.071,
        "faixa": "<=5%"
      },
      {
        "distrito": 8,
        "pop": 882664,
        "desvio": 0.1,
        "n_mun": 14,
        "compacidade": 0.068,
        "faixa": "<=5%"
      }
    ],
    "vencedores": [
      {
        "distrito": 1,
        "candidato": "SILVYE ALVES",
        "partido": "UNIÃO",
        "votos": 56860,
        "pct": 11.84,
        "segundo": "GUSTAVO GAYER",
        "partido2": "PL",
        "margem_votos": 12808,
        "margem_pct": 2.67,
        "total_validos": 480298,
        "municipios": 31
      },
      {
        "distrito": 2,
        "candidato": "FLAVIA MORAIS",
        "partido": "PDT",
        "votos": 31985,
        "pct": 7.18,
        "segundo": "JOSÉ NELTO",
        "partido2": "PP",
        "margem_votos": 41,
        "margem_pct": 0.01,
        "total_validos": 445739,
        "municipios": 75
      },
      {
        "distrito": 3,
        "candidato": "DANNILLO PEREIRA",
        "partido": "PSD",
        "votos": 34745,
        "pct": 8.67,
        "segundo": "MARUSSA BOLDRIN",
        "partido2": "MDB",
        "margem_votos": 8451,
        "margem_pct": 2.11,
        "total_validos": 400695,
        "municipios": 40
      },
      {
        "distrito": 4,
        "candidato": "SILVYE ALVES",
        "partido": "UNIÃO",
        "votos": 54194,
        "pct": 12.29,
        "segundo": "MÁRCIO CORREA",
        "partido2": "MDB",
        "margem_votos": 22341,
        "margem_pct": 5.06,
        "total_validos": 441091,
        "municipios": 21
      },
      {
        "distrito": 5,
        "candidato": "SILVYE ALVES",
        "partido": "UNIÃO",
        "votos": 42892,
        "pct": 9.56,
        "segundo": "FLAVIA MORAIS",
        "partido2": "PDT",
        "margem_votos": 6835,
        "margem_pct": 1.52,
        "total_validos": 448504,
        "municipios": 32
      },
      {
        "distrito": 6,
        "candidato": "LÊDA BORGES",
        "partido": "PSDB",
        "votos": 24447,
        "pct": 6.65,
        "segundo": "SILVYE ALVES",
        "partido2": "UNIÃO",
        "margem_votos": 54,
        "margem_pct": 0.01,
        "total_validos": 367381,
        "municipios": 28
      },
      {
        "distrito": 7,
        "candidato": "HILDO DO CANDANGO",
        "partido": "REPUBLICANOS",
        "votos": 39814,
        "pct": 12.33,
        "segundo": "CÉLIO SILVEIRA",
        "partido2": "MDB",
        "margem_votos": 3909,
        "margem_pct": 1.21,
        "total_validos": 323002,
        "municipios": 9
      },
      {
        "distrito": 8,
        "candidato": "SILVYE ALVES",
        "partido": "UNIÃO",
        "votos": 63043,
        "pct": 15.52,
        "segundo": "PROFESSOR ALCIDES",
        "partido2": "PL",
        "margem_votos": 23283,
        "margem_pct": 5.73,
        "total_validos": 406206,
        "municipios": 14
      }
    ],
    "ranking": [
      {
        "distrito": 1,
        "posicao": 1,
        "candidato": "SILVYE ALVES",
        "partido": "UNIÃO",
        "votos": 56860,
        "pct": 11.84
      },
      {
        "distrito": 1,
        "posicao": 2,
        "candidato": "GUSTAVO GAYER",
        "partido": "PL",
        "votos": 44052,
        "pct": 9.17
      },
      {
        "distrito": 1,
        "posicao": 3,
        "candidato": "DELEGADA ADRIANA ACCORSI",
        "partido": "PT",
        "votos": 24087,
        "pct": 5.02
      },
      {
        "distrito": 1,
        "posicao": 4,
        "candidato": "DR ZACHARIAS CALIL",
        "partido": "UNIÃO",
        "votos": 23080,
        "pct": 4.81
      },
      {
        "distrito": 1,
        "posicao": 5,
        "candidato": "PROFESSOR EDWARD",
        "partido": "PT",
        "votos": 15546,
        "pct": 3.24
      },
      {
        "distrito": 1,
        "posicao": 6,
        "candidato": "GLAUSTIN DA FOKUS",
        "partido": "PSC",
        "votos": 14408,
        "pct": 3.0
      },
      {
        "distrito": 1,
        "posicao": 7,
        "candidato": "DRA FABIANNE LEÃO",
        "partido": "PP",
        "votos": 13638,
        "pct": 2.84
      },
      {
        "distrito": 1,
        "posicao": 8,
        "candidato": "ADRIANO DO BALDY",
        "partido": "PP",
        "votos": 13105,
        "pct": 2.73
      },
      {
        "distrito": 1,
        "posicao": 9,
        "candidato": "FLAVIA MORAIS",
        "partido": "PDT",
        "votos": 12883,
        "pct": 2.68
      },
      {
        "distrito": 1,
        "posicao": 10,
        "candidato": "LUCAS VERGÍLIO",
        "partido": "SOLIDARIEDADE",
        "votos": 12012,
        "pct": 2.5
      },
      {
        "distrito": 1,
        "posicao": 11,
        "candidato": "DELEGADO HUMBERTO TEÓFILO",
        "partido": "PATRIOTA",
        "votos": 10523,
        "pct": 2.19
      },
      {
        "distrito": 1,
        "posicao": 12,
        "candidato": "RAFAEL GOUVEIA",
        "partido": "REPUBLICANOS",
        "votos": 9616,
        "pct": 2.0
      },
      {
        "distrito": 2,
        "posicao": 1,
        "candidato": "FLAVIA MORAIS",
        "partido": "PDT",
        "votos": 31985,
        "pct": 7.18
      },
      {
        "distrito": 2,
        "posicao": 2,
        "candidato": "JOSÉ NELTO",
        "partido": "PP",
        "votos": 31944,
        "pct": 7.17
      },
      {
        "distrito": 2,
        "posicao": 3,
        "candidato": "DR. HELIO DE SOUSA",
        "partido": "PSDB",
        "votos": 26175,
        "pct": 5.87
      },
      {
        "distrito": 2,
        "posicao": 4,
        "candidato": "LUCAS VERGÍLIO",
        "partido": "SOLIDARIEDADE",
        "votos": 25377,
        "pct": 5.69
      },
      {
        "distrito": 2,
        "posicao": 5,
        "candidato": "ADRIANO DO BALDY",
        "partido": "PP",
        "votos": 22362,
        "pct": 5.02
      },
      {
        "distrito": 2,
        "posicao": 6,
        "candidato": "MAGDA MOFATTO",
        "partido": "PL",
        "votos": 21716,
        "pct": 4.87
      },
      {
        "distrito": 2,
        "posicao": 7,
        "candidato": "CÉLIO SILVEIRA",
        "partido": "MDB",
        "votos": 18744,
        "pct": 4.21
      },
      {
        "distrito": 2,
        "posicao": 8,
        "candidato": "MARUSSA BOLDRIN",
        "partido": "MDB",
        "votos": 18266,
        "pct": 4.1
      },
      {
        "distrito": 2,
        "posicao": 9,
        "candidato": "GLAUSTIN DA FOKUS",
        "partido": "PSC",
        "votos": 18247,
        "pct": 4.09
      },
      {
        "distrito": 2,
        "posicao": 10,
        "candidato": "PROFESSOR ALCIDES",
        "partido": "PL",
        "votos": 17958,
        "pct": 4.03
      },
      {
        "distrito": 2,
        "posicao": 11,
        "candidato": "RUBENS OTONI",
        "partido": "PT",
        "votos": 13969,
        "pct": 3.13
      },
      {
        "distrito": 2,
        "posicao": 12,
        "candidato": "PAULO TRABALHO",
        "partido": "PL",
        "votos": 13079,
        "pct": 2.93
      },
      {
        "distrito": 3,
        "posicao": 1,
        "candidato": "DANNILLO PEREIRA",
        "partido": "PSD",
        "votos": 34745,
        "pct": 8.67
      },
      {
        "distrito": 3,
        "posicao": 2,
        "candidato": "MARUSSA BOLDRIN",
        "partido": "MDB",
        "votos": 26294,
        "pct": 6.56
      },
      {
        "distrito": 3,
        "posicao": 3,
        "candidato": "DANIEL AGROBOM",
        "partido": "PL",
        "votos": 25689,
        "pct": 6.41
      },
      {
        "distrito": 3,
        "posicao": 4,
        "candidato": "FLAVIA MORAIS",
        "partido": "PDT",
        "votos": 25076,
        "pct": 6.26
      },
      {
        "distrito": 3,
        "posicao": 5,
        "candidato": "ALCIDES RODRIGUES",
        "partido": "PATRIOTA",
        "votos": 19030,
        "pct": 4.75
      },
      {
        "distrito": 3,
        "posicao": 6,
        "candidato": "GUSTAVO GAYER",
        "partido": "PL",
        "votos": 18554,
        "pct": 4.63
      },
      {
        "distrito": 3,
        "posicao": 7,
        "candidato": "ADRIANO DO BALDY",
        "partido": "PP",
        "votos": 15640,
        "pct": 3.9
      },
      {
        "distrito": 3,
        "posicao": 8,
        "candidato": "MAGDA MOFATTO",
        "partido": "PL",
        "votos": 15426,
        "pct": 3.85
      },
      {
        "distrito": 3,
        "posicao": 9,
        "candidato": "MAGAL",
        "partido": "PATRIOTA",
        "votos": 15083,
        "pct": 3.76
      },
      {
        "distrito": 3,
        "posicao": 10,
        "candidato": "GLAUSTIN DA FOKUS",
        "partido": "PSC",
        "votos": 14577,
        "pct": 3.64
      },
      {
        "distrito": 3,
        "posicao": 11,
        "candidato": "NAYARA BARCELOS",
        "partido": "PRTB",
        "votos": 13900,
        "pct": 3.47
      },
      {
        "distrito": 3,
        "posicao": 12,
        "candidato": "RUBENS OTONI",
        "partido": "PT",
        "votos": 9862,
        "pct": 2.46
      },
      {
        "distrito": 4,
        "posicao": 1,
        "candidato": "SILVYE ALVES",
        "partido": "UNIÃO",
        "votos": 54194,
        "pct": 12.29
      },
      {
        "distrito": 4,
        "posicao": 2,
        "candidato": "MÁRCIO CORREA",
        "partido": "MDB",
        "votos": 31853,
        "pct": 7.22
      },
      {
        "distrito": 4,
        "posicao": 3,
        "candidato": "GUSTAVO GAYER",
        "partido": "PL",
        "votos": 27411,
        "pct": 6.21
      },
      {
        "distrito": 4,
        "posicao": 4,
        "candidato": "LEANDRO RIBEIRO",
        "partido": "PP",
        "votos": 25360,
        "pct": 5.75
      },
      {
        "distrito": 4,
        "posicao": 5,
        "candidato": "RUBENS OTONI",
        "partido": "PT",
        "votos": 21178,
        "pct": 4.8
      },
      {
        "distrito": 4,
        "posicao": 6,
        "candidato": "GLAUSTIN DA FOKUS",
        "partido": "PSC",
        "votos": 15217,
        "pct": 3.45
      },
      {
        "distrito": 4,
        "posicao": 7,
        "candidato": "ADRIANO DO BALDY",
        "partido": "PP",
        "votos": 13277,
        "pct": 3.01
      },
      {
        "distrito": 4,
        "posicao": 8,
        "candidato": "DR ZACHARIAS CALIL",
        "partido": "UNIÃO",
        "votos": 12813,
        "pct": 2.9
      },
      {
        "distrito": 4,
        "posicao": 9,
        "candidato": "DELEGADA ADRIANA ACCORSI",
        "partido": "PT",
        "votos": 10847,
        "pct": 2.46
      },
      {
        "distrito": 4,
        "posicao": 10,
        "candidato": "CARPEGIANE SILVESTRE",
        "partido": "PATRIOTA",
        "votos": 9578,
        "pct": 2.17
      },
      {
        "distrito": 4,
        "posicao": 11,
        "candidato": "JOSÉ NELTO",
        "partido": "PP",
        "votos": 9300,
        "pct": 2.11
      },
      {
        "distrito": 4,
        "posicao": 12,
        "candidato": "FLAVIA MORAIS",
        "partido": "PDT",
        "votos": 7510,
        "pct": 1.7
      },
      {
        "distrito": 5,
        "posicao": 1,
        "candidato": "SILVYE ALVES",
        "partido": "UNIÃO",
        "votos": 42892,
        "pct": 9.56
      },
      {
        "distrito": 5,
        "posicao": 2,
        "candidato": "FLAVIA MORAIS",
        "partido": "PDT",
        "votos": 36057,
        "pct": 8.04
      },
      {
        "distrito": 5,
        "posicao": 3,
        "candidato": "GUSTAVO GAYER",
        "partido": "PL",
        "votos": 34162,
        "pct": 7.62
      },
      {
        "distrito": 5,
        "posicao": 4,
        "candidato": "DR ISMAEL ALEXANDRINO ",
        "partido": "PSD",
        "votos": 20709,
        "pct": 4.62
      },
      {
        "distrito": 5,
        "posicao": 5,
        "candidato": "GLAUSTIN DA FOKUS",
        "partido": "PSC",
        "votos": 17953,
        "pct": 4.0
      },
      {
        "distrito": 5,
        "posicao": 6,
        "candidato": "DELEGADA ADRIANA ACCORSI",
        "partido": "PT",
        "votos": 17438,
        "pct": 3.89
      },
      {
        "distrito": 5,
        "posicao": 7,
        "candidato": "DR ZACHARIAS CALIL",
        "partido": "UNIÃO",
        "votos": 16339,
        "pct": 3.64
      },
      {
        "distrito": 5,
        "posicao": 8,
        "candidato": "PROFESSOR EDWARD",
        "partido": "PT",
        "votos": 12132,
        "pct": 2.7
      },
      {
        "distrito": 5,
        "posicao": 9,
        "candidato": "FABIO SOUSA",
        "partido": "PL",
        "votos": 9920,
        "pct": 2.21
      },
      {
        "distrito": 5,
        "posicao": 10,
        "candidato": "LUCAS VERGÍLIO",
        "partido": "SOLIDARIEDADE",
        "votos": 9591,
        "pct": 2.14
      },
      {
        "distrito": 5,
        "posicao": 11,
        "candidato": "DANIEL AGROBOM",
        "partido": "PL",
        "votos": 9503,
        "pct": 2.12
      },
      {
        "distrito": 5,
        "posicao": 12,
        "candidato": "FLAVIANE SCOPEL",
        "partido": "REPUBLICANOS",
        "votos": 9297,
        "pct": 2.07
      },
      {
        "distrito": 6,
        "posicao": 1,
        "candidato": "LÊDA BORGES",
        "partido": "PSDB",
        "votos": 24447,
        "pct": 6.65
      },
      {
        "distrito": 6,
        "posicao": 2,
        "candidato": "SILVYE ALVES",
        "partido": "UNIÃO",
        "votos": 24393,
        "pct": 6.64
      },
      {
        "distrito": 6,
        "posicao": 3,
        "candidato": "CÉLIO SILVEIRA",
        "partido": "MDB",
        "votos": 22589,
        "pct": 6.15
      },
      {
        "distrito": 6,
        "posicao": 4,
        "candidato": "GUSTAVO GAYER",
        "partido": "PL",
        "votos": 22497,
        "pct": 6.12
      },
      {
        "distrito": 6,
        "posicao": 5,
        "candidato": "JOSÉ NELTO",
        "partido": "PP",
        "votos": 18713,
        "pct": 5.09
      },
      {
        "distrito": 6,
        "posicao": 6,
        "candidato": "FLAVIA MORAIS",
        "partido": "PDT",
        "votos": 17576,
        "pct": 4.78
      },
      {
        "distrito": 6,
        "posicao": 7,
        "candidato": "GLAUSTIN DA FOKUS",
        "partido": "PSC",
        "votos": 11498,
        "pct": 3.13
      },
      {
        "distrito": 6,
        "posicao": 8,
        "candidato": "DELEGADA ADRIANA ACCORSI",
        "partido": "PT",
        "votos": 10730,
        "pct": 2.92
      },
      {
        "distrito": 6,
        "posicao": 9,
        "candidato": "MATHEUS RIBEIRO",
        "partido": "PSDB",
        "votos": 10710,
        "pct": 2.92
      },
      {
        "distrito": 6,
        "posicao": 10,
        "candidato": "RUBENS OTONI",
        "partido": "PT",
        "votos": 10390,
        "pct": 2.83
      },
      {
        "distrito": 6,
        "posicao": 11,
        "candidato": "ADRIANO DO BALDY",
        "partido": "PP",
        "votos": 9137,
        "pct": 2.49
      },
      {
        "distrito": 6,
        "posicao": 12,
        "candidato": "DR ZACHARIAS CALIL",
        "partido": "UNIÃO",
        "votos": 8399,
        "pct": 2.29
      },
      {
        "distrito": 7,
        "posicao": 1,
        "candidato": "HILDO DO CANDANGO",
        "partido": "REPUBLICANOS",
        "votos": 39814,
        "pct": 12.33
      },
      {
        "distrito": 7,
        "posicao": 2,
        "candidato": "CÉLIO SILVEIRA",
        "partido": "MDB",
        "votos": 35905,
        "pct": 11.12
      },
      {
        "distrito": 7,
        "posicao": 3,
        "candidato": "JOSÉ NELTO",
        "partido": "PP",
        "votos": 20398,
        "pct": 6.32
      },
      {
        "distrito": 7,
        "posicao": 4,
        "candidato": "MAGDA MOFATTO",
        "partido": "PL",
        "votos": 15921,
        "pct": 4.93
      },
      {
        "distrito": 7,
        "posicao": 5,
        "candidato": "GUSTAVO GAYER",
        "partido": "PL",
        "votos": 14022,
        "pct": 4.34
      },
      {
        "distrito": 7,
        "posicao": 6,
        "candidato": "LÊDA BORGES",
        "partido": "PSDB",
        "votos": 13189,
        "pct": 4.08
      },
      {
        "distrito": 7,
        "posicao": 7,
        "candidato": "GLAUSTIN DA FOKUS",
        "partido": "PSC",
        "votos": 11741,
        "pct": 3.63
      },
      {
        "distrito": 7,
        "posicao": 8,
        "candidato": "RUBENS OTONI",
        "partido": "PT",
        "votos": 11347,
        "pct": 3.51
      },
      {
        "distrito": 7,
        "posicao": 9,
        "candidato": "JEFERSON RODRIGUES",
        "partido": "REPUBLICANOS",
        "votos": 10540,
        "pct": 3.26
      },
      {
        "distrito": 7,
        "posicao": 10,
        "candidato": "FLAVIA MORAIS",
        "partido": "PDT",
        "votos": 7366,
        "pct": 2.28
      },
      {
        "distrito": 7,
        "posicao": 11,
        "candidato": "FRANCISCO JR",
        "partido": "PSD",
        "votos": 6761,
        "pct": 2.09
      },
      {
        "distrito": 7,
        "posicao": 12,
        "candidato": "DANIEL AGROBOM",
        "partido": "PL",
        "votos": 5773,
        "pct": 1.79
      },
      {
        "distrito": 8,
        "posicao": 1,
        "candidato": "SILVYE ALVES",
        "partido": "UNIÃO",
        "votos": 63043,
        "pct": 15.52
      },
      {
        "distrito": 8,
        "posicao": 2,
        "candidato": "PROFESSOR ALCIDES",
        "partido": "PL",
        "votos": 39760,
        "pct": 9.79
      },
      {
        "distrito": 8,
        "posicao": 3,
        "candidato": "GUSTAVO GAYER",
        "partido": "PL",
        "votos": 26880,
        "pct": 6.62
      },
      {
        "distrito": 8,
        "posicao": 4,
        "candidato": "DR ZACHARIAS CALIL",
        "partido": "UNIÃO",
        "votos": 19302,
        "pct": 4.75
      },
      {
        "distrito": 8,
        "posicao": 5,
        "candidato": "DELEGADA ADRIANA ACCORSI",
        "partido": "PT",
        "votos": 17393,
        "pct": 4.28
      },
      {
        "distrito": 8,
        "posicao": 6,
        "candidato": "GLAUSTIN DA FOKUS",
        "partido": "PSC",
        "votos": 14340,
        "pct": 3.53
      },
      {
        "distrito": 8,
        "posicao": 7,
        "candidato": "PROFESSOR EDWARD",
        "partido": "PT",
        "votos": 10954,
        "pct": 2.7
      },
      {
        "distrito": 8,
        "posicao": 8,
        "candidato": "LUCAS VERGÍLIO",
        "partido": "SOLIDARIEDADE",
        "votos": 10623,
        "pct": 2.62
      },
      {
        "distrito": 8,
        "posicao": 9,
        "candidato": "ADRIANO DO BALDY",
        "partido": "PP",
        "votos": 9261,
        "pct": 2.28
      },
      {
        "distrito": 8,
        "posicao": 10,
        "candidato": "FABIO SOUSA",
        "partido": "PL",
        "votos": 8819,
        "pct": 2.17
      },
      {
        "distrito": 8,
        "posicao": 11,
        "candidato": "JEFERSON RODRIGUES",
        "partido": "REPUBLICANOS",
        "votos": 7971,
        "pct": 1.96
      },
      {
        "distrito": 8,
        "posicao": 12,
        "candidato": "RAFAEL GOUVEIA",
        "partido": "REPUBLICANOS",
        "votos": 7714,
        "pct": 1.9
      }
    ],
    "cadeiras_partido": [
      {
        "partido": "PL",
        "real": 4,
        "c1": 3,
        "c2": 4,
        "saldo_c1": -1,
        "saldo_c2": 0
      },
      {
        "partido": "PT",
        "real": 2,
        "c1": 5,
        "c2": 2,
        "saldo_c1": 3,
        "saldo_c2": 0
      },
      {
        "partido": "UNIÃO",
        "real": 2,
        "c1": 3,
        "c2": 2,
        "saldo_c1": 1,
        "saldo_c2": 0
      },
      {
        "partido": "MDB",
        "real": 2,
        "c1": 2,
        "c2": 1,
        "saldo_c1": 0,
        "saldo_c2": -1
      },
      {
        "partido": "PP",
        "real": 2,
        "c1": 1,
        "c2": 2,
        "saldo_c1": -1,
        "saldo_c2": 0
      },
      {
        "partido": "PDT",
        "real": 1,
        "c1": 1,
        "c2": 1,
        "saldo_c1": 0,
        "saldo_c2": 0
      },
      {
        "partido": "PSD",
        "real": 1,
        "c1": 1,
        "c2": 1,
        "saldo_c1": 0,
        "saldo_c2": 0
      },
      {
        "partido": "PSDB",
        "real": 1,
        "c1": 1,
        "c2": 1,
        "saldo_c1": 0,
        "saldo_c2": 0
      },
      {
        "partido": "REPUBLICANOS",
        "real": 1,
        "c1": 1,
        "c2": 1,
        "saldo_c1": 0,
        "saldo_c2": 0
      },
      {
        "partido": "PSC",
        "real": 1,
        "c1": 0,
        "c2": 1,
        "saldo_c1": -1,
        "saldo_c2": 0
      },
      {
        "partido": "PATRIOTA",
        "real": 0,
        "c1": 0,
        "c2": 1,
        "saldo_c1": 0,
        "saldo_c2": 1
      }
    ],
    "combos": {
      "c1_unico_A": {
        "cenario": "legenda",
        "sub": "unico",
        "modelo": "A",
        "bancada_base": 17,
        "bancada_final": 18,
        "overhang": 1,
        "tabela": [
          {
            "partido": "PT",
            "votos": 23805,
            "medias": 5,
            "distritais": 0,
            "lista": 5,
            "overhang": 0,
            "total": 5
          },
          {
            "partido": "PL",
            "votos": 18096,
            "medias": 3,
            "distritais": 1,
            "lista": 2,
            "overhang": 0,
            "total": 3
          },
          {
            "partido": "UNIÃO",
            "votos": 14554,
            "medias": 3,
            "distritais": 1,
            "lista": 2,
            "overhang": 0,
            "total": 3
          },
          {
            "partido": "MDB",
            "votos": 11922,
            "medias": 2,
            "distritais": 1,
            "lista": 1,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PDT",
            "votos": 8000,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PP",
            "votos": 6393,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSDB",
            "votos": 5793,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 5065,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSD",
            "votos": 3056,
            "medias": 0,
            "distritais": 1,
            "lista": 0,
            "overhang": 1,
            "total": 1
          },
          {
            "partido": "PSC",
            "votos": 3847,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 3841,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PATRIOTA",
            "votos": 2864,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 1909,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AGIR",
            "votos": 1890,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 1859,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 1738,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 1656,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "NOVO",
            "votos": 1624,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 1512,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 1382,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PODE",
            "votos": 1343,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "CIDADANIA",
            "votos": 1083,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PCB",
            "votos": 1002,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PMN",
            "votos": 858,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 623,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 342,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 341,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 330,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "GUSTAVO GAYER",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "JOSÉ NELTO",
            "partido": "PP",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "DANNILLO PEREIRA",
            "partido": "PSD",
            "tipo": "overhang",
            "distrito": 3
          },
          {
            "nome": "MÁRCIO CORREA",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "FLAVIA MORAIS",
            "partido": "PDT",
            "tipo": "distrital",
            "distrito": 5
          },
          {
            "nome": "LÊDA BORGES",
            "partido": "PSDB",
            "tipo": "distrital",
            "distrito": 6
          },
          {
            "nome": "HILDO DO CANDANGO",
            "partido": "REPUBLICANOS",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 8
          },
          {
            "nome": "CÉLIO SILVEIRA",
            "partido": "MDB",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "PROFESSOR ALCIDES",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "MAGDA MOFATTO",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DELEGADA ADRIANA ACCORSI",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "RUBENS OTONI",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "PROFESSOR EDWARD",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "VALDIR DO MST",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "KEDMA KAREN",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DR ZACHARIAS CALIL",
            "partido": "UNIÃO",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "SUBTENENTE SOUZA",
            "partido": "UNIÃO",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      },
      "c1_unico_B": {
        "cenario": "legenda",
        "sub": "unico",
        "modelo": "B",
        "bancada_base": 17,
        "bancada_final": 18,
        "overhang": 1,
        "tabela": [
          {
            "partido": "PT",
            "votos": 23805,
            "medias": 5,
            "distritais": 0,
            "lista": 5,
            "overhang": 0,
            "total": 5
          },
          {
            "partido": "PL",
            "votos": 18096,
            "medias": 3,
            "distritais": 1,
            "lista": 2,
            "overhang": 0,
            "total": 3
          },
          {
            "partido": "UNIÃO",
            "votos": 14554,
            "medias": 3,
            "distritais": 1,
            "lista": 2,
            "overhang": 0,
            "total": 3
          },
          {
            "partido": "MDB",
            "votos": 11922,
            "medias": 2,
            "distritais": 1,
            "lista": 1,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PDT",
            "votos": 8000,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PP",
            "votos": 6393,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSDB",
            "votos": 5793,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 5065,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSD",
            "votos": 3056,
            "medias": 0,
            "distritais": 1,
            "lista": 0,
            "overhang": 1,
            "total": 1
          },
          {
            "partido": "PSC",
            "votos": 3847,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 3841,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PATRIOTA",
            "votos": 2864,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 1909,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AGIR",
            "votos": 1890,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 1859,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 1738,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 1656,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "NOVO",
            "votos": 1624,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 1512,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 1382,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PODE",
            "votos": 1343,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "CIDADANIA",
            "votos": 1083,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PCB",
            "votos": 1002,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PMN",
            "votos": 858,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 623,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 342,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 341,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 330,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "GUSTAVO GAYER",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "JOSÉ NELTO",
            "partido": "PP",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "DANNILLO PEREIRA",
            "partido": "PSD",
            "tipo": "overhang",
            "distrito": 3
          },
          {
            "nome": "MÁRCIO CORREA",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "FLAVIA MORAIS",
            "partido": "PDT",
            "tipo": "distrital",
            "distrito": 5
          },
          {
            "nome": "LÊDA BORGES",
            "partido": "PSDB",
            "tipo": "distrital",
            "distrito": 6
          },
          {
            "nome": "HILDO DO CANDANGO",
            "partido": "REPUBLICANOS",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 8
          },
          {
            "nome": "CÉLIO SILVEIRA",
            "partido": "MDB",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "PROFESSOR ALCIDES",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DANIEL AGROBOM",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DELEGADA ADRIANA ACCORSI",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "RUBENS OTONI",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "PROFESSOR EDWARD",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "KEDMA KAREN",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "VALDIR DO MST",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DR ZACHARIAS CALIL",
            "partido": "UNIÃO",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "SUBTENENTE SOUZA",
            "partido": "UNIÃO",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      },
      "c1_literal_A": {
        "cenario": "legenda",
        "sub": "literal",
        "modelo": "A",
        "bancada_base": 17,
        "bancada_final": 19,
        "overhang": 2,
        "tabela": [
          {
            "partido": "PT",
            "votos": 23805,
            "medias": 5,
            "distritais": 0,
            "lista": 5,
            "overhang": 0,
            "total": 5
          },
          {
            "partido": "UNIÃO",
            "votos": 14554,
            "medias": 3,
            "distritais": 4,
            "lista": 0,
            "overhang": 1,
            "total": 4
          },
          {
            "partido": "PL",
            "votos": 18096,
            "medias": 3,
            "distritais": 0,
            "lista": 3,
            "overhang": 0,
            "total": 3
          },
          {
            "partido": "MDB",
            "votos": 11922,
            "medias": 2,
            "distritais": 0,
            "lista": 2,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PDT",
            "votos": 8000,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PP",
            "votos": 6393,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSDB",
            "votos": 5793,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 5065,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSD",
            "votos": 3056,
            "medias": 0,
            "distritais": 1,
            "lista": 0,
            "overhang": 1,
            "total": 1
          },
          {
            "partido": "PSC",
            "votos": 3847,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 3841,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PATRIOTA",
            "votos": 2864,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 1909,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AGIR",
            "votos": 1890,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 1859,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 1738,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 1656,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "NOVO",
            "votos": 1624,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 1512,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 1382,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PODE",
            "votos": 1343,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "CIDADANIA",
            "votos": 1083,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PCB",
            "votos": 1002,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PMN",
            "votos": 858,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 623,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 342,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 341,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 330,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "FLAVIA MORAIS",
            "partido": "PDT",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "DANNILLO PEREIRA",
            "partido": "PSD",
            "tipo": "overhang",
            "distrito": 3
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "overhang",
            "distrito": 5
          },
          {
            "nome": "LÊDA BORGES",
            "partido": "PSDB",
            "tipo": "distrital",
            "distrito": 6
          },
          {
            "nome": "HILDO DO CANDANGO",
            "partido": "REPUBLICANOS",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 8
          },
          {
            "nome": "CÉLIO SILVEIRA",
            "partido": "MDB",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "MARUSSA BOLDRIN",
            "partido": "MDB",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "GUSTAVO GAYER",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "PROFESSOR ALCIDES",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "MAGDA MOFATTO",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "JOSÉ NELTO",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DELEGADA ADRIANA ACCORSI",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "RUBENS OTONI",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "PROFESSOR EDWARD",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "VALDIR DO MST",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "KEDMA KAREN",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      },
      "c1_literal_B": {
        "cenario": "legenda",
        "sub": "literal",
        "modelo": "B",
        "bancada_base": 17,
        "bancada_final": 19,
        "overhang": 2,
        "tabela": [
          {
            "partido": "PT",
            "votos": 23805,
            "medias": 5,
            "distritais": 0,
            "lista": 5,
            "overhang": 0,
            "total": 5
          },
          {
            "partido": "UNIÃO",
            "votos": 14554,
            "medias": 3,
            "distritais": 4,
            "lista": 0,
            "overhang": 1,
            "total": 4
          },
          {
            "partido": "PL",
            "votos": 18096,
            "medias": 3,
            "distritais": 0,
            "lista": 3,
            "overhang": 0,
            "total": 3
          },
          {
            "partido": "MDB",
            "votos": 11922,
            "medias": 2,
            "distritais": 0,
            "lista": 2,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PDT",
            "votos": 8000,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PP",
            "votos": 6393,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSDB",
            "votos": 5793,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 5065,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSD",
            "votos": 3056,
            "medias": 0,
            "distritais": 1,
            "lista": 0,
            "overhang": 1,
            "total": 1
          },
          {
            "partido": "PSC",
            "votos": 3847,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 3841,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PATRIOTA",
            "votos": 2864,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 1909,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AGIR",
            "votos": 1890,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 1859,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 1738,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 1656,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "NOVO",
            "votos": 1624,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 1512,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 1382,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PODE",
            "votos": 1343,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "CIDADANIA",
            "votos": 1083,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PCB",
            "votos": 1002,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PMN",
            "votos": 858,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 623,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 342,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 341,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 330,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "FLAVIA MORAIS",
            "partido": "PDT",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "DANNILLO PEREIRA",
            "partido": "PSD",
            "tipo": "overhang",
            "distrito": 3
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "overhang",
            "distrito": 5
          },
          {
            "nome": "LÊDA BORGES",
            "partido": "PSDB",
            "tipo": "distrital",
            "distrito": 6
          },
          {
            "nome": "HILDO DO CANDANGO",
            "partido": "REPUBLICANOS",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 8
          },
          {
            "nome": "CÉLIO SILVEIRA",
            "partido": "MDB",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "MÁRCIO CORREA",
            "partido": "MDB",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "GUSTAVO GAYER",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "PROFESSOR ALCIDES",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DANIEL AGROBOM",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "JOSÉ NELTO",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DELEGADA ADRIANA ACCORSI",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "RUBENS OTONI",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "PROFESSOR EDWARD",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "KEDMA KAREN",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "VALDIR DO MST",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      },
      "c2_unico_A": {
        "cenario": "nominais+legenda",
        "sub": "unico",
        "modelo": "A",
        "bancada_base": 17,
        "bancada_final": 17,
        "overhang": 0,
        "tabela": [
          {
            "partido": "PL",
            "votos": 574775,
            "medias": 4,
            "distritais": 1,
            "lista": 3,
            "overhang": 0,
            "total": 4
          },
          {
            "partido": "UNIÃO",
            "votos": 373859,
            "medias": 2,
            "distritais": 1,
            "lista": 1,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PP",
            "votos": 287770,
            "medias": 2,
            "distritais": 1,
            "lista": 1,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PT",
            "votos": 286944,
            "medias": 2,
            "distritais": 0,
            "lista": 2,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "MDB",
            "votos": 277308,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 273442,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSC",
            "votos": 186292,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSD",
            "votos": 180621,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PDT",
            "votos": 180557,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSDB",
            "votos": 178411,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PATRIOTA",
            "votos": 149111,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 135025,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 78959,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 65807,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 59406,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 32078,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 28453,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "NOVO",
            "votos": 23591,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PODE",
            "votos": 20644,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AGIR",
            "votos": 12067,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PMN",
            "votos": 7399,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 6366,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 5583,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 4668,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "CIDADANIA",
            "votos": 3875,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 3073,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PCB",
            "votos": 2405,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 1155,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "GUSTAVO GAYER",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "JOSÉ NELTO",
            "partido": "PP",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "DANNILLO PEREIRA",
            "partido": "PSD",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "MÁRCIO CORREA",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "FLAVIA MORAIS",
            "partido": "PDT",
            "tipo": "distrital",
            "distrito": 5
          },
          {
            "nome": "LÊDA BORGES",
            "partido": "PSDB",
            "tipo": "distrital",
            "distrito": 6
          },
          {
            "nome": "HILDO DO CANDANGO",
            "partido": "REPUBLICANOS",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 8
          },
          {
            "nome": "DELEGADO HUMBERTO TEÓFILO",
            "partido": "PATRIOTA",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "PROFESSOR ALCIDES",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "MAGDA MOFATTO",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DANIEL AGROBOM",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ADRIANO DO BALDY",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "GLAUSTIN DA FOKUS",
            "partido": "PSC",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DELEGADA ADRIANA ACCORSI",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "RUBENS OTONI",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DR ZACHARIAS CALIL",
            "partido": "UNIÃO",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      },
      "c2_unico_B": {
        "cenario": "nominais+legenda",
        "sub": "unico",
        "modelo": "B",
        "bancada_base": 17,
        "bancada_final": 17,
        "overhang": 0,
        "tabela": [
          {
            "partido": "PL",
            "votos": 574775,
            "medias": 4,
            "distritais": 1,
            "lista": 3,
            "overhang": 0,
            "total": 4
          },
          {
            "partido": "UNIÃO",
            "votos": 373859,
            "medias": 2,
            "distritais": 1,
            "lista": 1,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PP",
            "votos": 287770,
            "medias": 2,
            "distritais": 1,
            "lista": 1,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PT",
            "votos": 286944,
            "medias": 2,
            "distritais": 0,
            "lista": 2,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "MDB",
            "votos": 277308,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 273442,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSC",
            "votos": 186292,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSD",
            "votos": 180621,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PDT",
            "votos": 180557,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSDB",
            "votos": 178411,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PATRIOTA",
            "votos": 149111,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 135025,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 78959,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 65807,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 59406,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 32078,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 28453,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "NOVO",
            "votos": 23591,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PODE",
            "votos": 20644,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AGIR",
            "votos": 12067,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PMN",
            "votos": 7399,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 6366,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 5583,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 4668,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "CIDADANIA",
            "votos": 3875,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 3073,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PCB",
            "votos": 2405,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 1155,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "GUSTAVO GAYER",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "JOSÉ NELTO",
            "partido": "PP",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "DANNILLO PEREIRA",
            "partido": "PSD",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "MÁRCIO CORREA",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "FLAVIA MORAIS",
            "partido": "PDT",
            "tipo": "distrital",
            "distrito": 5
          },
          {
            "nome": "LÊDA BORGES",
            "partido": "PSDB",
            "tipo": "distrital",
            "distrito": 6
          },
          {
            "nome": "HILDO DO CANDANGO",
            "partido": "REPUBLICANOS",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 8
          },
          {
            "nome": "ALCIDES RODRIGUES",
            "partido": "PATRIOTA",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "PROFESSOR ALCIDES",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DANIEL AGROBOM",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "MAGDA MOFATTO",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "LEANDRO RIBEIRO",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "GLAUSTIN DA FOKUS",
            "partido": "PSC",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DELEGADA ADRIANA ACCORSI",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "RUBENS OTONI",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DR ZACHARIAS CALIL",
            "partido": "UNIÃO",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      },
      "c2_literal_A": {
        "cenario": "nominais+legenda",
        "sub": "literal",
        "modelo": "A",
        "bancada_base": 17,
        "bancada_final": 19,
        "overhang": 2,
        "tabela": [
          {
            "partido": "PL",
            "votos": 574775,
            "medias": 4,
            "distritais": 0,
            "lista": 4,
            "overhang": 0,
            "total": 4
          },
          {
            "partido": "UNIÃO",
            "votos": 373859,
            "medias": 2,
            "distritais": 4,
            "lista": 0,
            "overhang": 2,
            "total": 4
          },
          {
            "partido": "PP",
            "votos": 287770,
            "medias": 2,
            "distritais": 0,
            "lista": 2,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PT",
            "votos": 286944,
            "medias": 2,
            "distritais": 0,
            "lista": 2,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "MDB",
            "votos": 277308,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 273442,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSC",
            "votos": 186292,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSD",
            "votos": 180621,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PDT",
            "votos": 180557,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSDB",
            "votos": 178411,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PATRIOTA",
            "votos": 149111,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 135025,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 78959,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 65807,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 59406,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 32078,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 28453,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "NOVO",
            "votos": 23591,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PODE",
            "votos": 20644,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AGIR",
            "votos": 12067,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PMN",
            "votos": 7399,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 6366,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 5583,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 4668,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "CIDADANIA",
            "votos": 3875,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 3073,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PCB",
            "votos": 2405,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 1155,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "FLAVIA MORAIS",
            "partido": "PDT",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "DANNILLO PEREIRA",
            "partido": "PSD",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "overhang",
            "distrito": 4
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "overhang",
            "distrito": 5
          },
          {
            "nome": "LÊDA BORGES",
            "partido": "PSDB",
            "tipo": "distrital",
            "distrito": 6
          },
          {
            "nome": "HILDO DO CANDANGO",
            "partido": "REPUBLICANOS",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 8
          },
          {
            "nome": "CÉLIO SILVEIRA",
            "partido": "MDB",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DELEGADO HUMBERTO TEÓFILO",
            "partido": "PATRIOTA",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "GUSTAVO GAYER",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "PROFESSOR ALCIDES",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "MAGDA MOFATTO",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DANIEL AGROBOM",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "JOSÉ NELTO",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ADRIANO DO BALDY",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "GLAUSTIN DA FOKUS",
            "partido": "PSC",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DELEGADA ADRIANA ACCORSI",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "RUBENS OTONI",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      },
      "c2_literal_B": {
        "cenario": "nominais+legenda",
        "sub": "literal",
        "modelo": "B",
        "bancada_base": 17,
        "bancada_final": 19,
        "overhang": 2,
        "tabela": [
          {
            "partido": "PL",
            "votos": 574775,
            "medias": 4,
            "distritais": 0,
            "lista": 4,
            "overhang": 0,
            "total": 4
          },
          {
            "partido": "UNIÃO",
            "votos": 373859,
            "medias": 2,
            "distritais": 4,
            "lista": 0,
            "overhang": 2,
            "total": 4
          },
          {
            "partido": "PP",
            "votos": 287770,
            "medias": 2,
            "distritais": 0,
            "lista": 2,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "PT",
            "votos": 286944,
            "medias": 2,
            "distritais": 0,
            "lista": 2,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "MDB",
            "votos": 277308,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "REPUBLICANOS",
            "votos": 273442,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSC",
            "votos": 186292,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSD",
            "votos": 180621,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PDT",
            "votos": 180557,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSDB",
            "votos": 178411,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PATRIOTA",
            "votos": 149111,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "SOLIDARIEDADE",
            "votos": 135025,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSB",
            "votos": 78959,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PRTB",
            "votos": 65807,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AVANTE",
            "votos": 59406,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PROS",
            "votos": 32078,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PTB",
            "votos": 28453,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "NOVO",
            "votos": 23591,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PODE",
            "votos": 20644,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "AGIR",
            "votos": 12067,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PMN",
            "votos": 7399,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PSOL",
            "votos": 6366,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "DC",
            "votos": 5583,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PC do B",
            "votos": 4668,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "CIDADANIA",
            "votos": 3875,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "REDE",
            "votos": 3073,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PCB",
            "votos": 2405,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          },
          {
            "partido": "PV",
            "votos": 1155,
            "medias": 0,
            "distritais": 0,
            "lista": 0,
            "overhang": 0,
            "total": 0
          }
        ],
        "eleitos": [
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "FLAVIA MORAIS",
            "partido": "PDT",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "DANNILLO PEREIRA",
            "partido": "PSD",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "overhang",
            "distrito": 4
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "overhang",
            "distrito": 5
          },
          {
            "nome": "LÊDA BORGES",
            "partido": "PSDB",
            "tipo": "distrital",
            "distrito": 6
          },
          {
            "nome": "HILDO DO CANDANGO",
            "partido": "REPUBLICANOS",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 8
          },
          {
            "nome": "CÉLIO SILVEIRA",
            "partido": "MDB",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "ALCIDES RODRIGUES",
            "partido": "PATRIOTA",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "GUSTAVO GAYER",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "PROFESSOR ALCIDES",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DANIEL AGROBOM",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "MAGDA MOFATTO",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "JOSÉ NELTO",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "LEANDRO RIBEIRO",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "GLAUSTIN DA FOKUS",
            "partido": "PSC",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DELEGADA ADRIANA ACCORSI",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "RUBENS OTONI",
            "partido": "PT",
            "tipo": "lista",
            "distrito": ""
          }
        ]
      }
    },
    "entra_sai": [
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "CÉLIO SILVEIRA",
        "partido": "MDB"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "DELEGADA ADRIANA ACCORSI",
        "partido": "PT"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "DR ZACHARIAS CALIL",
        "partido": "UNIÃO"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "FLAVIA MORAIS",
        "partido": "PDT"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "GUSTAVO GAYER",
        "partido": "PL"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "JOSÉ NELTO",
        "partido": "PP"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "LÊDA BORGES",
        "partido": "PSDB"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "MAGDA MOFATTO",
        "partido": "PL"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "PROFESSOR ALCIDES",
        "partido": "PL"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "RUBENS OTONI",
        "partido": "PT"
      },
      {
        "cenario": "c1",
        "status": "mantidos",
        "nome": "SILVYE ALVES",
        "partido": "UNIÃO"
      },
      {
        "cenario": "c1",
        "status": "saem",
        "nome": "ADRIANO DO BALDY",
        "partido": "PP"
      },
      {
        "cenario": "c1",
        "status": "saem",
        "nome": "DANIEL AGROBOM",
        "partido": "PL"
      },
      {
        "cenario": "c1",
        "status": "saem",
        "nome": "DR ISMAEL ALEXANDRINO ",
        "partido": "PSD"
      },
      {
        "cenario": "c1",
        "status": "saem",
        "nome": "GLAUSTIN DA FOKUS",
        "partido": "PSC"
      },
      {
        "cenario": "c1",
        "status": "saem",
        "nome": "JEFERSON RODRIGUES",
        "partido": "REPUBLICANOS"
      },
      {
        "cenario": "c1",
        "status": "saem",
        "nome": "MARUSSA BOLDRIN",
        "partido": "MDB"
      },
      {
        "cenario": "c1",
        "status": "entram",
        "nome": "DANNILLO PEREIRA",
        "partido": "PSD"
      },
      {
        "cenario": "c1",
        "status": "entram",
        "nome": "HILDO DO CANDANGO",
        "partido": "REPUBLICANOS"
      },
      {
        "cenario": "c1",
        "status": "entram",
        "nome": "KEDMA KAREN",
        "partido": "PT"
      },
      {
        "cenario": "c1",
        "status": "entram",
        "nome": "MÁRCIO CORREA",
        "partido": "MDB"
      },
      {
        "cenario": "c1",
        "status": "entram",
        "nome": "PROFESSOR EDWARD",
        "partido": "PT"
      },
      {
        "cenario": "c1",
        "status": "entram",
        "nome": "SUBTENENTE SOUZA",
        "partido": "UNIÃO"
      },
      {
        "cenario": "c1",
        "status": "entram",
        "nome": "VALDIR DO MST",
        "partido": "PT"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "ADRIANO DO BALDY",
        "partido": "PP"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "DANIEL AGROBOM",
        "partido": "PL"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "DELEGADA ADRIANA ACCORSI",
        "partido": "PT"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "DR ZACHARIAS CALIL",
        "partido": "UNIÃO"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "FLAVIA MORAIS",
        "partido": "PDT"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "GLAUSTIN DA FOKUS",
        "partido": "PSC"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "GUSTAVO GAYER",
        "partido": "PL"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "JOSÉ NELTO",
        "partido": "PP"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "LÊDA BORGES",
        "partido": "PSDB"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "MAGDA MOFATTO",
        "partido": "PL"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "PROFESSOR ALCIDES",
        "partido": "PL"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "RUBENS OTONI",
        "partido": "PT"
      },
      {
        "cenario": "c2",
        "status": "mantidos",
        "nome": "SILVYE ALVES",
        "partido": "UNIÃO"
      },
      {
        "cenario": "c2",
        "status": "saem",
        "nome": "CÉLIO SILVEIRA",
        "partido": "MDB"
      },
      {
        "cenario": "c2",
        "status": "saem",
        "nome": "DR ISMAEL ALEXANDRINO ",
        "partido": "PSD"
      },
      {
        "cenario": "c2",
        "status": "saem",
        "nome": "JEFERSON RODRIGUES",
        "partido": "REPUBLICANOS"
      },
      {
        "cenario": "c2",
        "status": "saem",
        "nome": "MARUSSA BOLDRIN",
        "partido": "MDB"
      },
      {
        "cenario": "c2",
        "status": "entram",
        "nome": "DANNILLO PEREIRA",
        "partido": "PSD"
      },
      {
        "cenario": "c2",
        "status": "entram",
        "nome": "DELEGADO HUMBERTO TEÓFILO",
        "partido": "PATRIOTA"
      },
      {
        "cenario": "c2",
        "status": "entram",
        "nome": "HILDO DO CANDANGO",
        "partido": "REPUBLICANOS"
      },
      {
        "cenario": "c2",
        "status": "entram",
        "nome": "MÁRCIO CORREA",
        "partido": "MDB"
      }
    ],
    "eleitos_reais": [
      {
        "nome": "SILVYE ALVES",
        "partido": "UNIÃO",
        "votos": 254653,
        "tipo": "QP"
      },
      {
        "nome": "GUSTAVO GAYER",
        "partido": "PL",
        "votos": 200586,
        "tipo": "QP"
      },
      {
        "nome": "FLAVIA MORAIS",
        "partido": "PDT",
        "votos": 142155,
        "tipo": "media"
      },
      {
        "nome": "GLAUSTIN DA FOKUS",
        "partido": "PSC",
        "votos": 117981,
        "tipo": "media"
      },
      {
        "nome": "JOSÉ NELTO",
        "partido": "PP",
        "votos": 104504,
        "tipo": "QP"
      },
      {
        "nome": "DELEGADA ADRIANA ACCORSI",
        "partido": "PT",
        "votos": 96714,
        "tipo": "QP"
      },
      {
        "nome": "ADRIANO DO BALDY",
        "partido": "PP",
        "votos": 95518,
        "tipo": "media"
      },
      {
        "nome": "CÉLIO SILVEIRA",
        "partido": "MDB",
        "votos": 92469,
        "tipo": "QP"
      },
      {
        "nome": "PROFESSOR ALCIDES",
        "partido": "PL",
        "votos": 90162,
        "tipo": "QP"
      },
      {
        "nome": "DR ZACHARIAS CALIL",
        "partido": "UNIÃO",
        "votos": 87919,
        "tipo": "media"
      },
      {
        "nome": "RUBENS OTONI",
        "partido": "PT",
        "votos": 83539,
        "tipo": "media"
      },
      {
        "nome": "MAGDA MOFATTO",
        "partido": "PL",
        "votos": 81996,
        "tipo": "media"
      },
      {
        "nome": "MARUSSA BOLDRIN",
        "partido": "MDB",
        "votos": 80464,
        "tipo": "media"
      },
      {
        "nome": "DANIEL AGROBOM",
        "partido": "PL",
        "votos": 70529,
        "tipo": "media"
      },
      {
        "nome": "JEFERSON RODRIGUES",
        "partido": "REPUBLICANOS",
        "votos": 56026,
        "tipo": "QP"
      },
      {
        "nome": "DR ISMAEL ALEXANDRINO ",
        "partido": "PSD",
        "votos": 54791,
        "tipo": "media"
      },
      {
        "nome": "LÊDA BORGES",
        "partido": "PSDB",
        "votos": 51346,
        "tipo": "media"
      }
    ],
    "mantidos": {
      "c1": 11,
      "c2": 13
    },
    "capitais": [
      {
        "municipio": "Goiânia",
        "n_zonas": 9,
        "excede_pct": 163.0
      }
    ],
    "multi_distrito": [
      {
        "candidato": "SILVYE ALVES",
        "partido": "UNIÃO",
        "distritos": [
          1,
          4,
          5,
          8
        ]
      }
    ],
    "nota_proxy": "Em 2022 nao havia voto partidario separado (voto de legenda existe, mas a maior parte do eleitorado vota nominalmente). Por isso o 'voto partidario' e um PROXY: cenario 1 usa apenas o voto de legenda (QT_VOTOS_LEGENDA_VALIDOS); cenario 2 soma os votos nominais de todos os candidatos do partido + o voto de legenda. Federacoes sao tratadas como partidos individuais (SG_PARTIDO)."
  }
};

export const META: Meta = {
  "municipios_por_uf": {
    "MS": 79,
    "SC": 295,
    "GO": 246
  },
  "total_municipios_soma": 620,
  "total_distritos": 20,
  "total_cadeiras": 41,
  "overhang_total": {
    "c1": 5,
    "c2": 2
  },
  "bancada_final_total": {
    "c1": 46,
    "c2": 43
  },
  "fidelidade": {
    "MS": {
      "c1": 6,
      "c2": 8
    },
    "SC": {
      "c1": 11,
      "c2": 15
    },
    "GO": {
      "c1": 11,
      "c2": 13
    }
  }
};

export const UFS: UF[] = ["MS", "SC", "GO"];
