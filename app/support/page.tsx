import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '不登校・学習支援 | 川西市Sasabase',
  description:
    "学校以外の学びの場として、川西市SasabaseはKubiロボット・大学生チュータリング・Terra'Coを通じて、一人ひとりのペースに寄り添います。兵庫県川西市。",
  keywords: [
    '不登校 居場所 兵庫',
    '不登校 支援 川西市',
    '学校以外 学び場',
    'テレプレゼンス 学習',
    'オルタナティブ教育 兵庫',
    '不登校 兵庫',
    '学習支援 川西',
  ],
  openGraph: {
    title: '不登校・学習支援 | 川西市Sasabase',
    description:
      "Kubiロボット・大学生チュータリング・Terra'Coを通じて、一人ひとりのペースに寄り添う学び場。兵庫県川西市。",
    locale: 'ja_JP',
    type: 'website',
  },
}

const options = [
  {
    number: '01',
    title: '大学生・大学院生による個別チュータリング',
    body: '教員ではなく、少し年上の大学生や大学院生が関わります。勉強を「教える」よりも、一緒に考える時間を大切にしています。学力よりも、その子のペースや関心に寄り添うことを重視しています。',
  },
  {
    number: '02',
    title: 'Kubiロボットを活用したリモート参加',
    body: '外に出ることが難しくても、Sasabaseの場に参加できる仕組みがあります。テレポートロボット「Kubi」を通じて、自宅からSasabaseの空気を感じながら、人とつながることができます。来なくてもいい。でも、つながれる。',
  },
  {
    number: '03',
    title: "Terra'Coとの連携",
    body: "毎週水曜日に開かれている「多世代寺子屋 Terra'Co」と連携しています。決まったプログラムはなく、ただ居るだけでもいい場所です。学校でも家でもない、少し違う居場所として関わることができます。",
  },
  {
    number: '04',
    title: '保護者へのコンサルテーション',
    body: '子どものことを心配しているのに、どこに相談すればいいかわからない——そんな保護者の方の話を、まず聞くことから始めます。答えを出すのではなく、一緒に整理する場として使ってください。',
  },
  {
    number: '05',
    title: 'その人に合わせた関わり',
    body: '「こういうプログラムがあります」と押しつけることはしません。その子が今どういう状態で、何を求めているのかを聞きながら、できることを一緒に考えていきます。',
  },
]

const features = [
  {
    title: '一律ではない',
    body: '同じ関わり方を全員に当てはめません。来られる日、来られない日、話せる日、話せない日——それぞれに合わせて、柔軟に動きます。',
  },
  {
    title: '学びと社会をつなぐ',
    body: '勉強を教えることだけが目的ではありません。地域の人と関わる経験、里山での活動、対話の時間——そういった「学びの接点」をつくることを大切にしています。',
  },
  {
    title: '排除しない場所',
    body: 'Sasabaseには、さまざまな背景を持つ人が集まっています。ここでは、「普通」に合わせることよりも、その人がそのままでいられることを優先しています。',
  },
]

export default function SupportPage() {
  return (
    <>
      {/* ① 導入 */}
      <section className="min-h-[calc(100vh-68px)] flex items-center bg-background">
        <div className="container-base py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-10">不登校・学習支援</p>

              <h1 className="heading-serif text-h1 text-foreground mb-10 leading-[1.4] text-balance">
                学校だけが、
                <br />
                学びじゃない。
              </h1>

              <div className="space-y-5 text-base text-stone-500 leading-jp tracking-jp mb-12">
                <p>
                  学校に行けない日があっても、
                  学びたい気持ちは、消えていない。
                </p>
                <p>
                  Sasabaseは、そう信じています。
                </p>
                <p>
                  ここは、学校でも、塾でも、支援センターでもありません。
                  里山の古民家を拠点に、子どもも大人も、
                  いろんな人が集まって、それぞれのやり方で関わり合っている場所です。
                </p>
                <p>
                  「来てみようかな」と思えたとき、
                  その気持ちに応えられる場でありたいと思っています。
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="#about" className="btn-primary">
                  この取り組みについて
                </Link>
                <Link href="#options" className="btn-outline">
                  関わり方を見る
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/34187209_s.jpg"
                alt="学びの場で子どもが関わる様子"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* ② この取り組みについて */}
      <section id="about" className="section-padding border-t border-border scroll-mt-[68px]">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Text */}
            <div>
              <p className="label-text mb-8">この取り組みについて</p>

              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4] text-balance">
                選択肢のひとつとして、
                <br />
                ここがあってもいい。
              </h2>

              <div className="space-y-6 text-base text-stone-600 leading-jp tracking-jp">
                <p>
                  不登校、学校への不安、人との関わりに疲れてしまった——
                  その状態は、それぞれ違います。
                </p>
                <p>
                  Sasabaseはそのすべてに「答え」を持っているわけではありません。
                  でも、「ここなら少し関われるかもしれない」と思える場所の
                  選択肢として、存在できると考えています。
                </p>
                <p>
                  学校に戻ることを目標にするのではなく、
                  今、この子にとって何が心地よいか。
                  何が好奇心を呼び起こすか。
                  何が人とのつながりを育むか。
                </p>
                <p>
                  そこから一緒に考えていきたいと思っています。
                </p>
              </div>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-3 items-end">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/教室での学習の風景image.png"
                  alt="古民家での学習の様子"
                  fill
                  className="object-cover object-center rounded-sm"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-[3/4] w-full mt-10">
                <Image
                  src="/images/S__35758096.jpg"
                  alt="子どもが学ぶ様子"
                  fill
                  className="object-cover object-center rounded-sm"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-[4/3] w-full col-span-2">
                <Image
                  src="/images/IMG_5855.JPEG"
                  alt="古民家の畳で学生と子どもたちが学ぶ様子"
                  fill
                  className="object-cover object-center rounded-sm"
                  sizes="50vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ③ 関わり方 */}
      <section id="options" className="section-padding bg-stone-50 border-t border-border scroll-mt-[68px]">
        <div className="container-base">

          <div className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-6">関わり方</p>
              <h2 className="heading-serif text-h2 text-foreground leading-[1.4] max-w-[32ch] mb-8">
                強制はしません。
                <br />
                選択肢を、一緒に探します。
              </h2>
              <div className="space-y-4 text-base text-stone-600 leading-jp tracking-jp">
                <p>
                  Terra&apos;Coのように、気軽に関われる場がある一方で、より継続的に関わる形もご用意しています。
                </p>
                <p>
                  学習の時間を一緒につくりながら、保護者の方とも連携し、チームとして関わっていく取り組みです。
                </p>
                <p>
                  こちらは個別相談の上でご案内しています。
                </p>
              </div>
            </div>

            {/* Image */}
            <div>
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/ロボット学習セッションの風景.png"
                  alt="Kubiロボットを通じてリモート参加する子どもの様子"
                  fill
                  className="object-cover object-center rounded-sm"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="mt-4 text-xs text-stone-400 leading-jp tracking-jp">
                Kubiを通じて、
                <br />
                離れていてもこの場に&ldquo;居る&rdquo;感覚を持ちながら、
                <br />
                人とつながることができます。
                <br />
                <span className="mt-1 inline-block">（※写真はイメージです）</span>
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {options.map((item) => (
              <div
                key={item.number}
                className={`bg-white border border-border p-8 ${
                  item.number === '05' ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <span className="text-xs font-mono text-stone-300 mb-4 block">
                  {item.number}
                </span>
                <h3 className="heading-serif text-h3 text-foreground mb-4 leading-[1.5]">
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

      {/* ④ 特徴 */}
      <section className="section-padding border-t border-border">
        <div className="container-base">

          <div className="mb-14">
            <p className="label-text mb-6">Sasabaseの関わり方</p>
            <h2 className="heading-serif text-h2 text-foreground leading-[1.4]">
              「こうしなければ」は、ありません。
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((item) => (
              <div key={item.title} className="border-t-2 border-primary pt-6">
                <h3 className="heading-serif text-h3 text-foreground mb-4 leading-[1.5]">
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

      {/* Terra'Co連携の補足 */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="label-text mb-6">連携している場</p>
              <h2 className="heading-serif text-h2 text-foreground mb-8 leading-[1.4]">
                毎週水曜日、
                <br />
                Sasabaseは開いています。
              </h2>
              <div className="space-y-4 text-base text-stone-600 leading-jp tracking-jp mb-8">
                <p>
                  多世代寺子屋「Terra&apos;Co」は、子どもから大人まで、
                  誰でも立ち寄れる場として毎週水曜日に開かれています。
                </p>
                <p>
                  特別なプログラムはありません。
                  宿題をしてもいいし、ただ座っていてもいい。
                  誰かと話してもいいし、一人でいてもいい。
                </p>
                <p>
                  「居る」ことが許されている場所です。
                </p>
              </div>
              <Link href="/terraco" className="btn-ghost text-base">
                Terra&apos;Coについて詳しく →
              </Link>
            </div>

            <div className="bg-white border border-border p-8 lg:p-10">
              <p className="label-text mb-8">開催日時</p>
              <div className="space-y-6 divide-y divide-border">
                <div className="pb-6">
                  <p className="text-xs text-muted tracking-jp mb-2">開催日</p>
                  <p className="heading-serif text-h3 text-foreground">毎週水曜日</p>
                </div>
                <div className="pt-6 pb-6">
                  <p className="text-xs text-muted tracking-jp mb-2">時間</p>
                  <p className="heading-serif text-h3 text-foreground">14:00 〜 20:00頃</p>
                  <p className="text-xs text-stone-400 mt-2 tracking-jp">出入り自由</p>
                </div>
                <div className="pt-6">
                  <p className="text-xs text-muted tracking-jp mb-2">学習サポート</p>
                  <p className="text-sm text-foreground leading-jp tracking-jp">16:00 〜 20:00頃</p>
                  <p className="text-xs text-stone-400 mt-1 tracking-jp">元中学校教員による</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑤ 参加について */}
      <section className="section-padding border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-8">参加について</p>
              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                まず、話すだけでも
                <br />
                大丈夫です。
              </h2>

              <div className="space-y-5 text-base text-stone-600 leading-jp tracking-jp mb-10">
                <p>
                  「うちの子に合うかどうかわからない」
                  「どんな場所か見てみたい」
                  そういう段階でも、歓迎しています。
                </p>
                <p>
                  まずは見学や、保護者の方だけでのご相談から始めることもできます。
                  何かを決めなくていい。ただ知るだけでもいい。
                </p>
                <p>
                  Sasabaseに関わることで、何かが変わるかもしれないし、
                  変わらないかもしれない。
                  それでも、「こういう場所がある」と知っていることは、
                  選択肢になると思っています。
                </p>
              </div>

              <p className="text-xs text-stone-400 leading-jp tracking-jp">
                ※ 受け入れ状況によってはお時間をいただく場合があります。まずはお気軽にご連絡ください。
              </p>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_8909.JPG"
                alt="古民家の縁側でくつろぐ様子"
                fill
                className="object-cover object-center rounded-sm"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ⑥ クロージング CTA */}
      <section className="section-padding bg-primary border-t border-primary-600">
        <div className="container-base text-center">
          <p className="text-xs text-primary-200 tracking-label uppercase mb-6">Contact</p>

          <h2 className="heading-serif text-h1 text-white mb-6 text-balance leading-[1.4]">
            一緒に、考えていきましょう。
          </h2>

          <div className="space-y-3 mb-10">
            <p className="text-sm md:text-base text-primary-200 leading-jp tracking-jp max-w-[40ch] mx-auto">
              「うちの子のことを話してみたい」
              「どんな場所か見てみたい」
            </p>
            <p className="text-sm md:text-base text-primary-200 leading-jp tracking-jp max-w-[40ch] mx-auto">
              そのくらいの気持ちで、連絡していただければ十分です。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-outline-white">
              お問い合わせ・ご相談
            </Link>
            <Link href="/terraco" className="btn-outline-white">
              Terra&apos;Coを見る →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
