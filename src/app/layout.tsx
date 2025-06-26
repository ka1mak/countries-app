import { golos } from '@/shared/fonts'
import { Header } from '@/widgets/header'

import type { Metadata } from 'next'

import '@/shared/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Countries App',
    template: '%s | Countries App',
  },
  description: 'Узнай больше о странах мира — столицы, население, языки, валюты и многое другое.',
  keywords: ['страны', 'флаги', 'география', 'мир', 'путешествия'],
  authors: [
    { name: 'ka1mak', url: 'https://github.com/yourname' },
  ],
  creator: 'ka1mak',
  generator: 'Next.js 15 + App Router',
  openGraph: {
    title: 'Countries App',
    description: 'Интерактивный справочник по странам мира',
    url: 'https://countries-app.com',
    siteName: 'Countries App',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Флаги стран мира',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Countries App',
    description: 'Справочник по странам мира',
    creator: '@your_twitter',
    images: ['/og-image.png'],
  },
  metadataBase: new URL('https://countries-app.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${golos.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
