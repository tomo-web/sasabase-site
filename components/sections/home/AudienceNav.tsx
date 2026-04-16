import Link from 'next/link'

const audiences = [
  {
    number: '01',
    title: '学びたい方へ',
    description: '6次産業スクール、多世代交流Terra\'Co、不登校支援など、学びのかたちはさまざまです。',
    href: '/#what-we-do',
    label: 'プログラムを見る',
  },
  {
    number: '02',
    title: '滞在・体験したい方へ',
    description: '里山の古民家に泊まり、農業・食・地域の営みに触れる体験滞在プログラムです。',
    href: '/stay',
    label: '滞在体験を見る',
  },
  {
    number: '03',
    title: '企業・団体の方へ',
    description: '里山をフィールドにした体験型企業研修や、地域連携プロジェクトをご提案します。',
    href: '/corporate-training',
    label: '詳しく見る',
  },
]

export default function AudienceNav() {
  return (
    <section className="section-padding bg-stone-50 border-t border-border">
      <div className="container-base">

        <div className="mb-10">
          <p className="text-xs font-medium tracking-label text-muted mb-4">Sasabaseとの関わり方</p>
          <h2 className="heading-serif text-h2 text-foreground">
            どんな関わり方をしますか？
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {audiences.map((item) => (
            <div
              key={item.number}
              className="bg-white border border-border p-8 flex flex-col"
            >
              <span className="text-xs font-mono text-stone-300 mb-4 block">
                {item.number}
              </span>
              <h3 className="heading-serif text-h3 text-foreground mb-3 leading-[1.5]">
                {item.title}
              </h3>
              <p className="text-sm text-stone-500 leading-jp tracking-jp flex-1 mb-6">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="btn-outline text-sm self-start"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
