import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sasamai Club | Rice Farming in Sasabe, Kawanishi',
  description:
    "A supporter club for rice cultivation in Sasabe's terraced paddies. Members take part in the farming year alongside local people — from field preparation in spring to harvest in autumn.",
  openGraph: {
    title: 'Sasamai Club | Rice Farming in Sasabe, Kawanishi',
    description:
      "Rice cultivation in Sasabe's terraced paddies. Members walk through the farming year alongside local people, helping to sustain both the harvest and the landscape.",
    locale: 'en_US',
    type: 'website',
  },
}

const seasons = [
  {
    season: 'March – April',
    title: 'Irrigation work & soil preparation',
    description:
      "Preparation begins with clearing the mud that has built up in the irrigation channels over winter. It also involves grass cutting and sandbag work upstream — hard physical labour. After that, the tractor turns the soil to prepare the ground for the seedlings.",
  },
  {
    season: 'May – June',
    title: 'Rice planting',
    description:
      'The season for planting seedlings in the Sasabe terraced paddies. Machine planting is used where possible, but paddies that machines cannot reach are planted by hand. Planting is also popular as an experience activity. The view of the water-filled terraced paddies after planting is something special.',
  },
  {
    season: 'June – September',
    title: 'Water management & weeding',
    description:
      "Even after planting, daily water management continues. The steady, unglamorous work of keeping the water level right and removing weeds is what connects to the autumn harvest. This period is the most important — and the least visible.",
  },
  {
    season: 'October',
    title: 'Harvest',
    description:
      "Most of the harvest is done by combine harvester. Some areas that machines cannot reach are cut by hand. After threshing and drying, the rice is finished as new-crop rice. At Sasabase, you can also cook rice over an outdoor wood-fired pot and enjoy it together.",
  },
]

export default function EnSasamaiClubPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-50 border-b border-border py-16 md:py-24">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-primary/50" />
                <span className="label-text">Rice farming</span>
              </div>
              <h1 className="heading-serif text-h1 text-foreground mb-4">
                Sasamai Club
              </h1>
              <p className="text-base text-muted tracking-wide mb-6">
                Rice Farming at Sasabe
              </p>
              <p className="text-base text-stone-600 leading-relaxed max-w-[44ch]">
                Growing rice in the terraced paddies of Sasabe means protecting the landscape
                and carrying on the history of this place.
                From soil preparation through water management to the autumn harvest —
                would you like to walk through one farming year with us?
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
              <Image
                src="/images/sasamai-hero.jpg"
                alt="Seedlings growing in the water-filled terraced paddies of Sasabe"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* Background */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <p className="label-text mb-6">Background</p>
              <h2 className="heading-serif text-h2 text-foreground mb-8 leading-[1.4]">
                Protecting the terraced paddies
                <br />
                is protecting the landscape.
              </h2>
              <div className="space-y-4 text-base text-stone-600 leading-relaxed mb-8">
                <p>
                  The terraced paddies of Sasabe are an essential part of this region&apos;s landscape.
                  But in recent years, as farmers age and the shortage of successors grows more serious,
                  the number of abandoned fields is increasing.
                  If left uncultivated, the terraces fall into disrepair and the landscape is lost.
                </p>
                <p>
                  Rice farming is not simply about producing food.
                  It is the act of storing water, nurturing soil, and creating habitat for living things.
                  We want to pass on this value to the next generation.
                </p>
                <p>
                  Sasabase shares this reality as it is, and creates opportunities to encounter
                  satoyama life through actual farm work.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-border">
              <Image
                src="/images/IMG_9552.JPG"
                alt="Terraced rice paddies in Sasabe"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Annual cycle */}
      <section id="sasamai" className="section-padding bg-stone-50 border-t border-border scroll-mt-[68px]">
        <div className="container-base">
          <div className="mb-12">
            <p className="label-text mb-6">Annual activities</p>
            <h2 className="heading-serif text-h2 text-foreground mb-4 leading-[1.4]">
              A year of rice farming
            </h2>
            <p className="text-sm text-stone-500 leading-relaxed max-w-[44ch] mb-3">
              Starting with soil preparation, then planting, water management, and harvest.
              Different work continues with each season.
            </p>
            <p className="text-xs text-stone-400 leading-relaxed">
              ※ The work and dates you can actually join depend on the weather,
              the condition of the paddies, and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {seasons.map((item, i) => (
              <div key={item.season} className="bg-white border border-border p-8">
                <span className="text-xs font-mono text-stone-300 mb-3 block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-xs font-medium text-primary tracking-label mb-2">
                  {item.season}
                </p>
                <h3 className="heading-serif text-h3 text-foreground mb-3 leading-[1.5]">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to join */}
      <section className="section-padding border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div>
              <p className="label-text mb-6">How to join</p>
              <h2 className="heading-serif text-h2 text-foreground mb-8 leading-[1.4]">
                Would you like to take part in this work?
              </h2>
              <div className="space-y-4 text-base text-stone-600 leading-relaxed mb-10">
                <p>
                  The Sasamai Club offers ongoing opportunities to get involved in
                  the rice cultivation that maintains the terraced paddies.
                </p>
                <p>
                  The work includes not only seasonal milestones but also
                  daily care and environmental upkeep.
                </p>
                <p>
                  It is not a light commitment — but in return,
                  you get to touch one part of the local community&apos;s way of life.
                </p>
                <p>
                  The harvested rice is offered to participants on a priority basis.
                  It is rice grown with as little agricultural chemicals as possible.
                </p>
                <p>If you are interested, please feel free to get in touch.</p>
              </div>
              <Link href="/en/contact" className="btn-primary">
                Enquire about the Sasamai Club
              </Link>
            </div>

            <div className="relative aspect-[4/3] md:aspect-[3/4] w-full">
              <Image
                src="/images/sasamai-join.jpg"
                alt="Participants planting rice in the Sasabe terraced paddies"
                fill
                className="object-cover object-top"
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
            Would you like to experience
            <br />
            satoyama rice farming?
          </h2>
          <p className="text-sm md:text-base text-primary-200 leading-relaxed mb-10 max-w-[40ch] mx-auto">
            Please feel free to get in touch first.
          </p>
          <Link href="/en/contact" className="btn-outline-white">
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
