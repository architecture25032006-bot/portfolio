'use client'

import { motion } from 'framer-motion'
import AuroraBlob from '@/components/ui/AuroraBlob'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const socials = [
  { icon: '✈️', label: 'Telegram', href: 'https://t.me/ir6eas3' },
  { icon: '📁', label: 'Портфолио TG', href: 'https://t.me/ir6eas3work' },
  { icon: '▶️', label: 'YouTube', href: 'https://www.youtube.com/@ir6east' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ background: '#0A0A0A', borderTop: '1px solid #141414', position: 'relative', zIndex: 1, overflow: 'hidden' }}
    >
      {/* Аура */}
      <AuroraBlob size={700} top="0" left="50%" opacity={0.18} duration={22} />

      {/* ── Верхний блок: заголовок + описание ── */}
      <div style={{ padding: '80px 40px 60px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          style={{ fontSize: '11px', color: '#8B5CF6', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 500, marginBottom: '16px' }}
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
          <span
            style={{
              background: 'linear-gradient(135deg, #c4b5fd 0%, #8B5CF6 40%, #6d28d9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            максимум?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          style={{ color: '#666', fontSize: '16px', maxWidth: '420px', margin: '0 auto', lineHeight: 1.6 }}
        >
          Забронируй созвон — разберём твою ситуацию и найдём
          как сделать контент, который продаёт.
        </motion.p>
      </div>

      {/* ── CTA бар ── */}
      <div style={{ borderTop: '1px solid #1A1A1A', background: '#0A0A0A' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '28px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          {/* Кнопка CTA */}
          <a
            href="https://t.me/m/HngAbPHEODZi"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '16px 36px',
              background: '#8B5CF6',
              color: '#fff',
              borderRadius: '999px',
              fontSize: '15px',
              fontWeight: 700,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              fontFamily: 'var(--font-heading)',
              boxShadow: '0 0 60px rgba(108,99,255,0.5)',
              display: 'inline-block',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Забронировать созвон
          </a>

          {/* Соцсети */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#555', textDecoration: 'none', whiteSpace: 'nowrap' }}
              >
                <span>{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Копирайт */}
      <div style={{ borderTop: '1px solid #141414', background: '#0A0A0A', padding: '14px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', fontSize: '12px', color: '#333' }}>
          © 2025 malyshproduction · Медиа-продюсер
        </div>
      </div>

    </section>
  )
}
