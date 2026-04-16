import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '6th-Sector School | Agriculture & Local Business, Japan',
  description:
    'Hands-on agriculture and local business learning in Kawanishi, Hyogo. Seasonal, place-based program — open to international participants. Enquire about joining.',
  keywords: [
    '6th sector Japan',
    'agriculture learning Japan',
    'rice farming program Japan',
    'place-based learning Japan',
    'rural business Japan',
    'farm learning experience Japan',
    'Kawanishi Hyogo program',
    'learning travel Japan',
  ],
  openGraph: {
    title: '6th-Sector School | Agriculture & Local Business, Japan',
    description:
      'Agriculture, food processing, and local distribution — hands-on learning in Kawanishi, Hyogo. Seasonal program open to international participants.',
    locale: 'en_US',
    type: 'website',
  },
}

const stages = [
  {
    number: '01',
    title: 'Primary — Grow',
    body: 'Participants engage in seasonal farming activities, from preparing the fields to tending the rice paddies, alongside local farmers.',
  },
  {
    number: '02',
    title: 'Secondary — Process',
    body: 'Through small-scale processing and local practices, participants explore how raw materials can be transformed into products.',
  },
  {
    number: '03',
    title: 'Tertiary — Sell',
    body: 'Participants gain exposure to how products are shared, communicated, and valued within a local context.',
  },
  {
    number: '04',
    title: '1 × 2 × 3 = 6th Sector',
    body: 'The cycle itself becomes the learning. Business thinking is not taught abstractly — it develops through real experiences, grounded in the realities of this community.',
  },
]

export default function EnSixthSectorPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[calc(100vh-68px)] flex items-center bg-background">
        <div className="container-base py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

            <div>
              <p className="label-text mb-8">Agriculture × Business</p>

              <h1 className="heading-serif text-h1 text-foreground mb-8 leading-[1.35] text-balance">
                6th-Sector School
              </h1>

              <p className="text-base md:text-lg text-stone-500 leading-relaxed mb-4 max-w-[40ch]">
                Grow. Process. Sell. Experience the full
                cycle of regional production and local economy.
              </p>
              <p className="text-base md:text-lg text-stone-500 leading-relaxed mb-12 max-w-[40ch]">
                Real-world learning that connects the land to the market.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="#about" className="btn-primary">
                  About the school
                </Link>
                <Link href="#program" className="btn-outline">
                  Program details
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_4474.JPEG"
                alt="Rice cultivation at Sasabase — 6th-Sector School"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 shadow-md border-l-2 border-primary">
                <p className="text-sm font-medium text-foreground">Seasonal program</p>
                <p className="text-xs text-muted mt-0.5">Kawanishi · Hyogo</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding border-t border-border scroll-mt-[68px]">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p className="label-text mb-8">What is 6th-sector?</p>

              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4] text-balance">
                The field is the classroom.
                <br />
                The market is the exam.
              </h2>

              <div className="space-y-6 text-base text-stone-600 leading-relaxed">
                <p>
                  In Japan, &ldquo;6th-sector&rdquo; refers to the integration of primary production
                  (farming), secondary production (processing), and tertiary activities (sales and
                  services) — 1 × 2 × 3 = 6.
                </p>
                <p>
                  At Sasabase, this concept is explored as a form of practical, place-based learning.
                  Participants engage in activities related to agriculture, processing, and local
                  distribution, gaining insight into how value is created within a regional community.
                </p>
                <p>
                  Business thinking is not taught abstractly. It emerges from the work itself —
                  from decisions made in the field, problems addressed in the kitchen, and
                  conversations held around local products and markets.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_9552.JPG"
                alt="Rice fields and satoyama hills in Kawanishi"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Program stages */}
      <section id="program" className="section-padding bg-stone-50 border-t border-border scroll-mt-[68px]">
        <div className="container-base">

          <div className="mb-14">
            <p className="label-text mb-6">Program structure</p>
            <h2 className="heading-serif text-h2 text-foreground leading-[1.4] text-balance">
              From field to value —
              <br />
              learning the cycle through practice.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
            {stages.map((item) => (
              <div key={item.number} className="bg-white border border-border p-8">
                <span className="text-xs font-mono text-stone-300 mb-4 block">
                  {item.number}
                </span>
                <h3 className="heading-serif text-h3 text-foreground mb-3 leading-[1.5]">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Who it's for */}
      <section className="section-padding border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p className="label-text mb-8">Who it&apos;s for</p>

              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                For those who want to learn
                <br />
                through real life, not just in theory.
              </h2>

              <ul className="flex flex-col gap-4 mb-10">
                {[
                  'People interested in hands-on, place-based learning',
                  'Those curious about agriculture, food, and local life in Japan',
                  'Individuals exploring new ways of working, learning, or living',
                  'International participants are welcome (especially those based in Japan or able to stay for a period)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-base text-stone-600 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-[0.6em]" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-stone-500 leading-relaxed">
                Rather than offering a fixed program, we arrange participation on a request basis.
                Often, the best way to join is by taking part in ongoing activities or local events,
                depending on timing.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/6th secter map.jpg"
                alt="A Living Campus Model for 6th-Sector Learning — diagram showing Primary, Secondary, and Tertiary stages"
                fill
                className="object-contain object-center bg-stone-50"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary border-t border-primary-600">
        <div className="container-base text-center">
          <p className="text-xs text-primary-200 tracking-label uppercase mb-6">Join the school</p>

          <h2 className="heading-serif text-h1 text-white mb-6 text-balance leading-[1.4]">
            Get your hands in the soil.
          </h2>

          <p className="text-sm md:text-base text-primary-200 leading-relaxed mb-4 max-w-[40ch] mx-auto">
            The 6th-Sector School is arranged on a seasonal, request basis.
            Contact us to explore what may be possible depending on timing.
          </p>
          <p className="text-sm md:text-base text-primary-200 leading-relaxed mb-10 max-w-[40ch] mx-auto">
            Participants from Japan and abroad are welcome.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/en/contact" className="btn-outline-white">
              Enquire now
            </Link>
            <Link href="/en/experience" className="btn-outline-white">
              All programs →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
