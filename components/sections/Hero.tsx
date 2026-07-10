'use client'

import { motion } from 'framer-motion'
import AuroraBlob from '@/components/ui/AuroraBlob'
import Counter from '@/components/ui/Counter'
import MagneticButton from '@/components/ui/MagneticButton'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const stats = [
  { value: '121K+', label: 'просмотров за 14 дней' },
  { value: '92K+', label: 'охваченных аккаунтов' },
  { value: '$5K+', label: 'доход за май 2026' },
  { value: '100+', label: 'подписчиков с нуля' },
]

export default function Hero() {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateRows: '1fr auto',
        minHeight: '100vh',
        background: '#0A0A0A',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Аура за фоном */}
      <AuroraBlob size={700} top="-200px" right="-150px" opacity={0.28} duration={20} />
      <AuroraBlob size={500} bottom="200px" left="40%" opacity={0.18} duration={26} color="#4f46e5" />

      {/* Главный блок: фото слева + текст справа */}
      <div
        className="hero-main-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Левая колонка — фото */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease }}
          className="hero-photo-col"
          style={{ position: 'relative', background: '#0d0d0d', overflow: 'hidden' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/photo_2026-04-26_16-52-01.jpg"
            alt="malyshproduction"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
          />
          {/* Градиент снизу */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 72%, #0A0A0A 100%)',
              pointerEvents: 'none',
            }}
          />
          {/* Градиент справа */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, transparent 65%, #0A0A0A 100%)',
              pointerEvents: 'none',
            }}
          />
        </motion.div>

        {/* Правая колонка — текст */}
        <div
          className="hero-text-col"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '8rem 3rem 3rem 3rem',
            background: 'transparent',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* Бейджик */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              borderRadius: '999px',
              border: '1px solid #222',
              fontSize: '12px',
              color: '#888',
              marginBottom: '32px',
              width: 'fit-content',
              background: 'rgba(13,13,13,0.85)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#8B5CF6',
                display: 'inline-block',
                animation: 'pulse 2s infinite',
                boxShadow: '0 0 10px #8B5CF6',
              }}
            />
            Осталось 2 места на июль
          </motion.div>

          {/* Роль */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.2 }}
            style={{
              fontSize: '11px',
              color: '#8B5CF6',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontWeight: 500,
              marginBottom: '12px',
            }}
          >
            Медиа-продюсер
          </motion.p>

          {/* Основной заголовок — построчный reveal через animate (не whileInView) */}
          <div style={{ marginBottom: '20px' }}>
            {[
              <>Reels, которые{' '}<span style={{ background: 'linear-gradient(135deg, #c4b5fd 0%, #8B5CF6 50%, #6d28d9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>продают.</span></>,
              'Рост аккаунта и клиенты —',
              'не просто просмотры',
            ].map((line, i) => (
              <div key={i} style={{ overflow: 'hidden' }}>
                <motion.div
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.75, ease, delay: 0.5 + i * 0.12 }}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.8rem, 2.8vw, 3.2rem)',
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    color: '#fff',
                    lineHeight: 1.1,
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
            transition={{ duration: 0.5, ease, delay: 0.35 }}
            style={{ color: '#888', fontSize: '15px', lineHeight: 1.7, marginBottom: '36px' }}
          >
            Reels-продюсер для экспертов и личных брендов. Делаю короткий контент, который
            приводит клиентов — не просто набирает просмотры.
          </motion.p>

          {/* CTA кнопки — магнитные */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.45 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <MagneticButton
              href="https://t.me/m/HngAbPHEODZi"
              target="_blank"
              rel="noopener noreferrer"
              strength={0.4}
              style={{
                padding: '14px 28px',
                background: '#8B5CF6',
                color: '#fff',
                borderRadius: '999px',
                fontSize: '14px',
                fontWeight: 700,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                boxShadow: '0 0 40px rgba(108,99,255,0.4)',
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
                padding: '14px 28px',
                border: '1px solid #2a2a2a',
                color: '#888',
                borderRadius: '999px',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                background: 'rgba(13,13,13,0.6)',
                backdropFilter: 'blur(8px)',
              }}
            >
              Кейсы в TG
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Полоска со статами + count-up */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="hero-stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid #181818',
          background: 'rgba(10,10,10,0.8)',
          backdropFilter: 'blur(8px)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '22px 16px',
              borderRight: i < 3 ? '1px solid #181818' : 'none',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '22px',
                fontWeight: 900,
                color: '#fff',
                lineHeight: 1,
              }}
            >
              <Counter value={s.value} />
            </div>
            <div style={{ fontSize: '11px', color: '#555', marginTop: '6px', letterSpacing: '0.5px' }}>
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
