import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '6th-Sector School | Agriculture & Local Economy, Kawanishi',
  description:
    'A practice-based learning programme at Sasabase covering the full cycle of regional production — from growing rice to processing and selling. Learning through real work in Kawanishi, Hyogo.',
  openGraph: {
    title: '6th-Sector School | Agriculture & Local Economy, Kawanishi',
    description:
      'Grow. Process. Sell. Experience the full cycle of regional production and local economy through practice at Sasabase, Kawanishi.',
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

export default function EnSixthSectorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="container-base py-14 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

            <div>
              <p className="label-text normal-case mb-8">Activity at Sasabase</p>

              <h1 className="heading-serif text-h1 text-foreground mb-8 leading-[1.35] text-balance">
                6th-Sector School
              </h1>

              <p className="text-base md:text-lg text-stone-500 leading-relaxed mb-4 max-w-[36ch]">
                Grow. Process. Sell — without separating the steps.
              </p>
              <p className="text-base md:text-lg text-stone-500 leading-relaxed mb-12 max-w-[36ch]">
                A programme designed to learn through practice in a real regional setting.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="#about" className="btn-primary">
                  About the programme
                </Link>
                <Link href="#flow" className="btn-outline">
                  Learning flow
                </Link>
              </div>
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

      {/* About */}
      <section id="about" className="section-padding border-t border-border scroll-mt-[68px]">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p className="label-text mb-8">About the programme</p>

              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                Not a one-off experience.
                <br />
                Business thinking grown through real practice.
              </h2>

              <div className="space-y-6 text-base text-stone-600 leading-relaxed">
                <p>
                  In Japan, &ldquo;6th-sector&rdquo; refers to the integration of primary production
                  (agriculture), secondary production (processing), and tertiary activities
                  (sales and services) — 1 × 2 × 3 = 6. The aim is to create new value from
                  local resources.
                </p>
                <p>
                  In most settings, however, learning is divided. A place for agriculture teaches
                  only agriculture. A place for business teaches only business.
                </p>
                <p>
                  At Sasabase, we practise this entire cycle without separating the steps.
                  Turning the soil, harvesting, processing, delivering — by going through the
                  whole sequence, you confront the question of what value really means.
                </p>
                <p>
                  This is not an agriculture experience. It is a design for learning that
                  connects education and the local economy.
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
              The field is not
              <br />
              a constructed one.
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
                Designed as understanding
                <br />
                and practice, not as experience.
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
                  6th-sector learning cannot be completed in a single day&apos;s experience.
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
                  The 6th-Sector School designs each programme around an individual consultation.
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
              This is not an agriculture experience.
              It is a learning space that connects education and the local economy.
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
