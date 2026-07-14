'use client'

import Link from 'next/link'

const links = [
  { label: 'Кейсы', href: '#projects' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Контакт', href: '#contact' },
]

const socials = [
  { label: 'Telegram', href: 'https://telegram.dog/ir6eas3' },
  { label: 'Портфолио TG', href: 'https://telegram.dog/ir6eas3work' },
  { label: 'YouTube', href: 'https://www.youtube.com/@ir6east' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-sm font-black text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              malysh<span className="text-[#6C63FF]">production</span>
            </div>
            <p className="text-xs text-[#555] leading-relaxed max-w-[160px]">
              Продающий контент под ключ для экспертов и брендов
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] text-[#444] uppercase tracking-widest mb-3">Навигация</p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-[#666] hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-[10px] text-[#444] uppercase tracking-widest mb-3">Соцсети</p>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#666] hover:text-[#6C63FF] transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-[10px] text-[#444] uppercase tracking-widest mb-3">Сотрудничество</p>
            <a
              href="https://telegram.dog/m/HngAbPHEODZi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#6C63FF] text-white text-xs font-semibold rounded-full hover:bg-[#5a52e0] transition-colors"
            >
              Забронировать созвон
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#141414] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#3A3A3A]">
          <span>© 2025 malyshproduction. Все права защищены.</span>
          <span>Медиа-продюсер · Контент под ключ</span>
        </div>
      </div>
    </footer>
  )
}
