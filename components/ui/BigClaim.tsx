'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'

type Props = {
  children: ReactNode
  accent?: ReactNode
  align?: 'left' | 'center' | 'right'
}

export default function BigClaim({ children, accent, align = 'center' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Текст едет справа налево — достаточно далеко чтобы прочитать всё
  const x = useTransform(scrollYProgress, [0, 1], ['45%', '-45%'])

  return (
    <section
      ref={ref}
      style={{
        background: '#0A0A0A',
        borderTop: '1px solid #141414',
        borderBottom: '1px solid #141414',
        padding: '120px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <motion.div
        style={{
          x,
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.6rem, 3.5vw, 4.5rem)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 0.9,
          textAlign: align,
          color: '#fff',
          whiteSpace: 'normal',
          textTransform: 'uppercase',
          willChange: 'transform',
        }}
      >
        {children}
        {accent && (
          <div style={{ color: '#8B5CF6' }}>{accent}</div>
        )}
      </motion.div>
    </section>
  )
}
