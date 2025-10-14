import './globals.css'

export const metadata = {
  title: 'Fast Events - Organizzazione Eventi',
  description: 'Matrimoni, feste di laurea, compleanni ed eventi aziendali.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}