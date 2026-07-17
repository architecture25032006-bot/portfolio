import type { Metadata } from 'next'
import { Unbounded, Manrope } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/providers/SmoothScroll'
import GridOverlay from '@/components/ui/GridOverlay'

// Заголовки — характерный дисплейный гротеск с индивидуальностью
const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-heading',
  weight: ['600', '700', '800', '900'],
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
  title: 'MalyshProduction — Reels-продюсер',
  description: 'Reels-продюсинг для экспертов и брендов. Контент, который приводит клиентов, а не просто набирает просмотры.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${unbounded.variable} ${manrope.variable}`}>
      <body className="bg-[#F2F2F2] text-[#111111] antialiased overflow-x-hidden">
        <SmoothScroll>
          <GridOverlay />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
