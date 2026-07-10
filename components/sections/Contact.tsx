'use client'

import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const socials = [
  { label: 'Telegram', href: 'https://t.me/ir6eas3' },
  { label: 'Портфолио TG', href: 'https://t.me/ir6eas3work' },
  { label: 'YouTube', href: 'https://www.youtube.com/@ir6east' },
]

// Что получишь на разборе
const includes = [
  'Аудит твоего аккаунта и контента',
  'Разбор ниши и конкурентов',
  'Точки роста и ошибки, которые тебя тормозят',
  'Пошаговый план на 2–3 месяца',
]

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ background: '#111', position: 'relative', zIndex: 1, overflow: 'hidden' }}
    >
      <div style={{ padding: '100px 40px 80px', position: 'relative', zIndex: 2, maxWidth: '1000px', margin: '0 auto' }}>

        {/* Оффер-карточка */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          style={{
            borderRadius: '28px',
            background: 'linear-gradient(160deg, #1B6EF3 0%, #0d3a8f 100%)',
            padding: 'clamp(36px, 6vw, 72px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Плашка «бесплатно» */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '7px 14px', borderRadius: '999px',
            background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)',
            fontSize: '12px', color: '#fff', fontWeight: 600, marginBottom: '28px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#B4F32B', display: 'inline-block' }} />
            Бесплатно · 30 минут · в Telegram
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4.5vw, 4rem)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            color: '#fff',
            lineHeight: 1.03,
            marginBottom: '20px',
          }}>
            Разберу твой блог<br />
            и покажу точки роста
          </h2>

          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: 1.6, maxWidth: '520px', marginBottom: '32px' }}>
            Бесплатный разбор аккаунта: смотрю нишу, контент и конкурентов —
            и даю конкретный план, что делать, чтобы блог начал приводить клиентов.
          </p>

          {/* Что входит */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '40px', maxWidth: '640px' }} className="offer-includes">
            {includes.map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#fff' }}>
                <span style={{ color: '#B4F32B', fontWeight: 900, flexShrink: 0 }}>✓</span>
                {item}
              </div>
            ))}
          </div>

          <a
            href="https://t.me/m/HngAbPHEODZi"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '18px 44px',
              background: '#fff',
              color: '#111',
              borderRadius: '999px',
              fontSize: '16px',
              fontWeight: 800,
              textDecoration: 'none',
              fontFamily: 'var(--font-heading)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            Записаться на разбор блога →
          </a>
        </motion.div>
      </div>

      {/* Нижняя полоска */}
      <div style={{ borderTop: '1px solid #1A1A1A' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '28px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ fontSize: '12px', color: '#555' }}>
            © 2026 MalyshProduction · Reels-продюсер
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '13px', color: '#888', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
