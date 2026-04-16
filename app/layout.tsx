import type { Metadata } from 'next'
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Sasabase | 川西市の地域まるごとキャンパス',
    template: '%s | Sasabase',
  },
  description:
    '兵庫県川西市の古民家を拠点にした実践の場。農業体験・多世代交流・不登校支援・企業研修など、教育と地域をつなぐプログラムを運営しています。大阪から約50分。',
  keywords: [
    'Sasabase',
    'Learning & Local Design',
    '川西市',
    '兵庫 学び場',
    '農業体験 兵庫',
    '古民家体験 川西市',
    '多世代交流 スペース',
    '不登校 居場所 兵庫',
    '6次産業 体験',
    '企業研修 兵庫',
    '里山 体験',
    '地域の学びの場',
    '社会人 学び直し 実践型',
  ],
  openGraph: {
    title: 'Sasabase | 川西市の地域まるごとキャンパス',
    description:
      '兵庫県川西市の古民家を拠点に、農業体験・多世代交流・不登校支援・企業研修など、教育と地域をつなぐ取り組みを実践しています。',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
        <Header />
        <main className="pt-[68px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
