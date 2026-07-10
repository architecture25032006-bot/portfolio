'use client'

import { motion } from 'framer-motion'
import { ReactNode, CSSProperties, ElementType } from 'react'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

type Props = {
  children: ReactNode
  delay?: number
  duration?: number
  as?: ElementType
  style?: CSSProperties
  className?: string
  once?: boolean
}

/**
 * Reveal-анимация: текст выезжает снизу из-за clip-маски, построчно.
 * Оберни любой заголовок — и он появится кинематографично.
 */
export default function RevealText({
  children,
  delay = 0,
  duration = 0.8,
  as: Tag = 'div',
  style,
  className,
  once = true,
}: Props) {
  return (
    <div style={{ overflow: 'hidden', display: 'block' }}>
      <motion.div
        initial={{ y: '105%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once, amount: 0.1 }}
        transition={{ duration, ease, delay }}
      >
        <Tag style={style} className={className}>
          {children}
        </Tag>
      </motion.div>
    </div>
  )
}
