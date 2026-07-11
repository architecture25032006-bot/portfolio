'use client'

import { motion } from 'framer-motion'
import Counter from '@/components/ui/Counter'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const mainStats = [
  { value: '121 650', label: 'просмотров', sub: 'за 14 дней', accent: '#8B5CF6' },
  { value: '92 769', label: 'охваченных аккаунтов', sub: '+1 656%', accent: '#111' },
  { value: '98,1%', label: 'новая аудитория', sub: 'холодный охват', accent: '#8B5CF6' },
  { value: '100+', label: 'новых подписчиков', sub: 'за 10 дней', accent: '#111' },
]

export default function Results() {
  return (
    <section
      id="results"
      style={{ background: '#F2F2F2', borderTop: '1px solid #E5E5E5', padding: '100px 40px' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease }}
          style={{ marginBottom: '48px' }}
        >
          <p style={{ fontSize: '11px', color: '#8B5CF6', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, marginBottom: '12px' }}>
            Мой личный кейс
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3.4rem)', fontWeight: 900, letterSpacing: '-0.02em', color: '#111', lineHeight: 1.05 }}>
            С нуля за 14 дней —<br />
            <span style={{ color: '#AAA' }}>только Reels, без рекламы</span>
          </h2>
        </motion.div>

        {/* 4 главных стата */}
        <div className="results-main-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', alignItems: 'stretch' }}>
          {mainStats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease, delay: i * 0.07 }}
              style={{
                padding: '32px 26px',
                borderRadius: '20px',
                background: i % 2 === 0 ? '#111' : '#fff',
                border: i % 2 === 0 ? 'none' : '1px solid #E5E5E5',
                minHeight: '150px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
                fontWeight: 900,
                color: i % 2 === 0 ? '#B4F32B' : '#8B5CF6',
                lineHeight: 1,
                marginBottom: '10px',
              }}>
                <Counter value={s.value} />
              </div>
              <div style={{ fontSize: '13px', color: i % 2 === 0 ? '#ddd' : '#333', fontWeight: 600, marginBottom: '4px' }}>{s.label}</div>
              <div style={{ fontSize: '11px', color: i % 2 === 0 ? '#666' : '#AAA' }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
