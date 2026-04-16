import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Programs | Sasabase — Rural Japan',
  description:
    'Programs for international visitors, organisations, and local learners in Kawanishi, Hyogo. 6th-Sector School, rural stays, corporate training, and more.',
  keywords: [
    'rural Japan programs',
    'farm stay rural Japan',
    'rice farming experience Japan',
    'place-based learning Japan',
    'corporate training Japan',
    'learning travel Japan',
    'Kawanishi Hyogo programs',
    '6th sector Japan',
    'alternative education Japan',
  ],
  openGraph: {
    title: 'Programs | Sasabase — Rural Japan',
    description:
      'Learning, staying, and working in rural Japan. Programs for international visitors, organisations, and local learners in Kawanishi, Hyogo.',
    locale: 'en_US',
    type: 'website',
  },
}

export default function EnExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-50 border-b border-border py-16 md:py-24">
        <div className="container-base">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary/50" />
            <span className="label-text">Programs</span>
          </div>
          <h1 className="heading-serif text-h1 text-foreground mb-4 text-balance leading-[1.25]">
            Learn. Stay. Experience.
          </h1>
          <p className="text-base text-stone-500 leading-relaxed max-w-[52ch] mb-4">
            Programs at Sasabase / Contact &amp; Inquiry
          </p>
          <p className="text-base text-stone-600 leading-relaxed max-w-[52ch]">
            Every program at Sasabase is grounded in the real life of a regional Japanese community.
            Whether you come to learn, to rest, or to build something new — the place itself
            is part of the curriculum.
          </p>
        </div>
      </section>

      {/* FOR INTERNATIONAL VISITORS */}
      <section id="international" className="section-padding border-t border-border">
        <div className="container-base">

          <div className="flex items-center gap-4 mb-12">
            <span className="text-[10px] font-bold tracking-label uppercase text-primary bg-primary/10 px-3 py-1.5 rounded">
              For International Visitors
            </span>
            <h2 className="heading-serif text-h2 text-foreground">
              Experience Japan from the inside
            </h2>
          </div>

          <p className="text-base text-stone-600 leading-relaxed max-w-[56ch] mb-14">
            Programs designed for international participants — offering a hands-on introduction to
            regional Japan, its agriculture, its culture, and its people.
          </p>

          {/* 6th-Sector School */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 pb-20 border-b border-border">
            <div>
              <p className="label-text mb-4">Agriculture × Business</p>
              <h3 className="heading-serif text-h2 text-foreground mb-6 leading-[1.4]">
                6th-Sector School
              </h3>
              <p className="text-base text-stone-600 leading-relaxed mb-4 max-w-prose">
                In Japan, &ldquo;6th-sector&rdquo; refers to the integration of primary production (farming),
                secondary production (processing), and tertiary activities (sales and services) —
                1 × 2 × 3 = 6. At Sasabase, this concept is explored through practical, place-based learning.
              </p>
              <p className="text-base text-stone-600 leading-relaxed mb-4 max-w-prose">
                Participants engage in activities such as rice cultivation, basic processing, and local
                distribution, gaining exposure to aspects of the economic cycle within a regional community.
                Business thinking is not taught abstractly; it develops through real-life practice.
              </p>
              <p className="text-base text-stone-600 leading-relaxed mb-8 max-w-prose">
                Open to high school students, university students, and adult learners interested in
                hands-on, place-based learning in regional Japan.
              </p>
              <div className="flex gap-3">
                <Link href="/en/experience/6th-sector" className="btn-primary">
                  Learn more
                </Link>
                <Link href="/en/contact" className="btn-ghost">
                  Enquire →
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_4474.JPEG"
                alt="Rice cultivation and regional economy at Sasabase"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Regional Immersion Stay */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <p className="label-text mb-4">Farm stay</p>
              <h3 className="heading-serif text-h2 text-foreground mb-6 leading-[1.4]">
                Regional Immersion Stay
              </h3>
              <p className="text-base text-stone-600 leading-relaxed mb-4 max-w-prose">
                Guests stay in or near the Sasabase Showa-era house and participate in the daily life
                of the community. Depending on the season, that might mean planting or harvesting
                rice, preparing traditional Japanese meals, joining Terra&apos;Co, or simply being
                part of the neighbourhood.
              </p>
              <p className="text-base text-stone-600 leading-relaxed mb-4 max-w-prose">
                Kawanishi is 50 minutes from Osaka by train — close enough to day-trip to the city,
                far enough to feel genuinely regional. The station is a three-minute walk from Sasabase.
              </p>
              <p className="text-base text-stone-600 leading-relaxed mb-8 max-w-prose">
                Ideal for international visitors, researchers, families, or anyone seeking an
                authentic window into Japanese regional life and culture.
              </p>
              <div className="flex gap-3">
                <Link href="/en/experience/stay" className="btn-primary">
                  Learn more
                </Link>
                <Link href="/en/contact" className="btn-ghost">
                  Ask a question →
                </Link>
              </div>
            </div>
            <div className="lg:order-1 relative aspect-[3/4] w-full">
              <Image
                src="/images/IMG_1589.JPEG"
                alt="Sasabe station surrounded by satoyama greenery"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </section>

      {/* FOR ORGANISATIONS */}
      <section id="organisations" className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">

          <div className="flex items-center gap-4 mb-12">
            <span className="text-[10px] font-bold tracking-label uppercase text-primary bg-primary/10 px-3 py-1.5 rounded">
              For Organisations
            </span>
            <h2 className="heading-serif text-h2 text-foreground">
              Learning outside the office
            </h2>
          </div>

          <p className="text-base text-stone-600 leading-relaxed max-w-[56ch] mb-14">
            Take your team out of the boardroom and into the field. Sasabase runs experiential
            programs for organisations that want to build culture, improve communication,
            and reconnect people to shared purpose.
          </p>

          {/* Corporate Training */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="label-text mb-4">For organisations</p>
              <h3 className="heading-serif text-h2 text-foreground mb-6 leading-[1.4]">
                Corporate Training &amp; Team Building
              </h3>
              <p className="text-base text-stone-600 leading-relaxed mb-4 max-w-prose">
                Take your team out of the boardroom and into the field. Sasabase runs experiential
                training programs for companies and organisations that want to build culture,
                improve communication, and reconnect people to shared purpose.
              </p>
              <p className="text-base text-stone-600 leading-relaxed mb-4 max-w-prose">
                We work with teams of any size and customise every program to your objectives.
                Day visits, overnight programs, or multi-day retreats are all possible.
              </p>
              <p className="text-xs text-stone-400 mb-6">Japan domestic program</p>
              <div className="flex gap-3">
                <Link href="/corporate-training" className="btn-primary">
                  Learn more (Japanese site)
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/Team.png"
                alt="Team building at Sasabase"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </section>

      {/* FOR LOCAL COMMUNITY */}
      <section id="local" className="section-padding border-t border-border">
        <div className="container-base">

          <div className="flex items-center gap-4 mb-12">
            <span className="text-[10px] font-bold tracking-label uppercase text-stone-500 bg-stone-100 px-3 py-1.5 rounded">
              For Local Community in Japan
            </span>
            <h2 className="heading-serif text-h2 text-foreground">
              Programs rooted in the community
            </h2>
          </div>

          <p className="text-base text-stone-600 leading-relaxed max-w-[56ch] mb-14">
            These programs are primarily offered in Japanese and are designed for local
            residents — children, families, and community members in Kawanishi and the surrounding area.
          </p>

          {/* Terra'Co */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 pb-20 border-b border-border">
            <div>
              <p className="label-text mb-4">Weekly gathering</p>
              <h3 className="heading-serif text-h2 text-foreground mb-6 leading-[1.4]">
                Terra&apos;Co — Learning Space for Multiple Generations
              </h3>
              <p className="text-base text-stone-600 leading-relaxed mb-4 max-w-prose">
                Every Wednesday, the Showa-era house opens its doors to anyone who wants to come. Children
                arrive from school; adults drop in after work; elders bring stories and skills that
                no book contains. Across the table, across the garden, learning happens naturally.
              </p>
              <p className="text-base text-stone-600 leading-relaxed mb-4 max-w-prose">
                There is no fixed curriculum. Activities range from cooking and crafts to reading,
                music, and outdoor exploration. The only rule is that everyone both gives and receives.
              </p>
              <p className="text-xs text-stone-400 mb-6">Japan domestic program</p>
              <div className="flex gap-3">
                <Link href="/terraco" className="btn-primary">
                  Learn more (Japanese site)
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_5829 (2).JPEG"
                alt="Terra'Co community learning gathering at Sasabase"
                fill
                className="object-contain object-center bg-stone-100"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Alternative Learning */}
          <div id="alternative-learning" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center scroll-mt-[68px]">
            <div className="lg:order-2">
              <p className="label-text mb-4">Flexible learning</p>
              <h3 className="heading-serif text-h2 text-foreground mb-6 leading-[1.4]">
                Alternative Learning Support
              </h3>
              <p className="text-base text-stone-600 leading-relaxed mb-4 max-w-prose">
                For children who find it difficult to attend conventional school, Sasabase offers a
                safe, unhurried alternative. Participants can join in person or connect remotely
                via telepresence robots — a technology that allows a child at home to move through
                the Sasabase space, interact with others, and feel genuinely present.
              </p>
              <p className="text-base text-stone-600 leading-relaxed mb-4 max-w-prose">
                The goal is not to replicate school. It is to reconnect a child with curiosity,
                with peers, and with the joy of being somewhere that feels right.
              </p>
              <p className="text-base text-stone-600 leading-relaxed mb-4 max-w-prose">
                We believe every child deserves a path. Sasabase is one of them.
              </p>
              <p className="text-xs text-stone-400 mb-6">Japan domestic program</p>
              <div className="flex gap-3">
                <Link href="/support" className="btn-primary">
                  Learn more (Japanese site)
                </Link>
              </div>
            </div>
            <div className="lg:order-1 relative aspect-[4/3] w-full">
              <Image
                src="/images/ロボット学習セッションの風景.png"
                alt="Conceptual image of remote learning via telepresence robot at Sasabase"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <p className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-xs px-3 py-2">
                This is just a conceptual image.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary border-t border-primary-600">
        <div className="container-base text-center">
          <p className="text-xs text-primary-200 tracking-label uppercase mb-6">
            Ready to join?
          </p>
          <h2 className="heading-serif text-h1 text-white mb-6 text-balance leading-[1.4]">
            Let&apos;s figure out your path.
          </h2>
          <p className="text-sm md:text-base text-primary-200 leading-relaxed mb-10 max-w-[40ch] mx-auto">
            Drop us a message and we&apos;ll take it from there.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/en/contact" className="btn-outline-white">
              Contact us
            </Link>
            <Link href="/en/about" className="btn-outline-white">
              About Sasabase
            </Link>
          </div>
          <a
            href="https://www.instagram.com/sasabasers/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-200 hover:text-white transition-colors"
          >
            Follow us on Instagram →
          </a>
        </div>
      </section>
    </>
  )
}
