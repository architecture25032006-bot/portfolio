'use client'

import { motion } from 'framer-motion'
import MagneticButton from '@/components/ui/MagneticButton'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

// SVG-иконки (lucide-стиль, currentColor)
const IconInstagram = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
)
const IconYouTube = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="4" /><path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
  </svg>
)
const IconTikTok = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 3c.3 2.1 1.6 3.6 3.5 3.9v2.6c-1.3.1-2.5-.3-3.5-1v6.1c0 3.3-2.4 5.4-5.3 5.4-2.7 0-4.9-2-4.9-4.7 0-2.9 2.4-4.9 5.6-4.5v2.7c-.4-.1-.9-.2-1.3-.1-1.1.1-1.8.9-1.7 2 .1 1 .9 1.7 1.9 1.7 1.1 0 1.9-.8 1.9-2.2V3h2.3z" />
  </svg>
)
const IconScissors = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
)
const IconTrending = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
  </svg>
)

// Ряд мелких bento-карточек под хедером
const miniCards = [
  { label: 'Instagram', sub: 'Reels', bg: '#fff', fg: '#111', icon: IconInstagram, iconColor: '#8B5CF6' },
  { label: 'YouTube', sub: 'Shorts', bg: '#111', fg: '#fff', icon: IconYouTube, iconColor: '#B4F32B' },
  { label: 'TikTok', sub: 'вертикаль', bg: '#fff', fg: '#111', icon: IconTikTok, iconColor: '#111' },
  { label: 'Монтаж', sub: 'и субтитры', bg: '#B4F32B', fg: '#111', icon: IconScissors, iconColor: '#111' },
  { label: 'Стратегия', sub: 'роста', bg: '#8B5CF6', fg: '#fff', icon: IconTrending, iconColor: '#fff' },
]

export default function Hero() {
  return (
    <section
      style={{
        background: '#F2F2F2',
        position: 'relative',
        overflow: 'hidden',
        padding: '130px 40px 40px',
      }}
    >
      {/* Глубина фона — мягкие цветные блики */}
      <div style={{ position: 'absolute', top: '-160px', right: '-120px', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 68%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '30%', left: '-140px', width: '440px', height: '440px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(180,243,43,0.14) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>

        {/* Верх: текст слева + визуал справа */}
        <div className="hero-main-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '40px', alignItems: 'center', minHeight: '62vh' }}>

          {/* Левая — текст */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease, delay: 0.1 }}
              style={{ fontSize: '12px', color: '#8B5CF6', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, marginBottom: '20px' }}
            >
              MalyshProduction · Reels-продюсинг
            </motion.p>

            <div style={{ marginBottom: '28px' }}>
              {[
                <>Делаем Reels,</>,
                <>которые{' '}<span style={{ color: '#8B5CF6' }}>продают</span></>,
              ].map((line, i) => (
                <div key={i} style={{ overflow: 'hidden' }}>
                  <motion.div
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.75, ease, delay: 0.25 + i * 0.1 }}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(2.4rem, 5vw, 5rem)',
                      fontWeight: 900,
                      letterSpacing: '-0.03em',
                      color: '#111',
                      lineHeight: 1.02,
                    }}
                  >
                    {line}
                  </motion.div>
                </div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.45 }}
              style={{ color: '#777', fontSize: '16px', lineHeight: 1.7, maxWidth: '440px', marginBottom: '36px' }}
            >
              Превращаю короткие видео в поток подписчиков и заявок.
              Ты получаешь клиентов — а не просмотры, которые ничего не приносят.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.55 }}
              style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}
            >
              <MagneticButton
                href="https://telegram.dog/m/HngAbPHEODZi"
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
                  boxShadow: '0 8px 28px rgba(139,92,246,0.32)',
                  cursor: 'pointer',
                }}
              >
                Смотреть кейсы →
              </MagneticButton>
              <MagneticButton
                href="https://telegram.dog/ir6eas3work"
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
          </div>

          {/* Правая — визуал (reel-мокап + плавающие чипы) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="hero-visual"
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '420px' }}
          >
            {/* Reel-фрейм с живым видео */}
            <div style={{
              position: 'relative',
              width: '250px',
              height: '440px',
              borderRadius: '28px',
              boxShadow: '0 30px 80px rgba(139,92,246,0.35)',
              overflow: 'hidden',
              border: '4px solid #fff',
              background: '#111',
            }}>
              <video
                src="/reel.mp4"
                poster="/reel-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* тонкий бейдж «в эфире» */}
              <div style={{
                position: 'absolute', zIndex: 2, top: '14px', left: '14px',
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '4px 10px', borderRadius: '999px',
                background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#B4F32B', display: 'inline-block', boxShadow: '0 0 8px #B4F32B' }} />
                <span style={{ fontSize: '10px', color: '#fff', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>Reels</span>
              </div>
            </div>

            {/* Плавающий чип — просмотры */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: '18%', left: '2%',
                background: '#fff', borderRadius: '16px', padding: '14px 18px',
                boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '22px', color: '#111' }}>47K</div>
              <div style={{ fontSize: '11px', color: '#999' }}>просмотров</div>
            </motion.div>

            {/* Плавающий чип — подписки */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', bottom: '16%', right: '0%',
                background: '#111', borderRadius: '16px', padding: '14px 18px',
                boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '22px', color: '#B4F32B' }}>+45</div>
              <div style={{ fontSize: '11px', color: '#aaa' }}>подписок с видео</div>
            </motion.div>

            {/* Чип — рост */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: '6%', right: '8%',
                background: '#B4F32B', borderRadius: '14px', padding: '10px 16px',
                boxShadow: '0 10px 30px rgba(180,243,43,0.4)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '16px', color: '#111' }}>▲ +1 934%</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Ряд мелких bento-карточек */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="hero-mini-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', marginTop: '48px' }}
        >
          {miniCards.map((c, i) => (
            <div
              key={i}
              className="card-lift"
              style={{
                background: c.bg,
                border: c.bg === '#fff' ? '1px solid #E5E5E5' : 'none',
                borderRadius: '18px',
                padding: '22px',
                minHeight: '130px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ color: c.iconColor, lineHeight: 1, display: 'flex' }}>{c.icon}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '16px', color: c.fg }}>{c.label}</div>
                <div style={{ fontSize: '12px', color: c.fg, opacity: 0.6 }}>{c.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
