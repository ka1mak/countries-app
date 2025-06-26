import { create } from 'zustand'

import { Country, getAllCountries, getCountriesByRegion } from '@/entities/country'

export type Region = 'All' | 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania'

interface RegionState {
  region: Region
  data: Country[]
  loading: boolean
  error: string|null
  // eslint-disable-next-line no-unused-vars
  setRegion: (r: Region) => void
}

export const useRegionStore = create<RegionState>((set) => ({
  region: 'All',
  data: [],
  loading: false,
  error: null,

  setRegion: async (region) => {
    set({ region, loading: true })
    try {
      const data = region === 'All'
        ? await getAllCountries()
        : await getCountriesByRegion(region)

      set({ data, error: null })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      set({ error: 'Ошибка загрузки', data: [] })
    } finally {
      set({ loading: false })
    }
  },
}))
