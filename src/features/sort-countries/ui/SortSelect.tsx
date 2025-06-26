'use client'

import { useState, useRef, useEffect } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { AiOutlineDown } from 'react-icons/ai'

import { useSortStore, SortField, SortOrder } from '../model/store'

interface Option {
  label: string;
  field: SortField;
  order: SortOrder;
}

const options: Option[] = [
  { label: 'Название: A → Z', field: 'name',       order: 'asc'  },
  { label: 'Название: Z → A', field: 'name',       order: 'desc' },
  { label: 'Население: ↑',    field: 'population', order: 'asc'  },
  { label: 'Население: ↓',    field: 'population', order: 'desc' },
]

export function SortSelect() {
  const { field, order, setSort } = useSortStore()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const active = options.find(
    (o) => o.field === field && o.order === order,
  )?.label

  // клик вне дропдауна
  useEffect(() => {
    const h = (e: MouseEvent) =>
      ref.current && !ref.current.contains(e.target as Node) && setOpen(false)

    window.addEventListener('mousedown', h)

    return () => window.removeEventListener('mousedown', h)
  }, [])

  return (
    <div ref={ref} className="relative inline-block w-56">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between border rounded-md p-2 bg-white shadow-sm hover:bg-gray-50 transition"
      >
        <span className="truncate text-black">
          {active}
        </span>

        <AiOutlineDown
          size={18}
          className={`ml-2 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, scale: 0.98, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg overflow-hidden"
          >
            {options.map((o) => (
              <li
                key={o.label}
                onClick={() => {
                  setSort(o.field, o.order)
                  setOpen(false)
                }}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 text-black ${
                  o.label === active ? 'bg-gray-100 font-medium' : ''
                }`}
              >
                {o.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
