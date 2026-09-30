import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Farm-to-Market Learning | Sixth-Sector School at Sasabase',
  description:
    'At Sasabase, young people have planted rice and developed a rice-flour cookie. Sales are planned for 4 October 2026, followed by a sales tally and closing ceremony on 17 October.',
  openGraph: {
    title: 'Farm-to-Market Learning | Sixth-Sector School at Sasabase',
    description:
      'The first cohort has completed product development, costing, outsourced production and pricing. Sales are planned for 4 October, with a review and closing ceremony on 17 October.',
    locale: 'en_US',
    type: 'website',
  },
}

const whyHere = [
  {
    title: 'A real field — not a demonstration',
    body: 'The terraced paddies of Sasabe are actively farmed land that still needs tending. This is not agriculture staged for visitors, but practice within the reality of the local community.',
  },
  {
    title: 'A region facing a real challenge',
    body: 'Farmers are ageing and the shortage of successors is serious. Getting involved in this challenge means experiencing learning that flows back into the region.',
  },
  {
    title: 'Connecting with local people and businesses',
    body: 'You engage directly with the farmers, processors, and retailers who sustain the local economy. You encounter real decisions and values that no textbook contains.',
  },
]

const flow = [
  {
    number: '01',
    phase: 'Primary',
    title: 'Soil preparation & rice growing',
    body: 'Learning involves taking part in the year-round cycle of rice cultivation. What you can join depends on the timing of your participation — from preparing the soil to managing water to harvesting. You begin by encountering the weight of what it means to grow food.',
  },
  {
    number: '02',
    phase: 'Secondary',
    title: 'Adding value to raw materials',
    body: 'You think about what products could be made from rice and other local ingredients. The learning goes beyond processing methods to include how to draw out the qualities of the material and who to deliver it to. Depending on the programme, you may also take part in actual processing work.',
  },
  {
    number: '03',
    phase: 'Tertiary',
    title: 'Delivering value',
    body: 'There are actual sales settings, such as local markets. Where timing allows, you join the real selling floor and face the facts of what sold and what did not. Even when you cannot attend in person, you think through the questions of who to reach and how, using real local examples.',
  },
]

const firstCohort = [
  {
    number: '01',
    phase: 'Explore local resources',
    title: 'Step into the rice field',
    body: 'The young participants joined rice planting in Sasabe. Seeing the work behind rice growing was their starting point.',
  },
  {
    number: '02',
    phase: 'Decide what to make and for whom',
    title: 'Develop a product',
    body: 'They developed a rice-flour cookie, considered its customers and marketing, and completed costing, outsourced production and pricing.',
  },
  {
    number: '03',
    phase: 'Bring it to market',
    title: 'Sell, then reflect',
    body: 'Sales of the finished cookies are planned for 4 October 2026. The group will tally the sales and hold a closing ceremony on 17 October.',
  },
]

export default function EnSixthSectorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="container-base py-14 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

            <div>
              <p className="label-text normal-case mb-8">Sasabase activity · Sixth-Sector School</p>

              <h1 className="heading-serif text-h1 text-foreground mb-8 leading-[1.35] text-balance">
                Farm-to-Market Learning
              </h1>

              <p className="text-base md:text-lg text-stone-500 leading-relaxed mb-4 max-w-[36ch]">
                From the rice field to the market.
              </p>
              <p className="text-base md:text-lg text-stone-500 leading-relaxed mb-12 max-w-[36ch]">
                Young people have planted rice and developed a rice-flour cookie. Explore the first cohort&apos;s work before its October sales and review.
              </p>

              <Link href="#first-cohort" className="btn-primary">
                See the first cohort
              </Link>
            </div>

            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/IMG_9552.JPG"
                alt="Terraced rice paddies in Sasabe, Kawanishi"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 shadow-md border-l-2 border-primary">
                <p className="text-sm font-medium text-foreground">Production × Processing × Sales</p>
                <p className="text-xs text-muted mt-0.5">Whole-community campus</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The first cohort at Sasabase */}
      <section id="first-cohort" className="section-padding border-t border-border bg-stone-50 scroll-mt-[68px]">
        <div className="container-base">
          <p className="label-text mb-6">The first cohort in Sasabe</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-10">
            <div>
              <h2 className="heading-serif text-h2 text-foreground leading-[1.4] mb-6">
                From the rice field<br />to the customer.
              </h2>
              <p className="text-base text-stone-600 leading-relaxed mb-0">
                Young participants have worked with local people and businesses, from rice planting to developing a rice-flour cookie. Product planning, costing, outsourced production and pricing are complete. Sales are planned for 4 October, followed by a sales tally and closing ceremony on 17 October.
              </p>
            </div>
            <figure>
              <div className="relative aspect-[1280/670] w-full overflow-hidden">
                <Image
                  src="/images/sixth-sector-first-cohort.webp"
                  alt="First-cohort activities: product discussions, processing and outdoor work in Sasabe"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <figcaption className="text-xs text-stone-500 leading-relaxed mt-3">
                From the first cohort&apos;s record. <a href="https://note.com/withtomo/n/n86ed2695d5b0" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Read the story in Japanese ↗</a>
              </figcaption>
            </figure>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {firstCohort.map((item) => (
              <article key={item.number} className="bg-white border border-border p-6 lg:p-8">
                <div className="flex items-center justify-between gap-4 border-b border-border pb-4 mb-6">
                  <span className="text-xs font-mono text-stone-400">{item.number}</span>
                  <span className="text-xs text-primary">{item.phase}</span>
                </div>
                <h3 className="heading-serif text-h3 text-foreground mb-4">{item.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-0">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="text-xs text-stone-400 leading-relaxed mt-6 mb-0">
            Hands-on activities vary with the season and the timing of each programme.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding border-t border-border scroll-mt-[68px]">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p className="label-text mb-8">About the programme</p>

              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                Working in the field.
                <br />
                Setting a price.
                <br />
                One connected learning journey.
              </h2>

              <div className="space-y-6 text-base text-stone-600 leading-relaxed">
                <p>
                  In Japan, &ldquo;sixth industrialization&rdquo; refers to connecting primary
                  production, secondary processing, and tertiary sales or services —
                  1 × 2 × 3 = 6. The aim is to create new value from local resources.
                </p>
                <p>
                  At Sasabase, the work in the rice field, product planning, collaboration with
                  processors, and selling are treated as parts of one connected challenge.
                </p>
                <p>
                  Which tasks participants can do in person depends on the season and the timing
                  of the programme. At every stage, they consider how a local resource becomes
                  something valuable, and who it is for.
                </p>
                <p>
                  It is practical learning shaped with local people and connected to real economic activity.
                </p>
              </div>
            </div>

            <div className="relative aspect-video w-full">
              <Image
                src="/images/6th-sector-map-en.jpg"
                alt="A Living Campus Model for 6th-Sector Learning — Primary (produce), Secondary (process), Tertiary (distribute/sell)"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Why here */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">

          <div className="mb-14">
            <p className="label-text mb-6">Why learn here?</p>
            <h2 className="heading-serif text-h2 text-foreground leading-[1.4] max-w-[32ch]">
              Real fields.
              <br />
              Real decisions.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
            {whyHere.map((item, i) => (
              <div key={item.title} className="bg-white border border-border p-8">
                <span className="text-xs font-mono text-stone-300 mb-4 block">
                  {String(i + 1).padStart(2, '0')}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-video w-full">
              <Image
                src="/images/6th-sector-community-model-en.png"
                alt="The Whole Community as a Campus: 6th-Sector Education Model — working with producers, businesses, and local residents"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-5 text-base text-stone-600 leading-relaxed">
              <p>
                Sasabase is an experiment in the &ldquo;whole-community campus&rdquo; model.
              </p>
              <p>
                In this model, you engage with many different people.
                With producers at the growing stage, with businesses at the processing stage,
                and with local residents at the selling stage.
              </p>
              <p>
                It will not go smoothly. Through repeated failure and success,
                you experience and learn what 1 × 2 × 3 = 6 truly means.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Learning flow */}
      <section id="flow" className="section-padding border-t border-border scroll-mt-[68px]">
        <div className="container-base">

          <div className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="label-text mb-6">Learning flow</p>
              <h2 className="heading-serif text-h2 text-foreground mb-6 leading-[1.4]">
                Learn the whole journey,
                <br />
                from growing to selling.
              </h2>
              <p className="text-sm text-stone-500 leading-relaxed max-w-[44ch] mb-4">
                The three phases of production, processing, and selling are each
                independent areas of learning — and at the same time, they are
                deeply connected.
              </p>
              <p className="text-sm text-stone-500 leading-relaxed max-w-[44ch]">
                By going through the entire sequence, you develop the ability to
                think about how value is created.
              </p>
            </div>
            <div className="relative aspect-video w-full">
              <Image
                src="/images/6th-sector-curriculum-en.png"
                alt="A Curriculum for Business Thinking — Session 3: product ideas, understanding the market, knowing your customer"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <p className="text-xs text-stone-400 leading-relaxed mb-6">
            ※ What you can experience on-site depends on the timing of your participation
            and the programme design.
          </p>

          <div className="flex flex-col gap-0">
            {flow.map((item) => (
              <div
                key={item.number}
                className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-start border-t border-border py-10 lg:py-14"
              >
                <div className="flex items-start gap-6 lg:gap-0 lg:flex-col">
                  <span className="text-xs font-mono text-stone-300">{item.number}</span>
                  <div className="lg:mt-4">
                    <p className="text-xs font-medium text-primary tracking-label mb-2">{item.phase}</p>
                    <h3 className="heading-serif text-h3 text-foreground leading-[1.5]">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-base text-stone-600 leading-relaxed lg:pt-8">
                  {item.body}
                </p>
              </div>
            ))}
            <div className="border-t border-border pt-10">
              <p className="text-sm text-stone-400 leading-relaxed">
                Through these three phases, you come to understand — as your own practice —
                the process by which local resources are transformed into value.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* How to get involved */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

            <div>
              <p className="label-text mb-8">How to get involved</p>
              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                Not a one-off.
                <br />
                Built on the premise of ongoing involvement.
              </h2>
              <div className="space-y-5 text-base text-stone-600 leading-relaxed">
                <p>
                  This kind of learning cannot be completed in a single day&apos;s experience.
                  The essence only becomes visible through involvement that spans the seasons —
                  from soil preparation to selling.
                </p>
                <p>
                  Individuals, students, and corporate teams can all participate in different ways.
                  By working alongside local people and businesses, perspectives and relationships
                  emerge that could not be generated alone.
                </p>
                <p>
                  The shape of the programme is designed together with you,
                  based on your objectives and situation.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/FDCD9F22-D6B9-4C59-AA8B-29B3157D2A51.JPEG"
                alt="Clear stream and green satoyama landscape"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p className="label-text mb-8">Enquiries</p>
              <h2 className="heading-serif text-h3 text-foreground mb-10 leading-[1.4]">
                Let&apos;s start by talking.
              </h2>

              <div className="space-y-5 text-base text-stone-600 leading-relaxed mb-10">
                <p>
                  We design each Farm-to-Market Learning programme through an individual consultation.
                  Because the content varies depending on your objectives, duration, and level
                  of involvement, please feel free to reach out first.
                </p>
                <p>
                  We welcome enquiries even at the idea stage —
                  &ldquo;I wonder if something like this might be possible.&rdquo;
                </p>
              </div>

              <p className="text-xs text-stone-400 leading-relaxed mb-10">
                ※ Depending on availability, there may be a waiting period.
              </p>

              <Link href="/en/contact" className="btn-primary">
                Contact us
              </Link>
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_9559.JPG"
                alt="Sasabase exterior"
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
            Know the region.
            <br />
            Connect learning to value.
          </h2>

          <div className="space-y-3 mb-10">
            <p className="text-sm md:text-base text-primary-200 leading-relaxed max-w-[40ch] mx-auto">
              A practical learning programme connecting education with local livelihoods and markets.
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
