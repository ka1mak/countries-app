import React from 'react'

import Link from 'next/link'

import { SearchButton } from '@/features/search-countries'
import { SearchModal } from '@/features/search-countries'

export const Header = () => {
  return (
    <header role="banner" className="bg-gray-900 text-white h-20 horizontal-center">
      <div className="spacer w-full flex justify-between">
        <h1 className="text-2xl font-medium">
          <Link href="/" className="hover:underline focus:outline focus:ring-2">
            Исследователь стран
          </Link>
        </h1>

        <div className="horizontal-center gap-1">
          <SearchButton />
        </div>
      </div>

      <SearchModal />
    </header>
  )
}
