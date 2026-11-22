import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SchoolUpdate from '@/components/sections/SchoolUpdate'

export const metadata: Metadata = {
  title: '「畑からマーケット」スクール | 川西市・実践型プログラム',
  description:
    '川西市笹部の「畑からマーケット」スクール。第1期の販売・売上計算・修了式を終え、参加者の声を紹介。2027年4月は小学生コースも同時開講。各期全6回12,000円、各コース6名の少人数制です。',
  keywords: [
    '「畑からマーケット」スクール',
    '川西市 笹部',
    '中高生 実践型教育',
    '地域資源 商品企画',
    '生産 加工 販売',
  ],
  openGraph: {
    title: '「畑からマーケット」スクール | 川西市・実践型プログラム',
    description:
      '第1期が修了。商品づくり・販売・収支の振り返りと参加者の声を紹介します。2027年4月は小学生・中高生コースを開講。パイロット参加費は各期全6回12,000円です。',
    locale: 'ja_JP',
    type: 'website',
  },
}

const flow = [
  {
    number: '01',
    phase: '生産',
    title: '土づくり・米づくり',
    body: '米づくりの一年の流れを学びながら、田んぼの作業に参加します。土を耕す・水を管理する・収穫するといった各工程のうち、立ち会える時期は参加するタイミングによって異なります。農業の現実と、食を生み出すことの重さに触れることから、学びが始まります。',
  },
  {
    number: '02',
    phase: '加工',
    title: '素材に価値を加える',
    body: '米や地域の素材を、どんな商品にできるか考えます。加工方法だけでなく、素材の特徴をどう生かし、誰に届けるかも学びます。開催内容によっては、実際の加工作業にも参加します。',
  },
  {
    number: '03',
    phase: '販売',
    title: '価値を届ける',
    body: '地域のマルシェなど、実際の販売の場があります。日程が合えば現場に参加し、売れた・売れなかったという事実と向き合います。参加できない場合も、販売の事例を通じて、誰に・どのように届けるかを考えます。',
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

const firstCohort = [
  {
    number: '01',
    phase: '地域の資源に触れる',
    title: '田んぼに入る',
    body: '中高生が笹部の田んぼで田植えに参加しました。米づくりを、地域の現場から知るところが出発点です。',
  },
  {
    number: '02',
    phase: '何を、誰に届けるか',
    title: '商品を形にする',
    body: '米粉クッキーの商品企画とマーケティングに取り組み、誰に届けるかを考えました。原価計算、委託製造、価格決定まで進めました。',
  },
  {
    number: '03',
    phase: '地域の市場へ',
    title: '販売から、振り返りへ',
    body: '完成した米粉クッキーを地域の市で販売しました。最終回には売上と費用を計算し、結果を振り返って次の一歩を考え、修了式を迎えました。',
  },
]


export default function SixthSectorPage() {
  return (
    <>
      {/* ① Hero */}
      <section className="bg-background">
        <div className="container-base py-14 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

            {/* Text */}
            <div>
              <p className="label-text normal-case mb-8">Sasabaseの活動</p>

              <h1 className="heading-serif text-h1 text-foreground mb-8 leading-[1.35] text-balance">
                「畑からマーケット」スクール
              </h1>

              <p className="text-base md:text-lg text-stone-500 leading-jp tracking-jp mb-4 max-w-[36ch]">
                田んぼから、市場まで。
              </p>
              <p className="text-base md:text-lg text-stone-500 leading-jp tracking-jp mb-12 max-w-[36ch]">
                第1期は、田植えから米粉クッキーの商品づくり・販売・売上計算まで取り組み、修了しました。2027年4月は小学生コースも同時開講します。
              </p>

              <Link href="#first-cohort" className="btn-primary">
                第1期の実践を見る
              </Link>
              <Link href="#programme-2027" className="btn-ghost mt-4">2027年度の参加案内 →</Link>
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

      {/* Sasabaseでの第1期 */}
      <section id="first-cohort" className="section-padding border-t border-border bg-stone-50 scroll-mt-[68px]">
        <div className="container-base">
          <p className="label-text mb-6">笹部での第1期</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-10">
            <div>
              <h2 className="heading-serif text-h2 text-foreground leading-[1.4] mb-6">
                田んぼから、<br />お客さまのもとへ。
              </h2>
              <p className="text-base text-stone-600 leading-jp tracking-jp mb-0">
                第1期では中高生が、地域の人や事業者と関わりながら、田植えから米粉クッキーの商品企画、原価計算、委託製造、価格決定、販売まで取り組みました。最終回は売上計算と振り返り、その先を考える時間を持ち、修了式を終えました。
              </p>
            </div>
            <figure>
              <div className="relative aspect-[1280/670] w-full overflow-hidden">
                <Image
                  src="/images/sixth-sector-first-cohort.webp"
                  alt="第1期の学びの様子。古民家での商品企画、加工の体験、地域での作業"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <figcaption className="text-xs text-stone-500 leading-jp tracking-jp mt-3">
                第1期の記録から。<a href="https://note.com/withtomo/n/n86ed2695d5b0" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">活動の記録を読む ↗</a>
              </figcaption>
            </figure>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {firstCohort.map((item) => (
              <article key={item.number} className="bg-white border border-border p-6 lg:p-8">
                <div className="flex items-center justify-between gap-4 border-b border-border pb-4 mb-6">
                  <span className="text-xs font-mono text-stone-400">{item.number}</span>
                  <span className="text-xs text-primary tracking-jp">{item.phase}</span>
                </div>
                <h3 className="heading-serif text-h3 text-foreground mb-4">{item.title}</h3>
                <p className="text-sm text-stone-600 leading-jp tracking-jp mb-0">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="text-xs text-stone-400 leading-jp tracking-jp mt-6 mb-0">
            実地活動の内容は、参加時期によって異なります。
          </p>
        </div>
      </section>

      <SchoolUpdate />

      {/* ② この取り組みについて */}
      <section id="about" className="section-padding border-t border-border scroll-mt-[68px]">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-8">この取り組みについて</p>

              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                田んぼの作業も、
                <br />
                商品の値付けも、
                <br />
                ひとつながりの学びに。
              </h2>

              <div className="space-y-6 text-base text-stone-600 leading-jp tracking-jp">
                <p>
                  「畑からマーケット」スクールは、1次産業の「生産」、2次産業の「加工」、3次産業の「販売」をひとつながりに捉え、体験と学習を行き来しながら学ぶスクールです。
                </p>
                <p>
                  この「1 × 2 × 3 ＝ 6」という6次産業の考え方を、学びのコンセプトにしています。
                </p>
                <p>
                  田畑で育てたものが、どんな工夫で商品になり、誰のもとへ届くのか。実際に手を動かすだけでなく、お客さまのことを調べ、原価や価格を考え、販売の結果を振り返ります。
                </p>
                <p>
                  地域の人や事業者と関わりながら、「やってみる」「考える」「次に生かす」を重ねる。その過程を通じて、自分で考え、仲間と協力し、行動する力を育てていきます。
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

          <p className="text-xs text-stone-400 leading-jp tracking-jp mb-6">
            ※ 実地体験できる内容は、参加時期とプログラムの設計によって異なります。
          </p>

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
                  2027年度の小学生・中高生コースについて、参加のご相談を受け付けています。学校・団体向けのプログラムも、個別のご相談をもとに設計します。
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
