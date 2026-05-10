import type { Metadata } from 'next'
import { Playfair_Display, Raleway } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const raleway = Raleway({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ananya Ladies Beauty Spa | Luxury Bridal Makeup & Hair Treatments',
  description: 'Premium ladies-only spa specializing in bridal makeup, hair treatments, skincare, and beauty services. Where every woman is a bride.',
  keywords: 'bridal makeup, ladies spa, beauty salon, hair treatment, skincare, bridal package',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${raleway.variable} bg-background`} data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
