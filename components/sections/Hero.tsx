import Link from 'next/link'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-stone-900">
      {/* Background image placeholder */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-primary-900 via-primary-800 to-stone-900" />
        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-base relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-amber-light/70" />
              <span className="text-amber-light text-xs font-medium tracking-label uppercase">
                Kawanishi, Hyogo
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-display font-bold text-white mb-6 text-balance leading-[1.15]">
              地域を、
              <br />
              学びの場へ。
            </h1>

            {/* English subtitle */}
            <p className="text-base text-white/55 tracking-wide mb-5 font-light">
              A living laboratory for education, community, and local economy.
            </p>

            {/* Description */}
            <p className="text-sm md:text-base text-white/70 leading-[2] tracking-jp max-w-[48ch] mb-10">
              兵庫県川西市の古民家を舞台に、教育・地域・地域経済のつながりを実験し続ける場です。
              農業・食・商業を生きた教材として、子どもから企業人まで、
              さまざまな人々が集まり、学び、地域をともにつくっています。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/programs" className="btn-primary">
                プログラムを見る
              </Link>
              <Link href="/space" className="btn-outline-white">
                スペースを借りる
              </Link>
            </div>
          </div>

          {/* Right: Image placeholder */}
          <div className="hidden lg:block">
            <div className="relative">
              <ImagePlaceholder
                label="Sasabase 外観 · 川西"
                aspectRatio="portrait"
                variant="dark"
                className="rounded-xl shadow-2xl"
              />
              {/* Floating tag */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-lg px-5 py-4 shadow-xl">
                <p className="text-[10px] text-muted tracking-label uppercase mb-1">
                  Living Laboratory
                </p>
                <p className="text-sm font-bold text-primary tracking-jp">
                  地域と学びの実験の場
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] tracking-label">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
