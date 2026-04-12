import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sasabaseとは',
  description:
    '兵庫県川西市の里山を拠点に、地域まるごとキャンパスを実践するSasabaseについて。',
}

export default function SasabasePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-6">Sasabaseとは</p>
              <h1 className="heading-serif text-h1 text-foreground mb-8 text-balance leading-[1.25]">
                地域まるごと
                <br />
                キャンパス。
              </h1>
              <p className="text-base md:text-lg text-stone-500 leading-jp tracking-jp">
                Sasabaseは、兵庫県川西市北部の里山「笹部」にある古民家を拠点に、
                地域そのものを学びの場として活かす「地域まるごとキャンパス」の実践拠点です。
              </p>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_8964.JPEG"
                alt="里山の道で子どもたちが遊ぶ様子"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* 人と人がつながる場 */}
      <section className="section-padding border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-6">場について</p>
              <h2 className="heading-serif text-h2 text-foreground mb-8 leading-[1.4]">
                人と人がホッコリつながる昭和の家「Sasabase」
              </h2>
              <p className="prose-jp mb-4">
                空き家を活用したイベントや農作業を通じて、
                人と人が自然につながる場をつくっています。
              </p>
              <p className="prose-jp">
                里山の暮らしの中で生まれる交流は、
                世代や立場を超えて、人の関係性をやわらかくほどいてくれます。
              </p>
            </div>

            {/* Image */}
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/IMG_5518 (2).JPEG"
                alt="Sasabaseの古民家で人々が集まっている様子"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Inclusionな居場所 */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-6">ビジョン</p>
              <h2 className="heading-serif text-h2 text-foreground mb-8 leading-[1.4]">
                目指しているのは「Inclusionな居場所」
              </h2>
              <p className="prose-jp mb-8">
                私たちが本当に目指しているのは、
                誰もがそのままでいられる「居場所」であり「学び合いの場」です。
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  '多世代で学び合える',
                  '背景に関係なく関われる',
                  'ただ居るだけでも意味がある',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-stone-600 leading-jp tracking-jp">
                    <span className="mt-[0.35em] w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="prose-jp">
                そんな小さな居場所が、無理なく続き、
                ゆるやかにつながっていくことが、社会の可能性を広げると考えています。
              </p>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_5775 (2).JPEG"
                alt="Sasabaseに集まる多世代の人々"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 学校と地域 */}
      <section className="section-padding border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-6">教育観</p>
              <h2 className="heading-serif text-h2 text-foreground mb-8 leading-[1.4]">
                学校と地域がつながることで、学びは広がる
              </h2>
              <p className="prose-jp mb-4">
                大切なのは、
                「学校でしか学べないこと」と「地域でしか学べないこと」を、
                大人が理解し、それぞれを尊重することです。
              </p>
              <p className="prose-jp">
                学校と地域が協働することで、
                子どもたちの学びと可能性は、より豊かに広がっていきます。
              </p>
            </div>

            {/* Image */}
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/S__145113093.jpg"
                alt="古民家の畳の部屋で子どもたちが遊んでいる様子"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 実践の中で学ぶ */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-6">取り組み</p>
              <h2 className="heading-serif text-h2 text-foreground mb-8 leading-[1.4]">
                実践の中で学ぶ
              </h2>
              <p className="prose-jp mb-6">
                Sasabaseでは現在、以下のような取り組みを行っています。
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-stone-600 leading-jp tracking-jp">
                  <span className="mt-[0.35em] w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <Link href="/terraco" className="text-primary underline underline-offset-2 hover:opacity-70 transition-opacity">
                    多世代寺子屋 Terra&apos;Co
                  </Link>
                  （毎週水曜）
                </li>
                <li className="flex items-start gap-3 text-sm text-stone-600 leading-jp tracking-jp">
                  <span className="mt-[0.35em] w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <Link href="/6th-sector" className="text-primary underline underline-offset-2 hover:opacity-70 transition-opacity">
                    ビジネス思考を育てる6次産業スクール（米づくりを含む実践型）
                  </Link>
                </li>
                <li className="flex items-start gap-3 text-sm text-stone-600 leading-jp tracking-jp">
                  <span className="mt-[0.35em] w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  地域イベント・ワークショップ
                </li>
              </ul>
              <p className="prose-jp">
                また、
                <Link href="/support" className="text-primary underline underline-offset-2 hover:opacity-70 transition-opacity">
                  学校に通いづらい子どもたちに向けて
                </Link>
                、テレポートロボットを活用した遠隔参加の仕組みも取り入れています。
              </p>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_5829 (2).JPEG"
                alt="多世代寺子屋 Terra'Coの看板"
                fill
                className="object-contain object-center bg-stone-100"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 小さな実践が未来をつくる */}
      <section className="section-padding border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-6">想い</p>
              <h2 className="heading-serif text-h2 text-foreground mb-8 leading-[1.4]">
                小さな実践が、未来をつくる
              </h2>
              <p className="prose-jp mb-4">
                一つひとつの小さな場が無理なく続き、
                それらがゆるやかにつながっていくこと。
              </p>
              <p className="prose-jp">
                その積み重ねが、
                新しい学びと地域のかたちを生み出していくと信じています。
              </p>
            </div>

            {/* Image */}
            <div className="relative aspect-square w-full">
              <Image
                src="/images/IMG_4474.JPEG"
                alt="青空の下でたんぽぽの綿毛を持つ手"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* アクセス */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-6">Access</p>
              <h2 className="heading-serif text-h2 text-foreground mb-8 leading-[1.4]">
                アクセス
              </h2>
              <p className="prose-jp mb-8">
                Sasabaseは、里山でありながら電車で訪れることのできる「便利な田舎」にあります。
                阪急梅田駅から電車で約50分、最寄りの笹部駅から徒歩3分です。
              </p>
              <Link href="/access" className="btn-primary">
                Accessページへ →
              </Link>
            </div>

            {/* Image */}
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/IMG_1589.JPEG"
                alt="笹部駅のホームから見える緑豊かな里山の風景"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary border-t border-primary-600">
        <div className="container-base text-center">
          <p className="text-xs text-primary-200 tracking-label uppercase mb-6">Contact</p>
          <h2 className="heading-serif text-h1 text-white mb-6 text-balance leading-[1.4]">
            まずは遊びに来てください。
          </h2>
          <p className="text-sm md:text-base text-primary-200 leading-jp tracking-jp mb-4 max-w-[40ch] mx-auto">
            見学や参加をご希望の方は、お気軽にお問い合わせください。
          </p>
          <p className="text-sm md:text-base text-primary-200 leading-jp tracking-jp mb-10 max-w-[40ch] mx-auto">
            小さな一歩からでも大丈夫です。
          </p>
          <Link href="/contact" className="btn-outline-white">
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  )
}
