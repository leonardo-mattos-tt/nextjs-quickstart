import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col gap-2 w-screen h-screen justify-center items-center">
      <h1 className="text-4xl">Home Page</h1>
      <Link href="/example-page" className="hover:text-blue-300">
        Go to example page
      </Link>
    </div>
  )
}
