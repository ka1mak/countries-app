import { Country } from '@/entities/country'
import { fetcher } from '@/shared/api'

export const getCountryByName = (name: string) => {
  const url = fetcher.createEndPoint(`/name/${name}`, {
    fields: 'flags,name,capital,region,population,cca3',
  })

  return fetcher.fetchData<Country[]>(url)
}
