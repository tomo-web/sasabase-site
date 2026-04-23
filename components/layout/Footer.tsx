'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const jpSiteNav = [
  { label: 'ホーム',           href: '/' },
  { label: 'Sasabaseについて', href: '/sasabase' },
  { label: 'コンセプト',       href: '/concept' },
  { label: 'プログラム',       href: '/#what-we-do' },
  { label: '実践ログ',         href: '/archive' },
  { label: 'Access',           href: '/access' },
  { label: 'お問い合わせ',     href: '/contact' },
]

const jpPrograms = [
  { label: "多世代寺子屋 Terra'Co",     href: '/terraco' },
  { label: '6次産業スクール',           href: '/6th-sector' },
  { label: '企業研修',                  href: '/corporate-training' },
  { label: '不登校支援・テレポート学習', href: '/support' },
  { label: '滞在体験',                  href: '/stay' },
]

const enSiteNav = [
  { label: 'Home',      href: '/en' },
  { label: 'About',     href: '/en/about' },
  { label: 'Programs',  href: '/en/experience' },
  { label: 'Access',    href: '/en/access' },
  { label: 'Contact',   href: '/en/contact' },
]

const enPrograms = [
  { label: '6th-Sector School',              href: '/en/experience/6th-sector' },
  { label: 'Regional Immersion Stay',        href: '/en/experience/stay' },
  { label: 'Corporate Training & Team Building', href: '/en/experience#organisations' },
  { label: "Terra'Co",                       href: '/en/experience#local' },
  { label: 'Alternative Learning Support',   href: '/en/experience#alternative-learning' },
]

export default function Footer() {
  const pathname = usePathname()
  const isEn = pathname.startsWith('/en')

  const siteNav = isEn ? enSiteNav : jpSiteNav
  const programs = isEn ? enPrograms : jpPrograms

  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="container-base py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-12 border-b border-stone-800">

          {/* Brand */}
          <div>
            <Link href={isEn ? '/en' : '/'} className="inline-block mb-5">
              <span className="text-lg font-bold text-white tracking-wide">Sasabase</span>
              <span className="block text-[10px] text-stone-600 tracking-label mt-0.5">
                Learning & Local Design
              </span>
            </Link>
            {isEn ? (
              <p className="text-sm text-stone-500 leading-relaxed mb-6">
                A living campus in rural Japan.<br />
                Where learning, life, and the local economy come together.
              </p>
            ) : (
              <p className="text-sm text-stone-500 leading-jp tracking-jp mb-6">
                地域まるごとキャンパス。<br />
                教育・地域・ビジネスをつなぐ実験場。
              </p>
            )}
            <a
              href="https://www.instagram.com/sasabasers/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-stone-500 hover:text-white transition-colors tracking-jp"
            >
              Instagram →
            </a>
          </div>

          {/* Site Navigation */}
          <div>
            <h3 className="text-[10px] font-medium tracking-label uppercase text-stone-600 mb-5">
              {isEn ? 'Site' : 'サイト'}
            </h3>
            <ul className="flex flex-col gap-3">
              {siteNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone-400 hover:text-white transition-colors tracking-jp"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-[10px] font-medium tracking-label uppercase text-stone-600 mb-5">
              {isEn ? 'Programs' : 'プログラム'}
            </h3>
            <ul className="flex flex-col gap-3">
              {programs.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone-400 hover:text-white transition-colors tracking-jp"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language switcher */}
            <div className="mt-8 pt-6 border-t border-stone-800">
              <p className="text-[10px] font-medium tracking-label uppercase text-stone-600 mb-3">
                Language
              </p>
              <div className="flex gap-3">
                <Link
                  href="/"
                  className={`text-xs transition-colors ${
                    !isEn ? 'text-white font-semibold' : 'text-stone-500 hover:text-stone-300'
                  }`}
                >
                  日本語
                </Link>
                <span className="text-stone-700">|</span>
                <Link
                  href="/en"
                  className={`text-xs transition-colors ${
                    isEn ? 'text-white font-semibold' : 'text-stone-500 hover:text-stone-300'
                  }`}
                >
                  English
                </Link>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-stone-700 tracking-jp">
            © {new Date().getFullYear()} Learning & Local Design. All rights reserved.
          </p>
          <p className="text-xs text-stone-700 tracking-jp">
            sasabase.com
          </p>
        </div>
      </div>
    </footer>
  )
}
