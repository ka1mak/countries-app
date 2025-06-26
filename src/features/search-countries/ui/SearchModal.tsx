'use client'

import React, { useEffect, useMemo } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

import { debounce } from '@/shared/tools/debounce'

import { useSearchModal } from '../model/modalStore'
import { useSearchStore } from '../model/searchStore'

export const SearchModal = () => {
  const {
    data,
    error,
    isFetching,
    onChangeQuery,
    query,
  } = useSearchStore()

  const fetch = useSearchStore((s) => s.fetch)

  const { isOpen, close } = useSearchModal()

  const fetchDebounced = useMemo(
    () => debounce(fetch, 400),
    [fetch],
  )

  useEffect(() => {
    if (query) {
      fetchDebounced(query)
    }
  }, [query])

  useEffect(() => {
    if (!isOpen) onChangeQuery('')
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={close}
          />

          <motion.div
            className="relative bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 z-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex border rounded-md w-full">
                <span
                  id="button-addon2"
                  className="border-r p-2"
                >
                  🔍
                </span>
                <input
                  type="text"
                  placeholder="Search City..."
                  aria-label="Search City"
                  aria-describedby="basic-addon2"
                  autoFocus
                  className="outline-none p-2 w-full text-black"
                  onChange={(e) => onChangeQuery(e.target.value)}
                  value={query}
                />
              </div>
            </div>

            <hr />

            <div className="text-gray-600 h-80 overflow-y-scroll">
              <div className="font-medium text-center text-lg">
                {isFetching && <p className="p-10">Идет поиск...</p>}
                {error && <p className="p-10">Не смогли найти страну!</p>}
              </div>

              <ul className="mt-4 flex flex-col gap-3 max-h-96">
                {data.map((country) => (
                  <li key={country.cca3}>
                    <Link
                      href={`/country/${country.cca3}`}
                      className="block p-3 border rounded-xl shadow-sm hover:bg-gray-50 transition"
                      onClick={close}
                    >
                      <p className="font-semibold">{country.name.common}</p>
                      <p className="text-sm text-gray-500">
                        Столица: {country.capital?.[0] ?? '—'}, Регион: {country.region}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
