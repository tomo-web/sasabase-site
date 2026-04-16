import Link from 'next/link'
import Image from 'next/image'

type ProgramItem = {
  number: string
  title: string
  description: string
  href: string
  note?: string
  learnMoreLabel?: string
}

type ProgramGroup = {
  id: string
  heading: string
  intro: string
  items: ProgramItem[]
}

const programGroups: ProgramGroup[] = [
  {
    id: 'international',
    heading: 'For International Visitors',
    intro: 'Programs open to participants from anywhere in the world.',
    items: [
      {
        number: '01',
        title: '6th-Sector School',
        description:
          'A hands-on program covering rice farming, food processing, and local sales — the full cycle of regional production and local economy. Real-world learning that connects the land to the market.',
        href: '/en/experience/6th-sector',
      },
      {
        number: '02',
        title: 'Regional Immersion Stay',
        description:
          "Live alongside a satoyama community in a Showa-era wooden house. Take part in the everyday life of a rural Japanese community — farming, cooking, and gathering.",
        href: '/en/experience/stay',
      },
    ],
  },
  {
    id: 'organisations',
    heading: 'For Organisations',
    intro: 'Experiential training for teams and companies.',
    items: [
      {
        number: '03',
        title: 'Corporate Training & Team Building',
        description:
          'Experiential programs for organisations seeking fresh perspectives. Move your team out of the boardroom and into the field — explore leadership, collaboration, and purpose in a living laboratory.',
        href: '/corporate-training',
        learnMoreLabel: 'Learn more (Japanese site)',
      },
    ],
  },
  {
    id: 'local',
    heading: 'For Local Community in Japan',
    intro: 'Community programs rooted in Kawanishi — primarily conducted in Japanese.',
    items: [
      {
        number: '04',
        title: "Terra'Co — Learning Space for Multiple Generations",
        description:
          'A multigenerational gathering place where everyone is both teacher and student. From children to elders, knowledge flows freely through shared activities, conversation, and everyday life in the village.',
        href: '/terraco',
        note: 'Japan domestic program',
        learnMoreLabel: 'Learn more (Japanese site)',
      },
      {
        number: '05',
        title: 'Alternative Learning Support',
        description:
          'A flexible learning environment for children who find traditional schooling difficult. Participants can join in person or remotely via telepresence robots — at their own pace, in a safe and welcoming space.',
        href: '/support',
        note: 'Japan domestic program',
        learnMoreLabel: 'Learn more (Japanese site)',
      },
    ],
  },
]

export default function EnHomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[calc(100vh-68px)] flex items-center bg-background">
        <div className="container-base py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

            {/* Text */}
            <div>
              <p className="text-xs tracking-wide text-muted mb-8">
                Sasabase by Learning &amp; Local Design — Kawanishi, Hyogo, Japan
              </p>

              <h1 className="heading-serif text-h1 text-balance text-foreground mb-6 leading-[1.25]">
                A living campus
                <br />
                in regional Japan.
              </h1>

              <p className="text-base md:text-lg text-stone-500 leading-relaxed mb-3 max-w-[40ch]">
                Where learning, life, and the local economy come together.
              </p>

              <p className="text-sm text-stone-400 leading-relaxed mb-4 max-w-[44ch]">
                Sasabase is a living laboratory set in the satoyama hills of Kawanishi, Hyogo.
                It is neither a school nor a company, but a place where people of all ages come together
                to learn by doing.
              </p>

              <p className="text-sm text-stone-400 leading-relaxed mb-12 max-w-[44ch]">
                Our concept is <span className="text-foreground font-medium">Learning &amp; Local Design</span> —
                connecting education, community, and sustainable livelihoods.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/en/about" className="btn-outline">
                  About Sasabase
                </Link>
                <Link href="/en/experience" className="btn-primary">
                  Explore Programs
                </Link>
                <Link href="/en/contact" className="btn-ghost">
                  Get in touch →
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/IMG_1540.JPEG"
                alt="Sasabase — satoyama landscape in Kawanishi, Hyogo"
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
      <section className="section-padding border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div>
              <p className="text-xs font-medium tracking-label text-muted mb-6">What is Sasabase?</p>
              <h2 className="heading-serif text-h1 text-balance text-foreground mb-8 leading-[1.4]">
                The community is the classroom.
              </h2>

              <p className="text-base text-stone-600 leading-relaxed mb-4 max-w-prose">
                Tucked in the satoyama hills of Kawanishi in Hyogo, Sasabase is a renovated
                Showa-era house that serves as a living campus. We believe that the local community—its land,
                people, food, and culture—is the richest possible learning environment.
              </p>
              <p className="text-base text-stone-600 leading-relaxed mb-4 max-w-prose">
                Here, children and adults learn alongside one another. People from diverse backgrounds share
                the same space. Knowledge flows in every direction—there are no
                fixed roles of teacher and learner.
              </p>
              <p className="text-base text-stone-600 leading-relaxed mb-10 max-w-prose">
                Sasabase is also easily accessible: about 50 minutes from Osaka by train,
                yet surrounded by rice fields, mountains, and the quiet rhythms of regional Japan.
              </p>

              <Link href="/en/about" className="btn-ghost text-base">
                Learn more about Sasabase →
              </Link>
            </div>

            <div className="relative aspect-[4/5] w-full">
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

      {/* Programs */}
      <section id="programs" className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">

          <div className="mb-14 md:mb-18">
            <p className="text-xs font-medium tracking-label text-muted mb-4">What we offer</p>
            <h2 className="heading-serif text-h2 text-foreground">
              Ways to be part of Sasabase
            </h2>
          </div>

          <div className="flex flex-col gap-14">
            {programGroups.map((group, groupIndex) => (
              <div key={group.id}>
                {/* Group heading */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-shrink-0">
                    <p className="text-xs font-semibold tracking-label uppercase text-stone-400">
                      {group.heading}
                    </p>
                    <p className="text-[11px] text-stone-400 mt-1 leading-relaxed">
                      {group.intro}
                    </p>
                  </div>
                  <div className="flex-1 h-px bg-border" aria-hidden="true" />
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {group.items.map((item) => (
                    <Link
                      key={item.number}
                      href={item.href}
                      className="group bg-white border border-border p-8 hover:border-primary/30 hover:shadow-sm transition-all duration-300 flex flex-col"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono text-stone-300">{item.number}</span>
                        {item.note && (
                          <span className="text-[10px] font-medium tracking-label uppercase text-stone-400 bg-stone-100 px-2 py-0.5 rounded">
                            {item.note}
                          </span>
                        )}
                      </div>
                      <h3 className="heading-serif text-h3 text-foreground mb-3 leading-[1.4] group-hover:text-primary transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-sm text-stone-500 leading-relaxed flex-1 mb-6">
                        {item.description}
                      </p>
                      <span className="text-xs font-medium text-primary group-hover:underline">
                        {item.learnMoreLabel ? `${item.learnMoreLabel} →` : 'Learn more →'}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Divider between groups (not after last) */}
                {groupIndex < programGroups.length - 1 && (
                  <div className="mt-14 border-t border-border" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link href="/en/experience" className="btn-outline">
              See all programs
            </Link>
          </div>

        </div>
      </section>

      {/* Why Japan / Why Regional */}
      <section className="section-padding border-t border-border">
        <div className="container-base">

          <div className="max-w-2xl mb-14">
            <p className="text-xs font-medium tracking-label text-muted mb-4">Why here?</p>
            <h2 className="heading-serif text-h2 text-foreground mb-6">
              Why Japan. Why regional.
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
              Japan&apos;s satoyama — the mosaic landscape where mountains meet farmland — is a place
              where farming, forests, and everyday life have long shaped one another.
              Kawanishi is a gateway into that world — close to Osaka, yet still part of the everyday rhythms of rural Japan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🌾',
                title: 'Food & Agriculture',
                body: 'Take part in rice farming, from planting to harvest. Alongside local farmers, experience how food is part of everyday life here.',
              },
              {
                icon: '🏡',
                title: 'A Japanese Wooden House',
                body: 'Stay and work in a Showa-era wooden home built by a local carpenter. Details like ranma panels and a traditional Buddhist altar remain part of daily life.',
              },
              {
                icon: '🚃',
                title: 'Accessible Nature',
                body: 'Just 50 minutes from Osaka by train, yet clearly at a different pace. Sasabase is the "convenient countryside" — regional depth without isolation.',
              },
              {
                icon: '🤝',
                title: 'Living Culture',
                body: 'Connect with local people — farmers, makers, and families. Experience everyday life in satoyama, as it is today.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-stone-50 border border-border p-7">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary border-t border-primary-600">
        <div className="container-base text-center">

          <p className="text-xs text-primary-200 tracking-label uppercase mb-6">
            Ready to explore?
          </p>

          <h2 className="heading-serif text-h1 text-white mb-6 text-balance leading-[1.4]">
            Come experiment with us.
          </h2>

          <p className="text-sm md:text-base text-primary-200 leading-relaxed mb-3 max-w-[44ch] mx-auto">
            Whether you want to visit, join a program, collaborate on a project, or simply learn more —
            we&apos;d love to hear from you.
          </p>
          <p className="text-sm md:text-base text-primary-200 leading-relaxed mb-10 max-w-[40ch] mx-auto">
            Starting with a single conversation is perfectly fine.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/en/experience" className="btn-outline-white">
              Explore programs
            </Link>
            <Link href="/en/contact" className="btn-outline-white">
              Contact us
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
