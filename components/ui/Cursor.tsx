'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Курсор:
 * — точка (мгновенно)
 * — кольцо (lerp follow)
 * — превращается в фиолетовый круг с текстом при hover на data-cursor="view"
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const [isFine, setIsFine] = useState(false)

  useEffect(() => {
    // Показываем кастомный курсор только на устройствах с мышью
    setIsFine(window.matchMedia('(pointer: fine)').matches)
  }, [])

  useEffect(() => {
    if (!isFine) return
    const dot = dotRef.current
    const ring = ringRef.current
    const label = labelRef.current
    if (!dot || !ring || !label) return

    let mx = -300
    let my = -300
    let rx = -300
    let ry = -300
    let raf = 0
    let mode: 'idle' | 'hover' | 'view' = 'idle'
    const LERP = 0.42

    const sizeFor = () => (mode === 'view' ? 88 : mode === 'hover' ? 56 : 32)

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`
    }

    const tick = () => {
      rx += (mx - rx) * LERP
      ry += (my - ry) * LERP
      const s = sizeFor()
      ring.style.transform = `translate(${rx - s / 2}px, ${ry - s / 2}px)`
      ring.style.width = `${s}px`
      ring.style.height = `${s}px`
      label.style.transform = `translate(${rx - 24}px, ${ry - 8}px)`
      raf = requestAnimationFrame(tick)
    }

    const setMode = (next: typeof mode, text?: string) => {
      mode = next
      if (next === 'view') {
        ring.style.background = '#6C63FF'
        ring.style.borderColor = '#6C63FF'
        ring.style.mixBlendMode = 'normal'
        dot.style.opacity = '0'
        label.style.opacity = '1'
        label.textContent = text || 'VIEW'
      } else if (next === 'hover') {
        ring.style.background = 'rgba(108,99,255,0.15)'
        ring.style.borderColor = '#6C63FF'
        ring.style.mixBlendMode = 'normal'
        dot.style.opacity = '0'
        label.style.opacity = '0'
      } else {
        ring.style.background = 'transparent'
        ring.style.borderColor = '#6C63FF'
        ring.style.mixBlendMode = 'normal'
        dot.style.opacity = '1'
        label.style.opacity = '0'
      }
    }

    const onEnter = (e: Event) => {
      const t = e.currentTarget as HTMLElement
      const view = t.getAttribute('data-cursor')
      if (view) setMode('view', view === 'view' ? 'VIEW' : view.toUpperCase())
      else setMode('hover')
    }
    const onLeave = () => setMode('idle')

    const bind = () => {
      document.querySelectorAll<HTMLElement>('a, button, [data-cursor]').forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)
    bind()

    const obs = new MutationObserver(bind)
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      obs.disconnect()
    }
  }, [isFine])  // перезапускаем когда isFine меняется с false на true

  if (!isFine) return null

  return (
    <>
      {/* Точка */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: 'none',
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#6C63FF',
          willChange: 'transform',
          transition: 'opacity 0.15s',
        }}
      />
      {/* Кольцо */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9998,
          pointerEvents: 'none',
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '1.5px solid #6C63FF',
          willChange: 'transform, width, height, background',
          transition: 'width 0.25s cubic-bezier(0.22, 1, 0.36, 1), height 0.25s cubic-bezier(0.22, 1, 0.36, 1), background 0.2s, border-color 0.2s',
        }}
      />
      {/* Подпись "VIEW" */}
      <div
        ref={labelRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 10000,
          pointerEvents: 'none',
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: 2,
          color: '#fff',
          opacity: 0,
          fontFamily: 'var(--font-heading)',
          transition: 'opacity 0.2s',
          willChange: 'transform, opacity',
        }}
      >
        VIEW
      </div>
    </>
  )
}
