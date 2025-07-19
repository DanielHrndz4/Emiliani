import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Instituto Emiliani',
  description: 'Instituto Emiliani',
  generator: 'Fantasma Digital',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
