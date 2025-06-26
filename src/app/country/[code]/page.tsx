import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CountryDetails, getCountryByCode } from '@/entities/country'
import { BackButton } from '@/features/navigation-back'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>
}): Promise<Metadata> {
  const code = (await params).code.toUpperCase()
  const country = await getCountryByCode(code)

  if (!country) {
    return {
      title: 'Страна не найдена',
      description: `Мы не нашли информацию по коду "${code}"`,
    }
  }

  const title = `${country.name.common} — подробная информация`
  const description = `Узнайте всё о стране ${country.name.common}: столица ${country.capital?.[0] ?? '—'}, регион ${country.region}, население ${country.population.toLocaleString('ru-RU')}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: country.flags.svg || country.flags.png,
          width: 800,
          height: 600,
          alt: `Флаг ${country.name.common}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [country.flags.png],
    },
  }
}

const CountryPage = async ({
  params,
}: {
  params: Promise<{ code: string }>
}) => {
  const code = (await params).code

  const country = await getCountryByCode(code.toUpperCase())

  if (!country) return notFound()

  return (
    <main className="p-6 spacer flex flex-col space-y-4">
      <BackButton />
      <CountryDetails country={country} />
    </main>
  )
}

export default CountryPage
