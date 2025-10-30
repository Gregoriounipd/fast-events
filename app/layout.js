import './globals.css'

export const metadata = {
  title: 'Adori-Events - Organizzazione Eventi',
  description: 'Diciottesimi, feste di laurea, compleanni ed eventi aziendali.',
  icons: {
    icon: 'icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}