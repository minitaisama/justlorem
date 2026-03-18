import type { Metadata, Viewport } from 'next'
import { Anton, Raleway } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Display font for large titles and menu
const anton = Anton({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap'
});

// Body font for content
const raleway = Raleway({ 
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jusrlorem.com'),
  title: 'Lorem — Design. Develop. Deliver.',
  description: 'Lorem is a technology company specializing in web, app, and product development. We design, develop, and deliver scalable digital experiences.',
  generator: 'v0.app',
  keywords: [
    'Lorem',
    'web development',
    'app development',
    'software company',
    'product development',
    'web3',
    'UI UX',
    'digital agency',
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Lorem — Design. Develop. Deliver.',
    description: 'We build web, apps, and digital products that scale.',
    type: 'website',
    url: 'https://www.jusrlorem.com/',
    siteName: 'Lorem',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.jusrlorem.com/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lorem — Design. Develop. Deliver.',
    description: 'We build web, apps, and digital products that scale.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#030712',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${anton.variable} ${raleway.variable} font-body antialiased bg-[#030712] text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
