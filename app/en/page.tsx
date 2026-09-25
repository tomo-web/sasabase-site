import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sasabase | Community Hub in Kawanishi, Hyogo',
  description:
    'Sasabase is a renovated Showa-era house in the satoyama village of Sasabe, Kawanishi — a whole-community campus connecting education, community, and local livelihoods.',
  openGraph: {
    title: 'Sasabase | Community Hub in Kawanishi, Hyogo',
    description:
      'A whole-community campus in Kawanishi, Hyogo. Connecting education, community, and local livelihoods through four grassroots activities.',
    locale: 'en_US',
    type: 'website',
  },
}

const activities = [
  {
    number: '01',
    title: "Terra'Co",
    description:
      "A multigenerational gathering space open to all ages. Everyone is both teacher and student. Open every Wednesday at Sasabase.",
    href: '/en/terraco',
  },
  {
    number: '02',
    title: 'Oto-Gohan — Music & Food',
    description:
      'An informal gathering centred on food and music. Participants cook together, share a meal, and enjoy relaxed conversation. Held irregularly.',
    href: '/en/oto-gohan',
  },
  {
    number: '03',
    title: '6th-Sector School',
    description:
      'A practice-based learning programme covering the full cycle of regional production — from growing rice to processing and selling. Learning through real work.',
    href: '/en/6th-sector',
  },
  {
    number: '04',
    title: 'Sasamai Club',
    description:
      "A supporter club for rice cultivation in Sasabe's terraced paddies. Members take part in the farming year alongside local people, helping sustain both the harvest and the landscape.",
    href: '/en/sasamai-club',
  },
]

export default function EnHomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="container-base py-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            <div>
              <p className="text-xs tracking-wide text-muted mb-8">
                Sasabase — Kawanishi, Hyogo, Japan
              </p>

              <h1 className="heading-serif text-h1 text-balance text-foreground mb-6">
                The whole community
                <br />
                is a campus.
              </h1>

              <p className="text-base md:text-lg text-stone-500 leading-relaxed mb-3 max-w-[36ch]">
                A living lab connecting education, community, and local livelihoods.
              </p>

              <p className="text-sm text-stone-400 leading-relaxed max-w-[44ch]">
                Not a school, not a company — a place where everyday life, work, and
                learning come together. We are practising a new approach from Kawanishi, Hyogo.
              </p>

              <div className="mt-8 pt-6 border-t border-border space-y-3 max-w-[44ch]">
                <p className="text-sm text-stone-500 leading-relaxed">
                  Sasabase is the community hub where Learning &amp; Local Design puts
                  the idea of <em>&ldquo;the region as a place of learning&rdquo;</em> into practice.
                </p>
                <p className="text-sm text-stone-500 leading-relaxed">
                  Corporate training, educational curricula, and regional stay programmes
                  are handled by Learning &amp; Local Design (LLD). Please enquire for details.
                </p>
              </div>
            </div>

            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/IMG_1540.JPEG"
                alt="Sasabase — Showa-era house in the satoyama, Kawanishi, Hyogo"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 shadow-md border-l-2 border-primary">
                <p className="text-sm font-medium text-foreground">Since 2020</p>
                <p className="text-xs text-muted mt-0.5">Kawanishi · Hyogo, Japan</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 md:py-16 lg:py-20 border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

            <div>
              <p className="text-xs font-medium tracking-label text-muted mb-5">About Sasabase</p>
              <h2 className="heading-serif text-h1 text-balance text-foreground mb-5 leading-[1.4]">
                The region is a rich place for learning.
              </h2>
              <p className="text-base md:text-lg text-stone-500 leading-relaxed mb-7 max-w-[32ch]">
                Sasabase is an experimental learning space
                connecting education, community, and local livelihoods.
              </p>
              <Link href="/en/about" className="btn-outline text-base">
                About Sasabase
              </Link>
            </div>

            <div className="relative aspect-[4/3] md:aspect-[4/5] w-full">
              <Image
                src="/images/IMG_9559.JPG"
                alt="Community learning at Sasabase"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Four activities */}
      <section id="activities" className="py-10 md:py-14 lg:py-20 bg-stone-50 border-t border-border">
        <div className="container-base">

          <div className="mb-5 md:mb-8">
            <p className="text-xs font-medium tracking-label text-muted mb-4">Activities</p>
            <h2 className="heading-serif text-h2 text-foreground">
              Four activities at Sasabase
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {activities.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                className="group bg-white border border-border p-6 hover:border-primary/30 hover:shadow-sm transition-all duration-300 flex flex-col"
              >
                <span className="text-xs font-mono text-stone-300 mb-4 block">
                  {item.number}
                </span>
                <h3 className="heading-serif text-h3 text-foreground mb-3 leading-[1.5] group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed flex-1 mb-6">
                  {item.description}
                </p>
                <span className="text-xs font-medium text-primary group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* CTA banner */}
      <section className="py-10 md:py-14 bg-primary border-t border-primary-600">
        <div className="container-base">
          <p className="heading-serif text-xl md:text-2xl lg:text-[1.75rem] text-white mb-6 leading-[1.5]">
            We are building a place where opening the front door makes everyone feel like family.
          </p>
          <a
            href="https://www.instagram.com/sasabasers/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary-200 hover:text-white transition-colors"
          >
            Follow our daily activities on Instagram →
          </a>
        </div>
      </section>
    </>
  )
}
