'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const faqs = [
  {
    q: 'Сколько стоит работа?',
    a: 'Стоимость зависит от формата — пробный пакет из 5 рилсов или долгосрочное сопровождение. Точную цену называю на бесплатном разборе, когда пойму твою задачу и объём. Пиши в Telegram — обсудим.',
  },
  {
    q: 'А если контент не зайдёт?',
    a: 'Я работаю на данных, а не на удаче: тестирую хуки и форматы, оставляю то, что реально набирает охват. Первые 2 недели — это всегда тесты. Дальше масштабирую то, что сработало. На своём аккаунте я набрал 166K просмотров с нуля именно так.',
  },
  {
    q: 'Сколько времени это занимает?',
    a: 'Первые результаты видно за 2 недели, стабильный рост — от 3 месяцев (столько нужно алгоритму, чтобы начать продвигать тебя постоянно). От тебя нужно только снимать по готовым сценариям — остальное на мне.',
  },
  {
    q: 'Мне нужно самому монтировать или разбираться в этом?',
    a: 'Нет. Ты снимаешь по сценарию — я беру на себя стратегию, хуки, монтаж, субтитры и аналитику. Твоя задача — быть в кадре и заниматься своим делом.',
  },
  {
    q: 'В каких нишах ты работаешь?',
    a: 'Эксперты, личные бренды, инфобизнес. Уже есть кейсы в политике (армянский канал), личном блоге и монетизации через Telegram. Механика роста работает в любой нише — меняются только хуки и подача.',
  },
  {
    q: 'Как начать?',
    a: 'Пиши в Telegram и записывайся на бесплатный разбор блога — 30 минут, разберу нишу и точки роста, дам конкретный план. Дальше решаешь, работаем или нет. Без обязательств.',
  },
]

function Item({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: '1px solid #E5E5E5' }}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          padding: '26px 4px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1rem, 1.6vw, 1.25rem)', fontWeight: 800, color: '#111', lineHeight: 1.3 }}>
          {q}
        </span>
        <span style={{
          flexShrink: 0,
          width: '32px', height: '32px', borderRadius: '50%',
          background: isOpen ? '#8B5CF6' : '#fff',
          border: isOpen ? 'none' : '1px solid #DDD',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.25s, transform 0.25s',
          transform: isOpen ? 'rotate(45deg)' : 'none',
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke={isOpen ? '#fff' : '#111'} strokeWidth="2" strokeLinecap="round">
            <line x1="7" y1="1" x2="7" y2="13" /><line x1="1" y1="7" x2="13" y2="7" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.7, padding: '0 4px 26px', maxWidth: '760px' }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      style={{ background: '#F2F2F2', borderTop: '1px solid #E5E5E5', padding: '100px 40px' }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease }}
          style={{ marginBottom: '48px' }}
        >
          <p style={{ fontSize: '11px', color: '#8B5CF6', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, marginBottom: '12px' }}>
            Частые вопросы
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3.4rem)', fontWeight: 900, letterSpacing: '-0.02em', color: '#111', lineHeight: 1.05 }}>
            Отвечаю на главное
          </h2>
        </motion.div>

        <div style={{ borderTop: '1px solid #E5E5E5' }}>
          {faqs.map((f, i) => (
            <Item
              key={i}
              q={f.q}
              a={f.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
