import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export const metadata: Metadata = {
  title: '企業研修 | 川西市Sasabaseの体験型研修',
  description:
    '火起こし・かまど料理を通じてチームの本質に触れる、川西市の体験型企業研修。自然の中でチームビルディング・リーダーシップを実践的に学びます。大阪から約50分。',
  keywords: [
    '企業研修 兵庫',
    '体験型研修 川西市',
    'チームビルディング 自然',
    '社会人学び直し 実践型',
    '研修 古民家',
    '里山 企業研修',
    'チーム研修 大阪近郊',
  ],
  openGraph: {
    title: '企業研修 | 川西市Sasabaseの体験型研修',
    description:
      '火起こし・かまど料理を通じたチームビルディング。川西市Sasabaseの体験型企業研修。大阪から約50分。',
    locale: 'ja_JP',
    type: 'website',
  },
}

const whyKamado = [
  {
    number: '01',
    title: '役割分担が自然と生まれる',
    body: '誰が火を見て、誰が水を測り、誰が全体を仕切るか。指示がなくても動きが生まれる。そのチームの「構造」が、ありありと見えてきます。',
  },
  {
    number: '02',
    title: '段取りが結果を決める',
    body: '火の準備、水の量、蒸らしの時間。どれか一つが崩れても、ご飯はうまく炊けません。段取りと優先順位の大切さが、身体を通じて腹落ちします。',
  },
  {
    number: '03',
    title: 'コミュニケーションの質が出る',
    body: '「今どうなってる？」「次、何する？」という問いかけが連続します。普段のミーティングでは見えない、チームの対話の癖が浮かび上がります。',
  },
  {
    number: '04',
    title: '想定外への対応が必要になる',
    body: '火加減は読めない。煙が出る。想定外は必ず来ます。そのとき、チームがどう動くか。柔軟性と対応力の素地が、自然な形で試されます。',
  },
  {
    number: '05',
    title: 'プロセスにチームの特徴が表れる',
    body: '結果（炊けたか）だけでなく、どのように進めたかというプロセスに、そのチームの習慣や文化が色濃く映し出されます。',
  },
]

const flowSteps = [
  {
    number: '01',
    title: '羽釜ご飯づくり',
    sub: 'チームで取り組む、火起こし・炊飯',
    body: '薪に火をつけ、水を量り、羽釜で米を炊く。手順は最低限しか伝えません。何をどう判断し、チームがどう動くかを、ファシリテーターが静かに観察します。',
  },
  {
    number: '02',
    title: '振り返り',
    sub: '体験を言語化する',
    body: '「何が起きていたか」「自分はどう動いたか」「チームはどう機能したか」を対話で掘り下げます。感想ではなく、事実と解釈を分けることを意識した問いかけを行います。',
  },
  {
    number: '03',
    title: 'ミニ講義',
    sub: 'ビジネス思考と接続する',
    body: 'PDCA、チーム内の役割分担、ボトルネック、コミュニケーション構造など、ビジネスに直結する概念を、先ほどの体験と重ね合わせながら解説します。「あのとき自分たちがやっていたこと」が、言葉になる瞬間です。',
  },
  {
    number: '04',
    title: 'レポート作成',
    sub: '学びを持ち帰るための言語化',
    body: '個人またはチームで、今日の気づきを業務に接続するレポートを作成します。「明日からどう変えるか」を具体的に書くことで、研修が日常に着地します。',
  },
]

const lectureTopics = [
  {
    title: 'PDCA',
    body: '計画・実行・確認・改善のサイクルを、羽釜体験の中で実際にどう回していたかを振り返ります。',
  },
  {
    title: 'チーム内の役割',
    body: 'リーダー・実行者・観察者・調整者。役割の偏りや空白がチームの動きに与える影響を考えます。',
  },
  {
    title: 'ボトルネック',
    body: 'どこで詰まったか。プロセス全体を見渡したとき、最も流れを止めていた要因はどこにあったかを特定します。',
  },
  {
    title: 'コミュニケーション構造',
    body: '誰が誰に話しかけていたか。情報はどう流れていたか。チームの対話のパターンを可視化します。',
  },
  {
    title: '価値とは何か',
    body: '「うまく炊けた」は誰が判断するのか。価値の定義が人によって異なることを、具体的な体験から問い直します。',
  },
]

const outcomes = [
  'チーム内の関係性の見え方が変わる',
  '自分の役割・癖への気づき',
  '段取りや連携の課題の可視化',
  '対話の質の変化',
  '日常業務への具体的な持ち帰り',
]


export default function CorporateTrainingPage() {
  return (
    <>
      {/* ① Hero */}
      <section className="min-h-[calc(100vh-68px)] flex items-center bg-background">
        <div className="container-base py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-8">Corporate Training</p>

              <h1 className="heading-serif text-h2 text-foreground mb-8 leading-[1.35]">
                火を起こし、
                <br />
                米を炊く。その中で、
                <br />
                チームの本質が、
                <br />
                見えてくる。
              </h1>

              <p className="text-base md:text-lg text-stone-500 leading-jp tracking-jp mb-4 max-w-[36ch]">
                自然体験ではありません。
              </p>
              <p className="text-base md:text-lg text-stone-500 leading-jp tracking-jp mb-12 max-w-[36ch]">
                チームと組織のあり方を、
                体験を通じて問い直す研修です。
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="#about" className="btn-primary">
                  この研修について
                </Link>
                <Link href="#flow" className="btn-outline">
                  研修の流れを見る
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/IMG_3301.JPEG"
                alt="Sasabaseの屋外かまどで羽釜を炊いている様子"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 shadow-md border-l-2 border-primary">
                <p className="text-sm font-medium text-foreground tracking-jp">
                  チームビルディング
                </p>
                <p className="text-xs text-muted tracking-jp mt-0.5">
                  人数・目的に応じてカスタマイズ
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ② この研修について */}
      <section id="about" className="section-padding border-t border-border scroll-mt-[68px]">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-8">この研修について</p>

              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4] text-balance">
                会議室では、
                <br />
                見えないものがある。
              </h2>

              <div className="space-y-6 text-base text-stone-600 leading-jp tracking-jp">
                <p>
                  チームの本当の姿は、整った環境の中では見えにくいものです。
                  資料があり、役割が決まり、発言のルールがある場所では、
                  人は「役割を演じる」ことに集中します。
                </p>
                <p>
                  しかし、誰も正解を知らない状況に放り込まれたとき、
                  チームの素の動きが現れます。
                </p>
                <p>
                  Sasabaseの企業研修は、羽釜でご飯を炊くという
                  シンプルな体験を入口に、
                  チームの関係性・コミュニケーション・意思決定の構造を
                  浮かび上がらせます。
                </p>
                <p>
                  そこから振り返り、言語化し、
                  日常業務へと持ち帰る。
                  それが、この研修の設計です。
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/名称未設定のデザイン (7).png"
                alt="会議室の空の椅子"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ③ なぜ羽釜ご飯なのか */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">

          <div className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="label-text mb-6">なぜ羽釜ご飯なのか</p>
              <h2 className="heading-serif text-h2 text-foreground mb-6 leading-[1.4]">
                米を炊くことは、
                <br />
                チームを映す鏡になる。
              </h2>
              <p className="text-sm text-stone-500 leading-jp tracking-jp max-w-[44ch]">
                羽釜ご飯づくりには、チームが機能するために必要な要素が
                すべて凝縮されています。
              </p>
            </div>
            <div className="relative aspect-video w-full">
              <Image
                src="/images/teamwork.png"
                alt="チームワークのイメージ"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyKamado.map((item) => (
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

      {/* ④ 研修の流れ */}
      <section id="flow" className="section-padding border-t border-border scroll-mt-[68px]">
        <div className="container-base">

          <div className="mb-14">
            <p className="label-text mb-6">研修の流れ</p>
            <h2 className="heading-serif text-h2 text-foreground leading-[1.4]">
              体験して、振り返り、
              <br />
              言葉にして持ち帰る。
            </h2>
          </div>

          <div className="flex flex-col">
            {flowSteps.map((step) => (
              <div
                key={step.number}
                className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-start border-t border-border py-10 lg:py-14"
              >
                <div className="flex items-start gap-6 lg:gap-0 lg:flex-col">
                  <span className="text-xs font-mono text-stone-300">{step.number}</span>
                  <div className="lg:mt-4">
                    <h3 className="heading-serif text-h3 text-foreground leading-[1.5] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-primary tracking-jp">{step.sub}</p>
                  </div>
                </div>
                <p className="text-base text-stone-600 leading-jp tracking-jp lg:pt-8">
                  {step.body}
                </p>
              </div>
            ))}
            <div className="border-t border-border" />
          </div>

        </div>
      </section>

      {/* ⑤ ミニ講義で扱う要素 */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">

          <div className="mb-14">
            <p className="label-text mb-6">ミニ講義</p>
            <h2 className="heading-serif text-h2 text-foreground mb-6 leading-[1.4]">
              体験が、
              <br />
              ビジネス思考と接続される。
            </h2>
            <p className="text-sm text-stone-500 leading-jp tracking-jp max-w-[44ch]">
              羽釜体験の直後だからこそ、
              概念が腹落ちします。
              講義は、知識を「与える」のではなく、
              体験を「解釈する」ための道具として使います。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {lectureTopics.map((item, i) => (
              <div key={item.title} className="border-t-2 border-primary pt-6 pr-4">
                <span className="text-xs font-mono text-stone-300 mb-3 block">
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

        </div>
      </section>

      {/* ⑥ この研修で得られること */}
      <section className="section-padding border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

            <div>
              <p className="label-text mb-8">この研修で得られること</p>
              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                研修が終わっても、
                <br />
                気づきは残る。
              </h2>

              <ul className="flex flex-col gap-5 mb-10">
                {outcomes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-base text-stone-600 leading-jp tracking-jp"
                  >
                    <span className="mt-[0.45em] w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-stone-400 leading-jp tracking-jp">
                チームが「何かを一緒にやり遂げた」という感覚を持つことも、
                この研修の重要な効果のひとつです。
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/Plan.png"
                alt="PLAN / START / WORK — ビジネス思考のイメージ"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>


      {/* ⑧ 参加について */}
      <section className="section-padding border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-8">参加について</p>
              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                まずは、
                <br />
                状況を聞かせてください。
              </h2>

              <div className="space-y-5 text-base text-stone-600 leading-jp tracking-jp mb-10">
                <p>
                  この研修は、企業ごとの人数・状況に応じて
                  個別に設計しています。
                  「チームの関係性を変えたい」「管理職を育てたい」
                  「組織文化を見直したい」など、
                  どのような課題感でも構いません。
                </p>
                <p>
                  まずはご相談いただき、
                  お互いの理解を深めるところから始めます。
                  内容が固まってから、費用・スケジュール等の詳細をご案内します。
                </p>
              </div>

              <p className="text-xs text-muted tracking-label uppercase mb-3">実施の目安</p>
              <div className="grid grid-cols-3 gap-0 divide-x divide-border border border-border bg-white mb-4">
                {[
                  { label: '時間', value: '半日〜1日程度' },
                  { label: '人数', value: '5〜20名' },
                  { label: '形式', value: '日帰り・宿泊対応可' },
                ].map((item) => (
                  <div key={item.label} className="px-5 py-5">
                    <p className="text-xs text-muted tracking-label uppercase mb-2">{item.label}</p>
                    <p className="text-sm font-medium text-foreground tracking-jp">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-stone-400 leading-jp tracking-jp mb-4">
                ※ 内容に応じて個別設計します
              </p>
              <p className="text-sm text-stone-500 leading-jp tracking-jp mb-10">
                参考価格：半日 100,000円（5名程度）〜<br />
                （事前ヒアリング・設計を含みます）
              </p>

              <p className="text-xs text-stone-400 leading-jp tracking-jp mb-10">
                ※ お問い合わせからご連絡いただいた後、オンラインまたは対面での初回相談を設けています。
              </p>

              <Link href="/contact" className="btn-primary">
                お問い合わせ・ご相談
              </Link>
            </div>

            {/* Image */}
            <div className="relative aspect-square w-full max-w-[400px] mx-auto lg:mx-0">
              <Image
                src="/images/Team.png"
                alt="TEAMのブロック文字"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 50vw, 400px"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ⑨ CTA */}
      <section className="section-padding bg-primary border-t border-primary-600">
        <div className="container-base text-center">
          <p className="text-xs text-primary-200 tracking-label uppercase mb-6">Contact</p>

          <h2 className="heading-serif text-h1 text-white mb-6 text-balance leading-[1.4]">
            チームの本質を、
            <br />
            一緒に見つめませんか。
          </h2>

          <div className="space-y-3 mb-10">
            <p className="text-sm md:text-base text-primary-200 leading-jp tracking-jp max-w-[40ch] mx-auto">
              会議室の外で、チームの本当の姿と向き合う。
            </p>
            <p className="text-sm md:text-base text-primary-200 leading-jp tracking-jp max-w-[40ch] mx-auto">
              その経験が、日常の仕事を変えていきます。
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
