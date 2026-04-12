import Link from 'next/link'

const items = [
  {
    number: '01',
    title: "多世代寺子屋 Terra'Co",
    description:
      '子どもから大人まで、世代を超えて集まる学びの場。誰もが先生で誰もが生徒、たくさんの知恵や経験を分かち合いながら、日常の中で自然に学びが生まれる居場所をつくっています。',
    href: '/terraco',
  },
  {
    number: '02',
    title: '不登校支援・テレポート学習',
    description:
      '学校以外の学びの選択肢として、テレポートロボットを通じてSasabaseの場に遠隔参加できる仕組みを提供。安心できる環境の中で、自分のペースで学びや人とのつながりを育みます。',
    href: '/support',
  },
  {
    number: '03',
    title: '6次産業スクール',
    description:
      '米づくりから加工・販売まで、地域の営みを丸ごと体験する実践型プログラム。生産とビジネスを一体で学びながら、地域資源の価値を自らの手で形にしていきます。',
    href: '/6th-sector',
  },
  {
    number: '04',
    title: '企業研修',
    description:
      '里山の暮らしや文化をフィールドにした体験型研修。対話と実践を通じて、チームやリーダーシップのあり方を問い直し、新たな視点と関係性を育みます。',
    href: '/corporate-training',
  },
  {
    number: '05',
    title: '滞在体験',
    description:
      '里山の暮らしに触れながら、地域の日常を体験する民泊プログラム。農や食、人との関わりを通じて、都市では得られない学びと気づきを育みます。',
    href: '/stay',
  },
]

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="section-padding bg-stone-50 border-t border-border">
      <div className="container-base">

        <div className="mb-12 md:mb-16">
          <p className="text-xs font-medium tracking-label text-muted mb-4">取り組み</p>
          <h2 className="heading-serif text-h2 text-foreground">
            Sasabaseでできること
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 [&>*:last-child]:sm:col-span-2 [&>*:last-child]:lg:col-span-1">
          {items.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="group bg-white border border-border p-8 hover:border-primary/30 hover:shadow-sm transition-all duration-300 flex flex-col"
            >
              <span className="text-xs font-mono text-stone-300 mb-4 block">
                {item.number}
              </span>
              <h3 className="heading-serif text-h3 text-foreground mb-3 leading-[1.5] group-hover:text-primary transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-sm text-stone-500 leading-jp tracking-jp flex-1 mb-6">
                {item.description}
              </p>
              <span className="text-xs font-medium text-primary tracking-jp group-hover:underline">
                詳しく見る →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
