'use client'

import { motion } from 'framer-motion'
import Counter from '@/components/ui/Counter'
import MagneticButton from '@/components/ui/MagneticButton'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const stats = [
  { value: '>1M', label: 'просмотров суммарно' },
  { value: '$7K+', label: 'заработали клиенты' },
  { value: '3+', label: 'кейса с результатами' },
  { value: '$5K', label: 'личный доход за май' },
]

export default function Hero() {
  return (
    <section style={{
      background: '#F2F2F2',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '140px 40px 0' }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 14px', borderRadius: '999px',
            border: '1px solid #E0E0E0', fontSize: '12px', color: '#888',
            marginBottom: '40px', background: '#fff', width: 'fit-content',
          }}
        >
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6',
            display: 'inline-block', animation: 'pulse 2s infinite', boxShadow: '0 0 8px rgba(139,92,246,0.6)',
          }} />
          Осталось 2 места на июль
        </motion.div>

        {/* Heading */}
        <div style={{ marginBottom: '28px' }}>
          {[
            <><span style={{ color: '#111' }}>Reels,</span>{' '}<span style={{ color: '#8B5CF6' }}>которые продают.</span></>,
            <span style={{ color: '#111' }}>Рост аккаунта и клиенты —</span>,
            <span style={{ color: '#AAAAAA' }}>не просто просмотры</span>,
          ].map((line, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, ease, delay: 0.3 + i * 0.12 }}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.8rem, 5.5vw, 6rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.0,
                }}
              >
                {line}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.65 }}
          style={{ color: '#888', fontSize: '16px', lineHeight: 1.7, marginBottom: '40px', maxWidth: '480px' }}
        >
          Делаю короткий контент для экспертов и личных брендов,
          который системно приводит клиентов.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.75 }}
          style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '80px' }}
        >
          <MagneticButton
            href="https://t.me/m/HngAbPHEODZi"
            target="_blank"
            rel="noopener noreferrer"
            strength={0.4}
            style={{
              padding: '16px 32px', background: '#111', color: '#fff',
              borderRadius: '999px', fontSize: '15px', fontWeight: 700,
              textDecoration: 'none', boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
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
              padding: '16px 32px', border: '1px solid #DDD', color: '#666',
              borderRadius: '999px', fontSize: '15px', fontWeight: 500,
              textDecoration: 'none', background: '#fff',
            }}
          >
            Кейсы в TG
          </MagneticButton>
        </motion.div>

      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="hero-stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid #E5E5E5',
          background: '#fff',
        }}
      >
        {stats.map((s, i) => (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', padding: '28px 16px',
            borderRight: i < 3 ? '1px solid #E5E5E5' : 'none', textAlign: 'center',
          }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 900, color: '#111', lineHeight: 1 }}>
              <Counter value={s.value} />
            </div>
            <div style={{ fontSize: '11px', color: '#AAA', marginTop: '6px', letterSpacing: '0.3px' }}>
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </section>
  )
}
