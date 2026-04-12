import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "多世代寺子屋 Terra'Co",
  description:
    "誰もが先生であり、誰もが生徒である。子どもから大人まで世代を超えて集まる学び合いの場、Terra'Co。毎週水曜日、Sasabaseを開いています。",
}

const happenings = [
  {
    title: '教える／教わるの境界がない',
    body: '「先生」と「生徒」という役割がない。誰かの経験や言葉が、そのまま誰かの学びになります。',
  },
  {
    title: '日常の中で、自然に学びが生まれる',
    body: '特別なカリキュラムではなく、その日の対話や関わりの中で、それぞれの学びが立ち上がります。',
  },
  {
    title: '対話の中で新しい視点に出会う',
    body: '異なる年代、異なる背景を持つ人が同じ場にいること。それだけで、思いがけない気づきが生まれます。',
  },
  {
    title: '人との関係性が少しずつ変わっていく',
    body: '一度ではわからない。続けて関わることで、人とのつながりがゆっくりと育っていきます。',
  },
]

const forWhom = [
  '子どもから大人まで',
  '学びを楽しみたい方',
  '誰かと対話してみたい方',
  '自分のペースで関わりたい方',
  '居場所を探している方',
]

export default function TerraCoPage() {
  return (
    <>
      {/* ① Hero */}
      <section className="min-h-[calc(100vh-68px)] flex items-center bg-background">
        <div className="container-base py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-8">多世代寺子屋</p>

              <h1 className="heading-serif text-h1 text-foreground mb-8 leading-[1.35] text-balance">
                Terra&apos;Co
              </h1>

              <p className="text-base md:text-lg text-stone-500 leading-jp tracking-jp mb-4 max-w-[36ch]">
                誰もが先生であり、誰もが生徒である。
              </p>
              <p className="text-base md:text-lg text-stone-500 leading-jp tracking-jp mb-12 max-w-[36ch]">
                そんな関係が、日常の中で自然に生まれる場です。
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="#about" className="btn-primary">
                  Terra&apos;Coについて
                </Link>
                <Link href="#schedule" className="btn-outline">
                  開催について
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/S__145113093.jpg"
                alt="Terra'Co — 多世代が集まる学びの場"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 shadow-md border-l-2 border-primary">
                <p className="text-sm font-medium text-foreground tracking-jp">
                  毎週水曜日
                </p>
                <p className="text-xs text-muted tracking-jp mt-0.5">
                  14:00〜20:00頃
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ② Terra'Coとは */}
      <section id="about" className="section-padding border-t border-border scroll-mt-[68px]">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-8">Terra&apos;Coとは</p>

              <h2 className="heading-serif text-h2 text-foreground mb-12 leading-[1.5] text-balance">
                子どもから大人まで、世代を超えて集まる
                <br />
                「学び合いの場」です。
              </h2>

              <div className="space-y-6 text-base text-stone-600 leading-jp tracking-jp">
                <p>
                  Terra&apos;Coは、
                  子どもから大人まで、世代を超えて集まる
                  学び合いの場です。
                </p>
                <p>
                  ここでは、
                  教える人と教わる人が分かれているわけではありません。
                </p>
                <p>
                  誰かの経験や言葉が、
                  誰かにとっての学びになり、
                  気づきがまた別の人へとつながっていきます。
                </p>
                <p>
                  ただ居るだけでもいいし、
                  誰かと話してもいい。
                </p>
                <p>
                  それぞれの関わり方が尊重される場です。
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_3663.JPEG"
                alt="古民家の畳の部屋でお年寄りと子どもたちが一緒に学ぶ様子"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ③ この場で起きていること */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">

          <div className="mb-14">
            <p className="label-text mb-6">この場で起きていること</p>
            <h2 className="heading-serif text-h2 text-foreground leading-[1.4] whitespace-nowrap">
              特別なプログラムがあるわけではない。
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
            {happenings.map((item, i) => (
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

          <p className="text-sm text-stone-500 leading-jp tracking-jp max-w-[48ch]">
            その日の関わりの中で、
            それぞれの学びが立ち上がっていきます。
          </p>

        </div>
      </section>

      {/* ④ 開催について */}
      <section id="schedule" className="section-padding border-t border-border scroll-mt-[68px]">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

            <div>
              <p className="label-text mb-8">開催について</p>
              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                毎週水曜日、
                <br />
                Sasabaseを開いています。
              </h2>

              <div className="space-y-5 text-base text-stone-600 leading-jp tracking-jp mb-10">
                <p>
                  出入りは自由です。
                  来たいときに来て、帰りたいときに帰れる。
                  そういう場にしています。
                </p>
                <p>
                  16:00〜20:00頃は、
                  元中学校教員による学習サポートも行っています。
                  一方的に教えるのではなく、
                  それぞれが自分で考え、学ぶことを大切にしています。
                </p>
              </div>

              <p className="text-xs text-stone-400 leading-jp tracking-jp">
                ※ 日程や内容は変更になることがあります。
                <br />
                　最新情報はInstagramまたはお問い合わせからご確認ください。
              </p>
            </div>

            {/* Schedule card */}
            <div className="bg-stone-50 border border-border p-8 lg:p-10 self-start">
              <p className="label-text mb-8">開催日時</p>

              <div className="space-y-6 divide-y divide-border">
                <div className="pb-6">
                  <p className="text-xs text-muted tracking-jp mb-2">開催日</p>
                  <p className="heading-serif text-h3 text-foreground">
                    毎週水曜日
                  </p>
                </div>
                <div className="pt-6 pb-6">
                  <p className="text-xs text-muted tracking-jp mb-2">時間</p>
                  <p className="heading-serif text-h3 text-foreground">
                    14:00 〜 20:00頃
                  </p>
                  <p className="text-xs text-stone-400 mt-2 tracking-jp">出入り自由</p>
                </div>
                <div className="pt-6">
                  <p className="text-xs text-muted tracking-jp mb-2">学習サポート</p>
                  <p className="text-sm text-foreground leading-jp tracking-jp">
                    16:00 〜 20:00頃
                  </p>
                  <p className="text-xs text-stone-400 mt-1 tracking-jp">元中学校教員による</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ⑤ こんな方へ */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-8">こんな方へ</p>
              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                特定の対象を
                <br />
                限定する場ではありません。
              </h2>

              <ul className="flex flex-col gap-4 mb-10">
                {forWhom.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 text-base text-stone-600 leading-jp tracking-jp"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-stone-500 leading-jp tracking-jp">
                それぞれの関わり方を大切にしています。
              </p>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_3827.JPEG"
                alt="畳の部屋で大人と子どもが一緒にプラレールで遊ぶ様子"
                fill
                className="object-contain object-center bg-stone-100"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ⑥ 参加について */}
      <section className="section-padding border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="label-text mb-8">参加について</p>
              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                まずは、
                <br />
                ふらっと来てみてください。
              </h2>

              <div className="space-y-5 text-base text-stone-600 leading-jp tracking-jp">
                <p>
                  Terra&apos;Coへの参加に、
                  特別な手続きは必要ありません。
                </p>
                <p>
                  参加費は設けていませんが、
                  場を続けていくための募金箱を置いています。
                </p>
                <p>
                  事前にご案内するイベントやクッキングなどでは、
                  材料費などの実費をお願いする場合があります。
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_8909.JPG"
                alt="古民家の縁側でくつろぐ様子"
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
          <p className="text-xs text-primary-200 tracking-label uppercase mb-6">
            Contact
          </p>

          <h2 className="heading-serif text-h1 text-white mb-6 text-balance leading-[1.4]">
            この場の空気を、
            <br />
            感じに来てください。
          </h2>

          <p className="text-sm md:text-base text-primary-200 leading-jp tracking-jp mb-4 max-w-[36ch] mx-auto">
            見学・参加をご希望の方は、
            お気軽にお問い合わせください。
          </p>
          <p className="text-sm md:text-base text-primary-200 leading-jp tracking-jp mb-10 max-w-[36ch] mx-auto">
            まずは、ふらっとで大丈夫です。
          </p>

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
