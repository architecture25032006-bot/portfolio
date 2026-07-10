'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projects } from '@/data/projects'
import Counter from '@/components/ui/Counter'
import RevealText from '@/components/ui/RevealText'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

// Компонент изображения с 3D-дисторшн эффектом при ховере
function DistortImage({ src, alt }: { src: string; alt: string }) {
  const imgRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0, scale: 1 })

  const onMove = (e: React.MouseEvent) => {
    const el = imgRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setTilt({ x: -dy * 6, y: dx * 6, scale: 1.04 })
  }

  const onLeave = () => setTilt({ x: 0, y: 0, scale: 1 })

  return (
    <div
      ref={imgRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: '12px',
        perspective: '800px',
        cursor: 'none',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.scale})`,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          transformStyle: 'preserve-3d',
          position: 'relative',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
          onError={(e) => {
            const el = e.target as HTMLImageElement
            if (el.parentElement?.parentElement?.parentElement)
              el.parentElement.parentElement.parentElement.style.display = 'none'
          }}
        />
        {/* Цветной оверлей при ховере */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(108,99,255,0.15) 0%, transparent 60%)',
            opacity: tilt.scale > 1 ? 1 : 0,
            transition: 'opacity 0.4s',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  )
}

export default function ProjectsHorizontal() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // 2 проекта → скроллим на ~75vw
  const CARD_WIDTH = 72 // vw
  const GAP = 3 // vw
  const totalShift = (projects.length - 1) * (CARD_WIDTH + GAP)

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0vw', `-${totalShift}vw`]
  )

  // Opacity заголовка — исчезает в конце
  const headingOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [1, 1, 1, 0.4])

  // Высота секции: даём каждой карточке ~100vh скролла + буфер
  const sectionHeight = `${projects.length * 110 + 30}vh`

  return (
    <section
      id="projects"
      ref={containerRef}
      style={{
        height: sectionHeight,
        position: 'relative',
        background: '#0A0A0A',
        borderTop: '1px solid #141414',
      }}
    >
      {/* ── Sticky-контейнер — прилипает на 100vh ── */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Левый sticky-заголовок */}
        <motion.div
          style={{
            position: 'absolute',
            left: '40px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            opacity: headingOpacity,
          }}
        >
          <p style={{ fontSize: '11px', color: '#6C63FF', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 500, marginBottom: '8px' }}>
            Кейсы
          </p>
          <RevealText
            as="h2"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: '#fff',
              lineHeight: 0.95,
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
            }}
          >
            Результаты
          </RevealText>
          <a
            href="https://t.me/ir6eas3work"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: '24px',
              display: 'block',
              fontSize: '12px',
              color: '#444',
              textDecoration: 'none',
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              letterSpacing: '1px',
            }}
          >
            Все кейсы в TG →
          </a>
        </motion.div>

        {/* Горизонтальная лента карточек */}
        <motion.div
          style={{
            x,
            display: 'flex',
            gap: `${GAP}vw`,
            paddingLeft: '160px',
            paddingRight: '5vw',
            height: '80vh',
            alignItems: 'stretch',
            willChange: 'transform',
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              data-cursor="view"
              style={{
                width: `${CARD_WIDTH}vw`,
                flexShrink: 0,
                background: '#0d0d0d',
                borderRadius: '20px',
                border: '1px solid #1A1A1A',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Верх: текст + статы */}
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '24px', padding: '36px 36px 24px' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '11px', color: '#6C63FF', fontWeight: 600, letterSpacing: '1px' }}>{project.category}</span>
                    <span style={{ color: '#333' }}>·</span>
                    <span style={{ fontSize: '11px', color: '#444' }}>{project.year}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 2.2vw, 2rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '10px' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.6, marginBottom: '16px', maxWidth: '480px' }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{ padding: '4px 10px', borderRadius: '999px', border: '1px solid #222', fontSize: '11px', color: '#555' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Статы */}
                {project.stats && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-end', flexShrink: 0 }}>
                    {project.stats.map((s, si) => (
                      <div key={si} style={{ textAlign: 'right' }}>
                        <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', fontWeight: 900, color: '#6C63FF', lineHeight: 1 }}>
                          <Counter value={s.value} />
                        </div>
                        <div style={{ fontSize: '11px', color: '#555', marginTop: '3px' }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Изображение — занимает оставшееся место */}
              <div style={{ flex: 1, padding: '0 24px 24px', minHeight: 0 }}>
                {project.galleryImages && project.galleryImages.length > 0 ? (
                  // Галерея: 3 портретных в ряд
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', height: '100%' }}>
                    {project.galleryImages.slice(0, 3).map((src, idx) => (
                      <div key={idx} style={{ borderRadius: '10px', overflow: 'hidden', height: '100%' }}>
                        <DistortImage src={src} alt={`${project.title} ${idx + 1}`} />
                      </div>
                    ))}
                  </div>
                ) : (
                  // Одно ландшафтное изображение
                  <DistortImage src={project.coverImage} alt={project.title} />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Прогресс-бар внизу */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '160px',
            right: '40px',
            height: '1px',
            background: '#1a1a1a',
          }}
        >
          <motion.div
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #6C63FF, #a5a0ff)',
              scaleX: scrollYProgress,
              transformOrigin: 'left',
              boxShadow: '0 0 10px rgba(108,99,255,0.6)',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
