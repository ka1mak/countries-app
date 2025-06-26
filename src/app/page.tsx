import { Metadata } from 'next'

import { getAllCountries } from '@/entities/country'
import { RegionSelect } from '@/features/filter-region'
import { SortSelect } from '@/features/sort-countries'
import { CountryGrid } from '@/widgets/country-grid'

export const revalidate = 86400 // ISR: 24h

export const metadata: Metadata = {
  title: 'Countries App — все страны мира',
  description:
    'Узнайте о странах мира: флаги, столицы, регионы, население, языки, валюты и многое другое. Интерактивный справочник.',
  keywords: [
    'страны мира',
    'география',
    'флаги стран',
    'столицы',
    'население',
    'валюта',
    'языки',
  ],
  openGraph: {
    title: 'Countries App — энциклопедия стран',
    description:
      'Интерактивная база данных всех стран мира: флаги, население, столицы, регионы.',
    url: 'https://countries-app.com',
    siteName: 'Countries App',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Флаги стран мира',
      },
    ],
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Countries App — все страны мира',
    description:
      'Откройте для себя страны мира: флаги, население, столицы и регионы.',
    images: ['/og-image.png'],
    creator: '@your_twitter',
  },
}

export default async function Home() {
  const countries = await getAllCountries()

  return (
    <main className="p-6 spacer flex flex-col space-y-4">
      <header className="flex flex-wrap gap-4 items-center">
        <RegionSelect />
        <SortSelect />
      </header>

      <CountryGrid countries={countries} />
    </main>
  )
}
