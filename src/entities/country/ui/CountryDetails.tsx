import Image from 'next/image'

import { Country } from '../model/types'

export const CountryDetails = ({ country }: { country: Country }) => {
  const languages = country.languages
    ? Object.values(country.languages).join(', ')
    : '—'
  const currencies = country.currencies
    ? Object.values(country.currencies)
      .map((c) => `${c.name} (${c.symbol})`)
      .join(', ')
    : '—'

  return (
    <article className="flex flex-col md:flex-row gap-8">
      <div className="relative w-full md:w-1/2 h-60 md:h-96 bg-gray-100 rounded-2xl overflow-hidden border">
        <Image
          src={country.flags.svg || country.flags.png}
          alt={country.flags.alt ?? `Flag of ${country.name.common}`}
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 600px"
          priority
        />
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold">{country.name.common}</h1>
        <h2 className="text-lg text-gray-500 italic">
          {country.name.official}
        </h2>

        <ul className="mt-2 flex flex-col gap-2 text-gray-800 text-sm">
          <li>
            <span className="font-semibold">Столица:</span>{' '}
            {country.capital?.[0] ?? '—'}
          </li>
          <li>
            <span className="font-semibold">Регион / подрегион:</span>{' '}
            {country.region} {country.subregion && ` / ${country.subregion}`}
          </li>
          <li>
            <span className="font-semibold">Население:</span>{' '}
            {country.population.toLocaleString('ru-RU')}
          </li>
          <li>
            <span className="font-semibold">Площадь:</span>{' '}
            {country.area.toLocaleString('ru-RU')} км²
          </li>
          <li>
            <span className="font-semibold">Валюта(ы):</span> {currencies}
          </li>
          <li>
            <span className="font-semibold">Язык(и):</span> {languages}
          </li>
          <li>
            <span className="font-semibold">Часовой пояс:</span>{' '}
            {country.timezones.join(', ')}
          </li>
        </ul>
      </div>
    </article>
  )
}
