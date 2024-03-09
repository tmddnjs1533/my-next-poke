import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>404</h2>
        <p>페이지를 찾을 수 없습니다.</p>
        <div>
          <Link href="/" className={'inline-block rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'}>Return Home</Link>
        </div>
      </div>
    </main>
  )
}