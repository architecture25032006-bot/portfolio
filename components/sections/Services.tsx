'use client'

import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

// Цветные bento-карточки в стиле референса
const services = [
  {
    num: '01',
    title: 'Хуки и сценарии',
    description: 'Пишу цепляющие хуки под твою нишу. Первые 2 секунды решают всё — именно здесь большинство теряет аудиторию.',
    tags: ['Хуки', 'Сценарий', 'Нарратив'],
    bg: '#111', fg: '#fff', sub: '#999', tagBorder: '#333', tagColor: '#bbb', numColor: '#8B5CF6',
  },
  {
    num: '02',
    title: 'Монтаж и субтитры',
    description: 'Быстрый ритмичный монтаж без лишнего. Субтитры, врезки, динамика — то, что держит зрителя до конца.',
    tags: ['Монтаж', 'Субтитры', 'Досмотр'],
    bg: '#fff', fg: '#111', sub: '#888', tagBorder: '#E5E5E5', tagColor: '#999', numColor: '#8B5CF6',
  },
  {
    num: '03',
    title: 'Стратегия роста',
    description: 'Анализирую нишу, конкурентов и аудиторию. Выстраиваю контент-план, который системно тянет подписчиков и заявки.',
    tags: ['Аналитика', 'Контент-план', 'Рост'],
    bg: '#8B5CF6', fg: '#fff', sub: 'rgba(255,255,255,0.8)', tagBorder: 'rgba(255,255,255,0.3)', tagColor: '#fff', numColor: '#fff',
  },
  {
    num: '04',
    title: 'A/B тест форматов',
    description: 'Тестирую хуки, форматы и подачу параллельно. Оставляю то, что работает — отсекаю всё лишнее. Данные, а не догадки.',
    tags: ['Тесты', 'Оптимизация', 'CTR'],
    bg: '#C9F31D', fg: '#111', sub: '#4a5a00', tagBorder: 'rgba(0,0,0,0.15)', tagColor: '#3a4700', numColor: '#111',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      style={{ background: '#F2F2F2', borderTop: '1px solid #E5E5E5', padding: '100px 40px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Заголовок */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '11px', color: '#8B5CF6', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '10px' }}>
              Услуги
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.02em', color: '#111', lineHeight: 1.05 }}>
              Что я делаю
            </h2>
          </div>
          <a href="https://t.me/m/HngAbPHEODZi" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '14px', color: '#888', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Обсудить проект →
          </a>
        </div>

        {/* Bento-карточки */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              style={{
                padding: '40px',
                borderRadius: '20px',
                background: s.bg,
                border: s.bg === '#fff' ? '1px solid #E5E5E5' : 'none',
              }}
            >
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '13px', color: s.numColor, letterSpacing: '2px', marginBottom: '20px', fontWeight: 700 }}>
                {s.num}
              </div>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 900, color: s.fg, letterSpacing: '-0.01em', marginBottom: '14px', lineHeight: 1.2 }}>
                {s.title}
              </h3>

              <p style={{ fontSize: '14px', color: s.sub, lineHeight: 1.7, marginBottom: '24px' }}>
                {s.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {s.tags.map(tag => (
                  <span key={tag} style={{ padding: '5px 12px', borderRadius: '999px', border: `1px solid ${s.tagBorder}`, fontSize: '11px', color: s.tagColor }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
