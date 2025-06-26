'use client'

import React from 'react'

import { useSearchModal } from '../model/modalStore'

export const SearchButton = () => {
  const open = useSearchModal((state) => state.open)

  return (
    <button
      aria-label="Поиск страны"
      onClick={open}
      id="button-addon2"
      className="border p-1 pr-4 rounded-md cursor-text flex hover:bg-slate-500 duration-300"
    >
      🔍 Search City...
    </button>
  )
}
