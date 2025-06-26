import Image from 'next/image'
import Link from 'next/link'

import { Country } from '../model/types'

export function CountryCard({ country }: { country: Country }) {
  return (
    <article className="flex flex-col bg-white shadow-md rounded-2xl overflow-hidden border hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="relative w-full h-40 bg-gray-100">
        <Link href={`/country/${country.cca3}`} className="block h-full">
          <Image
            src={country.flags.svg || country.flags.png}
            alt={country.flags.alt ?? `Flag of ${country.name.common}`}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          />
        </Link>
      </div>

      <div className="p-4 flex flex-col gap-1 grow">
        <h2 className="text-xl font-bold text-gray-900">
          {country.name.common}
        </h2>
        <p className="text-sm text-gray-500 italic">
          {country.name.official}
        </p>

        <div className="mt-3 flex flex-col gap-1 text-sm text-gray-700">
          <p>
            <span className="font-semibold text-gray-800">Столица:</span>{' '}
            {country.capital?.[0] ?? '—'}
          </p>
          <p>
            <span className="font-semibold text-gray-800">Регион:</span>{' '}
            {country.region}
          </p>
          <p>
            <span className="font-semibold text-gray-800">Население:</span>{' '}
            {country.population.toLocaleString('ru-RU')}
          </p>
        </div>
      </div>
    </article>
  )
}
