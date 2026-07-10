'use client'

/**
 * Бесконечная горизонтальная лента из текста.
 * Дублирует содержимое и анимирует translateX.
 */
type Props = {
  items: string[]
  speed?: number // секунд на полный цикл
  reverse?: boolean
  size?: 'sm' | 'md' | 'lg'
  accent?: boolean // если true — каждый второй элемент фиолетовый
}

export default function Marquee({
  items,
  speed = 30,
  reverse = false,
  size = 'lg',
  accent = false,
}: Props) {
  const fontSizes = { sm: '1.4rem', md: '2.5rem', lg: 'clamp(3rem, 7vw, 7rem)' }
  const paddings = { sm: '14px 0', md: '20px 0', lg: '36px 0' }

  // Дублируем массив несколько раз для плавной зацикленности
  const sequence = [...items, ...items, ...items, ...items]

  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        background: '#0A0A0A',
        borderTop: '1px solid #141414',
        borderBottom: '1px solid #141414',
        padding: paddings[size],
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: `marquee-${reverse ? 'r' : 'l'} ${speed}s linear infinite`,
          gap: '60px',
          paddingLeft: '60px',
        }}
      >
        {sequence.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: fontSizes[size],
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: accent && i % 2 === 1 ? '#8B5CF6' : '#F0F0F0',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '60px',
            }}
          >
            {item}
            <span style={{ color: '#8B5CF6', fontSize: '0.7em' }}>●</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-l {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes marquee-r {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
