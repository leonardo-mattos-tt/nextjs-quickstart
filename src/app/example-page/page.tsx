import Link from 'next/link'

export default function ExamplePage() {
  return (
    <div className="flex flex-col gap-2 w-screen h-screen justify-center items-center">
      <h1 className="text-4xl">Example Page</h1>
      <Link href="/" className="hover:text-blue-300">
        Go to home page
      </Link>
    </div>
  )
}
