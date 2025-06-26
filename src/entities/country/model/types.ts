export type Country = {
  cca3: string
  name: { common: string; official: string }
  capital?: string[]
  region: string
  subregion?: string
  population: number
  flags: { png: string; svg: string; alt?: string }
  currencies?: Record<string, { name: string; symbol: string }>
  languages?: Record<string, string>
  timezones: string[]
  area: number
}
