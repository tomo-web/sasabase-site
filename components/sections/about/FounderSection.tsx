import Image from 'next/image'

const background = [
  {
    period: '— 企業勤務',
    description:
      '多様なバックグラウンドを持つ人たちと協働しながら、プロジェクトを推進してきました。その中で、価値観や前提の違いによって生まれるズレに向き合う中で、学びやコミュニケーションのあり方に関心を持つようになりました。',
  },
  {
    period: '— MBA取得',
    description:
      '経営学を学び、US CPA試験合格やCFP資格の取得を経てもなお、実践的に事業を動かす力に課題を感じていました。そのため、55歳で改めて学び直すことを決め、海外MBAに取り組みました。ビジネスと社会課題の接点を軸に、実践につながる学びをこれからも深めていきたいと思っています。',
  },
  {
    period: '— 地域活動',
    description:
      '2014年に、兵庫県川西市の里山・笹部にある先祖代々の地に戻り、市との協働事業や地域活性化イベントの運営に関わってきました。2020年からは、空き家となっていた昭和の古民家Sasabaseを拠点に、活動を続けています。',
  },
]

export default function FounderSection() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-base">

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-20 items-start">

          {/* Image */}
          <div className="lg:sticky lg:top-32 max-w-xs lg:max-w-none">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/images/穏やかな微笑みのシンプルなポートレート.png"
                alt="藤井 文 — 運営者プロフィール写真"
                fill
                className="object-cover object-[center_15%] brightness-110 contrast-90"
                sizes="(max-width: 1024px) 320px, 40vw"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="label-text mb-6">運営者</p>

            <h2 className="heading-serif text-h2 text-foreground mb-2 leading-[1.4]">
              藤井　文（Tomo Fujii）
            </h2>
            <p className="text-sm text-muted tracking-jp mb-10">
              代表｜Founder &amp; Learning Ecosystem Designer
            </p>

            <div className="prose-jp mb-8 flex flex-col gap-4">
              <p>教育は未来につながるもの。<br />
                学びとは何かを問い直す中で、<br />
                地域にある学びと経済をつなぐ可能性に気づきました。</p>
              <p>海外から見た日本の地域の魅力を活かしたいと考え、<br />
                2014年に故郷へ戻りました。</p>
              <p>現在は、里山である笹部の古民家を拠点に、<br />
                地域を舞台にしたさまざまな実践を行っています。</p>
            </div>

            <div className="flex flex-col gap-8">
              {background.map((item) => (
                <div key={item.period} className="border-l-2 border-border pl-5">
                  <p className="text-xs text-muted tracking-label uppercase mb-2">
                    {item.period}
                  </p>
                  <p className="text-sm text-stone-600 leading-jp tracking-jp">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
