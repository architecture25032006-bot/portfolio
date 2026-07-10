'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#offer', label: 'Пакеты' },
  { href: '#services', label: 'Услуги' },
  { href: '#projects', label: 'Кейсы' },
  { href: '#contact', label: 'Контакт' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAnchorClick = (href: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #1E1E1E' : 'none',
          transition: 'background 0.3s, border-color 0.3s',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 24px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="20" rx="5" fill="#8B5CF6"/>
              <path d="M7.5 5.5L15 10L7.5 14.5V5.5Z" fill="white"/>
            </svg>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '14px',
              fontWeight: 900,
              letterSpacing: '0.04em',
              color: '#fff',
              textTransform: 'uppercase',
            }}>
              Malysh<span style={{ color: '#8B5CF6' }}>Production</span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleAnchorClick(link.href)}
                style={{
                  padding: '8px 16px',
                  fontSize: '14px',
                  color: '#888',
                  background: 'none',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://t.me/m/HngAbPHEODZi"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: '12px',
                padding: '9px 20px',
                background: '#8B5CF6',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 600,
                borderRadius: '999px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Созвон
            </a>
          </nav>

          {/* Бургер — только мобиль */}
          <button
            className="nav-burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <span style={{
              display: 'block', width: '22px', height: '1.5px', background: '#fff',
              transformOrigin: 'center',
              transition: 'transform 0.2s, opacity 0.2s',
              transform: menuOpen ? 'rotate(45deg) translate(0, 4.5px)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '1.5px', background: '#fff',
              transition: 'opacity 0.2s',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: '22px', height: '1.5px', background: '#fff',
              transformOrigin: 'center',
              transition: 'transform 0.2s, opacity 0.2s',
              transform: menuOpen ? 'rotate(-45deg) translate(0, -4.5px)' : 'none',
            }} />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              background: 'rgba(10,10,10,0.97)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '28px',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleAnchorClick(link.href)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '32px',
                  fontWeight: 900,
                  color: '#fff',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '-0.02em',
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              href="https://t.me/m/HngAbPHEODZi"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: '8px',
                padding: '16px 36px',
                background: '#8B5CF6',
                color: '#fff',
                borderRadius: '999px',
                fontWeight: 700,
                fontSize: '16px',
                textDecoration: 'none',
                boxShadow: '0 0 40px rgba(108,99,255,0.4)',
              }}
            >
              Забронировать созвон
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Стили управляются через globals.css: .nav-desktop / .nav-burger */}
    </>
  )
}
