import Link from 'next/link'
import Image from 'next/image'

export default function Intro() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text */}
          <div>
            <p className="text-xs font-medium tracking-label text-muted mb-6">Sasabaseについて</p>

            <h2 className="heading-serif text-h1 text-balance text-foreground mb-8 leading-[1.4]">
              地域は、学びの宝庫です。
            </h2>

            <p className="text-base md:text-lg text-stone-500 leading-jp tracking-jp mb-10 max-w-[32ch]">
              Sasabaseは、<br />
              教育 × 地域 × ビジネスをつなぐ<br />
              実験型の学びの場です。
            </p>

            <Link href="/sasabase" className="btn-outline text-base">
              Sasabaseを知る
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
