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

const bestReel = [
  { value: '47 946', label: 'просмотров' },
  { value: '1 100', label: 'лайков' },
  { value: '102', label: 'сохранения' },
  { value: '87', label: 'отправок' },
  { value: '45', label: 'подписок' },
]

export default function Results() {
  return (
    <section
      id="results"
      style={{ background: '#F2F2F2', borderTop: '1px solid #E5E5E5', padding: '100px 40px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease }}
          style={{ marginBottom: '56px' }}
        >
          <p style={{ fontSize: '11px', color: '#8B5CF6', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '10px' }}>
            Мой личный кейс
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.02em', color: '#111', lineHeight: 1.1 }}>
            С нуля за 14 дней —<br />
            <span style={{ color: '#AAA' }}>только Reels, без рекламы</span>
          </h2>
        </motion.div>

        {/* 4 главных стата */}
        <div className="results-main-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '12px' }}>
          {mainStats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease, delay: i * 0.07 }}
              style={{
                padding: '32px 24px',
                borderRadius: '16px',
                background: i % 2 === 0 ? '#111' : '#fff',
                border: i % 2 === 0 ? 'none' : '1px solid #E5E5E5',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                fontWeight: 900,
                color: i % 2 === 0 ? '#8B5CF6' : '#111',
                lineHeight: 1,
                marginBottom: '8px',
              }}>
                <Counter value={s.value} />
              </div>
              <div style={{ fontSize: '13px', color: i % 2 === 0 ? '#ccc' : '#333', fontWeight: 600, marginBottom: '4px' }}>{s.label}</div>
              <div style={{ fontSize: '11px', color: i % 2 === 0 ? '#555' : '#AAA' }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Рекордный рилс */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease, delay: 0.28 }}
          style={{
            padding: '36px 40px',
            borderRadius: '16px',
            background: '#fff',
            border: '1px solid #E5E5E5',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#8B5CF6', boxShadow: '0 0 8px rgba(139,92,246,0.5)', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontSize: '11px', color: '#8B5CF6', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
              Рекордный Reels — одно видео
            </span>
            <span style={{ marginLeft: 'auto', fontSize: '11px', color: '#CCC' }}>30 июня — 14 июля 2026</span>
          </div>

          <div className="best-reel-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px' }}>
            {bestReel.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 2vw, 1.8rem)', fontWeight: 900, color: '#111', marginBottom: '6px' }}>
                  <Counter value={s.value} />
                </div>
                <div style={{ fontSize: '12px', color: '#AAA' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #F0F0F0', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {['Удержание 30 сек', 'Доля пропусков 18,4%', '98,8% охвата — только Reels', '98,1% — новые люди'].map(tag => (
              <span key={tag} style={{ fontSize: '12px', color: '#CCC' }}>{tag}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
