'use client'

import { motion } from 'framer-motion'
import Counter from '@/components/ui/Counter'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const mainStats = [
  { value: '121 650', label: 'просмотров', sub: 'за 14 дней', accent: '#8B5CF6' },
  { value: '92 769', label: 'охваченных аккаунтов', sub: '+1 656%', accent: '#22D3EE' },
  { value: '98,1%', label: 'новая аудитория', sub: 'холодный охват', accent: '#8B5CF6' },
  { value: '100+', label: 'новых подписчиков', sub: 'за 10 дней', accent: '#22D3EE' },
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
      style={{
        background: '#0A0A0A',
        borderTop: '1px solid #141414',
        padding: '100px 40px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease }}
          style={{ marginBottom: '56px' }}
        >
          <p style={{ fontSize: '11px', color: '#8B5CF6', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 500, marginBottom: '10px' }}>
            Мои результаты
          </p>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            color: '#fff',
            lineHeight: 1.1,
          }}>
            Что я сделал на своём аккаунте<br />
            <span style={{ color: '#555' }}>с нуля — только Reels, без рекламы</span>
          </h2>
        </motion.div>

        {/* 4 главных стата */}
        <div
          className="results-main-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '16px' }}
        >
          {mainStats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              style={{
                padding: '32px 24px',
                borderRadius: '16px',
                border: '1px solid #1A1A1A',
                background: '#0d0d0d',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)',
                fontWeight: 900,
                color: s.accent,
                lineHeight: 1,
                marginBottom: '8px',
              }}>
                <Counter value={s.value} />
              </div>
              <div style={{ fontSize: '13px', color: '#ccc', fontWeight: 600, marginBottom: '4px' }}>{s.label}</div>
              <div style={{ fontSize: '11px', color: '#444' }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Карточка рекордного рилса */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease, delay: 0.3 }}
          style={{
            padding: '36px 40px',
            borderRadius: '16px',
            border: '1px solid rgba(139,92,246,0.2)',
            background: 'linear-gradient(135deg, rgba(139,92,246,0.05) 0%, rgba(34,211,238,0.03) 100%)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
            <span style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: '#8B5CF6', boxShadow: '0 0 10px #8B5CF6',
              display: 'inline-block', flexShrink: 0,
            }} />
            <span style={{ fontSize: '11px', color: '#8B5CF6', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>
              Рекордный Reels — одно видео
            </span>
            <span style={{ marginLeft: 'auto', fontSize: '11px', color: '#333' }}>30 июня — 14 июля 2026</span>
          </div>

          <div
            className="best-reel-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px' }}
          >
            {bestReel.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.3rem, 2.2vw, 1.9rem)',
                  fontWeight: 900,
                  color: '#fff',
                  marginBottom: '6px',
                }}>
                  <Counter value={s.value} />
                </div>
                <div style={{ fontSize: '12px', color: '#555' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '24px',
            paddingTop: '20px',
            borderTop: '1px solid #1A1A1A',
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
          }}>
            {[
              'Удержание 30 сек',
              'Доля пропусков 18,4%',
              '98,8% охвата — только Reels',
              '98,1% аудитория — новые люди',
            ].map(tag => (
              <span key={tag} style={{ fontSize: '12px', color: '#444' }}>{tag}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
