'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import MobileMenu from './MobileMenu'

const jpNavItems = [
  { label: 'Sasabaseについて',     href: '/sasabase' },
  { label: "多世代寺子屋 Terra'Co", href: '/terraco' },
  { label: '音とご飯の会',           href: '/oto-gohan' },
  { label: '6次産業スクール',        href: '/6th-sector' },
  { label: '笹米クラブ',             href: '/sasamai-club' },
  { label: 'アクセス',               href: '/access' },
  { label: 'お問い合わせ',           href: '/contact' },
]

const enNavItems = [
  { label: 'About',        href: '/en/about' },
  { label: "Terra'Co",     href: '/en/terraco' },
  { label: 'Oto-Gohan',   href: '/en/oto-gohan' },
  { label: '6th-Sector',  href: '/en/6th-sector' },
  { label: 'Sasamai Club', href: '/en/sasamai-club' },
  { label: 'Access',       href: '/en/access' },
  { label: 'Contact',      href: '/en/contact' },
]

function getCounterpartHref(pathname: string): { jp: string; en: string } {
  if (pathname.startsWith('/en')) {
    const sub = pathname.slice(3)
    const jpMap: Record<string, string> = {
      '': '/',
      '/about': '/sasabase',
      '/terraco': '/terraco',
      '/oto-gohan': '/oto-gohan',
      '/6th-sector': '/6th-sector',
      '/sasamai-club': '/sasamai-club',
      '/experience': '/6th-sector',
      '/experience/6th-sector': '/6th-sector',
      '/experience/stay': '/stay',
      '/access': '/access',
      '/contact': '/contact',
    }
    return { jp: jpMap[sub] ?? '/', en: pathname }
  }
  const enMap: Record<string, string> = {
    '/': '/en',
    '/sasabase': '/en/about',
    '/terraco': '/en/terraco',
    '/oto-gohan': '/en/oto-gohan',
    '/6th-sector': '/en/6th-sector',
    '/sasamai-club': '/en/sasamai-club',
    '/stay': '/en/experience/stay',
    '/access': '/en/access',
    '/contact': '/en/contact',
    '/concept': '/en/about',
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
          <Link href={isEn ? '/en' : '/'} className="flex flex-col leading-none group flex-shrink-0">
            <span className="text-base font-bold text-foreground tracking-wide group-hover:text-primary transition-colors duration-200">
              Sasabase
            </span>
            <span className="text-[10px] text-muted tracking-label">
              {isEn ? 'Community hub in Sasabe, Kawanishi' : '川西市笹部の地域活動拠点'}
            </span>
          </Link>

          {/* Desktop Navigation — lg (1024px) 以上で表示 */}
          <nav
            className="hidden lg:flex items-center gap-0"
            aria-label={isEn ? 'Main navigation' : 'メインナビゲーション'}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap px-2 py-1.5 text-[11px] rounded-sm tracking-jp transition-colors duration-150 ${
                  pathname === item.href
                    ? 'text-primary font-medium'
                    : 'text-stone-500 hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-0 ml-2 pl-2 border-l border-border">
              <Link
                href={jpHref}
                className={`px-2 py-1.5 text-[11px] rounded-sm tracking-wide transition-colors duration-150 ${
                  !isEn ? 'text-primary font-semibold' : 'text-stone-400 hover:text-foreground'
                }`}
                aria-label="日本語"
              >
                JP
              </Link>
              <Link
                href={enHref}
                className={`px-2 py-1.5 text-[11px] rounded-sm tracking-wide transition-colors duration-150 ${
                  isEn ? 'text-primary font-semibold' : 'text-stone-400 hover:text-foreground'
                }`}
                aria-label="English"
              >
                EN
              </Link>
            </div>

          </nav>

          {/* Mobile / Tablet Menu Toggle — lg 未満で表示 */}
          <button
            type="button"
            className="lg:hidden flex flex-col gap-[5px] p-2 rounded hover:bg-stone-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen
              ? (isEn ? 'Close menu' : 'メニューを閉じる')
              : (isEn ? 'Open menu' : 'メニューを開く')}
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-px bg-foreground transition-all duration-200 ${menuOpen ? 'translate-y-[5px] rotate-45' : ''}`} />
            <span className={`block w-5 h-px bg-foreground transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-foreground transition-all duration-200 ${menuOpen ? '-translate-y-[5px] -rotate-45' : ''}`} />
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
