import type { Metadata } from 'next'
import { Montserrat, Manrope } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/providers/SmoothScroll'
import NoiseOverlay from '@/components/ui/NoiseOverlay'
import GridOverlay from '@/components/ui/GridOverlay'

// Заголовки — тяжёлый, impactful
const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-heading',
  weight: ['700', '800', '900'],
  display: 'swap',
})

// Тело — чистый, читаемый
const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'malyshproduction — Медиа-продюсер',
  description: 'Продающий контент под ключ. Выжимаю максимум продаж из твоего контента.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${manrope.variable}`}>
      <body className="bg-[#0A0A0A] text-[#F0F0F0] antialiased overflow-x-hidden">
        <SmoothScroll>
          <NoiseOverlay />
          <GridOverlay />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
