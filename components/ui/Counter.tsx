'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Счётчик от 0 до значения при попадании в viewport.
 * Корректно парсит префиксы/суффиксы: "$3 000+", "+200", "222 715" и т.д.
 */
type Props = {
  value: string
  duration?: number
}

export default function Counter({ value, duration = 1800 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => {
    if (!inView) return

    // Работаем со строкой БЕЗ пробелов для правильного парса
    const stripped = value.replace(/\s/g, '')
    const numMatch = stripped.match(/[\d.]+/)

    if (!numMatch) {
      setDisplayValue(value)
      return
    }

    const target = parseFloat(numMatch[0])
    if (isNaN(target) || target === 0) {
      setDisplayValue(value)
      return
    }

    // Префикс и суффикс — из stripped (без пробелов)
    const numStart = stripped.indexOf(numMatch[0])
    const prefix = stripped.substring(0, numStart)
    const suffix = stripped.substring(numStart + numMatch[0].length)

    // Нужно ли форматировать тысячи пробелами?
    const useSpaces = /\s/.test(value)

    const fmt = (n: number): string => {
      const fixed = Math.floor(n)
      if (useSpaces) {
        return fixed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
      }
      return fixed.toString()
    }

    const start = performance.now()
    let raf = 0

    const tick = (t: number) => {
      const progress = Math.min((t - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(prefix + fmt(target * eased) + suffix)
      if (progress < 1) raf = requestAnimationFrame(tick)
      else setDisplayValue(prefix + fmt(target) + suffix)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return <span ref={ref}>{displayValue}</span>
}
