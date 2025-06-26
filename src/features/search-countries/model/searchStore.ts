/* eslint-disable no-unused-vars */
import { create } from 'zustand'

import { Country } from '@/entities/country'

import { getCountryByName } from './api'

interface SearchStore {
  query: string
  onChangeQuery: (query: string) => void
  isFetching: boolean
  error: null | string
  data: Country[]
  fetch: (query: string) => void
}

export const useSearchStore = create<SearchStore>((set) => ({
  data: [],
  error: null,
  isFetching: false,
  query: '',

  onChangeQuery: (query: string) => {
    set({ query })
  },

  fetch: async (query: string): Promise<void> => {
    set({ isFetching: true, error: null, data: [] })

    try {
      const data = await getCountryByName(query)

      set({ data, error: null })
    } catch (err) {
      const error = err as Error

      set({ error: error.message, data: [] })
    } finally {
      set({ isFetching: false })
    }
  },
}))
