import Link from 'next/link'

const fields = [
  {
    number: '01',
    title: '米づくり',
    description:
      '笹部の棚田の維持は、地域にとって欠かせない営みです。\n土づくりや水管理など日々の積み重ねを通じて、\n里山の暮らしと向き合う実践を続けています。',
    link: { href: '/activities', label: '詳細はこちら' },
  },
  {
    number: '02',
    title: '貸しスペース',
    description:
      '古民家の空間を活かし、\n学びや対話の場としてご利用いただけます。',
    link: { href: '/space', label: '詳細はこちら' },
  },
]

export default function FieldSection() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-base">

        <div className="mb-10 md:mb-12">
          <p className="text-xs font-medium tracking-label text-muted mb-4">フィールド</p>
          <h2 className="heading-serif text-h2 text-foreground mb-4">
            Sasabaseのフィールド
          </h2>
          <p className="text-sm text-stone-500 leading-jp tracking-jp max-w-[44ch]">
            里山での米づくりと古民家という2つの資源が、
            Sasabaseのすべての実践を支えています。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {fields.map((field) => (
            <div
              key={field.number}
              className="bg-stone-50 border border-border p-8"
            >
              <span className="text-xs font-mono text-stone-300 mb-4 block">
                {field.number}
              </span>
              <h3 className="heading-serif text-h3 text-foreground mb-3 leading-[1.5]">
                {field.title}
              </h3>
              <p className="text-sm text-stone-500 leading-jp tracking-jp whitespace-pre-line">
                {field.description}
              </p>
              {field.link && (
                <Link
                  href={field.link.href}
                  className="inline-block mt-5 text-sm text-primary hover:underline"
                >
                  → {field.link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
