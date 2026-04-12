import Link from 'next/link'

export default function ConceptSection() {
  return (
    <section className="section-padding bg-primary-900 text-white overflow-hidden relative">
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-10"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, #a8cfba 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container-base relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-amber-light/60" />
              <span className="text-amber-light text-xs font-medium tracking-label uppercase">
                Concept
              </span>
            </div>

            <h2 className="text-h2 font-bold text-white mb-4 text-balance leading-jp-tight tracking-jp">
              Learning &amp;
              <br />
              Local Design
            </h2>

            <p className="text-sm text-white/55 tracking-wide mb-8">
              地域・教育・地域経済をつなぐ、学びの実験の場
            </p>

            <div className="space-y-4 text-sm text-white/70 leading-[2] tracking-jp">
              <p>
                「Learning &amp; Local Design」は、教育・地域・地域経済の
                三つをひとつのサイクルとして設計するSasabaseの核心的なコンセプトです。
              </p>
              <p>
                学びは教室の中だけで完結しません。
                農業・食・商業・文化——地域の営みそのものが教材になり、
                学びの成果が地域経済へと還っていきます。
              </p>
              <p>
                Sasabaseはその循環を川西という場所で実験し続ける、
                生きた実験室です。
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/concept"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors group"
              >
                コンセプトページへ
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Three pillars */}
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                number: '01',
                title: '地域を教材にする',
                titleEn: 'Community as Curriculum',
                body: '農業・食・商業・文化など、地域の営みすべてが教材になります。教科書ではなく、生きた現場が学びの出発点です。',
              },
              {
                number: '02',
                title: '学びを地域経済に還す',
                titleEn: 'Connecting Education & Economy',
                body: '学んで終わりにしない。農産物の加工・販売、スペース活用など、学びの成果が地域経済に直接つながるサイクルをつくります。',
              },
              {
                number: '03',
                title: '実験し、記録し、共有する',
                titleEn: 'Experiment, Document, Share',
                body: 'Sasabaseは答えを持っていません。試み、記録し、開く——その繰り返しが、新しい学びのモデルをつくっていきます。',
              },
            ].map((pillar) => (
              <div
                key={pillar.number}
                className="border border-white/10 rounded-lg p-5 hover:border-white/25 hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-primary-300/40 leading-none flex-shrink-0 font-serif">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-jp mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] text-white/40 tracking-wide mb-2">
                      {pillar.titleEn}
                    </p>
                    <p className="text-xs text-white/60 leading-[1.9] tracking-jp">
                      {pillar.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
