'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number]

export default function Intro() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Блокируем скролл пока играет интро
    document.documentElement.style.overflow = 'hidden'
    const t = setTimeout(() => {
      setVisible(false)
      document.documentElement.style.overflow = ''
    }, 2600)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Верхняя панель */}
          <motion.div
            key="top"
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 1, ease, delay: 1.4 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0,
              height: '50vh',
              background: '#0A0A0A',
              zIndex: 99999,
            }}
          />

          {/* Нижняя панель */}
          <motion.div
            key="bottom"
            initial={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 1, ease, delay: 1.4 }}
            style={{
              position: 'fixed',
              bottom: 0, left: 0, right: 0,
              height: '50vh',
              background: '#0A0A0A',
              zIndex: 99999,
            }}
          />

          {/* Центральный контент */}
          <motion.div
            key="content"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 1.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              pointerEvents: 'none',
            }}
          >
            {/* Логотип */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 6vw, 5rem)',
                fontWeight: 900,
                color: '#fff',
                letterSpacing: '-0.03em',
              }}
            >
              malysh<span style={{ color: '#6C63FF' }}>production</span>
            </motion.div>

            {/* Линия-прогресс */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease, delay: 0.6 }}
              style={{
                width: '180px',
                height: '2px',
                background: 'linear-gradient(90deg, #6C63FF, #a5a0ff)',
                transformOrigin: 'left',
                borderRadius: '999px',
                boxShadow: '0 0 20px rgba(108,99,255,0.8)',
              }}
            />

            {/* Подпись */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              style={{
                color: '#444',
                fontSize: '11px',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              Медиа-продюсер
            </motion.p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
