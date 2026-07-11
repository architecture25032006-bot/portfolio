'use client'

import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const socials = [
  { label: 'Telegram', href: 'https://t.me/ir6eas3' },
  { label: 'Портфолио TG', href: 'https://t.me/ir6eas3work' },
  { label: 'YouTube', href: 'https://www.youtube.com/@ir6east' },
]

const includes = [
  'Аудит твоего аккаунта и контента',
  'Разбор ниши и конкурентов',
  'Точки роста и ошибки, которые тормозят',
  'Пошаговый план на 2–3 месяца',
]

const trust = [
  { value: '121K', label: 'просмотров за 14 дней' },
  { value: '92K', label: 'охваченных аккаунтов' },
  { value: '100+', label: 'подписчиков за 10 дней' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ background: '#111', position: 'relative', zIndex: 1, overflow: 'hidden' }}
    >
      <div style={{ padding: '100px 40px 80px', position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto' }}>

        {/* Оффер-карточка */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          style={{
            borderRadius: '32px',
            background: 'linear-gradient(150deg, #8B5CF6 0%, #4c1d95 100%)',
            padding: 'clamp(40px, 5vw, 80px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Декоративный лаймовый блик */}
          <div style={{ position: 'absolute', top: '-120px', right: '-80px', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(180,243,43,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />

          {/* Плашка */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 16px', borderRadius: '999px',
            background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)',
            fontSize: '12px', color: '#fff', fontWeight: 600, marginBottom: '36px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#B4F32B', display: 'inline-block' }} />
            Бесплатно · 30 минут · в Telegram
          </div>

          {/* Две колонки */}
          <div className="final-offer-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '56px', alignItems: 'start', position: 'relative', zIndex: 2 }}>

            {/* Левая — питч + CTA */}
            <div>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 4.8vw, 4.4rem)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                color: '#fff',
                lineHeight: 1.0,
                marginBottom: '22px',
              }}>
                Разберу твой блог<br />
                и покажу<br />
                <span style={{ color: '#B4F32B' }}>точки роста</span>
              </h2>

              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: 1.6, maxWidth: '480px', marginBottom: '32px' }}>
                Смотрю нишу, контент и конкурентов — и даю конкретный план,
                что делать, чтобы блог начал приводить клиентов. Без воды.
              </p>

              {/* Пруф-цифры */}
              <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '36px' }}>
                {trust.map(t => (
                  <div key={t.label}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '28px', color: '#B4F32B', lineHeight: 1 }}>{t.value}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', marginTop: '4px' }}>{t.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="https://t.me/m/HngAbPHEODZi"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '20px 48px',
                  background: '#B4F32B',
                  color: '#111',
                  borderRadius: '999px',
                  fontSize: '17px',
                  fontWeight: 800,
                  textDecoration: 'none',
                  fontFamily: 'var(--font-heading)',
                  boxShadow: '0 14px 44px rgba(180,243,43,0.35)',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                Записаться на разбор блога →
              </a>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '16px' }}>
                ⚡ Осталось 2 места на этот месяц
              </div>
            </div>

            {/* Правая — что входит */}
            <div style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '20px',
              padding: '32px',
            }}>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, marginBottom: '20px' }}>
                Что входит
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {includes.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: '#fff', lineHeight: 1.4 }}>
                    <span style={{ color: '#111', background: '#B4F32B', width: '20px', height: '20px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 900, flexShrink: 0 }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Нижняя полоска */}
      <div style={{ borderTop: '1px solid #1A1A1A' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '28px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
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
