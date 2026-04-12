import Link from 'next/link'
import Image from 'next/image'

export default function Intro() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Text */}
          <div>
            <p className="text-xs font-medium tracking-label text-muted mb-6">Sasabaseについて</p>

            <h2 className="heading-serif text-h1 text-balance text-foreground mb-8 leading-[1.4]">
              地域は、学びの宝庫です。
            </h2>

            <p className="prose-jp mb-4">
              兵庫県川西市北部の里山"笹部"にある古民家Sasabaseでは、
              地域そのものを教育資源と捉え、「地域まるごとキャンパス」構想を展開しています。
              里山・農業・人のつながりを教材に、子どもから大人まで、
              多様な人が集い、学び合う場を創っています。
            </p>
            <p className="prose-jp mb-4">
              また、学校に通いづらい子どもたちに向けて、
              テレポートロボットを活用し、Sasabaseの場に"遠隔で参加できる学びの仕組み"も導入しています。
            </p>
            <p className="prose-jp mb-4">
              企業研修・6次産業スクール・教育支援など、
              地域の現場を舞台にしたプログラムを展開しながら、
              教育・地域・ビジネスをつなぐ新しいかたちを模索しています。
            </p>

            <p className="prose-jp mb-10">
              里山でありながら、電車でも訪れることができる「便利な田舎」。
              アクセスの詳細は、
              <Link href="/access" className="text-primary underline underline-offset-2 hover:opacity-70 transition-opacity">
                Accessページ
              </Link>
              でご案内しています。
            </p>

            <Link href="/sasabase" className="btn-ghost text-base">
              Sasabaseを知る →
            </Link>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/images/IMG_9559.JPG"
              alt="Sasabase — 地域の学びの風景"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
