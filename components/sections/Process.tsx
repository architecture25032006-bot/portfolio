'use client'

import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const steps = [
  {
    num: '01',
    title: 'Заявка и разбор',
    description: 'Пишешь в Telegram — разбираю твой аккаунт, нишу и конкурентов. Обсуждаем цель и формат работы.',
    accent: '#8B5CF6',
  },
  {
    num: '02',
    title: 'Стратегия и сценарии',
    description: 'Составляю контент-план под твою нишу, пишу хуки и сценарии, которые цепляют с первых секунд.',
    accent: '#B4F32B',
  },
  {
    num: '03',
    title: 'Съёмка и монтаж',
    description: 'Ты снимаешь по готовым сценариям — я беру монтаж, субтитры и оформление на себя. Всё под ключ.',
    accent: '#8B5CF6',
  },
  {
    num: '04',
    title: 'Публикация и рост',
    description: 'Выкладываем по плану, смотрим аналитику, докручиваем то, что заходит. Растёшь на данных.',
    accent: '#B4F32B',
  },
]

export default function Process() {
  return (
    <section
      id="process"
      style={{ background: '#F2F2F2', borderTop: '1px solid #E5E5E5', padding: '100px 40px' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease }}
          style={{ marginBottom: '56px' }}
        >
          <p style={{ fontSize: '11px', color: '#8B5CF6', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, marginBottom: '12px' }}>
            Как проходит работа
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3.4rem)', fontWeight: 900, letterSpacing: '-0.02em', color: '#111', lineHeight: 1.05 }}>
            Всё прозрачно —<br />
            <span style={{ color: '#AAA' }}>от заявки до роста</span>
          </h2>
        </motion.div>

        <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              className="card-lift"
              style={{
                padding: '32px 28px',
                borderRadius: '20px',
                background: '#fff',
                border: '1px solid #E5E5E5',
                minHeight: '230px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.6rem',
                fontWeight: 900,
                color: s.accent,
                lineHeight: 1,
                marginBottom: '20px',
                letterSpacing: '-0.02em',
              }}>
                {s.num}
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 800, color: '#111', marginBottom: '12px', lineHeight: 1.2 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '13.5px', color: '#777', lineHeight: 1.6, flex: 1 }}>
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
