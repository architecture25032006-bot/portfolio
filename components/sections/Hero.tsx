'use client'

import { motion } from 'framer-motion'
import Counter from '@/components/ui/Counter'
import MagneticButton from '@/components/ui/MagneticButton'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

// Суммарные цифры по всем проектам (Армения + личный аккаунт + блог)
const stats = [
  { value: '344K+', label: 'просмотров суммарно', bg: '#111', fg: '#fff', num: '#8B5CF6' },
  { value: '92K+', label: 'охват аккаунтов', bg: '#8B5CF6', fg: '#fff', num: '#fff' },
  { value: '+600', label: 'подписчиков клиентам', bg: '#C9F31D', fg: '#111', num: '#111' },
  { value: '$7K+', label: 'заработали клиенты', bg: '#fff', fg: '#111', num: '#111' },
]

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#F2F2F2',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 40px 60px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', textAlign: 'center' }}>

        {/* Бейдж */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '7px 14px',
            borderRadius: '999px',
            border: '1px solid #E0E0E0',
            fontSize: '12px',
            color: '#666',
            marginBottom: '28px',
            background: '#fff',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          Осталось 2 места на июль
        </motion.div>

        {/* Роль */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease, delay: 0.15 }}
          style={{ fontSize: '12px', color: '#8B5CF6', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, marginBottom: '18px' }}
        >
          MalyshProduction · Reels-продюсинг
        </motion.p>

        {/* Заголовок */}
        <div style={{ marginBottom: '28px' }}>
          {[
            <>Reels, которые{' '}<span style={{ color: '#8B5CF6' }}>продают.</span></>,
            'Рост аккаунта и клиенты —',
            <span key="x" style={{ color: '#AAA' }}>не просто просмотры</span>,
          ].map((line, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, ease, delay: 0.35 + i * 0.1 }}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.2rem, 5.5vw, 4.8rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  color: '#111',
                  lineHeight: 1.05,
                }}
              >
                {line}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Описание */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.55 }}
          style={{ color: '#777', fontSize: '16px', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto 40px' }}
        >
          Reels-продюсер для экспертов и личных брендов. Делаю короткий контент,
          который приводит клиентов — не просто набирает просмотры.
        </motion.p>

        {/* CTA — по центру */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.65 }}
          style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '72px' }}
        >
          <MagneticButton
            href="https://t.me/m/HngAbPHEODZi"
            target="_blank"
            rel="noopener noreferrer"
            strength={0.4}
            style={{
              padding: '15px 32px',
              background: '#8B5CF6',
              color: '#fff',
              borderRadius: '999px',
              fontSize: '15px',
              fontWeight: 700,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              boxShadow: '0 8px 32px rgba(139,92,246,0.35)',
              cursor: 'pointer',
            }}
          >
            Записаться на созвон →
          </MagneticButton>
          <MagneticButton
            href="https://t.me/ir6eas3work"
            target="_blank"
            rel="noopener noreferrer"
            strength={0.3}
            style={{
              padding: '15px 32px',
              border: '1px solid #DDD',
              color: '#333',
              borderRadius: '999px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              background: '#fff',
            }}
          >
            Кейсы в TG
          </MagneticButton>
        </motion.div>

        {/* Bento-статы */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="hero-stats-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                background: s.bg,
                border: s.bg === '#fff' ? '1px solid #E5E5E5' : 'none',
                borderRadius: '18px',
                padding: '28px 20px',
                textAlign: 'left',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 900,
                color: s.num,
                lineHeight: 1,
                marginBottom: '8px',
              }}>
                <Counter value={s.value} />
              </div>
              <div style={{ fontSize: '12px', color: s.fg, opacity: 0.7, letterSpacing: '0.2px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </section>
  )
}
