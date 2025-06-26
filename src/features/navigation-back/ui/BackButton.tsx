'use client'
import { useRouter } from 'next/navigation'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export const BackButton = () => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline mb-6"
    >
      <AiOutlineArrowLeft size={16} />
      Назад
    </button>
  )
}
