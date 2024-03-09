'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
     <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>오류가 발생했습니다.</h2>
        <div>
          <Link href="/" className={'inline-block rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'}>홈</Link>
        </div>
      </div>
     </main>
  )
}