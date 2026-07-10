'use client'

import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  images: string[]
  index: number | null          // null = закрыт
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ images, index, onClose, onPrev, onNext }: Props) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    if (index === null) return
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [index, handleKey])

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          key="lb-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0, zIndex: 99998,
            background: 'rgba(5,5,5,0.95)',
            backdropFilter: 'blur(12px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {/* Изображение */}
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '88vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[index]}
              alt={`Фото ${index + 1}`}
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '12px',
                display: 'block',
                boxShadow: '0 40px 120px rgba(0,0,0,0.8)',
              }}
            />

            {/* Счётчик */}
            <div style={{
              position: 'absolute', bottom: '-36px', left: '50%', transform: 'translateX(-50%)',
              fontSize: '12px', color: '#555', letterSpacing: '2px',
              fontFamily: 'var(--font-heading)',
            }}>
              {index + 1} / {images.length}
            </div>
          </motion.div>

          {/* Кнопка закрыть */}
          <button
            onClick={onClose}
            style={{
              position: 'fixed', top: '24px', right: '28px',
              background: 'rgba(255,255,255,0.08)', border: '1px solid #333',
              color: '#fff', borderRadius: '999px',
              width: '44px', height: '44px', fontSize: '18px',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 99999,
            }}
          >
            ✕
          </button>

          {/* Стрелки — только если больше 1 фото */}
          {images.length > 1 && (
            <>
              <button
                onClick={e => { e.stopPropagation(); onPrev() }}
                style={{
                  position: 'fixed', left: '20px', top: '50%', transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.08)', border: '1px solid #333',
                  color: '#fff', borderRadius: '999px',
                  width: '48px', height: '48px', fontSize: '20px',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  zIndex: 99999,
                }}
              >
                ‹
              </button>
              <button
                onClick={e => { e.stopPropagation(); onNext() }}
                style={{
                  position: 'fixed', right: '20px', top: '50%', transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.08)', border: '1px solid #333',
                  color: '#fff', borderRadius: '999px',
                  width: '48px', height: '48px', fontSize: '20px',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  zIndex: 99999,
                }}
              >
                ›
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
