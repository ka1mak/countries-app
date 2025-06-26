'use client'

import { Country, CountryCard } from '@/entities/country'
import { useRegionStore } from '@/features/filter-region'
import { useSortStore } from '@/features/sort-countries/model/store'

export function CountryGrid({ countries }: { countries: Country[] }) {
  const { region } = useRegionStore()
  const { field, order } = useSortStore()
  const filtered =
    region === 'All' ? countries : countries.filter((c) => c.region === region)

  // const filtered = region === 'All'
  //   ? countries
  //   : countries.filter((c) => c.region === region)

  const sorted = [...filtered].sort((a, b) => {
    const sign = order === 'asc' ? 1 : -1

    if (field === 'population') return sign * (a.population - b.population)

    return sign * a.name.common.localeCompare(b.name.common)
  })

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {sorted.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </section>
  )
}
