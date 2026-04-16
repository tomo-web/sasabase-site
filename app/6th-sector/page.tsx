import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export const metadata: Metadata = {
  title: '6次産業スクール | 川西市・実践型プログラム',
  description:
    '生産・加工・販売を一体で学ぶ、川西市の実践型6次産業スクール。棚田での米づくりから加工・販売まで、地域経済の仕組みを体験を通じて学びます。',
  keywords: [
    '6次産業 体験',
    '農業ビジネス 兵庫',
    '農業体験 川西市',
    '地域起業 実践',
    '6次産業 学び',
    '社会人 学び直し 実践型',
    '地域経済 学び',
  ],
  openGraph: {
    title: '6次産業スクール | 川西市・実践型プログラム',
    description:
      '棚田での米づくりから加工・販売まで体験する、川西市の実践型6次産業スクール。地域の経済サイクルを体験しながら学びます。',
    locale: 'ja_JP',
    type: 'website',
  },
}

const flow = [
  {
    number: '01',
    phase: '生産',
    title: '土づくり・米づくり',
    body: '棚田の土を耕し、苗を植え、水を管理し、秋に収穫する。この一連の営みを通じて、農業の現実と、食を生み出すことの重さを実感します。現場で身体を使うことから、すべての学びが始まります。',
  },
  {
    number: '02',
    phase: '加工',
    title: '素材に価値を加える',
    body: '収穫した米や地域の素材を使い、商品としての形を考えます。食品加工の工程だけでなく、「何が価値になるか」を問いながら、素材と市場の間にある思考を実践します。',
  },
  {
    number: '03',
    phase: '販売',
    title: '価値を届ける',
    body: 'マルシェや地域の販売の場に実際に関わり、誰に・どのように届けるかを考えます。売れた・売れなかったという事実が、次の生産と加工への問いに返ってきます。この往復が、学びを深めます。',
  },
]

const whyHere = [
  {
    title: 'リアルなフィールドがある',
    body: '笹部の棚田は、今も維持管理が必要な現役の農地です。観光や演出のための農業ではなく、地域の現実の中で実践します。',
  },
  {
    title: '担い手不足という課題がある',
    body: '農家の高齢化が進み、耕作放棄地が増えつつあります。この課題に関わることは、学びが地域へと還元される経験になります。',
  },
  {
    title: '地域の人・事業者とつながれる',
    body: '農家・加工業者・小売など、地域の営みを支える人たちと実際に関わります。教科書にないリアルな経営判断や価値観に触れることができます。',
  },
]


export default function SixthSectorPage() {
  return (
    <>
      {/* ① Hero */}
      <section className="min-h-[calc(100vh-68px)] flex items-center bg-background">
        <div className="container-base py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-8">Learning &amp; Local Design</p>

              <h1 className="heading-serif text-h1 text-foreground mb-8 leading-[1.35] text-balance">
                6次産業スクール
              </h1>

              <p className="text-base md:text-lg text-stone-500 leading-jp tracking-jp mb-4 max-w-[36ch]">
                生産・加工・販売を、分けずに学ぶ。
              </p>
              <p className="text-base md:text-lg text-stone-500 leading-jp tracking-jp mb-12 max-w-[36ch]">
                地域の現場を舞台にした、実践型の学びの設計です。
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="#about" className="btn-primary">
                  この取り組みについて
                </Link>
                <Link href="#flow" className="btn-outline">
                  学びの流れを見る
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/IMG_9552.JPG"
                alt="笹部の棚田風景"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 shadow-md border-l-2 border-primary">
                <p className="text-sm font-medium text-foreground tracking-jp">
                  生産 × 加工 × 販売
                </p>
                <p className="text-xs text-muted tracking-jp mt-0.5">
                  地域まるごとキャンパス
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ② この取り組みについて */}
      <section id="about" className="section-padding border-t border-border scroll-mt-[68px]">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-8">この取り組みについて</p>

              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4] text-balance">
                ○○体験で終わらせない。
                <br />
                一連の流れを通じて、ビジネス思考を育てる。
              </h2>

              <div className="space-y-6 text-base text-stone-600 leading-jp tracking-jp">
                <p>
                  6次産業とは、農林水産業（1次）・製造加工業（2次）・販売サービス業（3次）を
                  一体的に展開することで、地域の資源に新たな価値を生み出す取り組みです。
                </p>
                <p>
                  しかし多くの場合、学びはどこかで分断されています。
                  農業を学ぶ場は農業だけを。経営を学ぶ場は経営だけを。
                </p>
                <p>
                  Sasabaseでは、この一連の流れを「分けずに」実践します。
                  土を耕し、収穫し、加工し、届ける。
                  その全体を通じて初めて見えてくる、価値とは何かという問いと向き合います。
                </p>
                <p>
                  これは農業体験ではなく、地域と経済をつなぐ学びの設計です。
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-video w-full">
              <Image
                src="/images/６次産業教育モデル.jpg"
                alt="地域まるごとキャンパス「6次産業教育モデル」— 一次産業（つくる）→ 二次産業（加工）→ 三次産業（販売）→ 地域に還元"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ③ Sasabaseで行う意味 */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">

          <div className="mb-14">
            <p className="label-text mb-6">なぜ、ここで学ぶのか</p>
            <h2 className="heading-serif text-h2 text-foreground leading-[1.4] max-w-[32ch]">
              フィールドは、
              <br />
              つくられたものではない。
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
            {whyHere.map((item, i) => (
              <div key={item.title} className="bg-white border border-border p-8">
                <span className="text-xs font-mono text-stone-300 mb-4 block">
                  {String(i + 1).padStart(2, '0')}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-video w-full">
              <Image
                src="/images/関わる.jpg"
                alt="生産者・事業者・地域住民と協働する6次産業教育モデル"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-5 text-base text-stone-600 leading-jp tracking-jp">
              <p>
                Sasabaseは「地域まるごとキャンパス」の実験（Lab）です。
              </p>
              <p>
                このモデルではあらゆる人達と関わります。
                つくる段階では生産者と、加工段階では事業者と、
                そして販売では地域住民と…。
              </p>
              <p>
                すんなりとはいかないはずです。
                何度も失敗と成功を繰り返し、
                まさに１×２×３＝６となる６次産業を体験し学ぶのです。
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ④ 学びの流れ */}
      <section id="flow" className="section-padding border-t border-border scroll-mt-[68px]">
        <div className="container-base">

          <div className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-6">学びの流れ</p>
              <h2 className="heading-serif text-h2 text-foreground mb-6 leading-[1.4]">
                体験ではなく、
                <br />
                理解と実践として設計する。
              </h2>
              <p className="text-sm text-stone-500 leading-jp tracking-jp max-w-[44ch] mb-4">
                生産・加工・販売の3つのフェーズは、
                それぞれが独立した学びであると同時に、
                深くつながっています。
              </p>
              <p className="text-sm text-stone-500 leading-jp tracking-jp max-w-[44ch]">
                その一連の流れを通じて、
                価値がどのように生まれるのかを考える力を育てます。
              </p>
            </div>

            {/* Image */}
            <div className="relative aspect-video w-full">
              <Image
                src="/images/カリキュラム.jpg"
                alt="ビジネス思考を育成するカリキュラム — ターゲット顧客設定・ペルソナ設定など"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>

          <div className="flex flex-col gap-0">
            {flow.map((item, i) => (
              <div
                key={item.number}
                className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-start border-t border-border py-10 lg:py-14"
              >
                {/* Left: label */}
                <div className="flex items-start gap-6 lg:gap-0 lg:flex-col">
                  <span className="text-xs font-mono text-stone-300">{item.number}</span>
                  <div className="lg:mt-4">
                    <p className="text-xs font-medium text-primary tracking-label mb-2">{item.phase}</p>
                    <h3 className="heading-serif text-h3 text-foreground leading-[1.5]">
                      {item.title}
                    </h3>
                  </div>
                </div>
                {/* Right: body */}
                <p className="text-base text-stone-600 leading-jp tracking-jp lg:pt-8">
                  {item.body}
                </p>
              </div>
            ))}
            <div className="border-t border-border pt-10">
              <p className="text-sm text-stone-400 leading-jp tracking-jp">
                この3つのフェーズを通じて、地域の資源が価値へと変わるプロセスを、自らの実践として理解していきます。
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ⑤ 関わり方 */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

            <div>
              <p className="label-text mb-8">関わり方</p>
              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                一度限りではなく、
                <br />
                継続的に関わることを前提にしています。
              </h2>
              <div className="space-y-5 text-base text-stone-600 leading-jp tracking-jp">
                <p>
                  6次産業の学びは、一日の体験では完結しません。
                  土づくりから販売まで、季節をまたいだ関わりの中でこそ、
                  本質が見えてきます。
                </p>
                <p>
                  個人・学生・企業チームなど、多様な関わり方があります。
                  地域の人や事業者と共に動くことで、
                  自分たちだけでは生まれない視点や関係性が育まれます。
                </p>
                <p>
                  プログラムの形は、関わる人の目的や状況に合わせて、
                  一緒に設計していきます。
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/FDCD9F22-D6B9-4C59-AA8B-29B3157D2A51.JPEG"
                alt="里山の清流と緑の風景"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ⑦ 参加について */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-8">参加について</p>
              <h2 className="heading-serif text-h3 text-foreground mb-10 leading-[1.4]">
                まずは、
                <br />
                話すところから始めましょう。
              </h2>

              <div className="space-y-5 text-base text-stone-600 leading-jp tracking-jp mb-10">
                <p>
                  6次産業スクールは、個別のご相談をもとにプログラムを設計しています。
                  目的・期間・関わり方によって内容が変わるため、
                  まずはお気軽にご連絡ください。
                </p>
<p>
                  「こういうことができるかもしれない」というアイデア段階でも歓迎しています。
                </p>
              </div>

              <p className="text-xs text-stone-400 leading-jp tracking-jp mb-10">
                ※ 受け入れ状況によってはお時間をいただく場合があります。
              </p>

              <Link href="/contact" className="btn-primary">
                お問い合わせ・ご相談
              </Link>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_9559.JPG"
                alt="Sasabaseの古民家外観"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ⑧ CTA */}
      <section className="section-padding bg-primary border-t border-primary-600">
        <div className="container-base text-center">
          <p className="text-xs text-primary-200 tracking-label uppercase mb-6">Contact</p>

          <h2 className="heading-serif text-h1 text-white mb-6 text-balance leading-[1.4]">
            地域を知り、
            <br />
            学びを価値につなぐ。
          </h2>

          <div className="space-y-3 mb-10">
            <p className="text-sm md:text-base text-primary-200 leading-jp tracking-jp max-w-[40ch] mx-auto">
              農業体験ではなく、教育と地域経済をつなぐ学びの場です。
            </p>
            <p className="text-sm md:text-base text-primary-200 leading-jp tracking-jp max-w-[40ch] mx-auto">
              関わり方は、あなたと一緒に考えます。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-outline-white">
              お問い合わせ・ご相談
            </Link>
            <Link href="/concept" className="btn-outline-white">
              コンセプトを見る →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
