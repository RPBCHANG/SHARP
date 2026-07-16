import './globals.css'

export const metadata = {
  title: 'MOON TV - Explore the Cosmos',
  description: 'High-definition live streams from lunar stations and deep space probes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
