import Link from 'next/link'

const siteNav = [
  { label: 'ホーム',           href: '/' },
  { label: 'Sasabaseについて', href: '/sasabase' },
  { label: 'コンセプト',       href: '/concept' },
  { label: 'プログラム',       href: '/#what-we-do' },
  { label: '実践ログ',         href: '/archive' },
  { label: 'Access',           href: '/access' },
  { label: 'お問い合わせ',     href: '/contact' },
]

const programs = [
  { label: "多世代寺子屋 Terra'Co",     href: '/terraco' },
  { label: '6次産業スクール',           href: '/6th-sector' },
  { label: '企業研修',                  href: '/corporate-training' },
  { label: '不登校支援・テレポート学習', href: '/support' },
  { label: '滞在体験',                  href: '/stay' },
]

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="container-base py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-12 border-b border-stone-800">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <span className="text-lg font-bold text-white tracking-wide">Sasabase</span>
              <span className="block text-[10px] text-stone-600 tracking-label mt-0.5">
                Learning & Local Design
              </span>
            </Link>
            <p className="text-sm text-stone-500 leading-jp tracking-jp mb-6">
              地域まるごとキャンパス。<br />
              教育・地域・ビジネスをつなぐ実験場。
            </p>
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
              サイト
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
              プログラム
            </h3>
            <ul className="flex flex-col gap-3">
              {programs.map((item) => (
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
