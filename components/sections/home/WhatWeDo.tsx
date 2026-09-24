import Link from 'next/link'

const items = [
  {
    number: '01',
    title: "多世代寺子屋 Terra'Co",
    description:
      '子どもから大人まで、世代を超えて集まる学びの場。毎週水曜日に開催。合宿や多田の市への出店など、関連する取り組みも紹介しています。',
    href: '/terraco',
  },
  {
    number: '02',
    title: '音とご飯の会',
    description:
      '食を通じた触れ合いイベント。料理を一緒につくり、音楽を聴きながら囲む時間が、世代や背景を超えたつながりを生みます。',
    href: '/oto-gohan',
  },
  {
    number: '03',
    title: '6次産業スクール',
    description:
      '笹部の棚田での米づくりを出発点に、加工・販売までの取り組みを実践します。地域の現場で学ぶ一連のプロセスが、地域経済とつながります。',
    href: '/6th-sector',
  },
  {
    number: '04',
    title: '笹米クラブ',
    description:
      '米づくりと笹部の景観維持に継続的に関わる、Sasabaseのサポータークラブ。棚田の一年を地域の人と一緒に歩みます。',
    href: '/sasamai-club',
  },
]

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-10 md:py-14 lg:py-20 bg-stone-50 border-t border-border">
      <div className="container-base">

        <div className="mb-5 md:mb-8">
          <p className="text-xs font-medium tracking-label text-muted mb-4">活動</p>
          <h2 className="heading-serif text-h2 text-foreground">
            Sasabaseの4つの活動
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="group bg-white border border-border p-6 hover:border-primary/30 hover:shadow-sm transition-all duration-300 flex flex-col"
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
