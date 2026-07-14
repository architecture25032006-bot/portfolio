'use client'

import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

// Карточки в стиле референса: метка-категория сверху, заголовок, «Подробнее»
const services = [
  {
    cat: 'Этап 01',
    title: 'Хуки и сценарии',
    description: 'Твои видео перестают пролистывать. Сильный хук в первые 2 секунды удерживает зрителя — и он досматривает до конца.',
    bg: '#111', fg: '#fff', sub: '#999', catColor: '#B4F32B', link: '#fff',
  },
  {
    cat: 'Этап 02',
    title: 'Монтаж и субтитры',
    description: 'Выше досмотр — больше показов от алгоритма. Динамичный монтаж и субтитры превращают просмотры в охват.',
    bg: '#fff', fg: '#111', sub: '#888', catColor: '#8B5CF6', link: '#8B5CF6',
  },
  {
    cat: 'Этап 03',
    title: 'Стратегия роста',
    description: 'Контент-план под твою нишу, который стабильно приводит подписчиков и заявки, а не даёт разовые всплески.',
    bg: '#8B5CF6', fg: '#fff', sub: 'rgba(255,255,255,0.85)', catColor: '#B4F32B', link: '#fff',
  },
  {
    cat: 'Этап 04',
    title: 'A/B тест форматов',
    description: 'Оставляю только то, что реально работает на твою аудиторию. Ты растёшь на данных, а не на догадках.',
    bg: '#B4F32B', fg: '#111', sub: '#3a4700', catColor: '#111', link: '#111',
  },
]

const socials = [
  { label: 'TG', href: 'https://telegram.dog/ir6eas3' },
  { label: 'YT', href: 'https://www.youtube.com/@ir6east' },
  { label: 'IG', href: 'https://telegram.dog/ir6eas3work' },
]

export default function Services() {
  return (
    <section
      id="services"
      style={{ background: '#F2F2F2', borderTop: '1px solid #E5E5E5', padding: '100px 40px' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Шапка секции: заголовок + описание слева, соц-иконки справа */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ maxWidth: '620px' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3.4rem)', fontWeight: 900, letterSpacing: '-0.02em', color: '#111', lineHeight: 1.05, marginBottom: '16px' }}>
              Что ты получаешь<br />от работы со мной
            </h2>
            <p style={{ color: '#888', fontSize: '15px', lineHeight: 1.6, maxWidth: '480px' }}>
              Ты занимаешься бизнесом — я беру на себя весь путь от хука до заявки. Полный цикл продюсирования под ключ.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{
                  width: '42px', height: '42px', borderRadius: '50%',
                  border: '1px solid #E0E0E0', background: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '12px', fontWeight: 700, color: '#555', textDecoration: 'none',
                }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Сетка карточек */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }} className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              style={{
                padding: '28px',
                borderRadius: '20px',
                background: s.bg,
                border: s.bg === '#fff' ? '1px solid #E5E5E5' : 'none',
                minHeight: '260px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ fontSize: '11px', color: s.catColor, letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, marginBottom: '20px' }}>
                {s.cat}
              </div>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 900, color: s.fg, letterSpacing: '-0.01em', marginBottom: '12px', lineHeight: 1.15 }}>
                {s.title}
              </h3>

              <p style={{ fontSize: '13.5px', color: s.sub, lineHeight: 1.6, flex: 1 }}>
                {s.description}
              </p>

              <a
                href="https://telegram.dog/m/HngAbPHEODZi"
                target="_blank"
                rel="noopener noreferrer"
                className="service-more"
                style={{ fontSize: '13px', fontWeight: 700, color: s.link, marginTop: '20px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', width: 'fit-content' }}
              >
                Подробнее <span className="service-arrow" style={{ transition: 'transform 0.2s' }}>→</span>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
