import './globals.css'

export const metadata = {
  title: 'Adori Events - Feste di Laurea, Compleanni e Diciottesimi',
  description: 'Organizziamo feste di laurea memorabili, compleanni indimenticabili e diciottesimi speciali. Eventi su misura in tutta Italia.',
  keywords: 'feste di laurea, compleanni, diciottesimi, eventi, organizzazione eventi, party, feste',
  authors: [{ name: 'Adori Events' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
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
  verification: {
    google: 'IL_TUO_CODICE_GOOGLE', // Lo otterrai da Google Search Console
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}