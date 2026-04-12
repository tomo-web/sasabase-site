'use client'

import Link from 'next/link'
import { useEffect } from 'react'

interface NavItem {
  label: string
  href: string
}

interface MobileMenuProps {
  items: NavItem[]
  isOpen: boolean
  onClose: () => void
  pathname: string
}

export default function MobileMenu({ items, isOpen, onClose, pathname }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-[68px] right-0 bottom-0 z-40 w-72 bg-white shadow-xl transition-transform duration-300 ease-smooth lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="ナビゲーション"
      >
        <nav className="p-6 flex flex-col gap-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`px-4 py-3 rounded text-sm tracking-jp transition-colors duration-150 ${
                pathname === item.href
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-stone-700 hover:bg-stone-50 hover:text-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-8 left-6 right-6">
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted tracking-jp">
              LLD / sasabase.com
            </p>
            <p className="text-xs text-stone-400 tracking-jp mt-0.5">
              川西市 · 兵庫県
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
