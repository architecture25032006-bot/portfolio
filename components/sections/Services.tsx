'use client'

import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const services = [
  {
    num: '01',
    title: 'Хуки и сценарии',
    description: 'Пишу цепляющие хуки и сценарии под твою нишу. Первые 2 секунды решают всё — именно здесь большинство теряет аудиторию.',
    tags: ['Хуки', 'Сценарий', 'Нарратив', 'Нишевой анализ'],
    highlight: false,
  },
  {
    num: '02',
    title: 'Монтаж и субтитры',
    description: 'Быстрый ритмичный монтаж без лишнего. Субтитры, врезки, динамика — то что держит зрителя до конца и повышает досмотр.',
    tags: ['Монтаж', 'Субтитры', 'Ритм', 'Досмотр'],
    highlight: false,
  },
  {
    num: '03',
    title: 'Стратегия роста',
    description: 'Анализирую нишу, конкурентов и аудиторию. Выстраиваю контент-план, который системно тянет подписчиков и заявки.',
    tags: ['Аналитика', 'Контент-план', 'Конкуренты', 'Рост'],
    highlight: true,
  },
  {
    num: '04',
    title: 'A/B тест форматов',
    description: 'Тестирую хуки, форматы и подачу параллельно. Оставляю то, что работает — отсекаю всё лишнее. Данные, а не догадки.',
    tags: ['Тесты', 'Оптимизация', 'Данные', 'CTR'],
    highlight: false,
  },
]

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: '#0A0A0A',
        borderTop: '1px solid #141414',
        padding: '100px 40px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Заголовок */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '56px',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div>
            <p style={{ fontSize: '11px', color: '#8B5CF6', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 500, marginBottom: '10px' }}>
              Услуги
            </p>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: '#fff',
              lineHeight: 1.1,
            }}>
              Что я делаю
            </h2>
          </div>
          <a
            href="https://t.me/m/HngAbPHEODZi"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '14px', color: '#555', textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            Обсудить проект →
          </a>
        </div>

        {/* Карточки — 2 колонки */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
        }}
          className="services-grid"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              style={{
                padding: '36px',
                borderRadius: '16px',
                border: s.highlight ? '1px solid #8B5CF6' : '1px solid #1A1A1A',
                background: s.highlight
                  ? 'linear-gradient(135deg, rgba(108,99,255,0.08) 0%, rgba(108,99,255,0.03) 100%)'
                  : '#0d0d0d',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s',
              }}
            >
              {s.highlight && (
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  background: '#8B5CF6',
                  fontSize: '10px',
                  fontWeight: 700,
                  color: '#fff',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                }}>
                  Популярное
                </div>
              )}

              {/* Номер */}
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '13px',
                color: s.highlight ? '#8B5CF6' : '#333',
                letterSpacing: '2px',
                marginBottom: '20px',
                fontWeight: 700,
              }}>
                {s.num}
              </div>

              {/* Заголовок */}
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
                fontWeight: 900,
                color: '#fff',
                letterSpacing: '-0.01em',
                marginBottom: '14px',
                lineHeight: 1.2,
              }}>
                {s.title}
              </h3>

              {/* Описание */}
              <p style={{
                fontSize: '14px',
                color: '#666',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}>
                {s.description}
              </p>

              {/* Теги */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {s.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '4px 10px',
                    borderRadius: '999px',
                    border: `1px solid ${s.highlight ? 'rgba(108,99,255,0.3)' : '#222'}`,
                    fontSize: '11px',
                    color: s.highlight ? '#9590ff' : '#444',
                  }}>
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
