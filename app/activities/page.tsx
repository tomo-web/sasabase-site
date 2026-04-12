import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '米づくり — 笹米クラブ',
  description: '笹部の棚田を守る米づくりの実践。土づくりから収穫まで、里山の営みを一緒に体験しませんか。',
}

const seasons = [
  {
    season: '3月〜4月',
    title: '用水路整備・土づくり',
    description:
      '田んぼの準備は、冬の間に積もった泥を掻き出す用水路の整備から始まります。川の上流から周辺の草刈りや土嚢積みなどもしながらやるので、大変な重労働です。その後、トラクターで土を起こし、稲が育つ土台をつくります。',
  },
  {
    season: '5月〜6月',
    title: '田植え',
    description:
      '笹部の棚田に苗を植える季節。機械植えも行いますが、機械では難しい田んぼは、手で丁寧に植えていきます。田植えは体験としても人気です。また、植え終えた田んぼに水が張られた棚田の景色は格別です。',
  },
  {
    season: '6月〜9月',
    title: '水管理・草取り',
    description:
      '田植えが終わってからも、日々の水管理が続きます。水位を一定に保ち、雑草を取り除く地道な作業の積み重ねが、秋の実りにつながります。この期間の管理がいちばん大切で、いちばん見えにくい部分です。',
  },
  {
    season: '10月',
    title: '稲刈り・収穫',
    description:
      '黄金色に実った稲を刈り取る収穫の季節。脱穀・乾燥を経て「新米」として仕上がります。Sasabaseでは外の釜戸で羽釜ご飯を炊いて楽しむこともできます。',
  },
]

export default function ActivitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-50 border-b border-border py-16 md:py-24">
        <div className="container-base">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary/50" />
            <span className="label-text">米づくり</span>
          </div>
          <h1 className="text-h1 font-bold text-foreground mb-4 tracking-jp">
            笹米クラブ
          </h1>
          <p className="text-base text-muted tracking-wide mb-6">
            Sasamai Club — Rice Farming at Sasabe
          </p>
          <p className="prose-jp max-w-[52ch]">
            笹部の棚田で米をつくる。それは、景観を守ることであり、
            地域の歴史を受け継ぐことでもあります。
            土から始まり、水を管理し、秋に実りを得るまでの一年を、
            一緒に体験しませんか。
          </p>
        </div>
      </section>

      {/* 棚田の現実 */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <p className="label-text mb-6">背景</p>
              <h2 className="heading-serif text-h2 text-foreground mb-8 leading-[1.4]">
                棚田を守ることは、
                <br />
                景観を守ることです。
              </h2>
              <div className="space-y-4 prose-jp mb-8">
                <p>
                  笹部の棚田は、この地域の景観を形づくる欠かせない存在です。
                  しかし近年、農家の高齢化が進み、担い手不足が深刻な課題となっています。
                  耕作放棄地が増えれば、棚田は荒れ、景観も失われていきます。
                </p>
                <p>
                  米づくりは、ただ食べ物を生産するだけでなく、
                  水を蓄え、土を育て、生き物の居場所をつくる営みです。
                  その価値を、次の世代にも伝えていきたいと考えています。
                </p>
                <p>
                  Sasabaseは、この現実をありのままに共有し、
                  実際の作業を通じて里山の暮らしに触れる場をつくっています。
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-border">
              <Image
                src="/images/IMG_9552.JPG"
                alt="笹部の棚田風景"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 一年の流れ */}
      <section id="sasamai" className="section-padding bg-stone-50 border-t border-border scroll-mt-[68px]">
        <div className="container-base">
          <div className="mb-12">
            <p className="label-text mb-6">年間の活動</p>
            <h2 className="heading-serif text-h2 text-foreground mb-4 leading-[1.4]">
              米づくりの一年
            </h2>
            <p className="text-sm text-stone-500 leading-jp tracking-jp max-w-[44ch]">
              土づくりから始まり、田植え・水管理・収穫まで。
              季節ごとに異なる作業が続きます。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {seasons.map((item, i) => (
              <div key={item.season} className="bg-white border border-border p-8">
                <span className="text-xs font-mono text-stone-300 mb-3 block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-xs font-medium text-primary tracking-label mb-2">
                  {item.season}
                </p>
                <h3 className="heading-serif text-h3 text-foreground mb-3 leading-[1.5]">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-500 leading-jp tracking-jp">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 体験・参加について */}
      <section className="section-padding border-t border-border">
        <div className="container-base">
          <div className="max-w-[56ch]">
            <p className="label-text mb-6">参加について</p>
            <h2 className="heading-serif text-h2 text-foreground mb-8 leading-[1.4]">
              この営みに、関わる人を探しています。
            </h2>
            <div className="space-y-4 prose-jp mb-10">
              <p>
                笹米クラブでは、棚田を維持するための米づくりに、
                継続的に関わる機会を設けています。
              </p>
              <p>
                作業は、季節ごとの節目だけでなく、
                日々の手入れや環境整備も含まれます。
              </p>
              <p>
                決して軽いものではありませんが、
                その分、地域の営みの一端に触れることができます。
              </p>
              <p>
                収穫したお米は、参加者の方に優先的にご購入いただけます。
                できるだけ農薬に頼らず育てたお米です。
              </p>
              <p>関心のある方は、お気軽にご相談ください。</p>
            </div>
            <Link href="/contact" className="btn-primary">
              笹米クラブへの参加を問い合わせる
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary border-t border-primary-600">
        <div className="container-base text-center">
          <p className="text-xs text-primary-200 tracking-label uppercase mb-6">Contact</p>
          <h2 className="heading-serif text-h1 text-white mb-6 text-balance leading-[1.4]">
            里山の米づくりに、
            <br />
            触れてみませんか。
          </h2>
          <p className="text-sm md:text-base text-primary-200 leading-jp tracking-jp mb-10 max-w-[40ch] mx-auto">
            田植えから収穫まで、どの時期からでもご参加いただけます。
            まずはお気軽にご連絡ください。
          </p>
          <Link href="/contact" className="btn-outline-white">
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  )
}
