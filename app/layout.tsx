import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'ROMSJ Global Tech | Accelerating Growth in Ghana & China',
  description: 'ROMSJ Global Tech - In collaboration with Embassy of the Republic of Ghana in China. Empowering agribusiness, technology, healthcare, manufacturing, infrastructure, and finance.',
  keywords: 'ROMSJ Global Tech, BiFor 2026, Ghana China business, African business forum, AgriTech, SME support',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#1e3a8a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
