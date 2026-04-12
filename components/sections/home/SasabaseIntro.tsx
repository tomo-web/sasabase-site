import Link from 'next/link'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

const activities = [
  "多世代寺子屋 Terra'Co（毎週水曜日の午後）",
  '体験型民泊',
  '地域イベント・ワークショップ',
]

export default function SasabaseIntro() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-base">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className="order-2 lg:order-1">
            <ImagePlaceholder
              label="Sasabase — 古民家外観"
              aspectRatio="portrait"
              variant="stone"
              className="rounded-none"
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="label-text mb-6">実験拠点 / Sasabase</p>

            <h2 className="heading-serif text-h2 text-balance text-foreground mb-6 leading-[1.4]">
              昭和の古民家から、
              <br />
              未来の学びを実験する。
            </h2>

            <p className="prose-jp mb-5">
              Sasabaseは、兵庫県川西市にある昭和期の古民家を拠点とした「生きた実験の場」です。
              本業としての事業ではなく、教育と地域のあり方を検証するためのラボとして位置づけています。
            </p>

            <ul className="flex flex-col gap-3 mb-10">
              {activities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-stone-500 tracking-jp leading-jp"
                >
                  <span className="w-4 h-px bg-primary mt-[0.7em] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/sasabase" className="btn-outline">
              Sasabaseを見る
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
