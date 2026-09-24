import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '音とご飯の会 | Sasabase',
  description: '川西市笹部のSasabaseで開催する、食と音楽を通じた触れ合いのイベント。地域の人が気軽に集まり、ご飯を囲んで語らう場です。',
}

export default function OtoGohanPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="container-base py-14 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Text */}
            <div>
              <p className="label-text normal-case mb-8">Sasabaseの活動</p>

              <h1 className="heading-serif text-h1 text-foreground mb-8 leading-[1.35] text-balance">
                音とご飯の会
              </h1>

              <p className="text-base md:text-lg text-stone-500 leading-jp tracking-jp mb-4 max-w-[36ch]">
                食べること、聴くこと、話すこと。
              </p>
              <p className="text-base md:text-lg text-stone-500 leading-jp tracking-jp mb-12 max-w-[36ch]">
                それだけで、人はつながれる。
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="#about" className="btn-primary">
                  音とご飯の会について
                </Link>
                <Link href="/contact" className="btn-outline">
                  お問い合わせ
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/oto-gohan-1.jpg"
                alt="古民家でギターを弾きながら食事と会話を楽しむ音とご飯の会の様子"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding border-t border-border scroll-mt-[68px]">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Text */}
            <div>
              <p className="label-text mb-8">音とご飯の会とは</p>
              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                Sasabaseで、
                <br />
                ご飯を食べながら音楽を聴く会です。
              </h2>

              <div className="space-y-6 text-base text-stone-600 leading-jp tracking-jp">
                <p>
                  川西市笹部の古民家・Sasabaseで、不定期に開催している小さな集まりです。
                </p>
                <p>
                  毎回、テーマを決めてご飯を用意しています。参加者の方にも、
                  できる範囲で準備を手伝っていただくことがあります。
                  料理を囲み、音楽を聴きながら、ゆっくり話す時間です。
                </p>
                <p>
                  顔を知っている人も、初めて来る人も、
                  同じ食卓を囲むことで自然と会話が生まれます。
                </p>
                <p>
                  Sasabaseが大切にしている「場をひらく」という考え方を、
                  食と音楽を通じて体験していただける機会です。
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] md:aspect-[3/4] w-full">
              <Image
                src="/images/oto-gohan-2.jpg"
                alt="長テーブルを囲んで食事をしながら笑顔で集まる音とご飯の会の参加者"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 開催について */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            <div>
              <p className="label-text mb-8">開催について</p>
              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                不定期開催。
                <br />
                次回の情報はInstagramで。
              </h2>

              <div className="space-y-5 text-base text-stone-600 leading-jp tracking-jp mb-10">
                <p>
                  開催の告知は、Instagramで行っています。
                  次回の情報はInstagramアカウントをご確認ください。
                </p>
                <p>
                  定員は少人数制です。
                  参加ご希望の方はお早めにご連絡いただくことをおすすめします。
                </p>
              </div>

              <a
                href="https://www.instagram.com/sasabasers/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex"
              >
                Instagram で最新情報を見る →
              </a>
            </div>

            <div className="bg-white border border-border p-8 lg:p-10 self-start">
              <p className="label-text mb-8">開催概要（目安）</p>
              <div className="space-y-6 divide-y divide-border">
                <div className="pb-6">
                  <p className="text-xs text-muted tracking-jp mb-2">開催頻度</p>
                  <p className="text-base font-medium text-foreground tracking-jp">不定期</p>
                </div>
                <div className="pt-6 pb-6">
                  <p className="text-xs text-muted tracking-jp mb-2">定員</p>
                  <p className="text-base font-medium text-foreground tracking-jp">少人数（回ごとに異なります）</p>
                </div>
                <div className="pt-6 pb-6">
                  <p className="text-xs text-muted tracking-jp mb-2">場所</p>
                  <p className="text-base font-medium text-foreground tracking-jp">Sasabase（川西市笹部）</p>
                </div>
                <div className="pt-6">
                  <p className="text-xs text-muted tracking-jp mb-2">参加費</p>
                  <p className="text-base font-medium text-foreground tracking-jp">回ごとにご案内します</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary border-t border-primary-600">
        <div className="container-base text-center">
          <p className="text-xs text-primary-200 tracking-label uppercase mb-6">Contact</p>
          <h2 className="heading-serif text-h1 text-white mb-6 text-balance leading-[1.4]">
            次回の開催を、
            <br />
            お知らせします。
          </h2>
          <p className="text-sm md:text-base text-primary-200 leading-jp tracking-jp mb-10 max-w-[40ch] mx-auto">
            参加ご希望の方・詳細を知りたい方は、
            お気軽にお問い合わせください。
          </p>
          <Link href="/contact" className="btn-outline-white">
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  )
}
