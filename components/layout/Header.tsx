'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import MobileMenu from './MobileMenu'

const jpNavItems = [
  { label: 'ホーム',            href: '/' },
  { label: 'Sasabaseについて',  href: '/sasabase' },
  { label: 'コンセプト',        href: '/concept' },
  { label: 'プログラム',        href: '/#what-we-do' },
  { label: '実践ログ',          href: '/archive' },
  { label: 'Access',            href: '/access' },
  { label: 'お問い合わせ',      href: '/contact' },
]

const enNavItems = [
  { label: 'Home',        href: '/en' },
  { label: 'About',       href: '/en/about' },
  { label: 'Programs',    href: '/en/experience' },
  { label: 'Contact',     href: '/en/contact' },
]

function getCounterpartHref(pathname: string): { jp: string; en: string } {
  if (pathname.startsWith('/en')) {
    const sub = pathname.slice(3)
    const jpMap: Record<string, string> = {
      '': '/',
      '/about': '/sasabase',
      '/experience': '/#what-we-do',
      '/contact': '/contact',
    }
    return { jp: jpMap[sub] ?? '/', en: pathname }
  }
  const enMap: Record<string, string> = {
    '/': '/en',
    '/sasabase': '/en/about',
    '/concept': '/en/about',
    '/contact': '/en/contact',
    '/access': '/en',
    '/archive': '/en',
  }
  return { jp: pathname, en: enMap[pathname] ?? '/en' }
}

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const isEn = pathname.startsWith('/en')
  const navItems = isEn ? enNavItems : jpNavItems
  const { jp: jpHref, en: enHref } = getCounterpartHref(pathname)

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
          <Link href={isEn ? '/en' : '/'} className="flex flex-col leading-none group">
            <span className="text-base font-bold text-foreground tracking-wide group-hover:text-primary transition-colors duration-200">
              Sasabase
            </span>
            <span className="text-[10px] text-muted tracking-label">
              Learning &amp; Local Design
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-0.5"
            aria-label={isEn ? 'Main navigation' : 'メインナビゲーション'}
          >
            {navItems.slice(isEn ? 0 : 1).map((item) => (
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

            {/* Language Switcher */}
            <div className="flex items-center gap-0.5 ml-2 pl-2.5 border-l border-border">
              <Link
                href={jpHref}
                className={`px-2 py-1.5 text-xs rounded-sm tracking-wide transition-colors duration-150 ${
                  !isEn
                    ? 'text-primary font-semibold'
                    : 'text-stone-400 hover:text-foreground'
                }`}
                aria-label="日本語"
              >
                JP
              </Link>
              <Link
                href={enHref}
                className={`px-2 py-1.5 text-xs rounded-sm tracking-wide transition-colors duration-150 ${
                  isEn
                    ? 'text-primary font-semibold'
                    : 'text-stone-400 hover:text-foreground'
                }`}
                aria-label="English"
              >
                EN
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden flex flex-col gap-[5px] p-2 rounded hover:bg-stone-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen
              ? (isEn ? 'Close menu' : 'メニューを閉じる')
              : (isEn ? 'Open menu' : 'メニューを開く')}
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
        isEn={isEn}
        jpHref={jpHref}
        enHref={enHref}
      />
    </>
  )
}
