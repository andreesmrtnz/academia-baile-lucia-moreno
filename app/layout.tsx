import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Academia de Danza Lucía Moreno - Flamenco y Danza Española en Almería',
  description: 'Descubre el arte del flamenco y la danza española en el corazón de Almería. Formación profesional y humana con Lucía Moreno.',
  keywords: 'flamenco, danza española, ballet, sevillanas, academia de danza, Almería, Lucía Moreno',
  authors: [{ name: 'Academia de Danza Lucía Moreno' }],
  openGraph: {
    title: 'Academia de Danza Lucía Moreno',
    description: 'Pasión, disciplina y arte en cada paso',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 