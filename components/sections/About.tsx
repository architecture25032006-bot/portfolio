'use client'

import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const skills = [
  'Reels / Shorts / TikTok',
  'Сценарии и монтаж',
  'Контент-стратегия',
  'Монетизация блога',
  'Воронки продаж',
  'YouTube → Telegram',
]

export default function About() {
  return (
    <section
      id="about"
      style={{ background: '#0A0A0A', borderTop: '1px solid #141414', padding: '80px 40px' }}
    >
      <div className="about-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

        {/* Левая — текст */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            style={{ fontSize: '11px', color: '#6C63FF', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 500, marginBottom: '16px' }}
          >
            Обо мне
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease, delay: 0.05 }}
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.02em', color: '#fff', lineHeight: 1.05, marginBottom: '24px' }}
          >
            Медиа-продюсер,<br />
            <span style={{ color: '#6C63FF' }}>который сделал</span><br />
            это на себе
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.7, marginBottom: '16px' }}>
              Я не просто продюсер — я сам прошёл путь от нуля до работающей системы монетизации.
              Запустил блог на YouTube, выстроил воронку в Telegram и заработал более $3 000
              на аудитории в 250 человек.
            </p>
            <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.7, marginBottom: '32px' }}>
              Знаю изнутри, что работает: снимал, монтировал, писал сценарии, тестировал форматы.
              Теперь помогаю экспертам и брендам выжать максимум из короткого контента.
            </p>

            {/* Навыки */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {skills.map((skill) => (
                <span
                  key={skill}
                  style={{ padding: '6px 14px', borderRadius: '999px', border: '1px solid #222', fontSize: '13px', color: '#888', background: '#0d0d0d' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Правая — фото */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="about-photo-col"
          style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '3/4', background: '#0d0d0d' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/photo_2026-02-08_17-20-36.jpg"
            alt="malyshproduction"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '40%',
              background: 'linear-gradient(to top, #0d0d0d, transparent)',
              pointerEvents: 'none',
            }}
          />
        </motion.div>

      </div>
    </section>
  )
}
