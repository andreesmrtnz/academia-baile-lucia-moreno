import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Academia de Danza Lucía Moreno - Flamenco, Clásico, Urbano en Montepinar, Murcia',
  description: 'Academia de danza en Montepinar, Murcia. Clases de flamenco, clásico, urbano, sevillanas, salsa, bachata, yoga, funcional, barre y zumba. Profesora Lucía Moreno con más de 5 años de experiencia. Primera clase gratuita.',
  keywords: [
    'academia lucia moreno',
    'academia de danza lucia moreno',
    'baile en murcia',
    'flamenco murcia',
    'danza española murcia',
    'clases de baile montepinar',
    'academia de danza montepinar',
    'ballet murcia',
    'sevillanas murcia',
    'salsa murcia',
    'bachata murcia',
    'yoga murcia',
    'funcional murcia',
    'barre murcia',
    'zumba murcia',
    'urbano murcia',
    'clásico murcia',
    'danza clásica murcia',
    'baile flamenco murcia',
    'escuela de danza murcia',
    'clases de flamenco montepinar',
    'profesora de danza lucia moreno',
    'centro comercial montepinar',
    'danza en murcia',
    'baile español murcia'
  ].join(', '),
  authors: [{ name: 'Lucía Moreno', url: 'https://academialuciamoreno.com' }],
  creator: 'Academia de Danza Lucía Moreno',
  publisher: 'Academia de Danza Lucía Moreno',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://academialuciamoreno.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Academia de Danza Lucía Moreno - Flamenco y Danza en Montepinar, Murcia',
    description: 'Clases de flamenco, clásico, urbano, sevillanas, salsa, bachata, yoga, funcional, barre y zumba en Montepinar, Murcia. Profesora Lucía Moreno. Primera clase gratuita.',
    url: 'https://academialuciamoreno.com',
    siteName: 'Academia de Danza Lucía Moreno',
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Academia de Danza Lucía Moreno - Flamenco en Murcia',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Academia de Danza Lucía Moreno - Flamenco y Danza en Montepinar, Murcia',
    description: 'Clases de flamenco, clásico, urbano, sevillanas, salsa, bachata, yoga, funcional, barre y zumba en Montepinar, Murcia.',
    images: ['/hero.jpg'],
    creator: '@academiadedanzaluciamoreno',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion-google',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#7f1d1d" />
        <meta name="geo.region" content="ES-MU" />
        <meta name="geo.placename" content="Murcia" />
        <meta name="geo.position" content="38.0422;-1.1026" />
        <meta name="ICBM" content="38.0422, -1.1026" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 