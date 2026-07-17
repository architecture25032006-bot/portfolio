'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#offer', label: 'Пакеты' },
  { href: '#services', label: 'Услуги' },
  { href: '#projects', label: 'Кейсы' },
  { href: '#faq', label: 'Вопросы' },
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
          background: scrolled ? 'rgba(242,242,242,0.94)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #E5E5E5' : 'none',
          transition: 'background 0.3s, border-color 0.3s',
        }}
      >
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 40px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', flexShrink: 0 }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="22" height="22" rx="6" fill="#8B5CF6"/>
              <path d="M8.5 6.5L16 11L8.5 15.5V6.5Z" fill="white"/>
            </svg>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '14px',
              fontWeight: 900,
              letterSpacing: '0.03em',
              color: '#111',
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
                  color: '#666',
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
              href="https://telegram.dog/m/HngAbPHEODZi"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: '12px',
                padding: '9px 20px',
                background: '#111',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 600,
                borderRadius: '999px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Связаться
            </a>
          </nav>

          {/* Burger */}
          <button
            className="nav-burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}
          >
            <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#111', transformOrigin: 'center', transition: 'transform 0.2s, opacity 0.2s', transform: menuOpen ? 'rotate(45deg) translate(0, 4.5px)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#111', transition: 'opacity 0.2s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#111', transformOrigin: 'center', transition: 'transform 0.2s, opacity 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(0, -4.5px)' : 'none' }} />
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
              position: 'fixed', inset: 0, zIndex: 40,
              background: 'rgba(242,242,242,0.97)', backdropFilter: 'blur(12px)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '28px',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleAnchorClick(link.href)}
                style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 900, color: '#111', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '-0.02em' }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              href="https://telegram.dog/m/HngAbPHEODZi"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: '8px', padding: '16px 36px', background: '#111', color: '#fff', borderRadius: '999px', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}
            >
              Забронировать созвон
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
