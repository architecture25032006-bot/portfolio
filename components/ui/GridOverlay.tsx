'use client'

import { useEffect, useState } from 'react'

/**
 * Сетка-overlay 12 колонок, показывается по нажатию клавиши G.
 * Фишка топовых дизайн-портфолио.
 */
export default function GridOverlay() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'g' || e.key === 'G' || e.key === 'п' || e.key === 'П') {
        // Не срабатывать в input/textarea
        const t = e.target as HTMLElement
        if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA') return
        setVisible((v) => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!visible) return null

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9500,
        display: 'flex',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 48px',
        left: 0,
        right: 0,
      }}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            borderLeft: '1px solid rgba(108,99,255,0.18)',
            borderRight: i === 11 ? '1px solid rgba(108,99,255,0.18)' : 'none',
            background: 'rgba(108,99,255,0.04)',
            marginRight: i < 11 ? '24px' : 0,
          }}
        />
      ))}
      <div
        style={{
          position: 'fixed',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '6px 14px',
          background: '#6C63FF',
          color: '#fff',
          fontSize: 11,
          letterSpacing: 2,
          textTransform: 'uppercase',
          fontWeight: 700,
          borderRadius: 999,
        }}
      >
        Press G to hide grid
      </div>
    </div>
  )
}
