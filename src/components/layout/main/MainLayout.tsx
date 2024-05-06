import { PropsWithChildren } from 'react'

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900 text-white">
      {children}
    </main>
  )
}
