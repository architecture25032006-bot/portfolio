import Nav from '@/components/ui/Nav'
import Hero from '@/components/sections/Hero'
import Offer from '@/components/sections/Offer'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Results from '@/components/sections/Results'
import Contact from '@/components/sections/Contact'
import Marquee from '@/components/ui/Marquee'

export default function Home() {
  return (
    <>
      <Nav />
      <main style={{ background: '#F2F2F2' }}>
        <Hero />

        <Marquee
          items={['REELS', 'SHORTS', 'TIKTOK', 'YOUTUBE', 'TELEGRAM', 'МОНЕТИЗАЦИЯ']}
          speed={18}
          size="lg"
        />

        <Offer />

        <Services />

        <Projects />

        <Results />

        <Marquee
          items={['СТРАТЕГИЯ', 'СЦЕНАРИЙ', 'МОНТАЖ', 'ВОРОНКА', 'ПРОДАЖИ', 'РЕЗУЛЬТАТ']}
          speed={22}
          reverse
          size="md"
        />

        <Contact />
      </main>
    </>
  )
}
