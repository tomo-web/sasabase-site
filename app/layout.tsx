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
    default: '地域まるごとキャンパス | Learning & Local Design',
    template: '%s | LLD',
  },
  description:
    '教育・地域・ビジネスをつなぐ実験場。兵庫県川西市の古民家を拠点に、地域まるごとキャンパスを実践しています。',
  keywords: ['Learning & Local Design', 'Sasabase', '川西', '兵庫', '地域教育', '6次産業', '企業研修', '教育支援'],
  openGraph: {
    title: '地域まるごとキャンパス | Learning & Local Design',
    description: '教育・地域・ビジネスをつなぐ実験場。兵庫県川西市から、新しい学びのかたちを実践しています。',
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
