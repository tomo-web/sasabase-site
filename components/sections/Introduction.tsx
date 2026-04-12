import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import Link from 'next/link'

export default function Introduction() {
  return (
    <section className="section-padding bg-background">
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <ImagePlaceholder
              label="古民家内部 · Sasabase"
              aspectRatio="video"
              variant="green"
              className="rounded-xl"
            />
            {/* Decorative element */}
            <div
              className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-xl border border-primary/20"
              aria-hidden="true"
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-primary/50" />
              <span className="label-text">Sasabaseとは</span>
            </div>

            <h2 className="text-h2 font-bold text-foreground mb-6 text-balance leading-jp-tight tracking-jp">
              古民家から生まれる、
              <br />
              新しい学びのかたち。
            </h2>

            <div className="space-y-4 text-sm text-stone-600 leading-[2] tracking-jp">
              <p>
                Sasabaseは、兵庫県川西市にある古民家を拠点とした地域学習の場です。
                放課後の子どもたちから、地域の企業、農家、遠方からの研修生まで、
                さまざまな人が集まり、学び、つながります。
              </p>
              <p>
                「学校」でも「施設」でもなく、地域そのものが教材になる場所。
                農業・食・地域経済・教育が有機的に結びつき、
                日々の営みの中に学びが宿っています。
              </p>
              <p>
                「Learning &amp; Local Design」というコンセプトを軸に、
                地域の人々とともに多様なプログラムと活動を育てています。
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/sasabase" className="btn-primary">
                Sasabaseについて詳しく
              </Link>
              <Link href="/concept" className="btn-ghost group text-sm">
                コンセプトを読む
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
