import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rural Stay in Kawanishi, Japan',
  description:
    'Stay in a Showa-era wooden house in Kawanishi, Hyogo — 50 min from Osaka. Rice farming, local meals, and community life in rural Japan. Enquire about staying.',
  keywords: [
    'farm stay rural Japan',
    'satoyama stay Japan',
    'rural Japan experience',
    'Kawanishi Hyogo stay',
    'rice farming experience Japan',
    'satoyama life Japan',
    'learning travel Japan',
    'Japanese wooden house stay',
  ],
  openGraph: {
    title: 'Rural Stay in Kawanishi, Japan | Sasabase',
    description:
      'A Showa-era wooden house in Kawanishi, Hyogo. Rice farming, local meals, and community life — 50 min from Osaka.',
    locale: 'en_US',
    type: 'website',
  },
}

const canDo = [
  {
    number: '01',
    title: 'Simply slow down',
    body: "There's nothing you have to do. Sit on the engawa, breathe the satoyama air. That kind of time exists here.",
  },
  {
    number: '02',
    title: 'Connect with the community',
    body: "Meet the people who live nearby. Conversations happen naturally — without agenda, without a tour guide.",
  },
  {
    number: '03',
    title: 'Feel the seasons',
    body: 'Spring planting, summer insects, autumn harvest, winter stillness. The seasons here are tangible in a way they rarely are in the city.',
  },
  {
    number: '04',
    title: 'Combine with programs',
    body: "Pair your stay with the 6th-Sector School, rice farming, or Terra'Co. For those who want to go deeper — a stay makes it possible.",
  },
]

const highlights = [
  {
    title: 'Seasonal farming',
    body: 'Take part in seasonal farming activities alongside local farmers, such as planting, tending, and harvesting rice.',
  },
  {
    title: 'Local food',
    body: 'Cook and share meals using ingredients grown nearby. Simple food, made with what the season offers.',
  },
  {
    title: 'Community life',
    body: "Walk the local paths, meet the neighbours, attend Terra'Co. A place where community is still part of daily life.",
  },
]

export default function EnStayPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[calc(100vh-68px)] flex items-center bg-background">
        <div className="container-base py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

            <div>
              <p className="label-text mb-8">Experiential Stay</p>

              <h1 className="heading-serif text-h1 text-foreground mb-8 leading-[1.35] text-balance">
                Regional Immersion
              </h1>

              <p className="text-base md:text-lg text-stone-500 leading-relaxed mb-4 max-w-[40ch]">
                Stay in a Showa-era wooden house and spend time
                alongside a satoyama community.
              </p>
              <p className="text-base md:text-lg text-stone-500 leading-relaxed mb-12 max-w-[40ch]">
                An opportunity to experience everyday life in regional Japan — not as a visitor, but as part of the place.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="#about" className="btn-primary">
                  About the stay
                </Link>
                <Link href="#details" className="btn-outline">
                  Rates &amp; details
                </Link>
              </div>
            </div>

            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/IMG_1589.JPEG"
                alt="Sasabe station surrounded by satoyama greenery"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 shadow-md border-l-2 border-primary">
                <p className="text-sm font-medium text-foreground">Kawanishi · Hyogo</p>
                <p className="text-xs text-muted mt-0.5">50 min from Osaka</p>
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
              <p className="label-text mb-8">About the stay</p>

              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4] text-balance">
                Being here
                <br />
                is the experience.
              </h2>

              <div className="space-y-6 text-base text-stone-600 leading-relaxed">
                <p>
                  Sasabase is not a resort, and this is not a tour. Guests stay in a Showa-era
                  wooden house and spend time alongside the rhythms of the local community.
                </p>
                <p>
                  Depending on the season, this may include activities such as rice planting or
                  harvesting, preparing meals together, joining Terra&apos;Co, or simply spending
                  time in the neighbourhood.
                </p>
                <p>
                  Morning air, evening quiet, distant sounds of everyday life, the scent of the
                  season — even a short stay offers a different sense of time from the city.
                </p>
                <p>
                  This is not a stay for &ldquo;getting&rdquo; something.<br />
                  It is a stay for feeling something.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_9565.JPG"
                alt="Interior of the Sasabase farmhouse — tatami and corridor"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* What you can do */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">

          <div className="mb-14">
            <p className="label-text mb-6">What you can do</p>
            <h2 className="heading-serif text-h2 text-foreground leading-[1.4]">
              How you spend the time
              <br />
              is up to you.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
            {canDo.map((item) => (
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {highlights.map((item) => (
              <div key={item.title} className="bg-white border border-border p-7">
                <h4 className="text-sm font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-stone-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* The space */}
      <section className="section-padding border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/みんぱく.png"
                alt="Sasabase farmhouse interior — tatami rooms, kitchen, and hallways"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="label-text mb-8">The space</p>

              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                A house built
                <br />
                by a local carpenter.
              </h2>

              <div className="space-y-6 text-base text-stone-600 leading-relaxed">
                <p>
                  This house was built by a local carpenter and has been part of the community
                  ever since. Tatami rooms, a narrow staircase, an engawa, and a working kitchen —
                  with ranma panels overhead and a Buddhist altar still in one of the rooms.
                </p>
                <p>
                  This is not a renovated guesthouse. It is a lived-in house, not a staged space —
                  and the nights here are genuinely quiet.
                </p>
                <p>
                  Kawanishi is about 50 minutes from Osaka by train, and Sasabase is a short walk
                  from the nearest station. Close enough to the city, yet far enough that the air
                  and pace feel noticeably different.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Rates */}
      <section id="details" className="section-padding bg-stone-50 border-t border-border scroll-mt-[68px]">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div>
              <p className="label-text mb-8">Rates</p>

              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                Exclusive use
                <br />
                of the whole house.
              </h2>

              <div className="space-y-5 text-base text-stone-600 leading-relaxed mb-10">
                <p>
                  Stays are offered as an exclusive booking of the main wooden house.
                  No shared space with other guests — the house is entirely yours.
                </p>
                <p>
                  Rates start at ¥20,000 per night for up to 2 guests,
                  with ¥8,000 per additional person. Maximum 5 guests.
                </p>
                <p>
                  Prices may vary by season and program content.
                  Please enquire for exact details.
                </p>
              </div>

              <div className="bg-white border border-border p-8 mb-10">
                <p className="label-text mb-6">Rate guide</p>
                <div className="flex flex-col divide-y divide-border">
                  {[
                    { label: 'Up to 2 guests', price: '¥20,000 / night' },
                    { label: 'Each additional guest', price: '+ ¥8,000' },
                    { label: 'Maximum', price: '5 guests' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-4">
                      <span className="text-sm text-foreground">{item.label}</span>
                      <span className="text-sm font-medium text-foreground">{item.price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-stone-400 leading-relaxed mt-6">
                  * Rates may vary. Please contact us for current pricing.
                </p>
              </div>

              <Link href="/en/contact" className="btn-primary">
                Enquire about a stay
              </Link>
            </div>

            <div className="relative aspect-[3/4] w-full lg:sticky lg:top-24">
              <Image
                src="/images/IMG_5277.JPEG"
                alt="Sasabase kitchen and dining area"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary border-t border-primary-600">
        <div className="container-base text-center">
          <p className="text-xs text-primary-200 tracking-label uppercase mb-6">Contact</p>

          <h2 className="heading-serif text-h1 text-white mb-6 text-balance leading-[1.4]">
            Come and see
            <br />
            for yourself.
          </h2>

          <div className="space-y-3 mb-10">
            <p className="text-sm md:text-base text-primary-200 leading-relaxed max-w-[40ch] mx-auto">
              This is a place where the pace is different.
              Come and find out what that means.
            </p>
            <p className="text-sm md:text-base text-primary-200 leading-relaxed max-w-[40ch] mx-auto">
              Get in touch — we&apos;d love to have you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/en/contact" className="btn-outline-white">
              Contact us
            </Link>
            <Link href="/en/about" className="btn-outline-white">
              About Sasabase →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
