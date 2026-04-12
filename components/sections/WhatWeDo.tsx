import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'

const items = [
  {
    icon: '🌱',
    tag: '活動',
    title: "Terra'Co",
    titleEn: 'Multi-generational Learning Space',
    description:
      'テラコは、子どもから大人まで世代を超えて集まる学びの場。放課後の学習支援から地域のワークショップまで、日常的なつながりを育てます。',
    href: '/activities#terraco',
  },
  {
    icon: '🌾',
    tag: 'プログラム',
    title: '6次産業学校',
    titleEn: '6th Sector School',
    description:
      '農業（生産）×加工×販売の一体的な学びを体験するプログラム。地域の農業から食の仕組みまでを、実践を通して学びます。',
    href: '/programs#sixth-sector',
  },
  {
    icon: '🏫',
    tag: 'プログラム',
    title: '学習・居場所支援',
    titleEn: 'Learning & Belonging Support',
    description:
      '学校に通いにくい子どもや保護者を、チュータリング・リモート参加支援・Terra\'Co連携など、それぞれの状況に合った方法でサポートします。',
    href: '/programs#support',
  },
  {
    icon: '🏢',
    tag: 'プログラム',
    title: '企業研修',
    titleEn: 'Corporate Training',
    description:
      '地域資源を活用したフィールド型の企業研修プログラム。自然の中で、チームビルディングや新しい視点を育てます。',
    href: '/programs#corporate',
  },
  {
    icon: '🌙',
    tag: 'プログラム',
    title: '滞在型プログラム',
    titleEn: 'Immersive Stay Program',
    description:
      '数日間、川西の農村生活に溶け込みながら学ぶプログラムです。土地のリズムと人とのつながりが、新しい気づきをもたらします。',
    href: '/programs#immersive',
  },
  {
    icon: '🏠',
    tag: 'スペース',
    title: 'スペース貸し',
    titleEn: 'Space Rental',
    description:
      '古民家の空間をイベント・会議・研修・撮影などにご利用いただけます。地域の特性を活かした場として提供しています。',
    href: '/space',
  },
]

export default function WhatWeDo() {
  return (
    <section className="section-padding bg-stone-50 border-t border-border">
      <div className="container-base">
        <SectionHeader
          label="活動・プログラム"
          labelEn="What We Do"
          title="Sasabaseの取り組み"
          titleEn="Programs & Activities"
          description="地域の暮らしの中から生まれた、Sasabaseならではの活動とプログラムです。"
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group bg-surface rounded-lg border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="w-11 h-11 rounded-md bg-primary/8 flex items-center justify-center mb-4 text-xl flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                {item.icon}
              </div>
              <span className="label-text mb-2.5 block">{item.tag}</span>
              <h3 className="text-base font-bold text-foreground tracking-jp mb-1 leading-jp-tight">
                {item.title}
              </h3>
              <p className="text-xs text-muted tracking-wide mb-3">{item.titleEn}</p>
              <p className="text-sm text-stone-600 leading-jp tracking-jp flex-1">
                {item.description}
              </p>
              <div className="mt-5 pt-4 border-t border-border/60 flex items-center gap-1.5 text-xs font-medium text-primary">
                詳しく見る
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
