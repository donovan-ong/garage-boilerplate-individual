import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D5DEEF] px-4 py-10">
      <div className="w-full max-w-md">{children}</div>
    </div>
  )
}
