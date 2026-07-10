'use client'

import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const socials = [
  { label: 'Telegram', href: 'https://t.me/ir6eas3' },
  { label: 'Портфолио TG', href: 'https://t.me/ir6eas3work' },
  { label: 'YouTube', href: 'https://www.youtube.com/@ir6east' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ background: '#111', position: 'relative', zIndex: 1, overflow: 'hidden' }}
    >
      <div style={{ padding: '100px 40px 80px', textAlign: 'center', position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          style={{ fontSize: '11px', color: '#1B6EF3', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '16px' }}
        >
          Сотрудничество
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease, delay: 0.05 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.4rem, 5vw, 5rem)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            color: '#fff',
            lineHeight: 1.05,
            marginBottom: '24px',
          }}
        >
          Готов выжать<br />
          <span style={{ color: '#1B6EF3' }}>максимум?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          style={{ color: '#555', fontSize: '16px', lineHeight: 1.6, marginBottom: '48px' }}
        >
          Разберём твою ситуацию и найдём как сделать контент, который продаёт.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          href="https://t.me/m/HngAbPHEODZi"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '18px 48px',
            background: '#1B6EF3',
            color: '#fff',
            borderRadius: '999px',
            fontSize: '16px',
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 0 60px rgba(27,110,243,0.4)',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Забронировать созвон
        </motion.a>
      </div>

      {/* Нижняя полоска */}
      <div style={{ borderTop: '1px solid #1A1A1A' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '28px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ fontSize: '12px', color: '#333' }}>
            © 2026 MalyshProduction · Reels-продюсер
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '13px', color: '#444', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
