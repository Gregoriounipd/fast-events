import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: 'Adori Events - Feste di Laurea, Compleanni e Diciottesimi',
  description: 'Organizziamo feste di laurea memorabili, compleanni indimenticabili e diciottesimi speciali. Eventi su misura in tutta Italia.',
  keywords: 'feste di laurea, compleanni, diciottesimi, eventi, organizzazione eventi, party, feste',
  authors: [{ name: 'Adori Events' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
  openGraph: {
    title: 'Adori Events - Organizzazione Eventi',
    description: 'Feste di laurea, compleanni e diciottesimi indimenticabili',
    url: 'https://adorievents.com',
    siteName: 'Adori Events',
    images: [
      {
        url: 'https://adorievents.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Adori Events Logo',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adori Events - Organizzazione Eventi',
    description: 'Feste di laurea, compleanni e diciottesimi indimenticabili',
    images: ['https://adorievents.com/og-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        {children}
        <GoogleAnalytics gaId="G-5ECQT641VW" />
      </body>
    </html>
  )
}
