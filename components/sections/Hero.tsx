'use client'

import { motion } from 'framer-motion'
import MagneticButton from '@/components/ui/MagneticButton'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

// Ряд мелких bento-карточек под хедером (как в референсе)
const miniCards = [
  { label: 'Instagram', sub: 'Reels', bg: '#fff', fg: '#111', icon: '◎', iconColor: '#8B5CF6' },
  { label: 'YouTube', sub: 'Shorts', bg: '#111', fg: '#fff', icon: '▶', iconColor: '#B4F32B' },
  { label: 'TikTok', sub: 'вертикаль', bg: '#fff', fg: '#111', icon: '♪', iconColor: '#111' },
  { label: 'Монтаж', sub: 'и субтитры', bg: '#B4F32B', fg: '#111', icon: '✂', iconColor: '#111' },
  { label: 'Стратегия', sub: 'роста', bg: '#8B5CF6', fg: '#fff', icon: '↗', iconColor: '#fff' },
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
      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>

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
            {/* Reel-фрейм с фото */}
            <div style={{
              position: 'relative',
              width: '250px',
              height: '440px',
              borderRadius: '28px',
              boxShadow: '0 30px 80px rgba(139,92,246,0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              border: '4px solid #fff',
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/photo_2026-04-26_16-52-01.jpg"
                alt="Артём — MalyshProduction"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
              />
              {/* затемнение для контраста */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.45) 100%)' }} />
              {/* Play */}
              <div style={{
                position: 'relative', zIndex: 2,
                width: '68px', height: '68px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.95)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 8px 30px rgba(0,0,0,0.35)',
              }}>
                <div style={{ width: 0, height: 0, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', borderLeft: '20px solid #8B5CF6', marginLeft: '5px' }} />
              </div>
              {/* низ — «прогресс» */}
              <div style={{ position: 'absolute', zIndex: 2, bottom: '22px', left: '22px', right: '22px', height: '4px', borderRadius: '4px', background: 'rgba(255,255,255,0.35)' }}>
                <div style={{ width: '62%', height: '100%', borderRadius: '4px', background: '#B4F32B' }} />
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
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '16px', color: '#111' }}>▲ +1 656%</div>
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
              <div style={{ fontSize: '26px', color: c.iconColor, lineHeight: 1 }}>{c.icon}</div>
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
