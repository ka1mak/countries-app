'use client'

import { useEffect, useRef, useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { AiOutlineDown } from 'react-icons/ai'

import { Region, useRegionStore  } from '../model/store'

const regions: Region[] = [
  'All',
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
]

export function RegionSelect() {
  const { region, setRegion } = useRegionStore()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }

    window.addEventListener('mousedown', handler)

    return () => window.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative inline-block w-52">
      {/* кнопка */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between border rounded-md p-2 bg-white shadow-sm hover:bg-gray-50 transition"
      >
        <span className="truncate text-black">
          {region === 'All' ? 'Все регионы' : region}
        </span>
        <AiOutlineDown
          size={18}
          className={`ml-2 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* список */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, scale: 0.98, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg overflow-hidden"
          >
            {regions.map((r) => (
              <li
                key={r}
                onClick={() => {
                  setRegion(r)
                  setOpen(false)
                }}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 text-black
                  ${r === region ? 'bg-gray-100 font-medium' : ''}`}
              >
                {r === 'All' ? 'Все регионы' : r}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
