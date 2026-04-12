'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import MobileMenu from './MobileMenu'

const navItems = [
  { label: 'ホーム',            href: '/' },
  { label: 'Sasabaseについて',  href: '/sasabase' },
  { label: 'コンセプト',        href: '/concept' },
  { label: 'プログラム',        href: '/#what-we-do' },
  { label: '実践ログ',          href: '/archive' },
  { label: 'Access',            href: '/access' },
  { label: 'お問い合わせ',      href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[68px] transition-all duration-300 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm'
            : 'bg-background/80 backdrop-blur-sm border-b border-border/0'
        }`}
      >
        <div className="container-base h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="text-base font-bold text-foreground tracking-wide group-hover:text-primary transition-colors duration-200">
              Sasabase
            </span>
            <span className="text-[10px] text-muted tracking-label">
              Learning &amp; Local Design
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="メインナビゲーション">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-1.5 text-xs rounded-sm tracking-jp transition-colors duration-150 ${
                  pathname === item.href
                    ? 'text-primary font-medium'
                    : 'text-stone-500 hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden flex flex-col gap-[5px] p-2 rounded hover:bg-stone-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-px bg-foreground transition-all duration-200 ${
                menuOpen ? 'translate-y-[5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-foreground transition-all duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-foreground transition-all duration-200 ${
                menuOpen ? '-translate-y-[5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      <MobileMenu
        items={navItems}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
      />
    </>
  )
}
