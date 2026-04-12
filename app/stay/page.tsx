import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '滞在体験',
  description:
    '里山の古民家に泊まる。Sasabaseの滞在体験は、宿泊ではなく「過ごす時間」に価値があります。地域の営みの中に身を置き、静けさと余白のある時間を。',
}

const canDo = [
  {
    number: '01',
    title: 'ただ、ゆっくり過ごす',
    body: '何かをしなくてもいい。縁側に腰を掛けて、里山の空気を吸う。そういう時間が、ここにはあります。',
  },
  {
    number: '02',
    title: '地域や人と関わる',
    body: '近くに住む人たちの暮らしや、この場所の歴史に触れることができます。日常とは違うつながりが、自然に生まれることがあります。',
  },
  {
    number: '03',
    title: '季節と自然を感じる',
    body: '春の田植え、夏の虫の声、秋の収穫、冬の静けさ。里山の季節は、都市では感じにくいものです。',
  },
  {
    number: '04',
    title: '学びや体験と組み合わせる',
    body: '6次産業スクールや米づくりなど、Sasabaseの活動と組み合わせることもできます。宿泊しながら、より深く関わりたい方へ。',
  },
]

export default function StayPage() {
  return (
    <>
      {/* ① Hero */}
      <section className="min-h-[calc(100vh-68px)] flex items-center bg-background">
        <div className="container-base py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-8">滞在体験</p>

              <h1 className="heading-serif text-h1 text-foreground mb-8 leading-[1.35] text-balance">
                里山の古民家で、
                <br />
                自分のペースで過ごし、関わる時間。
              </h1>

<p className="text-base md:text-lg text-stone-500 leading-jp tracking-jp mb-12 max-w-[36ch]">
                地域の暮らしの中に身を置き、
                余白のある時間を過ごすための滞在です。
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="#about" className="btn-primary">
                  この滞在について
                </Link>
                <Link href="#details" className="btn-outline">
                  滞在の詳細を見る
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_9559.JPG"
                alt="Sasabase — 古民家の外観"
                fill
                className="object-contain object-center bg-stone-100"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 shadow-md border-l-2 border-primary">
                <p className="text-sm font-medium text-foreground tracking-jp">
                  川西市・笹部
                </p>
                <p className="text-xs text-muted tracking-jp mt-0.5">
                  兵庫県
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ② この滞在について */}
      <section id="about" className="section-padding border-t border-border scroll-mt-[68px]">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-8">この滞在について</p>

              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4] text-balance">
                過ごすことが、
                <br />
                そのまま体験になる。
              </h2>

              <div className="space-y-6 text-base text-stone-600 leading-jp tracking-jp">
                <p>
                  Sasabaseの滞在体験は、
                  観光でも、アクティビティでもありません。
                </p>
                <p>
                  里山の古民家という空間の中で、
                  地域の営みを遠くから眺めるのではなく、
                  その中に身を置く時間です。
                </p>
                <p>
                  朝の空気、夜の静けさ、
                  隣近所の人の声、
                  季節のにおい——
                  一泊二日でも、
                  日常とは明らかに違う感覚が生まれます。
                </p>
                <p>
                  何かを「得る」ための滞在ではなく、
                  何かを「感じる」ための時間として、
                  この場所を開いています。
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_9565.JPG"
                alt="Sasabaseの古民家内部 — 和室と廊下"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ③ この場所でできること */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">

          <div className="mb-14">
            <p className="label-text mb-6">この場所でできること</p>
            <h2 className="heading-serif text-h2 text-foreground leading-[1.4]">
              滞在の過ごし方は、
              <br />
              決まっていません。
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {canDo.map((item) => (
              <div key={item.number} className="bg-white border border-border p-8">
                <span className="text-xs font-mono text-stone-300 mb-4 block">
                  {item.number}
                </span>
                <h3 className="heading-serif text-h3 text-foreground mb-3 leading-[1.5]">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-500 leading-jp tracking-jp">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ④ 空間について */}
      <section className="section-padding border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/みんぱく.png"
                alt="Sasabaseの古民家内部 — 和室・洗面・広間・キッチン"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div>
              <p className="label-text mb-8">空間について</p>

              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                昭和の面影が残る、
                <br />
                古民家の一棟です。
              </h2>

              <div className="space-y-6 text-base text-stone-600 leading-jp tracking-jp">
                <p>
                  広間と和室、縁側など、なるべく手を加えすぎず、
                  古民家としての空気をそのまま残した空間です。
                </p>
                <p>
                  整った宿泊施設ではありませんが、
                  それがここでの滞在の本質でもあります。
                  不便さの中に、気づきがある。
                  そういう場所です。
                </p>
                <p>
                  夜は静かです。
                  外には里山の闇があります。
                  それだけで、都市とは違うリセットが起きます。
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ⑤ 滞在について（料金） */}
      <section id="details" className="section-padding bg-stone-50 border-t border-border scroll-mt-[68px]">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Text */}
            <div>
              <p className="label-text mb-8">滞在の目安</p>

              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                母屋を、
                <br />
                まるごと借りる滞在です。
              </h2>

              <div className="space-y-5 text-base text-stone-600 leading-jp tracking-jp mb-10">
                <p>
                  滞在は母屋1棟貸切のかたちでお受けしています。
                  他の宿泊客と共用することなく、
                  この空間をそのままお使いいただけます。
                </p>
                <p>
                  目安として、2名までの滞在で20,000円／泊。
                  3名以上の場合は、お一人あたり8,000円を加算する形でご案内しています。
                  最大5名まで対応可能です。
                </p>
                <p>
                  季節や内容によって変動する場合があります。
                  詳細はお問い合わせの際にご確認ください。
                </p>
              </div>

              <div className="bg-white border border-border p-8 mb-10">
                <p className="label-text mb-6">滞在費の目安</p>
                <div className="flex flex-col divide-y divide-border">
                  {[
                    { label: '2名まで', price: '20,000円 / 泊' },
                    { label: '追加1名ごと', price: '+ 8,000円' },
                    { label: '最大人数', price: '5名まで' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-4">
                      <span className="text-sm text-foreground leading-jp tracking-jp">
                        {item.label}
                      </span>
                      <span className="text-sm font-medium text-foreground tracking-jp">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-stone-400 leading-jp tracking-jp mt-6">
                  ※ 季節・内容により変動する場合があります。詳細はお問い合わせください。
                </p>
              </div>

              <Link href="/contact" className="btn-primary">
                滞在について問い合わせる
              </Link>
            </div>

            {/* Image */}
            <div className="relative aspect-[3/4] w-full lg:sticky lg:top-24">
              <Image
                src="/images/IMG_5277.JPEG"
                alt="Sasabaseのキッチンダイニング"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ⑦ CTA */}
      <section className="section-padding bg-primary border-t border-primary-600">
        <div className="container-base text-center">
          <p className="text-xs text-primary-200 tracking-label uppercase mb-6">Contact</p>

          <h2 className="heading-serif text-h1 text-white mb-6 text-balance leading-[1.4]">
            里山の時間を、
            <br />
            一度体験してみてください。
          </h2>

          <div className="space-y-3 mb-10">
            <p className="text-sm md:text-base text-primary-200 leading-jp tracking-jp max-w-[40ch] mx-auto">
              日常から少し離れた場所で、
              過ごすことの意味が変わります。
            </p>
            <p className="text-sm md:text-base text-primary-200 leading-jp tracking-jp max-w-[40ch] mx-auto">
              まずは、お気軽にご連絡ください。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-outline-white">
              お問い合わせ
            </Link>
            <Link href="/access" className="btn-outline-white">
              Access →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
