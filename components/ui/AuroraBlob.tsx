'use client'

import { motion } from 'framer-motion'

/**
 * Большое размытое фиолетовое пятно-аура, медленно дышит и двигается.
 * Ставится в position:absolute внутри секции с overflow:hidden.
 */
type Props = {
  size?: number
  color?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  opacity?: number
  duration?: number
}

export default function AuroraBlob({
  size = 600,
  color = '#6C63FF',
  top,
  left,
  right,
  bottom,
  opacity = 0.35,
  duration = 18,
}: Props) {
  return (
    <motion.div
      aria-hidden
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{
        scale: [0.9, 1.15, 0.95, 1.1, 0.9],
        x: [0, 40, -30, 20, 0],
        y: [0, -30, 40, -20, 0],
        opacity,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        position: 'absolute',
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
