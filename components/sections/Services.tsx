'use client'

import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const services = [
  {
    num: '01',
    title: 'Хуки и сценарии',
    description: 'Пишу цепляющие хуки и сценарии под твою нишу. Первые 2 секунды решают всё.',
    tags: ['Хуки', 'Сценарий', 'Нишевой анализ'],
    dark: false,
  },
  {
    num: '02',
    title: 'Монтаж и субтитры',
    description: 'Быстрый ритмичный монтаж без лишнего. Субтитры и динамика — то что держит зрителя до конца.',
    tags: ['Монтаж', 'Субтитры', 'Досмотр'],
    dark: true,
  },
  {
    num: '03',
    title: 'Стратегия роста',
    description: 'Контент-план на основе анализа ниши и конкурентов. Системный рост, а не случайные вирусы.',
    tags: ['Аналитика', 'Контент-план', 'Рост'],
    dark: false,
  },
  {
    num: '04',
    title: 'A/B тест форматов',
    description: 'Тестирую хуки и форматы параллельно. Оставляю что работает. Данные, а не догадки.',
    tags: ['Тесты', 'Оптимизация', 'CTR'],
    dark: false,
  },
]

export default function Services() {
  return (
    <section
      id="services"
      style={{ background: '#F2F2F2', borderTop: '1px solid #E5E5E5', padding: '100px 40px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '56px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '11px', color: '#8B5CF6', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '10px' }}>
              Услуги
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.02em', color: '#111', lineHeight: 1.1 }}>
              Что я делаю
            </h2>
          </div>
          <a href="https://t.me/m/HngAbPHEODZi" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#AAA', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Обсудить проект →
          </a>
        </div>

        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
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
                border: s.dark ? 'none' : '1px solid #E5E5E5',
                background: s.dark ? '#111' : '#fff',
              }}
            >
              <div style={{ fontSize: '12px', color: s.dark ? '#555' : '#CCC', letterSpacing: '2px', marginBottom: '24px', fontWeight: 700 }}>
                {s.num}
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 900, color: s.dark ? '#fff' : '#111', letterSpacing: '-0.01em', marginBottom: '14px', lineHeight: 1.2 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '14px', color: s.dark ? '#666' : '#999', lineHeight: 1.7, marginBottom: '28px' }}>
                {s.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {s.tags.map(tag => (
                  <span key={tag} style={{ padding: '4px 12px', borderRadius: '999px', border: `1px solid ${s.dark ? '#2A2A2A' : '#EBEBEB'}`, fontSize: '11px', color: s.dark ? '#555' : '#AAA' }}>
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
