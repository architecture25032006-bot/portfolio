'use client'

import { motion } from 'framer-motion'
import MagneticButton from '@/components/ui/MagneticButton'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const trialFeatures = [
  'Анализ ниши и конкурентов',
  'Хуки под твою аудиторию',
  'Сценарии + монтаж + субтитры',
  'Аналитика после публикации',
]

const longFeatures = [
  'Всё из стартового пакета',
  'Контент-план на каждый месяц',
  'A/B тест хуков и форматов',
  'Еженедельные отчёты',
  'Постоянная коммуникация 24/7',
]

export default function Offer() {
  return (
    <section
      id="offer"
      style={{ background: '#F2F2F2', borderTop: '1px solid #E5E5E5', padding: '100px 40px' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease }}
          style={{ marginBottom: '64px' }}
        >
          <p style={{ fontSize: '11px', color: '#8B5CF6', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '10px' }}>
            Форматы работы
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.02em', color: '#111', lineHeight: 1.05 }}>
            С чего начать
          </h2>
        </motion.div>

        <div className="offer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>

          {/* Пробный */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease }}
            style={{
              padding: '48px',
              borderRadius: '20px',
              border: '1px solid #E5E5E5',
              background: '#fff',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '999px', border: '1px solid #E0E0E0', fontSize: '10px', color: '#AAA', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '36px', width: 'fit-content', fontWeight: 600 }}>
              Старт
            </div>

            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(4rem, 6vw, 6rem)', fontWeight: 900, color: '#111', lineHeight: 1, marginBottom: '4px' }}>
              5
            </div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#AAA', marginBottom: '24px' }}>
              рилсов — пробный пакет
            </div>

            <p style={{ color: '#999', fontSize: '14px', lineHeight: 1.75, marginBottom: '32px', flex: 1 }}>
              Проверяешь результат без риска. Получаешь 5 готовых рилсов
              и видишь, как это работает на твоём аккаунте — до долгосрока.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '40px' }}>
              {trialFeatures.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#777' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#DDD', flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>

            <MagneticButton
              href="https://t.me/m/HngAbPHEODZi"
              target="_blank"
              rel="noopener noreferrer"
              strength={0.3}
              style={{ padding: '14px 28px', border: '1px solid #E0E0E0', color: '#777', borderRadius: '999px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', textAlign: 'center' as const, background: '#F8F8F8' }}
            >
              Узнать стоимость →
            </MagneticButton>
          </motion.div>

          {/* Долгосрок */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            style={{
              padding: '48px',
              borderRadius: '20px',
              background: '#111',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', top: '20px', right: '20px', padding: '5px 12px', borderRadius: '999px', background: '#8B5CF6', fontSize: '10px', fontWeight: 700, color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Популярно
            </div>

            <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '999px', border: '1px solid #333', fontSize: '10px', color: '#8B5CF6', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '36px', width: 'fit-content', fontWeight: 600 }}>
              Долгосрок
            </div>

            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: '4px' }}>
              15–20
            </div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#8B5CF6', marginBottom: '24px' }}>
              рилсов в месяц
            </div>

            <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.75, marginBottom: '32px', flex: 1 }}>
              Получаешь стабильный рост от 3 месяцев: подписчиков, охваты
              и заявки в системе. Ровно столько нужно алгоритму, чтобы
              продвигать тебя постоянно.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '40px' }}>
              {longFeatures.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#888' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#8B5CF6', flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>

            <MagneticButton
              href="https://t.me/m/HngAbPHEODZi"
              target="_blank"
              rel="noopener noreferrer"
              strength={0.4}
              style={{ padding: '14px 28px', background: '#8B5CF6', color: '#fff', borderRadius: '999px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', textAlign: 'center' as const, boxShadow: '0 8px 32px rgba(139,92,246,0.4)' }}
            >
              Начать →
            </MagneticButton>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
