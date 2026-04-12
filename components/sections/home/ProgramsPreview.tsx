import Link from 'next/link'

const programs = [
  {
    number: 'A',
    tag: '企業研修',
    title: '地域フィールド型研修',
    description:
      '火起こし・かまど炊飯・対話。地域の自然と文化を素材に、リーダーシップとチームの関係性を再構築します。',
    href: '/programs#corporate',
  },
  {
    number: 'B',
    tag: '6次産業スクール',
    title: '米作りからビジネスを学ぶ',
    description:
      '高校生を対象に、1次産業から3次産業を体系的に学ぶプログラム。米作り・商品化・販売を一連で体験します。',
    href: '/programs#sixth-sector',
  },
  {
    number: 'C',
    tag: '教育支援・居場所づくり',
    title: '一人ひとりに合わせた学び',
    description:
      '不登校や学校になじめない子どもたちの居場所づくり。テレポートロボット「Kubi」を活用した遠隔参加も支援します。',
    href: '/programs#support',
  },
]

export default function ProgramsPreview() {
  return (
    <section className="section-padding bg-stone-100 border-t border-border">
      <div className="container-base">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14 md:mb-18">
          <div>
            <p className="label-text mb-4">事業・プログラム</p>
            <h2 className="heading-serif text-h2 text-foreground">
              3つの実践領域
            </h2>
          </div>
          <Link href="/programs" className="btn-ghost flex-shrink-0">
            すべて見る →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((prog) => (
            <Link
              key={prog.number}
              href={prog.href}
              className="group bg-white border border-border p-7 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs font-medium tracking-label text-primary uppercase">
                  {prog.tag}
                </span>
                <span className="text-3xl font-bold text-stone-200 group-hover:text-stone-300 transition-colors leading-none">
                  {prog.number}
                </span>
              </div>

              <h3 className="heading-serif text-h3 text-foreground mb-4 leading-[1.5] flex-1">
                {prog.title}
              </h3>

              <p className="text-sm text-stone-500 leading-jp tracking-jp mb-6">
                {prog.description}
              </p>

              <span className="text-xs text-primary font-medium tracking-jp group-hover:underline">
                詳しく見る →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
