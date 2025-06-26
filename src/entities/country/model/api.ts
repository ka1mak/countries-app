import { fetcher } from '@/shared/api'

import { Country } from './types'

export const getAllCountries = (): Promise<Country[]> =>
  fetcher.fetchData<Country[]>(
    fetcher.createEndPoint('/all', {
      fields: 'flags,name,capital,region,population,cca3',
    })
    , {
      next: { revalidate: 86400 }, // ISR: 24h
    })

export const getCountriesByRegion = (region: string): Promise<Country[]> =>
  fetcher.fetchData<Country[]>(
    fetcher.createEndPoint(`/region/${region}`, {
      fields: 'flags,name,capital,region,population,cca3',
    }),
    { next: { revalidate: 86400 } }, // ISR: 24h
  )

export const getCountryByCode = (code: string): Promise<Country | null> =>
  fetcher
    .fetchData<Country>(
      fetcher.createEndPoint(`/alpha/${code}`, {
        fields:
          'name,flags,capital,region,subregion,population,currencies,languages,timezones,area',
      })
      , { next: { revalidate: 86400 } }) // ISR: 24h
