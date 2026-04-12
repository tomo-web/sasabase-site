import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-68px)] flex items-center bg-background">
      <div className="container-base py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Text */}
          <div>
            <p className="text-xs tracking-wide text-muted mb-8">
              Sasabase by Learning &amp; Local Design — Kawanishi, Hyogo
            </p>

            <h1 className="heading-serif text-h1 text-balance text-foreground mb-6">
              地域まるごと
              <br />
              キャンパス。
            </h1>

            <p className="text-base md:text-lg text-stone-500 leading-jp tracking-jp mb-3 max-w-[36ch]">
              教育 × 地域 × ビジネスをつなぐ実験場
            </p>

            <p className="text-sm text-stone-400 leading-jp tracking-jp mb-4 max-w-[44ch]">
              学校でも会社でもない場所で、暮らしと仕事と学びが交わる。
              兵庫県川西市から、新しいかたちを実践し続けています。
            </p>

            <p className="text-sm text-stone-400 leading-jp tracking-jp mb-12 max-w-[44ch]">
              コンセプトは <span className="text-foreground font-medium">Learning &amp; Local Design</span> —
              教育と地域をつなぐ、新しい学びの設計です。
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/sasabase" className="btn-outline">
                Sasabaseとは
              </Link>
              <Link href="/concept" className="btn-outline">
                コンセプトを見る
              </Link>
              <Link href="/#what-we-do" className="btn-primary">
                プログラムを見る
              </Link>
              <Link href="/contact" className="btn-ghost">
                お問い合わせ →
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="/images/IMG_1540.JPEG"
              alt="Sasabase — 里山・古民家の風景"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* 浮き出るタグ */}
            <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 shadow-md border-l-2 border-primary">
              <p className="text-sm font-medium text-foreground tracking-jp">
                Since 2020
              </p>
              <p className="text-xs text-muted tracking-jp mt-0.5">
                川西市・兵庫県
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
