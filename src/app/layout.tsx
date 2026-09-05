import type { Metadata } from 'next'
import { Inter, Manrope, Playfair_Display, Work_Sans, Libertinus_Serif } from 'next/font/google'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

import { LenisProvider } from '@/components/providers/lenis-provider'
import { QueryProvider } from '@/components/providers/query-provider'
import '@/styles/globals.css'

const inter = Inter({
  variable: '--font-inter-family',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
})

const manrope = Manrope({
  variable: '--font-manrope-family',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
})

const workSans = Work_Sans({
  variable: '--font-work-sans-family',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
})

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-family',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
})

const libertinusSerif = Libertinus_Serif({
  variable: '--font-libertinus-serif-family',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Bateco Group',
  description: 'Bateco Group',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${manrope.variable} ${workSans.variable} ${playfairDisplay.variable} ${libertinusSerif.variable} font-sans antialiased`}
      >
        <QueryProvider>
          <NuqsAdapter>
            <LenisProvider>{children}</LenisProvider>
          </NuqsAdapter>
        </QueryProvider>
      </body>
    </html>
  )
}
