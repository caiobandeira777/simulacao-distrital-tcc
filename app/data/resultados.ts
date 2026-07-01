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
    "desvio_max": 9.3,
    "conforme": true,
    "resumo": {
      "<=5%": 3,
      "5-10%": 1,
      ">10%": 0
    },
    "distritos": [
      {
        "distrito": 1,
        "pop": 625318,
        "desvio": -9.3,
        "n_mun": 21,
        "compacidade": 0.068,
        "faixa": "5-10%"
      },
      {
        "distrito": 2,
        "pop": 708741,
        "desvio": 2.8,
        "n_mun": 17,
        "compacidade": 0.067,
        "faixa": "<=5%"
      },
      {
        "distrito": 3,
        "pop": 703011,
        "desvio": 2.0,
        "n_mun": 30,
        "compacidade": 0.045,
        "faixa": "<=5%"
      },
      {
        "distrito": 4,
        "pop": 719943,
        "desvio": 4.5,
        "n_mun": 14,
        "compacidade": 0.047,
        "faixa": "<=5%"
      }
    ],
    "vencedores": [
      {
        "distrito": 1,
        "candidato": "BETO PEREIRA",
        "partido": "PSDB",
        "votos": 29321,
        "pct": 10.12,
        "segundo": "MARCOS POLLON",
        "partido2": "PL",
        "margem_votos": 82,
        "margem_pct": 0.03,
        "total_validos": 289847,
        "municipios": 21
      },
      {
        "distrito": 2,
        "candidato": "MARCOS POLLON",
        "partido": "PL",
        "votos": 25574,
        "pct": 7.45,
        "segundo": "BETO PEREIRA",
        "partido2": "PSDB",
        "margem_votos": 4159,
        "margem_pct": 1.21,
        "total_validos": 343501,
        "municipios": 17
      },
      {
        "distrito": 3,
        "candidato": "DR. GERALDO RESENDE",
        "partido": "PSDB",
        "votos": 33335,
        "pct": 9.85,
        "segundo": "BETO PEREIRA",
        "partido2": "PSDB",
        "margem_votos": 3010,
        "margem_pct": 0.89,
        "total_validos": 338454,
        "municipios": 30
      },
      {
        "distrito": 4,
        "candidato": "DR. GERALDO RESENDE",
        "partido": "PSDB",
        "votos": 29783,
        "pct": 8.73,
        "segundo": "MARCOS POLLON",
        "partido2": "PL",
        "margem_votos": 4251,
        "margem_pct": 1.25,
        "total_validos": 341232,
        "municipios": 14
      }
    ],
    "ranking": [
      {
        "distrito": 1,
        "posicao": 1,
        "candidato": "BETO PEREIRA",
        "partido": "PSDB",
        "votos": 29321,
        "pct": 10.12
      },
      {
        "distrito": 1,
        "posicao": 2,
        "candidato": "MARCOS POLLON",
        "partido": "PL",
        "votos": 29239,
        "pct": 10.09
      },
      {
        "distrito": 1,
        "posicao": 3,
        "candidato": "DR. GERALDO RESENDE",
        "partido": "PSDB",
        "votos": 19659,
        "pct": 6.78
      },
      {
        "distrito": 1,
        "posicao": 4,
        "candidato": "DR CASSIANO MAIA",
        "partido": "PSDB",
        "votos": 14923,
        "pct": 5.15
      },
      {
        "distrito": 1,
        "posicao": 5,
        "candidato": "VANDER LOUBET",
        "partido": "PT",
        "votos": 13792,
        "pct": 4.76
      },
      {
        "distrito": 1,
        "posicao": 6,
        "candidato": "CAMILA JARA",
        "partido": "PT",
        "votos": 12210,
        "pct": 4.21
      },
      {
        "distrito": 1,
        "posicao": 7,
        "candidato": "FÁBIO TRAD",
        "partido": "PSD",
        "votos": 11358,
        "pct": 3.92
      },
      {
        "distrito": 1,
        "posicao": 8,
        "candidato": "DAGOBERTO",
        "partido": "PSDB",
        "votos": 11295,
        "pct": 3.9
      },
      {
        "distrito": 1,
        "posicao": 9,
        "candidato": "DR. LUIZ OVANDO",
        "partido": "PP",
        "votos": 10217,
        "pct": 3.52
      },
      {
        "distrito": 1,
        "posicao": 10,
        "candidato": "MOKA",
        "partido": "MDB",
        "votos": 10131,
        "pct": 3.5
      },
      {
        "distrito": 1,
        "posicao": 11,
        "candidato": "SINDOLEY MORAIS",
        "partido": "UNIÃO",
        "votos": 9403,
        "pct": 3.24
      },
      {
        "distrito": 1,
        "posicao": 12,
        "candidato": "RODOLFO NOGUEIRA",
        "partido": "PL",
        "votos": 7318,
        "pct": 2.52
      },
      {
        "distrito": 2,
        "posicao": 1,
        "candidato": "MARCOS POLLON",
        "partido": "PL",
        "votos": 25574,
        "pct": 7.45
      },
      {
        "distrito": 2,
        "posicao": 2,
        "candidato": "BETO PEREIRA",
        "partido": "PSDB",
        "votos": 21415,
        "pct": 6.23
      },
      {
        "distrito": 2,
        "posicao": 3,
        "candidato": "CAMILA JARA",
        "partido": "PT",
        "votos": 20303,
        "pct": 5.91
      },
      {
        "distrito": 2,
        "posicao": 4,
        "candidato": "VANDER LOUBET",
        "partido": "PT",
        "votos": 16804,
        "pct": 4.89
      },
      {
        "distrito": 2,
        "posicao": 5,
        "candidato": "FÁBIO TRAD",
        "partido": "PSD",
        "votos": 15377,
        "pct": 4.48
      },
      {
        "distrito": 2,
        "posicao": 6,
        "candidato": "DR. LUIZ OVANDO",
        "partido": "PP",
        "votos": 14747,
        "pct": 4.29
      },
      {
        "distrito": 2,
        "posicao": 7,
        "candidato": "DR. GERALDO RESENDE",
        "partido": "PSDB",
        "votos": 13742,
        "pct": 4.0
      },
      {
        "distrito": 2,
        "posicao": 8,
        "candidato": "BIA CAVASSA",
        "partido": "PSDB",
        "votos": 11672,
        "pct": 3.4
      },
      {
        "distrito": 2,
        "posicao": 9,
        "candidato": "MOKA",
        "partido": "MDB",
        "votos": 10137,
        "pct": 2.95
      },
      {
        "distrito": 2,
        "posicao": 10,
        "candidato": "FLÁVIO CABO ALMI",
        "partido": "PODE",
        "votos": 9066,
        "pct": 2.64
      },
      {
        "distrito": 2,
        "posicao": 11,
        "candidato": "CHICÃO VIANNA",
        "partido": "PSD",
        "votos": 9058,
        "pct": 2.64
      },
      {
        "distrito": 2,
        "posicao": 12,
        "candidato": "DELCÍDIO AMARAL",
        "partido": "PTB",
        "votos": 8155,
        "pct": 2.37
      },
      {
        "distrito": 3,
        "posicao": 1,
        "candidato": "DR. GERALDO RESENDE",
        "partido": "PSDB",
        "votos": 33335,
        "pct": 9.85
      },
      {
        "distrito": 3,
        "posicao": 2,
        "candidato": "BETO PEREIRA",
        "partido": "PSDB",
        "votos": 30325,
        "pct": 8.96
      },
      {
        "distrito": 3,
        "posicao": 3,
        "candidato": "VANDER LOUBET",
        "partido": "PT",
        "votos": 26232,
        "pct": 7.75
      },
      {
        "distrito": 3,
        "posicao": 4,
        "candidato": "MARCOS POLLON",
        "partido": "PL",
        "votos": 22766,
        "pct": 6.73
      },
      {
        "distrito": 3,
        "posicao": 5,
        "candidato": "DAGOBERTO",
        "partido": "PSDB",
        "votos": 19804,
        "pct": 5.85
      },
      {
        "distrito": 3,
        "posicao": 6,
        "candidato": "FLÁVIO CABO ALMI",
        "partido": "PODE",
        "votos": 13232,
        "pct": 3.91
      },
      {
        "distrito": 3,
        "posicao": 7,
        "candidato": "CAMILA JARA",
        "partido": "PT",
        "votos": 11925,
        "pct": 3.52
      },
      {
        "distrito": 3,
        "posicao": 8,
        "candidato": "MOKA",
        "partido": "MDB",
        "votos": 10813,
        "pct": 3.19
      },
      {
        "distrito": 3,
        "posicao": 9,
        "candidato": "WALTER CARNEIRO JR",
        "partido": "PP",
        "votos": 10735,
        "pct": 3.17
      },
      {
        "distrito": 3,
        "posicao": 10,
        "candidato": "RODOLFO NOGUEIRA",
        "partido": "PL",
        "votos": 9367,
        "pct": 2.77
      },
      {
        "distrito": 3,
        "posicao": 11,
        "candidato": "MÁRCIO ARAGUAIA ",
        "partido": "PP",
        "votos": 9327,
        "pct": 2.76
      },
      {
        "distrito": 3,
        "posicao": 12,
        "candidato": "DR. LUIZ OVANDO",
        "partido": "PP",
        "votos": 9320,
        "pct": 2.75
      },
      {
        "distrito": 4,
        "posicao": 1,
        "candidato": "DR. GERALDO RESENDE",
        "partido": "PSDB",
        "votos": 29783,
        "pct": 8.73
      },
      {
        "distrito": 4,
        "posicao": 2,
        "candidato": "MARCOS POLLON",
        "partido": "PL",
        "votos": 25532,
        "pct": 7.48
      },
      {
        "distrito": 4,
        "posicao": 3,
        "candidato": "RODOLFO NOGUEIRA",
        "partido": "PL",
        "votos": 20159,
        "pct": 5.91
      },
      {
        "distrito": 4,
        "posicao": 4,
        "candidato": "VANDER LOUBET",
        "partido": "PT",
        "votos": 19743,
        "pct": 5.79
      },
      {
        "distrito": 4,
        "posicao": 5,
        "candidato": "BETO PEREIRA",
        "partido": "PSDB",
        "votos": 16811,
        "pct": 4.93
      },
      {
        "distrito": 4,
        "posicao": 6,
        "candidato": "WALTER CARNEIRO JR",
        "partido": "PP",
        "votos": 16416,
        "pct": 4.81
      },
      {
        "distrito": 4,
        "posicao": 7,
        "candidato": "ELIAS ISHY",
        "partido": "PT",
        "votos": 16222,
        "pct": 4.75
      },
      {
        "distrito": 4,
        "posicao": 8,
        "candidato": "CAMILA JARA",
        "partido": "PT",
        "votos": 12114,
        "pct": 3.55
      },
      {
        "distrito": 4,
        "posicao": 9,
        "candidato": "DIONE HASHIOKA",
        "partido": "PODE",
        "votos": 11374,
        "pct": 3.33
      },
      {
        "distrito": 4,
        "posicao": 10,
        "candidato": "DR. LUIZ OVANDO",
        "partido": "PP",
        "votos": 11207,
        "pct": 3.28
      },
      {
        "distrito": 4,
        "posicao": 11,
        "candidato": "LOURDES MONTEIRO",
        "partido": "MDB",
        "votos": 9157,
        "pct": 2.68
      },
      {
        "distrito": 4,
        "posicao": 12,
        "candidato": "DAGOBERTO",
        "partido": "PSDB",
        "votos": 9045,
        "pct": 2.65
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
        "c1": 2,
        "c2": 2,
        "saldo_c1": 0,
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
            "nome": "BETO PEREIRA",
            "partido": "PSDB",
            "tipo": "overhang",
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
            "nome": "RODOLFO NOGUEIRA",
            "partido": "PL",
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
      "c1_unico_B": {
        "cenario": "legenda",
        "sub": "unico",
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
            "nome": "BETO PEREIRA",
            "partido": "PSDB",
            "tipo": "overhang",
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
            "nome": "RODOLFO NOGUEIRA",
            "partido": "PL",
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
            "partido": "PSDB",
            "votos": 6020,
            "medias": 1,
            "distritais": 3,
            "lista": 0,
            "overhang": 2,
            "total": 3
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
            "nome": "BETO PEREIRA",
            "partido": "PSDB",
            "tipo": "overhang",
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
            "nome": "DR. GERALDO RESENDE",
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
            "partido": "PSDB",
            "votos": 6020,
            "medias": 1,
            "distritais": 3,
            "lista": 0,
            "overhang": 2,
            "total": 3
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
            "nome": "BETO PEREIRA",
            "partido": "PSDB",
            "tipo": "overhang",
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
            "nome": "DR. GERALDO RESENDE",
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
            "nome": "BETO PEREIRA",
            "partido": "PSDB",
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
            "nome": "RODOLFO NOGUEIRA",
            "partido": "PL",
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
            "nome": "BETO PEREIRA",
            "partido": "PSDB",
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
            "nome": "RODOLFO NOGUEIRA",
            "partido": "PL",
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
            "distritais": 3,
            "lista": 0,
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
            "nome": "BETO PEREIRA",
            "partido": "PSDB",
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
            "nome": "DR. GERALDO RESENDE",
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
            "distritais": 3,
            "lista": 0,
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
            "nome": "BETO PEREIRA",
            "partido": "PSDB",
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
            "nome": "DR. GERALDO RESENDE",
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
        "nome": "RODOLFO NOGUEIRA",
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
      "c1": 7,
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
        "candidato": "DR. GERALDO RESENDE",
        "partido": "PSDB",
        "distritos": [
          3,
          4
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
    "desvio_max": 8.3,
    "conforme": true,
    "resumo": {
      "<=5%": 7,
      "5-10%": 1,
      ">10%": 0
    },
    "distritos": [
      {
        "distrito": 1,
        "pop": 919260,
        "desvio": -3.4,
        "n_mun": 60,
        "compacidade": 0.135,
        "faixa": "<=5%"
      },
      {
        "distrito": 2,
        "pop": 971041,
        "desvio": 2.1,
        "n_mun": 10,
        "compacidade": 0.182,
        "faixa": "<=5%"
      },
      {
        "distrito": 3,
        "pop": 905436,
        "desvio": -4.8,
        "n_mun": 80,
        "compacidade": 0.076,
        "faixa": "<=5%"
      },
      {
        "distrito": 4,
        "pop": 1030108,
        "desvio": 8.3,
        "n_mun": 3,
        "compacidade": 0.254,
        "faixa": "5-10%"
      },
      {
        "distrito": 5,
        "pop": 951584,
        "desvio": 0.0,
        "n_mun": 17,
        "compacidade": 0.129,
        "faixa": "<=5%"
      },
      {
        "distrito": 6,
        "pop": 995307,
        "desvio": 4.6,
        "n_mun": 15,
        "compacidade": 0.197,
        "faixa": "<=5%"
      },
      {
        "distrito": 7,
        "pop": 926170,
        "desvio": -2.6,
        "n_mun": 75,
        "compacidade": 0.115,
        "faixa": "<=5%"
      },
      {
        "distrito": 8,
        "pop": 911455,
        "desvio": -4.2,
        "n_mun": 35,
        "compacidade": 0.085,
        "faixa": "<=5%"
      }
    ],
    "vencedores": [
      {
        "distrito": 1,
        "candidato": "RAFAEL PEZENTI",
        "partido": "MDB",
        "votos": 38721,
        "pct": 7.8,
        "segundo": "CAIO TOKARSKI",
        "partido2": "UNIÃO",
        "margem_votos": 1813,
        "margem_pct": 0.37,
        "total_validos": 496698,
        "municipios": 60
      },
      {
        "distrito": 2,
        "candidato": "RODRIGO COELHO",
        "partido": "PODE",
        "votos": 40148,
        "pct": 8.97,
        "segundo": "DELEGADA TÂNIA HARADA",
        "partido2": "NOVO",
        "margem_votos": 8184,
        "margem_pct": 1.83,
        "total_validos": 447367,
        "municipios": 10
      },
      {
        "distrito": 3,
        "candidato": "PROFESSOR PEDRO UCZAI",
        "partido": "PT",
        "votos": 92477,
        "pct": 19.22,
        "segundo": "CAROL DE TONI",
        "partido2": "PL",
        "margem_votos": 28295,
        "margem_pct": 5.88,
        "total_validos": 481025,
        "municipios": 80
      },
      {
        "distrito": 4,
        "candidato": "BRUNO SOUZA",
        "partido": "NOVO",
        "votos": 41335,
        "pct": 8.35,
        "segundo": "ED PEREIRA",
        "partido2": "UNIÃO",
        "margem_votos": 10103,
        "margem_pct": 2.04,
        "total_validos": 494841,
        "municipios": 3
      },
      {
        "distrito": 5,
        "candidato": "ANA PAULA LIMA",
        "partido": "PT",
        "votos": 41637,
        "pct": 8.88,
        "segundo": "GILSON MARQUES",
        "partido2": "NOVO",
        "margem_votos": 837,
        "margem_pct": 0.18,
        "total_validos": 468873,
        "municipios": 17
      },
      {
        "distrito": 6,
        "candidato": "JORGE GOETTEN",
        "partido": "PL",
        "votos": 29768,
        "pct": 6.59,
        "segundo": "CAROL DE TONI",
        "partido2": "PL",
        "margem_votos": 1623,
        "margem_pct": 0.36,
        "total_validos": 451450,
        "municipios": 15
      },
      {
        "distrito": 7,
        "candidato": "COBALCHINI",
        "partido": "MDB",
        "votos": 52845,
        "pct": 10.81,
        "segundo": "PROFESSOR PEDRO UCZAI",
        "partido2": "PT",
        "margem_votos": 11743,
        "margem_pct": 2.4,
        "total_validos": 488947,
        "municipios": 75
      },
      {
        "distrito": 8,
        "candidato": "CARMEN ZANOTTO",
        "partido": "CIDADANIA",
        "votos": 56643,
        "pct": 11.73,
        "segundo": "DANIEL FREITAS",
        "partido2": "PL",
        "margem_votos": 9385,
        "margem_pct": 1.94,
        "total_validos": 482844,
        "municipios": 35
      }
    ],
    "ranking": [
      {
        "distrito": 1,
        "posicao": 1,
        "candidato": "RAFAEL PEZENTI",
        "partido": "MDB",
        "votos": 38721,
        "pct": 7.8
      },
      {
        "distrito": 1,
        "posicao": 2,
        "candidato": "CAIO TOKARSKI",
        "partido": "UNIÃO",
        "votos": 36908,
        "pct": 7.43
      },
      {
        "distrito": 1,
        "posicao": 3,
        "candidato": "SILVIO DREVECK",
        "partido": "PP",
        "votos": 26348,
        "pct": 5.3
      },
      {
        "distrito": 1,
        "posicao": 4,
        "candidato": "JORGE GOETTEN",
        "partido": "PL",
        "votos": 24189,
        "pct": 4.87
      },
      {
        "distrito": 1,
        "posicao": 5,
        "candidato": "RICARDO GUIDI",
        "partido": "PSD",
        "votos": 18734,
        "pct": 3.77
      },
      {
        "distrito": 1,
        "posicao": 6,
        "candidato": "CARMEN ZANOTTO",
        "partido": "CIDADANIA",
        "votos": 17134,
        "pct": 3.45
      },
      {
        "distrito": 1,
        "posicao": 7,
        "candidato": "ISMAEL",
        "partido": "PSD",
        "votos": 16047,
        "pct": 3.23
      },
      {
        "distrito": 1,
        "posicao": 8,
        "candidato": "PAULO CUNHA",
        "partido": "PSD",
        "votos": 15800,
        "pct": 3.18
      },
      {
        "distrito": 1,
        "posicao": 9,
        "candidato": "CAROL DE TONI",
        "partido": "PL",
        "votos": 15671,
        "pct": 3.16
      },
      {
        "distrito": 1,
        "posicao": 10,
        "candidato": "ANA PAULA LIMA",
        "partido": "PT",
        "votos": 15465,
        "pct": 3.11
      },
      {
        "distrito": 1,
        "posicao": 11,
        "candidato": "JULIA ZANATTA",
        "partido": "PL",
        "votos": 15172,
        "pct": 3.05
      },
      {
        "distrito": 1,
        "posicao": 12,
        "candidato": "DANIEL FREITAS",
        "partido": "PL",
        "votos": 14938,
        "pct": 3.01
      },
      {
        "distrito": 2,
        "posicao": 1,
        "candidato": "RODRIGO COELHO",
        "partido": "PODE",
        "votos": 40148,
        "pct": 8.97
      },
      {
        "distrito": 2,
        "posicao": 2,
        "candidato": "DELEGADA TÂNIA HARADA",
        "partido": "NOVO",
        "votos": 31964,
        "pct": 7.14
      },
      {
        "distrito": 2,
        "posicao": 3,
        "candidato": "CORONEL ARMANDO",
        "partido": "PL",
        "votos": 27508,
        "pct": 6.15
      },
      {
        "distrito": 2,
        "posicao": 4,
        "candidato": "ZÉ TROVÃO",
        "partido": "PL",
        "votos": 26135,
        "pct": 5.84
      },
      {
        "distrito": 2,
        "posicao": 5,
        "candidato": "HELBER SÁ",
        "partido": "PATRIOTA",
        "votos": 22706,
        "pct": 5.08
      },
      {
        "distrito": 2,
        "posicao": 6,
        "candidato": "DARCI DE MATOS",
        "partido": "PSD",
        "votos": 18870,
        "pct": 4.22
      },
      {
        "distrito": 2,
        "posicao": 7,
        "candidato": "ASSIS",
        "partido": "PT",
        "votos": 18510,
        "pct": 4.14
      },
      {
        "distrito": 2,
        "posicao": 8,
        "candidato": "JORGE GOETTEN",
        "partido": "PL",
        "votos": 18167,
        "pct": 4.06
      },
      {
        "distrito": 2,
        "posicao": 9,
        "candidato": "CAROL DE TONI",
        "partido": "PL",
        "votos": 17692,
        "pct": 3.95
      },
      {
        "distrito": 2,
        "posicao": 10,
        "candidato": "ANA PAULA LIMA",
        "partido": "PT",
        "votos": 14969,
        "pct": 3.35
      },
      {
        "distrito": 2,
        "posicao": 11,
        "candidato": "ARI RABAIOLLI",
        "partido": "PL",
        "votos": 14131,
        "pct": 3.16
      },
      {
        "distrito": 2,
        "posicao": 12,
        "candidato": "ISMAEL",
        "partido": "PSD",
        "votos": 13545,
        "pct": 3.03
      },
      {
        "distrito": 3,
        "posicao": 1,
        "candidato": "PROFESSOR PEDRO UCZAI",
        "partido": "PT",
        "votos": 92477,
        "pct": 19.22
      },
      {
        "distrito": 3,
        "posicao": 2,
        "candidato": "CAROL DE TONI",
        "partido": "PL",
        "votos": 64182,
        "pct": 13.34
      },
      {
        "distrito": 3,
        "posicao": 3,
        "candidato": "MARLENE FENGLER",
        "partido": "PSD",
        "votos": 30563,
        "pct": 6.35
      },
      {
        "distrito": 3,
        "posicao": 4,
        "candidato": "SORGATTO",
        "partido": "MDB",
        "votos": 28519,
        "pct": 5.93
      },
      {
        "distrito": 3,
        "posicao": 5,
        "candidato": "COBALCHINI",
        "partido": "MDB",
        "votos": 27858,
        "pct": 5.79
      },
      {
        "distrito": 3,
        "posicao": 6,
        "candidato": "VALDIR COLATTO",
        "partido": "PL",
        "votos": 22339,
        "pct": 4.64
      },
      {
        "distrito": 3,
        "posicao": 7,
        "candidato": "DANIELA REINEHR",
        "partido": "PL",
        "votos": 16532,
        "pct": 3.44
      },
      {
        "distrito": 3,
        "posicao": 8,
        "candidato": "FABIANO CAITANO",
        "partido": "PSDB",
        "votos": 14307,
        "pct": 2.97
      },
      {
        "distrito": 3,
        "posicao": 9,
        "candidato": "VIGNATTI",
        "partido": "PSB",
        "votos": 13170,
        "pct": 2.74
      },
      {
        "distrito": 3,
        "posicao": 10,
        "candidato": "JORGE GOETTEN",
        "partido": "PL",
        "votos": 10686,
        "pct": 2.22
      },
      {
        "distrito": 3,
        "posicao": 11,
        "candidato": "JAY",
        "partido": "PP",
        "votos": 10461,
        "pct": 2.17
      },
      {
        "distrito": 3,
        "posicao": 12,
        "candidato": "FABIO SCHIOCHET",
        "partido": "UNIÃO",
        "votos": 10171,
        "pct": 2.11
      },
      {
        "distrito": 4,
        "posicao": 1,
        "candidato": "BRUNO SOUZA",
        "partido": "NOVO",
        "votos": 41335,
        "pct": 8.35
      },
      {
        "distrito": 4,
        "posicao": 2,
        "candidato": "ED PEREIRA",
        "partido": "UNIÃO",
        "votos": 31232,
        "pct": 6.31
      },
      {
        "distrito": 4,
        "posicao": 3,
        "candidato": "CAROL DE TONI",
        "partido": "PL",
        "votos": 28598,
        "pct": 5.78
      },
      {
        "distrito": 4,
        "posicao": 4,
        "candidato": "CARLA AYRES",
        "partido": "PT",
        "votos": 25625,
        "pct": 5.18
      },
      {
        "distrito": 4,
        "posicao": 5,
        "candidato": "ANA PAULA LIMA",
        "partido": "PT",
        "votos": 21594,
        "pct": 4.36
      },
      {
        "distrito": 4,
        "posicao": 6,
        "candidato": "KEREXU",
        "partido": "PSOL",
        "votos": 20064,
        "pct": 4.05
      },
      {
        "distrito": 4,
        "posicao": 7,
        "candidato": "LUCIANO PEREIRA",
        "partido": "UNIÃO",
        "votos": 18237,
        "pct": 3.69
      },
      {
        "distrito": 4,
        "posicao": 8,
        "candidato": "DANIELA REINEHR",
        "partido": "PL",
        "votos": 16415,
        "pct": 3.32
      },
      {
        "distrito": 4,
        "posicao": 9,
        "candidato": "DANIEL FREITAS",
        "partido": "PL",
        "votos": 15948,
        "pct": 3.22
      },
      {
        "distrito": 4,
        "posicao": 10,
        "candidato": "ROSINEY HORACIO",
        "partido": "PODE",
        "votos": 15839,
        "pct": 3.2
      },
      {
        "distrito": 4,
        "posicao": 11,
        "candidato": "ANGELA AMIN",
        "partido": "PP",
        "votos": 13750,
        "pct": 2.78
      },
      {
        "distrito": 4,
        "posicao": 12,
        "candidato": "JULIA ZANATTA",
        "partido": "PL",
        "votos": 13218,
        "pct": 2.67
      },
      {
        "distrito": 5,
        "posicao": 1,
        "candidato": "ANA PAULA LIMA",
        "partido": "PT",
        "votos": 41637,
        "pct": 8.88
      },
      {
        "distrito": 5,
        "posicao": 2,
        "candidato": "GILSON MARQUES",
        "partido": "NOVO",
        "votos": 40800,
        "pct": 8.7
      },
      {
        "distrito": 5,
        "posicao": 3,
        "candidato": "JORGE GOETTEN",
        "partido": "PL",
        "votos": 32004,
        "pct": 6.83
      },
      {
        "distrito": 5,
        "posicao": 4,
        "candidato": "CARLOS CHIODINI",
        "partido": "MDB",
        "votos": 28731,
        "pct": 6.13
      },
      {
        "distrito": 5,
        "posicao": 5,
        "candidato": "ALBA",
        "partido": "UNIÃO",
        "votos": 26785,
        "pct": 5.71
      },
      {
        "distrito": 5,
        "posicao": 6,
        "candidato": "ISMAEL",
        "partido": "PSD",
        "votos": 26308,
        "pct": 5.61
      },
      {
        "distrito": 5,
        "posicao": 7,
        "candidato": "CAROL DE TONI",
        "partido": "PL",
        "votos": 25483,
        "pct": 5.43
      },
      {
        "distrito": 5,
        "posicao": 8,
        "candidato": "JULIA ZANATTA",
        "partido": "PL",
        "votos": 18019,
        "pct": 3.84
      },
      {
        "distrito": 5,
        "posicao": 9,
        "candidato": "DANIELA REINEHR",
        "partido": "PL",
        "votos": 11448,
        "pct": 2.44
      },
      {
        "distrito": 5,
        "posicao": 10,
        "candidato": "DANIEL FREITAS",
        "partido": "PL",
        "votos": 11244,
        "pct": 2.4
      },
      {
        "distrito": 5,
        "posicao": 11,
        "candidato": "ANDRE ESPEZIM",
        "partido": "PODE",
        "votos": 11093,
        "pct": 2.37
      },
      {
        "distrito": 5,
        "posicao": 12,
        "candidato": "FABIO SCHIOCHET",
        "partido": "UNIÃO",
        "votos": 10769,
        "pct": 2.3
      },
      {
        "distrito": 6,
        "posicao": 1,
        "candidato": "JORGE GOETTEN",
        "partido": "PL",
        "votos": 29768,
        "pct": 6.59
      },
      {
        "distrito": 6,
        "posicao": 2,
        "candidato": "CAROL DE TONI",
        "partido": "PL",
        "votos": 28145,
        "pct": 6.23
      },
      {
        "distrito": 6,
        "posicao": 3,
        "candidato": "ANA PAULA LIMA",
        "partido": "PT",
        "votos": 24137,
        "pct": 5.35
      },
      {
        "distrito": 6,
        "posicao": 4,
        "candidato": "MARCIO DEDÉ",
        "partido": "UNIÃO",
        "votos": 22255,
        "pct": 4.93
      },
      {
        "distrito": 6,
        "posicao": 5,
        "candidato": "MARCELO WERNER",
        "partido": "PSC",
        "votos": 19350,
        "pct": 4.29
      },
      {
        "distrito": 6,
        "posicao": 6,
        "candidato": "JULIA ZANATTA",
        "partido": "PL",
        "votos": 16788,
        "pct": 3.72
      },
      {
        "distrito": 6,
        "posicao": 7,
        "candidato": "ALESSANDRO SIMAS",
        "partido": "PP",
        "votos": 16436,
        "pct": 3.64
      },
      {
        "distrito": 6,
        "posicao": 8,
        "candidato": "ISMAEL",
        "partido": "PSD",
        "votos": 14402,
        "pct": 3.19
      },
      {
        "distrito": 6,
        "posicao": 9,
        "candidato": "DANIELA REINEHR",
        "partido": "PL",
        "votos": 12991,
        "pct": 2.88
      },
      {
        "distrito": 6,
        "posicao": 10,
        "candidato": "BRUNO SOUZA",
        "partido": "NOVO",
        "votos": 12134,
        "pct": 2.69
      },
      {
        "distrito": 6,
        "posicao": 11,
        "candidato": "ZÉ TROVÃO",
        "partido": "PL",
        "votos": 10928,
        "pct": 2.42
      },
      {
        "distrito": 6,
        "posicao": 12,
        "candidato": "DANIEL FREITAS",
        "partido": "PL",
        "votos": 10430,
        "pct": 2.31
      },
      {
        "distrito": 7,
        "posicao": 1,
        "candidato": "COBALCHINI",
        "partido": "MDB",
        "votos": 52845,
        "pct": 10.81
      },
      {
        "distrito": 7,
        "posicao": 2,
        "candidato": "PROFESSOR PEDRO UCZAI",
        "partido": "PT",
        "votos": 41102,
        "pct": 8.41
      },
      {
        "distrito": 7,
        "posicao": 3,
        "candidato": "CAROL DE TONI",
        "partido": "PL",
        "votos": 41073,
        "pct": 8.4
      },
      {
        "distrito": 7,
        "posicao": 4,
        "candidato": "JORGE GOETTEN",
        "partido": "PL",
        "votos": 30353,
        "pct": 6.21
      },
      {
        "distrito": 7,
        "posicao": 5,
        "candidato": "CARMEN ZANOTTO",
        "partido": "CIDADANIA",
        "votos": 28326,
        "pct": 5.79
      },
      {
        "distrito": 7,
        "posicao": 6,
        "candidato": "NORMA PEREIRA",
        "partido": "PODE",
        "votos": 17446,
        "pct": 3.57
      },
      {
        "distrito": 7,
        "posicao": 7,
        "candidato": "VALDIR COLATTO",
        "partido": "PL",
        "votos": 15312,
        "pct": 3.13
      },
      {
        "distrito": 7,
        "posicao": 8,
        "candidato": "ANA PAULA LIMA",
        "partido": "PT",
        "votos": 15201,
        "pct": 3.11
      },
      {
        "distrito": 7,
        "posicao": 9,
        "candidato": "ISMAEL",
        "partido": "PSD",
        "votos": 12896,
        "pct": 2.64
      },
      {
        "distrito": 7,
        "posicao": 10,
        "candidato": "GEOVANIA DE SÁ",
        "partido": "PSDB",
        "votos": 12853,
        "pct": 2.63
      },
      {
        "distrito": 7,
        "posicao": 11,
        "candidato": "CLAUDETE GHELLER MATHIAS",
        "partido": "PODE",
        "votos": 12541,
        "pct": 2.56
      },
      {
        "distrito": 7,
        "posicao": 12,
        "candidato": "DARCI DE MATOS",
        "partido": "PSD",
        "votos": 10571,
        "pct": 2.16
      },
      {
        "distrito": 8,
        "posicao": 1,
        "candidato": "CARMEN ZANOTTO",
        "partido": "CIDADANIA",
        "votos": 56643,
        "pct": 11.73
      },
      {
        "distrito": 8,
        "posicao": 2,
        "candidato": "DANIEL FREITAS",
        "partido": "PL",
        "votos": 47258,
        "pct": 9.79
      },
      {
        "distrito": 8,
        "posicao": 3,
        "candidato": "GEOVANIA DE SÁ",
        "partido": "PSDB",
        "votos": 44760,
        "pct": 9.27
      },
      {
        "distrito": 8,
        "posicao": 4,
        "candidato": "RICARDO GUIDI",
        "partido": "PSD",
        "votos": 40898,
        "pct": 8.47
      },
      {
        "distrito": 8,
        "posicao": 5,
        "candidato": "VAMPIRO",
        "partido": "MDB",
        "votos": 35974,
        "pct": 7.45
      },
      {
        "distrito": 8,
        "posicao": 6,
        "candidato": "JULIA ZANATTA",
        "partido": "PL",
        "votos": 29064,
        "pct": 6.02
      },
      {
        "distrito": 8,
        "posicao": 7,
        "candidato": "GIOVANA MONDARDO",
        "partido": "PC do B",
        "votos": 20281,
        "pct": 4.2
      },
      {
        "distrito": 8,
        "posicao": 8,
        "candidato": "VALMIR COMIN",
        "partido": "PP",
        "votos": 17369,
        "pct": 3.6
      },
      {
        "distrito": 8,
        "posicao": 9,
        "candidato": "ADA DE LUCA",
        "partido": "MDB",
        "votos": 13043,
        "pct": 2.7
      },
      {
        "distrito": 8,
        "posicao": 10,
        "candidato": "ISMAEL",
        "partido": "PSD",
        "votos": 12716,
        "pct": 2.63
      },
      {
        "distrito": 8,
        "posicao": 11,
        "candidato": "ANA PAULA LIMA",
        "partido": "PT",
        "votos": 10828,
        "pct": 2.24
      },
      {
        "distrito": 8,
        "posicao": 12,
        "candidato": "PROFESSOR PEDRO UCZAI",
        "partido": "PT",
        "votos": 6885,
        "pct": 1.43
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
        "c1": 2,
        "c2": 2,
        "saldo_c1": -1,
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
        "partido": "CIDADANIA",
        "real": 1,
        "c1": 1,
        "c2": 1,
        "saldo_c1": 0,
        "saldo_c2": 0
      },
      {
        "partido": "NOVO",
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
            "distritais": 2,
            "lista": 4,
            "overhang": 0,
            "total": 6
          },
          {
            "partido": "PL",
            "votos": 38896,
            "medias": 5,
            "distritais": 1,
            "lista": 4,
            "overhang": 0,
            "total": 5
          },
          {
            "partido": "MDB",
            "votos": 10107,
            "medias": 1,
            "distritais": 2,
            "lista": 0,
            "overhang": 1,
            "total": 2
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
            "partido": "NOVO",
            "votos": 8177,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
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
            "nome": "RAFAEL PEZENTI",
            "partido": "MDB",
            "tipo": "overhang",
            "distrito": 1
          },
          {
            "nome": "RODRIGO COELHO",
            "partido": "PODE",
            "tipo": "overhang",
            "distrito": 2
          },
          {
            "nome": "PROFESSOR PEDRO UCZAI",
            "partido": "PT",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "BRUNO SOUZA",
            "partido": "NOVO",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "ANA PAULA LIMA",
            "partido": "PT",
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
            "nome": "COBALCHINI",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "CARMEN ZANOTTO",
            "partido": "CIDADANIA",
            "tipo": "overhang",
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
            "nome": "DANIEL FREITAS",
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
            "distritais": 2,
            "lista": 4,
            "overhang": 0,
            "total": 6
          },
          {
            "partido": "PL",
            "votos": 38896,
            "medias": 5,
            "distritais": 1,
            "lista": 4,
            "overhang": 0,
            "total": 5
          },
          {
            "partido": "MDB",
            "votos": 10107,
            "medias": 1,
            "distritais": 2,
            "lista": 0,
            "overhang": 1,
            "total": 2
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
            "partido": "NOVO",
            "votos": 8177,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
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
            "nome": "RAFAEL PEZENTI",
            "partido": "MDB",
            "tipo": "overhang",
            "distrito": 1
          },
          {
            "nome": "RODRIGO COELHO",
            "partido": "PODE",
            "tipo": "overhang",
            "distrito": 2
          },
          {
            "nome": "PROFESSOR PEDRO UCZAI",
            "partido": "PT",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "BRUNO SOUZA",
            "partido": "NOVO",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "ANA PAULA LIMA",
            "partido": "PT",
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
            "nome": "COBALCHINI",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "CARMEN ZANOTTO",
            "partido": "CIDADANIA",
            "tipo": "overhang",
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
            "nome": "DANIEL FREITAS",
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
            "nome": "CORONEL ARMANDO",
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
            "nome": "RICARDO GUIDI",
            "partido": "PSD",
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
            "nome": "DANIEL DO LULA",
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
            "distritais": 2,
            "lista": 4,
            "overhang": 0,
            "total": 6
          },
          {
            "partido": "PL",
            "votos": 38896,
            "medias": 5,
            "distritais": 1,
            "lista": 4,
            "overhang": 0,
            "total": 5
          },
          {
            "partido": "MDB",
            "votos": 10107,
            "medias": 1,
            "distritais": 2,
            "lista": 0,
            "overhang": 1,
            "total": 2
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
            "partido": "NOVO",
            "votos": 8177,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
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
            "nome": "RAFAEL PEZENTI",
            "partido": "MDB",
            "tipo": "overhang",
            "distrito": 1
          },
          {
            "nome": "RODRIGO COELHO",
            "partido": "PODE",
            "tipo": "overhang",
            "distrito": 2
          },
          {
            "nome": "PROFESSOR PEDRO UCZAI",
            "partido": "PT",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "BRUNO SOUZA",
            "partido": "NOVO",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "ANA PAULA LIMA",
            "partido": "PT",
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
            "nome": "COBALCHINI",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "CARMEN ZANOTTO",
            "partido": "CIDADANIA",
            "tipo": "overhang",
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
            "nome": "DANIEL FREITAS",
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
            "distritais": 2,
            "lista": 4,
            "overhang": 0,
            "total": 6
          },
          {
            "partido": "PL",
            "votos": 38896,
            "medias": 5,
            "distritais": 1,
            "lista": 4,
            "overhang": 0,
            "total": 5
          },
          {
            "partido": "MDB",
            "votos": 10107,
            "medias": 1,
            "distritais": 2,
            "lista": 0,
            "overhang": 1,
            "total": 2
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
            "partido": "NOVO",
            "votos": 8177,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
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
            "nome": "RAFAEL PEZENTI",
            "partido": "MDB",
            "tipo": "overhang",
            "distrito": 1
          },
          {
            "nome": "RODRIGO COELHO",
            "partido": "PODE",
            "tipo": "overhang",
            "distrito": 2
          },
          {
            "nome": "PROFESSOR PEDRO UCZAI",
            "partido": "PT",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "BRUNO SOUZA",
            "partido": "NOVO",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "ANA PAULA LIMA",
            "partido": "PT",
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
            "nome": "COBALCHINI",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "CARMEN ZANOTTO",
            "partido": "CIDADANIA",
            "tipo": "overhang",
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
            "nome": "DANIEL FREITAS",
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
            "nome": "CORONEL ARMANDO",
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
            "nome": "RICARDO GUIDI",
            "partido": "PSD",
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
            "nome": "DANIEL DO LULA",
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
        "bancada_final": 17,
        "overhang": 1,
        "tabela": [
          {
            "partido": "PL",
            "votos": 962053,
            "medias": 6,
            "distritais": 1,
            "lista": 5,
            "overhang": 0,
            "total": 6
          },
          {
            "partido": "PT",
            "votos": 480911,
            "medias": 2,
            "distritais": 2,
            "lista": 0,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "MDB",
            "votos": 415237,
            "medias": 2,
            "distritais": 2,
            "lista": 0,
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
            "partido": "UNIÃO",
            "votos": 279432,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "NOVO",
            "votos": 243668,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
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
            "nome": "RAFAEL PEZENTI",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "RODRIGO COELHO",
            "partido": "PODE",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "PROFESSOR PEDRO UCZAI",
            "partido": "PT",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "BRUNO SOUZA",
            "partido": "NOVO",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "ANA PAULA LIMA",
            "partido": "PT",
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
            "nome": "COBALCHINI",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "CARMEN ZANOTTO",
            "partido": "CIDADANIA",
            "tipo": "overhang",
            "distrito": 8
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
            "nome": "DANIEL FREITAS",
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
        "bancada_final": 17,
        "overhang": 1,
        "tabela": [
          {
            "partido": "PL",
            "votos": 962053,
            "medias": 6,
            "distritais": 1,
            "lista": 5,
            "overhang": 0,
            "total": 6
          },
          {
            "partido": "PT",
            "votos": 480911,
            "medias": 2,
            "distritais": 2,
            "lista": 0,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "MDB",
            "votos": 415237,
            "medias": 2,
            "distritais": 2,
            "lista": 0,
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
            "partido": "UNIÃO",
            "votos": 279432,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "NOVO",
            "votos": 243668,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
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
            "nome": "RAFAEL PEZENTI",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "RODRIGO COELHO",
            "partido": "PODE",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "PROFESSOR PEDRO UCZAI",
            "partido": "PT",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "BRUNO SOUZA",
            "partido": "NOVO",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "ANA PAULA LIMA",
            "partido": "PT",
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
            "nome": "COBALCHINI",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "CARMEN ZANOTTO",
            "partido": "CIDADANIA",
            "tipo": "overhang",
            "distrito": 8
          },
          {
            "nome": "CAROL DE TONI",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DANIEL FREITAS",
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
            "nome": "CORONEL ARMANDO",
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
            "nome": "RICARDO GUIDI",
            "partido": "PSD",
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
        "bancada_final": 17,
        "overhang": 1,
        "tabela": [
          {
            "partido": "PL",
            "votos": 962053,
            "medias": 6,
            "distritais": 1,
            "lista": 5,
            "overhang": 0,
            "total": 6
          },
          {
            "partido": "PT",
            "votos": 480911,
            "medias": 2,
            "distritais": 2,
            "lista": 0,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "MDB",
            "votos": 415237,
            "medias": 2,
            "distritais": 2,
            "lista": 0,
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
            "partido": "UNIÃO",
            "votos": 279432,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "NOVO",
            "votos": 243668,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
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
            "nome": "RAFAEL PEZENTI",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "RODRIGO COELHO",
            "partido": "PODE",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "PROFESSOR PEDRO UCZAI",
            "partido": "PT",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "BRUNO SOUZA",
            "partido": "NOVO",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "ANA PAULA LIMA",
            "partido": "PT",
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
            "nome": "COBALCHINI",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "CARMEN ZANOTTO",
            "partido": "CIDADANIA",
            "tipo": "overhang",
            "distrito": 8
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
            "nome": "DANIEL FREITAS",
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
        "bancada_final": 17,
        "overhang": 1,
        "tabela": [
          {
            "partido": "PL",
            "votos": 962053,
            "medias": 6,
            "distritais": 1,
            "lista": 5,
            "overhang": 0,
            "total": 6
          },
          {
            "partido": "PT",
            "votos": 480911,
            "medias": 2,
            "distritais": 2,
            "lista": 0,
            "overhang": 0,
            "total": 2
          },
          {
            "partido": "MDB",
            "votos": 415237,
            "medias": 2,
            "distritais": 2,
            "lista": 0,
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
            "partido": "UNIÃO",
            "votos": 279432,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "NOVO",
            "votos": 243668,
            "medias": 1,
            "distritais": 1,
            "lista": 0,
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
            "nome": "RAFAEL PEZENTI",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "RODRIGO COELHO",
            "partido": "PODE",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "PROFESSOR PEDRO UCZAI",
            "partido": "PT",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "BRUNO SOUZA",
            "partido": "NOVO",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "ANA PAULA LIMA",
            "partido": "PT",
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
            "nome": "COBALCHINI",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "CARMEN ZANOTTO",
            "partido": "CIDADANIA",
            "tipo": "overhang",
            "distrito": 8
          },
          {
            "nome": "CAROL DE TONI",
            "partido": "PL",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "DANIEL FREITAS",
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
            "nome": "CORONEL ARMANDO",
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
            "nome": "RICARDO GUIDI",
            "partido": "PSD",
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
        "status": "mantidos",
        "nome": "RAFAEL PEZENTI",
        "partido": "MDB"
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
        "nome": "GILSON MARQUES",
        "partido": "NOVO"
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
        "nome": "RAFAEL PEZENTI",
        "partido": "MDB"
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
        "nome": "CARLOS CHIODINI",
        "partido": "MDB"
      },
      {
        "cenario": "c2",
        "status": "saem",
        "nome": "GILSON MARQUES",
        "partido": "NOVO"
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
      "c2": 14
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
    "desvio_max": 5.6,
    "conforme": true,
    "resumo": {
      "<=5%": 7,
      "5-10%": 1,
      ">10%": 0
    },
    "distritos": [
      {
        "distrito": 1,
        "pop": 843454,
        "desvio": -4.4,
        "n_mun": 13,
        "compacidade": 0.091,
        "faixa": "<=5%"
      },
      {
        "distrito": 2,
        "pop": 918498,
        "desvio": 4.1,
        "n_mun": 23,
        "compacidade": 0.036,
        "faixa": "<=5%"
      },
      {
        "distrito": 3,
        "pop": 924143,
        "desvio": 4.8,
        "n_mun": 18,
        "compacidade": 0.04,
        "faixa": "<=5%"
      },
      {
        "distrito": 4,
        "pop": 832959,
        "desvio": -5.6,
        "n_mun": 69,
        "compacidade": 0.031,
        "faixa": "5-10%"
      },
      {
        "distrito": 5,
        "pop": 844835,
        "desvio": -4.2,
        "n_mun": 25,
        "compacidade": 0.113,
        "faixa": "<=5%"
      },
      {
        "distrito": 6,
        "pop": 879878,
        "desvio": -0.2,
        "n_mun": 31,
        "compacidade": 0.031,
        "faixa": "<=5%"
      },
      {
        "distrito": 7,
        "pop": 910388,
        "desvio": 3.2,
        "n_mun": 34,
        "compacidade": 0.024,
        "faixa": "<=5%"
      },
      {
        "distrito": 8,
        "pop": 902341,
        "desvio": 2.3,
        "n_mun": 36,
        "compacidade": 0.058,
        "faixa": "<=5%"
      }
    ],
    "vencedores": [
      {
        "distrito": 1,
        "candidato": "SILVYE ALVES",
        "partido": "UNIÃO",
        "votos": 60008,
        "pct": 15.59,
        "segundo": "PROFESSOR ALCIDES",
        "partido2": "PL",
        "margem_votos": 21870,
        "margem_pct": 5.68,
        "total_validos": 384869,
        "municipios": 13
      },
      {
        "distrito": 2,
        "candidato": "MÁRCIO CORREA",
        "partido": "MDB",
        "votos": 31712,
        "pct": 7.27,
        "segundo": "CÉLIO SILVEIRA",
        "partido2": "MDB",
        "margem_votos": 2918,
        "margem_pct": 0.67,
        "total_validos": 436410,
        "municipios": 23
      },
      {
        "distrito": 3,
        "candidato": "SILVYE ALVES",
        "partido": "UNIÃO",
        "votos": 65839,
        "pct": 14.12,
        "segundo": "GUSTAVO GAYER",
        "partido2": "PL",
        "margem_votos": 23800,
        "margem_pct": 5.11,
        "total_validos": 466160,
        "municipios": 18
      },
      {
        "distrito": 4,
        "candidato": "FLAVIA MORAIS",
        "partido": "PDT",
        "votos": 36346,
        "pct": 8.23,
        "segundo": "ADRIANO DO BALDY",
        "partido2": "PP",
        "margem_votos": 9527,
        "margem_pct": 2.16,
        "total_validos": 441808,
        "municipios": 69
      },
      {
        "distrito": 5,
        "candidato": "HILDO DO CANDANGO",
        "partido": "REPUBLICANOS",
        "votos": 42990,
        "pct": 13.11,
        "segundo": "JOSÉ NELTO",
        "partido2": "PP",
        "margem_votos": 18015,
        "margem_pct": 5.49,
        "total_validos": 327913,
        "municipios": 25
      },
      {
        "distrito": 6,
        "candidato": "SILVYE ALVES",
        "partido": "UNIÃO",
        "votos": 37722,
        "pct": 9.31,
        "segundo": "DANNILLO PEREIRA",
        "partido2": "PSD",
        "margem_votos": 5341,
        "margem_pct": 1.32,
        "total_validos": 405256,
        "municipios": 31
      },
      {
        "distrito": 7,
        "candidato": "SILVYE ALVES",
        "partido": "UNIÃO",
        "votos": 54142,
        "pct": 11.55,
        "segundo": "GUSTAVO GAYER",
        "partido2": "PL",
        "margem_votos": 18129,
        "margem_pct": 3.87,
        "total_validos": 468871,
        "municipios": 34
      },
      {
        "distrito": 8,
        "candidato": "DANIEL AGROBOM",
        "partido": "PL",
        "votos": 25786,
        "pct": 6.76,
        "segundo": "JOSÉ NELTO",
        "partido2": "PP",
        "margem_votos": 124,
        "margem_pct": 0.03,
        "total_validos": 381629,
        "municipios": 36
      }
    ],
    "ranking": [
      {
        "distrito": 1,
        "posicao": 1,
        "candidato": "SILVYE ALVES",
        "partido": "UNIÃO",
        "votos": 60008,
        "pct": 15.59
      },
      {
        "distrito": 1,
        "posicao": 2,
        "candidato": "PROFESSOR ALCIDES",
        "partido": "PL",
        "votos": 38138,
        "pct": 9.91
      },
      {
        "distrito": 1,
        "posicao": 3,
        "candidato": "GUSTAVO GAYER",
        "partido": "PL",
        "votos": 29068,
        "pct": 7.55
      },
      {
        "distrito": 1,
        "posicao": 4,
        "candidato": "DR ZACHARIAS CALIL",
        "partido": "UNIÃO",
        "votos": 19536,
        "pct": 5.08
      },
      {
        "distrito": 1,
        "posicao": 5,
        "candidato": "DELEGADA ADRIANA ACCORSI",
        "partido": "PT",
        "votos": 19007,
        "pct": 4.94
      },
      {
        "distrito": 1,
        "posicao": 6,
        "candidato": "GLAUSTIN DA FOKUS",
        "partido": "PSC",
        "votos": 14939,
        "pct": 3.88
      },
      {
        "distrito": 1,
        "posicao": 7,
        "candidato": "PROFESSOR EDWARD",
        "partido": "PT",
        "votos": 10875,
        "pct": 2.83
      },
      {
        "distrito": 1,
        "posicao": 8,
        "candidato": "MAGDA MOFATTO",
        "partido": "PL",
        "votos": 8529,
        "pct": 2.22
      },
      {
        "distrito": 1,
        "posicao": 9,
        "candidato": "FABIO SOUSA",
        "partido": "PL",
        "votos": 8405,
        "pct": 2.18
      },
      {
        "distrito": 1,
        "posicao": 10,
        "candidato": "JEFERSON RODRIGUES",
        "partido": "REPUBLICANOS",
        "votos": 7990,
        "pct": 2.08
      },
      {
        "distrito": 1,
        "posicao": 11,
        "candidato": "RAFAEL GOUVEIA",
        "partido": "REPUBLICANOS",
        "votos": 7277,
        "pct": 1.89
      },
      {
        "distrito": 1,
        "posicao": 12,
        "candidato": "LUCAS VERGÍLIO",
        "partido": "SOLIDARIEDADE",
        "votos": 6866,
        "pct": 1.78
      },
      {
        "distrito": 2,
        "posicao": 1,
        "candidato": "MÁRCIO CORREA",
        "partido": "MDB",
        "votos": 31712,
        "pct": 7.27
      },
      {
        "distrito": 2,
        "posicao": 2,
        "candidato": "CÉLIO SILVEIRA",
        "partido": "MDB",
        "votos": 28794,
        "pct": 6.6
      },
      {
        "distrito": 2,
        "posicao": 3,
        "candidato": "RUBENS OTONI",
        "partido": "PT",
        "votos": 28136,
        "pct": 6.45
      },
      {
        "distrito": 2,
        "posicao": 4,
        "candidato": "LEANDRO RIBEIRO",
        "partido": "PP",
        "votos": 25857,
        "pct": 5.92
      },
      {
        "distrito": 2,
        "posicao": 5,
        "candidato": "SILVYE ALVES",
        "partido": "UNIÃO",
        "votos": 24470,
        "pct": 5.61
      },
      {
        "distrito": 2,
        "posicao": 6,
        "candidato": "GUSTAVO GAYER",
        "partido": "PL",
        "votos": 22032,
        "pct": 5.05
      },
      {
        "distrito": 2,
        "posicao": 7,
        "candidato": "DR. HELIO DE SOUSA",
        "partido": "PSDB",
        "votos": 20503,
        "pct": 4.7
      },
      {
        "distrito": 2,
        "posicao": 8,
        "candidato": "GLAUSTIN DA FOKUS",
        "partido": "PSC",
        "votos": 14810,
        "pct": 3.39
      },
      {
        "distrito": 2,
        "posicao": 9,
        "candidato": "ADRIANO DO BALDY",
        "partido": "PP",
        "votos": 14297,
        "pct": 3.28
      },
      {
        "distrito": 2,
        "posicao": 10,
        "candidato": "JOSÉ NELTO",
        "partido": "PP",
        "votos": 11247,
        "pct": 2.58
      },
      {
        "distrito": 2,
        "posicao": 11,
        "candidato": "SAMUEL DUPLA DANIEL E SAMUEL",
        "partido": "PSC",
        "votos": 10436,
        "pct": 2.39
      },
      {
        "distrito": 2,
        "posicao": 12,
        "candidato": "FLAVIA MORAIS",
        "partido": "PDT",
        "votos": 10382,
        "pct": 2.38
      },
      {
        "distrito": 3,
        "posicao": 1,
        "candidato": "SILVYE ALVES",
        "partido": "UNIÃO",
        "votos": 65839,
        "pct": 14.12
      },
      {
        "distrito": 3,
        "posicao": 2,
        "candidato": "GUSTAVO GAYER",
        "partido": "PL",
        "votos": 42039,
        "pct": 9.02
      },
      {
        "distrito": 3,
        "posicao": 3,
        "candidato": "DR ZACHARIAS CALIL",
        "partido": "UNIÃO",
        "votos": 23542,
        "pct": 5.05
      },
      {
        "distrito": 3,
        "posicao": 4,
        "candidato": "DELEGADA ADRIANA ACCORSI",
        "partido": "PT",
        "votos": 23037,
        "pct": 4.94
      },
      {
        "distrito": 3,
        "posicao": 5,
        "candidato": "PROFESSOR EDWARD",
        "partido": "PT",
        "votos": 15216,
        "pct": 3.26
      },
      {
        "distrito": 3,
        "posicao": 6,
        "candidato": "DRA FABIANNE LEÃO",
        "partido": "PP",
        "votos": 13913,
        "pct": 2.98
      },
      {
        "distrito": 3,
        "posicao": 7,
        "candidato": "GLAUSTIN DA FOKUS",
        "partido": "PSC",
        "votos": 12046,
        "pct": 2.58
      },
      {
        "distrito": 3,
        "posicao": 8,
        "candidato": "CÉLIO SILVEIRA",
        "partido": "MDB",
        "votos": 11991,
        "pct": 2.57
      },
      {
        "distrito": 3,
        "posicao": 9,
        "candidato": "FRANCISCO JR",
        "partido": "PSD",
        "votos": 9934,
        "pct": 2.13
      },
      {
        "distrito": 3,
        "posicao": 10,
        "candidato": "DELEGADO HUMBERTO TEÓFILO",
        "partido": "PATRIOTA",
        "votos": 9722,
        "pct": 2.09
      },
      {
        "distrito": 3,
        "posicao": 11,
        "candidato": "FABIO SOUSA",
        "partido": "PL",
        "votos": 9460,
        "pct": 2.03
      },
      {
        "distrito": 3,
        "posicao": 12,
        "candidato": "JEFERSON RODRIGUES",
        "partido": "REPUBLICANOS",
        "votos": 9169,
        "pct": 1.97
      },
      {
        "distrito": 4,
        "posicao": 1,
        "candidato": "FLAVIA MORAIS",
        "partido": "PDT",
        "votos": 36346,
        "pct": 8.23
      },
      {
        "distrito": 4,
        "posicao": 2,
        "candidato": "ADRIANO DO BALDY",
        "partido": "PP",
        "votos": 26819,
        "pct": 6.07
      },
      {
        "distrito": 4,
        "posicao": 3,
        "candidato": "GLAUSTIN DA FOKUS",
        "partido": "PSC",
        "votos": 26422,
        "pct": 5.98
      },
      {
        "distrito": 4,
        "posicao": 4,
        "candidato": "GUSTAVO GAYER",
        "partido": "PL",
        "votos": 19920,
        "pct": 4.51
      },
      {
        "distrito": 4,
        "posicao": 5,
        "candidato": "ALCIDES RODRIGUES",
        "partido": "PATRIOTA",
        "votos": 19823,
        "pct": 4.49
      },
      {
        "distrito": 4,
        "posicao": 6,
        "candidato": "MARUSSA BOLDRIN",
        "partido": "MDB",
        "votos": 19497,
        "pct": 4.41
      },
      {
        "distrito": 4,
        "posicao": 7,
        "candidato": "JOSÉ NELTO",
        "partido": "PP",
        "votos": 18190,
        "pct": 4.12
      },
      {
        "distrito": 4,
        "posicao": 8,
        "candidato": "DR ISMAEL ALEXANDRINO ",
        "partido": "PSD",
        "votos": 14381,
        "pct": 3.26
      },
      {
        "distrito": 4,
        "posicao": 9,
        "candidato": "PROFESSOR ALCIDES",
        "partido": "PL",
        "votos": 13582,
        "pct": 3.07
      },
      {
        "distrito": 4,
        "posicao": 10,
        "candidato": "LUCAS VERGÍLIO",
        "partido": "SOLIDARIEDADE",
        "votos": 13408,
        "pct": 3.03
      },
      {
        "distrito": 4,
        "posicao": 11,
        "candidato": "MAGDA MOFATTO",
        "partido": "PL",
        "votos": 13052,
        "pct": 2.95
      },
      {
        "distrito": 4,
        "posicao": 12,
        "candidato": "RUBENS OTONI",
        "partido": "PT",
        "votos": 12846,
        "pct": 2.91
      },
      {
        "distrito": 5,
        "posicao": 1,
        "candidato": "HILDO DO CANDANGO",
        "partido": "REPUBLICANOS",
        "votos": 42990,
        "pct": 13.11
      },
      {
        "distrito": 5,
        "posicao": 2,
        "candidato": "JOSÉ NELTO",
        "partido": "PP",
        "votos": 24975,
        "pct": 7.62
      },
      {
        "distrito": 5,
        "posicao": 3,
        "candidato": "MAGDA MOFATTO",
        "partido": "PL",
        "votos": 20637,
        "pct": 6.29
      },
      {
        "distrito": 5,
        "posicao": 4,
        "candidato": "FLAVIA MORAIS",
        "partido": "PDT",
        "votos": 19298,
        "pct": 5.89
      },
      {
        "distrito": 5,
        "posicao": 5,
        "candidato": "PAULO TRABALHO",
        "partido": "PL",
        "votos": 14107,
        "pct": 4.3
      },
      {
        "distrito": 5,
        "posicao": 6,
        "candidato": "CÉLIO SILVEIRA",
        "partido": "MDB",
        "votos": 11411,
        "pct": 3.48
      },
      {
        "distrito": 5,
        "posicao": 7,
        "candidato": "LUCAS VERGÍLIO",
        "partido": "SOLIDARIEDADE",
        "votos": 10493,
        "pct": 3.2
      },
      {
        "distrito": 5,
        "posicao": 8,
        "candidato": "MARUSSA BOLDRIN",
        "partido": "MDB",
        "votos": 10324,
        "pct": 3.15
      },
      {
        "distrito": 5,
        "posicao": 9,
        "candidato": "JEFERSON RODRIGUES",
        "partido": "REPUBLICANOS",
        "votos": 10301,
        "pct": 3.14
      },
      {
        "distrito": 5,
        "posicao": 10,
        "candidato": "LÊDA BORGES",
        "partido": "PSDB",
        "votos": 10289,
        "pct": 3.14
      },
      {
        "distrito": 5,
        "posicao": 11,
        "candidato": "GUSTAVO GAYER",
        "partido": "PL",
        "votos": 10048,
        "pct": 3.06
      },
      {
        "distrito": 5,
        "posicao": 12,
        "candidato": "RUBENS OTONI",
        "partido": "PT",
        "votos": 9538,
        "pct": 2.91
      },
      {
        "distrito": 6,
        "posicao": 1,
        "candidato": "SILVYE ALVES",
        "partido": "UNIÃO",
        "votos": 37722,
        "pct": 9.31
      },
      {
        "distrito": 6,
        "posicao": 2,
        "candidato": "DANNILLO PEREIRA",
        "partido": "PSD",
        "votos": 32381,
        "pct": 7.99
      },
      {
        "distrito": 6,
        "posicao": 3,
        "candidato": "GUSTAVO GAYER",
        "partido": "PL",
        "votos": 23316,
        "pct": 5.75
      },
      {
        "distrito": 6,
        "posicao": 4,
        "candidato": "MARUSSA BOLDRIN",
        "partido": "MDB",
        "votos": 20469,
        "pct": 5.05
      },
      {
        "distrito": 6,
        "posicao": 5,
        "candidato": "FLAVIA MORAIS",
        "partido": "PDT",
        "votos": 18530,
        "pct": 4.57
      },
      {
        "distrito": 6,
        "posicao": 6,
        "candidato": "MAGAL",
        "partido": "PATRIOTA",
        "votos": 15753,
        "pct": 3.89
      },
      {
        "distrito": 6,
        "posicao": 7,
        "candidato": "GLAUSTIN DA FOKUS",
        "partido": "PSC",
        "votos": 15446,
        "pct": 3.81
      },
      {
        "distrito": 6,
        "posicao": 8,
        "candidato": "NAYARA BARCELOS",
        "partido": "PRTB",
        "votos": 13446,
        "pct": 3.32
      },
      {
        "distrito": 6,
        "posicao": 9,
        "candidato": "MAGDA MOFATTO",
        "partido": "PL",
        "votos": 12247,
        "pct": 3.02
      },
      {
        "distrito": 6,
        "posicao": 10,
        "candidato": "DR ZACHARIAS CALIL",
        "partido": "UNIÃO",
        "votos": 11382,
        "pct": 2.81
      },
      {
        "distrito": 6,
        "posicao": 11,
        "candidato": "DELEGADA ADRIANA ACCORSI",
        "partido": "PT",
        "votos": 10696,
        "pct": 2.64
      },
      {
        "distrito": 6,
        "posicao": 12,
        "candidato": "MATHEUS RIBEIRO",
        "partido": "PSDB",
        "votos": 10518,
        "pct": 2.6
      },
      {
        "distrito": 7,
        "posicao": 1,
        "candidato": "SILVYE ALVES",
        "partido": "UNIÃO",
        "votos": 54142,
        "pct": 11.55
      },
      {
        "distrito": 7,
        "posicao": 2,
        "candidato": "GUSTAVO GAYER",
        "partido": "PL",
        "votos": 36013,
        "pct": 7.68
      },
      {
        "distrito": 7,
        "posicao": 3,
        "candidato": "FLAVIA MORAIS",
        "partido": "PDT",
        "votos": 23208,
        "pct": 4.95
      },
      {
        "distrito": 7,
        "posicao": 4,
        "candidato": "DR ZACHARIAS CALIL",
        "partido": "UNIÃO",
        "votos": 20223,
        "pct": 4.31
      },
      {
        "distrito": 7,
        "posicao": 5,
        "candidato": "LUCAS VERGÍLIO",
        "partido": "SOLIDARIEDADE",
        "votos": 19580,
        "pct": 4.18
      },
      {
        "distrito": 7,
        "posicao": 6,
        "candidato": "DELEGADA ADRIANA ACCORSI",
        "partido": "PT",
        "votos": 19151,
        "pct": 4.08
      },
      {
        "distrito": 7,
        "posicao": 7,
        "candidato": "JOSÉ NELTO",
        "partido": "PP",
        "votos": 17299,
        "pct": 3.69
      },
      {
        "distrito": 7,
        "posicao": 8,
        "candidato": "GLAUSTIN DA FOKUS",
        "partido": "PSC",
        "votos": 13183,
        "pct": 2.81
      },
      {
        "distrito": 7,
        "posicao": 9,
        "candidato": "DR ISMAEL ALEXANDRINO ",
        "partido": "PSD",
        "votos": 12531,
        "pct": 2.67
      },
      {
        "distrito": 7,
        "posicao": 10,
        "candidato": "ADRIANO DO BALDY",
        "partido": "PP",
        "votos": 10932,
        "pct": 2.33
      },
      {
        "distrito": 7,
        "posicao": 11,
        "candidato": "PROFESSOR EDWARD",
        "partido": "PT",
        "votos": 10382,
        "pct": 2.21
      },
      {
        "distrito": 7,
        "posicao": 12,
        "candidato": "FABIO SOUSA",
        "partido": "PL",
        "votos": 9089,
        "pct": 1.94
      },
      {
        "distrito": 8,
        "posicao": 1,
        "candidato": "DANIEL AGROBOM",
        "partido": "PL",
        "votos": 25786,
        "pct": 6.76
      },
      {
        "distrito": 8,
        "posicao": 2,
        "candidato": "JOSÉ NELTO",
        "partido": "PP",
        "votos": 25662,
        "pct": 6.72
      },
      {
        "distrito": 8,
        "posicao": 3,
        "candidato": "LÊDA BORGES",
        "partido": "PSDB",
        "votos": 24503,
        "pct": 6.42
      },
      {
        "distrito": 8,
        "posicao": 4,
        "candidato": "FLAVIA MORAIS",
        "partido": "PDT",
        "votos": 23847,
        "pct": 6.25
      },
      {
        "distrito": 8,
        "posicao": 5,
        "candidato": "CÉLIO SILVEIRA",
        "partido": "MDB",
        "votos": 18873,
        "pct": 4.95
      },
      {
        "distrito": 8,
        "posicao": 6,
        "candidato": "GUSTAVO GAYER",
        "partido": "PL",
        "votos": 18150,
        "pct": 4.76
      },
      {
        "distrito": 8,
        "posicao": 7,
        "candidato": "ADRIANO DO BALDY",
        "partido": "PP",
        "votos": 16432,
        "pct": 4.31
      },
      {
        "distrito": 8,
        "posicao": 8,
        "candidato": "GLAUSTIN DA FOKUS",
        "partido": "PSC",
        "votos": 13946,
        "pct": 3.65
      },
      {
        "distrito": 8,
        "posicao": 9,
        "candidato": "RUBENS OTONI",
        "partido": "PT",
        "votos": 12405,
        "pct": 3.25
      },
      {
        "distrito": 8,
        "posicao": 10,
        "candidato": "MAGAL",
        "partido": "PATRIOTA",
        "votos": 8877,
        "pct": 2.33
      },
      {
        "distrito": 8,
        "posicao": 11,
        "candidato": "MARUSSA BOLDRIN",
        "partido": "MDB",
        "votos": 7835,
        "pct": 2.05
      },
      {
        "distrito": 8,
        "posicao": 12,
        "candidato": "ZÉ ANTONIO",
        "partido": "REPUBLICANOS",
        "votos": 7824,
        "pct": 2.05
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
            "distritais": 3,
            "lista": 0,
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
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSDB",
            "votos": 5793,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
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
            "nome": "PROFESSOR ALCIDES",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "MÁRCIO CORREA",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "FLAVIA MORAIS",
            "partido": "PDT",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "HILDO DO CANDANGO",
            "partido": "REPUBLICANOS",
            "tipo": "distrital",
            "distrito": 5
          },
          {
            "nome": "DANNILLO PEREIRA",
            "partido": "PSD",
            "tipo": "overhang",
            "distrito": 6
          },
          {
            "nome": "GUSTAVO GAYER",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "DANIEL AGROBOM",
            "partido": "PL",
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
            "nome": "JOSÉ NELTO",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "LÊDA BORGES",
            "partido": "PSDB",
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
            "distritais": 3,
            "lista": 0,
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
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSDB",
            "votos": 5793,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
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
            "nome": "PROFESSOR ALCIDES",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "MÁRCIO CORREA",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "FLAVIA MORAIS",
            "partido": "PDT",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "HILDO DO CANDANGO",
            "partido": "REPUBLICANOS",
            "tipo": "distrital",
            "distrito": 5
          },
          {
            "nome": "DANNILLO PEREIRA",
            "partido": "PSD",
            "tipo": "overhang",
            "distrito": 6
          },
          {
            "nome": "GUSTAVO GAYER",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "DANIEL AGROBOM",
            "partido": "PL",
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
            "nome": "ADRIANO DO BALDY",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "LÊDA BORGES",
            "partido": "PSDB",
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
            "nome": "DELEGADA ADRIANA ACCORSI",
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
            "nome": "JORGE ANTONINI",
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
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSDB",
            "votos": 5793,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
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
            "partido": "PSD",
            "votos": 3056,
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
            "nome": "MÁRCIO CORREA",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "FLAVIA MORAIS",
            "partido": "PDT",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "HILDO DO CANDANGO",
            "partido": "REPUBLICANOS",
            "tipo": "distrital",
            "distrito": 5
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "overhang",
            "distrito": 6
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "DANIEL AGROBOM",
            "partido": "PL",
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
            "nome": "JOSÉ NELTO",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "LÊDA BORGES",
            "partido": "PSDB",
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
            "distritais": 0,
            "lista": 1,
            "overhang": 0,
            "total": 1
          },
          {
            "partido": "PSDB",
            "votos": 5793,
            "medias": 1,
            "distritais": 0,
            "lista": 1,
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
            "partido": "PSD",
            "votos": 3056,
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
            "nome": "MÁRCIO CORREA",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "FLAVIA MORAIS",
            "partido": "PDT",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "HILDO DO CANDANGO",
            "partido": "REPUBLICANOS",
            "tipo": "distrital",
            "distrito": 5
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "overhang",
            "distrito": 6
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "DANIEL AGROBOM",
            "partido": "PL",
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
            "nome": "ADRIANO DO BALDY",
            "partido": "PP",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "LÊDA BORGES",
            "partido": "PSDB",
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
            "nome": "DELEGADA ADRIANA ACCORSI",
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
            "nome": "JORGE ANTONINI",
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
            "distritais": 3,
            "lista": 1,
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
            "distritais": 0,
            "lista": 1,
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
            "nome": "PROFESSOR ALCIDES",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "MÁRCIO CORREA",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "FLAVIA MORAIS",
            "partido": "PDT",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "HILDO DO CANDANGO",
            "partido": "REPUBLICANOS",
            "tipo": "distrital",
            "distrito": 5
          },
          {
            "nome": "DANNILLO PEREIRA",
            "partido": "PSD",
            "tipo": "distrital",
            "distrito": 6
          },
          {
            "nome": "GUSTAVO GAYER",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "DANIEL AGROBOM",
            "partido": "PL",
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
            "nome": "LÊDA BORGES",
            "partido": "PSDB",
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
            "distritais": 3,
            "lista": 1,
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
            "distritais": 0,
            "lista": 1,
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
            "nome": "PROFESSOR ALCIDES",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 1
          },
          {
            "nome": "MÁRCIO CORREA",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "FLAVIA MORAIS",
            "partido": "PDT",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "HILDO DO CANDANGO",
            "partido": "REPUBLICANOS",
            "tipo": "distrital",
            "distrito": 5
          },
          {
            "nome": "DANNILLO PEREIRA",
            "partido": "PSD",
            "tipo": "distrital",
            "distrito": 6
          },
          {
            "nome": "GUSTAVO GAYER",
            "partido": "PL",
            "tipo": "distrital",
            "distrito": 7
          },
          {
            "nome": "DANIEL AGROBOM",
            "partido": "PL",
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
            "nome": "MAGDA MOFATTO",
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
            "nome": "LÊDA BORGES",
            "partido": "PSDB",
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
            "nome": "DELEGADA ADRIANA ACCORSI",
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
            "distritais": 1,
            "lista": 3,
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
            "distritais": 0,
            "lista": 1,
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
            "distritais": 0,
            "lista": 1,
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
            "nome": "MÁRCIO CORREA",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "FLAVIA MORAIS",
            "partido": "PDT",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "HILDO DO CANDANGO",
            "partido": "REPUBLICANOS",
            "tipo": "distrital",
            "distrito": 5
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "overhang",
            "distrito": 6
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "overhang",
            "distrito": 7
          },
          {
            "nome": "DANIEL AGROBOM",
            "partido": "PL",
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
            "nome": "DR ISMAEL ALEXANDRINO ",
            "partido": "PSD",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "LÊDA BORGES",
            "partido": "PSDB",
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
            "distritais": 1,
            "lista": 3,
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
            "distritais": 0,
            "lista": 1,
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
            "distritais": 0,
            "lista": 1,
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
            "nome": "MÁRCIO CORREA",
            "partido": "MDB",
            "tipo": "distrital",
            "distrito": 2
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "distrital",
            "distrito": 3
          },
          {
            "nome": "FLAVIA MORAIS",
            "partido": "PDT",
            "tipo": "distrital",
            "distrito": 4
          },
          {
            "nome": "HILDO DO CANDANGO",
            "partido": "REPUBLICANOS",
            "tipo": "distrital",
            "distrito": 5
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "overhang",
            "distrito": 6
          },
          {
            "nome": "SILVYE ALVES",
            "partido": "UNIÃO",
            "tipo": "overhang",
            "distrito": 7
          },
          {
            "nome": "DANIEL AGROBOM",
            "partido": "PL",
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
            "nome": "ADRIANO DO BALDY",
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
            "nome": "DANNILLO PEREIRA",
            "partido": "PSD",
            "tipo": "lista",
            "distrito": ""
          },
          {
            "nome": "LÊDA BORGES",
            "partido": "PSDB",
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
            "nome": "DELEGADA ADRIANA ACCORSI",
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
        "nome": "DANIEL AGROBOM",
        "partido": "PL"
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
        "nome": "MAGDA MOFATTO",
        "partido": "PL"
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
          3,
          6,
          7
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
    "c1": 6,
    "c2": 1
  },
  "bancada_final_total": {
    "c1": 47,
    "c2": 42
  },
  "fidelidade": {
    "MS": {
      "c1": 7,
      "c2": 8
    },
    "SC": {
      "c1": 11,
      "c2": 14
    },
    "GO": {
      "c1": 11,
      "c2": 13
    }
  }
};

export const UFS: UF[] = ["MS", "SC", "GO"];
