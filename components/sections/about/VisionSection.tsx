export default function VisionSection() {
  return (
    <section className="section-padding bg-stone-100 border-t border-border">
      <div className="container-base">

        <div className="max-w-[56ch] mx-auto text-center">
          <p className="label-text mb-6">ビジョン</p>

          <h2 className="heading-serif text-h1 text-foreground mb-10 text-balance leading-[1.4]">
            教育 × 地域経済 × グローバル
          </h2>

          <p className="prose-jp mb-6 mx-auto text-center">
            地域の課題は、地域だけでは解決できない。
            そして世界の課題は、地域の実践なしには動かない。
          </p>

          <p className="prose-jp mx-auto text-center">
            LLDが目指すのは、川西の里山から始まる学びが、
            企業の人材育成を変え、子どもたちの可能性を広げ、
            地域経済の新しいかたちをつくっていくことです。
            小さな実験を積み重ねながら、確かな変化を生み出していきます。
          </p>
        </div>

        {/* 3つのビジョン */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border mt-16 md:mt-20 border-t border-border">
          {[
            {
              label: '教育',
              heading: '問いを育てる場',
              body: '正解を渡すのではなく、問いと向き合う力を育む。地域の複雑な現実が、最高の教材になります。',
            },
            {
              label: '地域経済',
              heading: '暮らしを価値に変える',
              body: '里山の農業・食・文化を、持続可能なビジネスとして再構築する。地域に留まる経済の流れをつくります。',
            },
            {
              label: 'グローバル',
              heading: '川西から世界へ',
              body: '地域の実践を言語化し、国を越えて共有できる知識へと変換する。ローカルな深さが、グローバルな価値を生む。',
            },
          ].map((item) => (
            <div key={item.label} className="py-10 md:py-0 md:px-10 first:pt-0 last:pb-0 md:first:pl-0 md:last:pr-0 md:pt-10 md:first:pt-10">
              <p className="text-xs text-primary font-medium tracking-label uppercase mb-3">
                {item.label}
              </p>
              <h3 className="heading-serif text-h3 text-foreground mb-4 leading-[1.4]">
                {item.heading}
              </h3>
              <p className="text-sm text-stone-500 leading-jp tracking-jp">
                {item.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
