import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '貸しスペース',
  description:
    'Sasabaseの古民家スペースは、学びや実践、対話が生まれる場として共感ベースでご利用いただけます。',
}

export default function SpacePage() {
  return (
    <>
      {/* 1. スタンス */}
      <section className="section-padding border-b border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-6">貸しスペース</p>
              <h1 className="heading-serif text-h1 text-foreground mb-8 text-balance leading-[1.35]">
                この場の考え方に共感してくださる方へ、
                <br />
                空間を開いています。
              </h1>
              <p className="prose-jp mb-4">
                Sasabaseの貸しスペースは、
                単なるレンタルスペースではありません。
              </p>
              <p className="prose-jp">
                学びや実践、対話が生まれる場として、
                この古民家の空間を大切に使っていただける方にご利用いただいています。
              </p>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_9844.JPG"
                alt="Sasabaseの古民家で学びの場が開かれている様子"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. 利用イメージ */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Text */}
            <div>
              <p className="label-text mb-6">利用イメージ</p>
              <h2 className="heading-serif text-h3 text-foreground mb-8 leading-[1.4]">
                こんな場として使われています
              </h2>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  '小さな学びの場',
                  '対話の場',
                  'ワークショップ',
                  '地域や教育に関わる取り組み',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-stone-600 leading-jp tracking-jp"
                  >
                    <span className="mt-[0.35em] w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="prose-jp">
                この場の考え方に共感してくださる方と、
                学びや実践の機会をご一緒しています。
                Sasabaseは、単なる場所の提供ではなく、
                人が集い、対話や実践が生まれる場です。そのため、ご利用にあたっては内容をお伺いしながら、
                この場に合った形を一緒に考えています。
              </p>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] col-span-1 row-span-2 overflow-hidden rounded-sm shadow-[0_0_18px_4px_rgba(255,255,255,0.55)]">
                <Image
                  src="/images/IMG_4476.JPEG"
                  alt="古民家で対話が行われている様子"
                  fill
                  className="object-cover object-center"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-[4/3] col-span-1 overflow-hidden rounded-sm shadow-[0_0_18px_4px_rgba(255,255,255,0.55)]">
                <Image
                  src="/images/IMG_5422.JPEG"
                  alt="子どもたちとワークショップをしている様子"
                  fill
                  className="object-cover object-center"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-[4/3] col-span-1 overflow-hidden rounded-sm shadow-[0_0_18px_4px_rgba(255,255,255,0.55)]">
                <Image
                  src="/images/IMG_5319.JPEG"
                  alt="家族や子どもたちが集う様子"
                  fill
                  className="object-cover object-center"
                  sizes="25vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. 利用について */}
      <section className="section-padding border-t border-border">
        <div className="container-base">
          <div className="max-w-[56ch]">
            <p className="label-text mb-6">利用について</p>
            <h2 className="heading-serif text-h2 text-foreground mb-6 leading-[1.4]">
              場への関わり方
            </h2>

            <p className="prose-jp mb-8">
              この場では、学びや実践の機会として空間をご利用いただいています。
              料金は、場を維持するための協力金として設定しています。
            </p>

            <div className="flex flex-col divide-y divide-border border border-border mb-8">
              {[
                { label: '母屋1階（活動利用）', price: '1,000円 / 時間' },
                { label: 'キッチン（調理を伴う活動）', price: '500円 / 回' },
                { label: '屋外かまど（火を使う実践）', price: '500円 / 回' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center px-5 py-4"
                >
                  <span className="text-sm text-foreground leading-jp tracking-jp">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium text-foreground tracking-jp">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            <ul className="flex flex-col gap-2">
              {[
                '持ち込み・持ち帰りを基本としています',
                'ご利用後の清掃及び原状復帰をお願いします',
                'ゴミは各自お持ち帰りください',
                '対応が必要な場合は別途ご相談させていただきます',
              ].map((note) => (
                <li
                  key={note}
                  className="text-xs text-stone-400 leading-jp tracking-jp before:content-['※'] before:mr-1"
                >
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. 定期利用 — 一時非表示 */}
      {/* <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">
          <div className="max-w-[56ch]">
            <p className="label-text mb-6">定期利用</p>
            <h2 className="heading-serif text-h2 text-foreground mb-8 leading-[1.4]">
              継続的にご利用の方へ
            </h2>
            <p className="prose-jp mb-4">
              定期的にこの場を使いたい方には、
              個別にご相談のうえ利用条件を設定しています。
            </p>
            <p className="prose-jp mb-8">
              活動の内容や頻度に合わせて、
              無理のないかたちで一緒に考えます。
            </p>
            <Link href="/contact" className="btn-primary">
              定期利用について相談する
            </Link>
          </div>
        </div>
      </section> */}

      {/* 5. 問い合わせ */}
      <section className="section-padding bg-primary border-t border-primary-600">
        <div className="container-base text-center">
          <p className="text-xs text-primary-200 tracking-label uppercase mb-6">Contact</p>
          <h2 className="heading-serif text-h1 text-white mb-6 text-balance leading-[1.4]">
            ご利用をご希望の方は、
            <br />
            まずご相談ください。
          </h2>
          <p className="text-sm md:text-base text-primary-200 leading-jp tracking-jp mb-10 max-w-[40ch] mx-auto">
            見学も歓迎しています。
            <br />
            お気軽にお声がけください。
          </p>
          <Link href="/contact" className="btn-outline-white">
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  )
}
