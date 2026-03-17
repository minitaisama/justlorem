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
  title: 'LOREM | Creative Digital Agency',
  description: 'Where ideas become impact. We help brands grow through thoughtful strategy, strong design, and meaningful digital experiences.',
  generator: 'v0.app',
  keywords: ['digital agency', 'branding', 'web design', 'UI/UX', 'creative agency'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
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
