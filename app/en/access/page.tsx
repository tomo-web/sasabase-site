import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Access | Getting to Sasabase, Kawanishi',
  description:
    'Directions to Sasabase in Kawanishi, Hyogo — about 50 minutes from Osaka by train. Hankyu line to Nose Dentetsu, 3-minute walk from Sasabe Station.',
  keywords: [
    'Sasabase access',
    'how to get to Kawanishi',
    'Sasabe Station directions',
    'Nose Dentetsu access',
    'rural Japan access from Osaka',
    'Kawanishi Hyogo directions',
  ],
  openGraph: {
    title: 'Access | Getting to Sasabase, Kawanishi',
    description:
      'About 50 minutes from Osaka by train. Hankyu line → Nose Dentetsu → Sasabe Station (3-minute walk).',
    locale: 'en_US',
    type: 'website',
  },
}

export default function EnAccessPage() {
  return (
    <>
      <section className="bg-stone-50 border-b border-border py-16 md:py-24">
        <div className="container-base">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary/50" />
            <span className="label-text">Access</span>
          </div>
          <h1 className="text-h1 font-bold text-foreground mb-4">Getting Here</h1>
          <p className="text-base text-muted tracking-wide mb-4">Access — Kawanishi, Hyogo, Japan</p>
          <p className="text-base text-stone-600 leading-relaxed max-w-[52ch]">
            Sasabase is in the satoyama hills of Kawanishi — close enough to Osaka to reach in under an hour by train, yet far enough to feel genuinely rural.
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="bg-background border-b border-border">
        <div className="container-base py-10 md:py-14">
          <div className="mb-5">
            <p className="text-xs font-medium tracking-label text-muted mb-2">Address</p>
            <p className="text-base font-medium text-foreground">
              3-5-4 Sasabe, Kawanishi, Hyogo 666-0104, Japan
            </p>
            <p className="text-sm text-muted mt-0.5">〒666-0104 兵庫県川西市笹部3-5-4</p>
          </div>

          <div className="w-full rounded-xl overflow-hidden border border-border shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=兵庫県川西市笹部3-5-4&output=embed&hl=en&z=16"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sasabase — 3-5-4 Sasabe, Kawanishi, Hyogo"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* Directions */}
            <div className="space-y-10">

              {/* By train */}
              <div>
                <h2 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
                  <span>🚃</span> By Train
                </h2>
                <p className="text-sm text-stone-600 leading-relaxed mb-5">
                  About 50 minutes from Hankyu Umeda (Osaka) or JR Osaka Station.
                </p>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <p className="text-sm font-medium text-foreground leading-relaxed">
                        Hankyu Umeda → (Takarazuka Line) → Kawanishi-Noseguchi
                      </p>
                      <p className="text-xs text-muted mt-0.5">
                        Or: JR Osaka → (Fukuchiyama Line) → Kawanishi-Ikeda
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <p className="text-sm font-medium text-foreground leading-relaxed">
                        Transfer to Nose Dentetsu
                      </p>
                      <p className="text-xs text-muted mt-0.5">
                        Change at Yamashita Station to the Myoken Line → Sasabe Station (1 stop)
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <p className="text-sm font-medium text-foreground leading-relaxed">
                        From Sasabe Station — 3-minute walk
                      </p>
                      <p className="text-xs text-muted mt-0.5">
                        Head toward the mountain, cross the bridge, then turn left
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              {/* By car */}
              <div>
                <h2 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
                  <span>🚗</span> By Car
                </h2>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  About 1 hour from central Osaka. Navigate to: <span className="font-medium">3-5-4 Sasabe, Kawanishi, Hyogo</span> (or use the Japanese address: 兵庫県川西市笹部3-5-4).
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    'The road narrows near the end — please drive slowly.',
                    'There are 2–3 parking spaces on site. Please share them with other visitors.',
                    'If the lot is full, use the coin parking near Yamashita Station (about 6 min on foot via the back road).',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-[7px] flex-shrink-0" />
                      <span className="text-sm text-stone-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/en/contact" className="btn-primary inline-flex">
                Book a visit or enquire
              </Link>
            </div>

            {/* Area info */}
            <div className="sticky top-24 bg-surface border border-border rounded-xl p-6">
              <h3 className="text-xs font-bold text-foreground tracking-label uppercase mb-3">
                About the area
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-5">
                Sasabe is a quiet hamlet in the northern hills of Kawanishi. Terraced rice paddies and old wooden houses line the valley — a landscape shaped over centuries by the people who farmed it.
              </p>
              <p className="text-sm text-stone-600 leading-relaxed mb-5">
                It is just 50 minutes from Osaka by train, yet the pace here is clearly different. Sasabase sits three minutes from the last stop on the Nose Dentetsu line — the &ldquo;convenient countryside.&rdquo;
              </p>
              <div className="border-t border-border pt-5 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">From Hankyu Umeda</span>
                  <span className="font-medium text-foreground">~50 min</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Walk from Sasabe Station</span>
                  <span className="font-medium text-foreground">3 min</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">From central Osaka by car</span>
                  <span className="font-medium text-foreground">~60 min</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
