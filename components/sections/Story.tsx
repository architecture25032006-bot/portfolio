'use client'

import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

export default function Story() {
  return (
    <section
      id="story"
      style={{
        background: '#0A0A0A',
        borderTop: '1px solid #141414',
        padding: '100px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Фоновая водяная надпись */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(6rem, 20vw, 24rem)',
        fontWeight: 900,
        color: 'rgba(255,255,255,0.015)',
        letterSpacing: '-0.04em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        userSelect: 'none',
        textTransform: 'uppercase',
      }}>
        GAZ
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease }}
          style={{ marginBottom: '64px' }}
        >
          <p style={{ fontSize: '11px', color: '#6C63FF', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 500, marginBottom: '10px' }}>
            Моя история
          </p>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            color: '#fff',
            lineHeight: 1.1,
          }}>
            От официанта до<br />
            <span style={{
              background: 'linear-gradient(135deg, #a5a0ff 0%, #6C63FF 50%, #4f46e5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              медиа-продюсера
            </span>
          </h2>
        </motion.div>

        {/* Основной блок: фото + история */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'start',
        }}
          className="story-main-grid"
        >
          {/* Фото официанта */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              aspectRatio: '3/4',
              background: '#111',
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/photo_2026-05-21_00-50-45.jpg"
                alt="Год назад — официант"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                  filter: 'grayscale(30%)',
                }}
              />
              {/* Лёгкое затемнение снизу */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent 60%, rgba(10,10,10,0.7) 100%)',
              }} />
              {/* Лейбл */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                padding: '6px 14px',
                borderRadius: '999px',
                background: 'rgba(10,10,10,0.85)',
                border: '1px solid #333',
                fontSize: '12px',
                color: '#888',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                backdropFilter: 'blur(8px)',
              }}>
                2024 — официант
              </div>
            </div>
          </motion.div>

          {/* История */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            style={{ paddingTop: '8px' }}
          >
            {/* Цитата-зацепка */}
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 1.3,
              marginBottom: '32px',
              letterSpacing: '-0.01em',
            }}>
              «Принеси, налей и не мешай» — это было моей реальностью каждый день.
            </div>

            {/* Три блока истории */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

              <div>
                <div style={{
                  display: 'inline-block',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  border: '1px solid #222',
                  fontSize: '10px',
                  color: '#555',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                  fontWeight: 600,
                }}>
                  Было
                </div>
                <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.75 }}>
                  Год назад я носился с тарелками 12+ часов в день. Деньги — минимальные,
                  свободного времени — ноль. Но грызла одна мысль:{' '}
                  <span style={{ color: '#bbb' }}>я не хочу так провести всю оставшуюся жизнь.</span>
                </p>
              </div>

              <div style={{ width: '1px', height: '24px', background: 'linear-gradient(to bottom, #222, transparent)', marginLeft: '1px' }} />

              <div>
                <div style={{
                  display: 'inline-block',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  border: '1px solid #222',
                  fontSize: '10px',
                  color: '#555',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                  fontWeight: 600,
                }}>
                  Октябрь 2025
                </div>
                <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.75 }}>
                  Начал изучать продажи и Reels-продюсирование — с нуля, без наставника, без бюджета.
                  Через тернии, через{' '}
                  <span style={{ color: '#bbb' }}>множество отказов</span>.
                  Но продолжал.
                </p>
              </div>

              <div style={{ width: '1px', height: '24px', background: 'linear-gradient(to bottom, #6C63FF44, transparent)', marginLeft: '1px' }} />

              <div>
                <div style={{
                  display: 'inline-block',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  border: '1px solid #6C63FF',
                  fontSize: '10px',
                  color: '#6C63FF',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                  fontWeight: 600,
                }}>
                  Сейчас
                </div>
                <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.75 }}>
                  Переехал в Грузию. Зарабатываю{' '}
                  <span style={{ color: '#fff', fontWeight: 600 }}>$3 000+</span>{' '}
                  на своих услугах. Абсолютно свободен —
                  делаю что хочу, когда хочу и работаю с кем хочу.
                  <span style={{ color: '#bbb' }}> Без начальника. Без графика.</span>
                </p>
              </div>

            </div>

            {/* Итоговая плашка */}
            <div style={{
              marginTop: '40px',
              padding: '20px 24px',
              borderRadius: '12px',
              border: '1px solid #1E1E1E',
              background: 'linear-gradient(135deg, rgba(108,99,255,0.06) 0%, transparent 100%)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}>
              <div style={{
                width: '3px',
                height: '48px',
                background: 'linear-gradient(to bottom, #6C63FF, #4f46e5)',
                borderRadius: '2px',
                flexShrink: 0,
              }} />
              <p style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '14px',
                fontWeight: 700,
                color: '#888',
                lineHeight: 1.6,
                letterSpacing: '-0.01em',
              }}>
                Теперь строю то же самое для своих клиентов —
                {' '}<span style={{ color: '#fff' }}>систему, которая реально работает и приносит деньги.</span>
              </p>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  )
}
