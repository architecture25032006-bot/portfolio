'use client'

import { useRef, ReactNode, CSSProperties } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Магнитная кнопка — притягивается к курсору.
 */
type Props = {
  children: ReactNode
  href?: string
  target?: string
  rel?: string
  strength?: number
  style?: CSSProperties
}

export default function MagneticButton({
  children,
  href,
  target,
  rel,
  strength = 0.35,
  style,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLDivElement | null>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.5 })

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ ...style, x: sx, y: sy, display: 'inline-block' }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ ...style, x: sx, y: sy, display: 'inline-block' }}
    >
      {children}
    </motion.div>
  )
}
