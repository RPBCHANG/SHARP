import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MOON TV - Explore the Cosmos',
  description: 'High-definition live streams from lunar stations and deep space probes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
