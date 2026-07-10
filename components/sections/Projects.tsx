'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { projects } from '@/data/projects'
import Counter from '@/components/ui/Counter'
import Lightbox from '@/components/ui/Lightbox'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

export default function Projects() {
  const [lbImages, setLbImages] = useState<string[]>([])
  const [lbIndex, setLbIndex] = useState<number | null>(null)

  const openLb = (imgs: string[], idx: number) => {
    setLbImages(imgs)
    setLbIndex(idx)
  }
  const closeLb = () => setLbIndex(null)
  const prevLb = () => setLbIndex(i => (i === null ? null : (i - 1 + lbImages.length) % lbImages.length))
  const nextLb = () => setLbIndex(i => (i === null ? null : (i + 1) % lbImages.length))

  return (
    <>
    <section
      id="projects"
      style={{ background: '#F2F2F2', borderTop: '1px solid #E5E5E5', padding: '80px 40px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Заголовок */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 900, letterSpacing: '-0.02em', color: '#111' }}>
              Кейсы &amp; результаты
            </h2>
          </div>
          <a
            href="https://t.me/ir6eas3work"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '14px', color: '#AAA', textDecoration: 'none' }}
          >
            Все кейсы в TG →
          </a>
        </div>

        {/* Карточки */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              data-cursor="view"
              style={{ borderRadius: '16px', border: '1px solid #E5E5E5', background: '#fff', overflow: 'hidden' }}
            >
              {/* Верх: текст + статы */}
              <div className="project-card-top" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '24px', padding: '32px' }}>

                {/* Левая: мета + заголовок + описание + теги */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '12px', color: '#8B5CF6', fontWeight: 500 }}>{project.category}</span>
                    <span style={{ color: '#333', fontSize: '12px' }}>·</span>
                    <span style={{ fontSize: '12px', color: '#888' }}>{project.year}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 900, color: '#111', marginBottom: '8px', lineHeight: 1.2 }}>
                    {project.title}
                  </h3>
                  <p style={{ color: '#999', fontSize: '14px', lineHeight: 1.6, marginBottom: '16px' }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{ padding: '4px 10px', borderRadius: '999px', border: '1px solid #E5E5E5', fontSize: '12px', color: '#AAA' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Правая: статы */}
                {project.stats && (
                  <div className="project-stats-col" style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-end', flexShrink: 0, marginLeft: '32px' }}>
                    {project.stats.map((s, si) => (
                      <div key={si} style={{ textAlign: 'right' }}>
                        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 900, color: '#8B5CF6', lineHeight: 1 }}>
                          <Counter value={s.value} />
                        </div>
                        <div style={{ fontSize: '11px', color: '#AAA', marginTop: '2px' }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Галерея изображений */}
              {project.galleryImages && project.galleryImages.length > 0 ? (
                <div style={{ borderTop: '1px solid #E5E5E5', background: '#fff', padding: '20px 24px' }}>
                  {/* Сетка: 3 в ряд, портретные */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                    {project.galleryImages.map((src, idx) => (
                      <div
                        key={idx}
                        onClick={() => openLb(project.galleryImages!, idx)}
                        data-cursor="view"
                        style={{ borderRadius: '10px', overflow: 'hidden', background: '#111', aspectRatio: '9/16', cursor: 'pointer' }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={src}
                          alt={`${project.title} — фото ${idx + 1}`}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block', transition: 'transform 0.4s ease' }}
                          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                          onError={(e) => {
                            const el = e.target as HTMLImageElement
                            if (el.parentElement) el.parentElement.style.display = 'none'
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : project.coverImage ? (
                /* Одиночное изображение — ландшафт, с опциональной ссылкой */
                (() => {
                  const imgBlock = (
                    <div
                      style={{
                        borderTop: '1px solid #E5E5E5',
                        background: '#111',
                        position: 'relative',
                        width: '100%',
                        paddingBottom: '56.25%',
                        overflow: 'hidden',
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.5s ease' }}
                        onError={(e) => {
                          const el = e.target as HTMLImageElement
                          if (el.parentElement) el.parentElement.style.display = 'none'
                        }}
                        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                      />
                      {project.link && (
                        <div style={{
                          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: 'rgba(0,0,0,0)', transition: 'background 0.3s', pointerEvents: 'none',
                        }} className="cover-overlay">
                          <span style={{
                            background: '#fff', color: '#F2F2F2', borderRadius: '999px',
                            padding: '10px 24px', fontWeight: 700, fontSize: '14px',
                            opacity: 0, transition: 'opacity 0.3s', fontFamily: 'var(--font-heading)',
                          }} className="cover-btn">
                            ▶ Смотреть видео
                          </span>
                        </div>
                      )}
                    </div>
                  )
                  return project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'block', textDecoration: 'none' }}
                      className="cover-link"
                    >
                      {imgBlock}
                    </a>
                  ) : imgBlock
                })()
              ) : null}

            </motion.div>
          ))}
        </div>

      </div>
    </section>

    <Lightbox
      images={lbImages}
      index={lbIndex}
      onClose={closeLb}
      onPrev={prevLb}
      onNext={nextLb}
    />
    </>
  )
}
