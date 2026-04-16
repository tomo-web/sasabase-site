import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Sasabase | Learning & Local Design, Kawanishi',
  description:
    'Based in Kawanishi, Hyogo. Sasabase is a living campus connecting education, community, and local economy. Learn about our approach and the people behind it.',
  keywords: [
    'Sasabase about',
    'Learning Local Design',
    'community-based learning Japan',
    'satoyama Kawanishi',
    'alternative education Japan',
    'rural Japan education',
    'place-based learning Japan',
  ],
  openGraph: {
    title: 'About Sasabase | Learning & Local Design, Kawanishi',
    description:
      'A living campus in Kawanishi, Hyogo — connecting education, community, and local economy. Learn about Sasabase and the people behind it.',
    locale: 'en_US',
    type: 'website',
  },
}

const principles = [
  {
    number: '01',
    title: 'Community as Curriculum',
    titleJp: '地域を教材にする',
    body: 'Agriculture, food, commerce, culture — the everyday life of a regional community is the richest possible learning material. By stepping outside the classroom and into the village, knowledge becomes grounded, embodied, and lasting.',
  },
  {
    number: '02',
    title: 'Connecting Education & Economy',
    titleJp: '教育と経済をつなぐ',
    body: "Learning outcomes that flow back into the local economy. In our 6th-Sector programs, participants experience farming, processing, and selling as a single continuous cycle — the same logic that connects a region's land to its livelihood.",
  },
  {
    number: '03',
    title: 'Experiment, Document, Share',
    titleJp: '実験し、記録し、共有する',
    body: 'Sasabase does not hold the answers — it holds the questions. We try things, record what happens, and open our findings to the world. This commitment to honest experimentation is at the heart of what we do.',
  },
  {
    number: '04',
    title: 'Everyone Belongs Here',
    titleJp: '多様な参加者をつなぐ',
    body: 'Children, parents, teachers, farmers, entrepreneurs, researchers — different people share the same space and create new connections. Sasabase is a place where unexpected meetings lead to unexpected learning.',
  },
]

export default function EnAboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
          aria-hidden="true"
        />
        <div className="container-base relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-primary-300/60" />
            <span className="text-primary-300 text-xs font-medium tracking-label uppercase">About</span>
          </div>
          <h1 className="text-display font-bold text-white mb-6 tracking-wide text-balance leading-[1.2]">
            A living lab
            <br />
            in regional Japan.
          </h1>
          <p className="text-base text-white/60 tracking-wide max-w-[48ch]">
            Where the local community becomes a place of learning for everyone.
          </p>
        </div>
      </section>

      {/* What is Sasabase */}
      <section className="section-padding border-b border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p className="label-text mb-6">What is Sasabase?</p>
              <h2 className="heading-serif text-h1 text-foreground mb-8 text-balance leading-[1.25]">
                The whole
                <br />
                community is a campus.
              </h2>
              <p className="text-base md:text-lg text-stone-500 leading-relaxed">
                Sasabase is a Showa-era house in the satoyama hills of Kawanishi, northern Hyogo —
                a living campus where learning, regional life, and local economy come together.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_8964.JPEG"
                alt="Children exploring the regional paths around Sasabase"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p className="label-text mb-6">Philosophy</p>
              <h2 className="heading-serif text-h2 text-foreground mb-8 leading-[1.4]">
                Everyone is a teacher. Everyone is a student.
              </h2>
              <p className="text-base text-stone-600 leading-relaxed mb-4 max-w-prose">
                At Sasabase, we reject the idea that learning flows in only one direction. The farmer
                knows things the entrepreneur does not. The child sees things the adult has long
                forgotten. When people of different generations and backgrounds share a space, knowledge
                moves in every direction at once.
              </p>
              <p className="text-base text-stone-600 leading-relaxed max-w-prose">
                Our role is to create the conditions for that exchange — through programs, activities,
                and the simple act of gathering around a meal or a rice field.
              </p>
            </div>

            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/IMG_5518 (2).JPEG"
                alt="People gathering at the Sasabase Showa-era house"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Inclusion Vision */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p className="label-text mb-6">Vision</p>
              <h2 className="heading-serif text-h2 text-foreground mb-8 leading-[1.4]">
                A place where you can simply be.
              </h2>
              <p className="text-base text-stone-600 leading-relaxed mb-8 max-w-prose">
                What we are truly building is a place of belonging — an inclusive space where anyone
                can show up, at any stage of life, and find something meaningful.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  'Learning across generations and backgrounds',
                  'Open to everyone, regardless of circumstance',
                  'Simply being here has value',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-stone-600 leading-relaxed">
                    <span className="mt-[0.35em] w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-base text-stone-600 leading-relaxed max-w-prose">
                Small, sustainable communities like this — gently connected to one another — are how
                we believe social change actually happens.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_5775 (2).JPEG"
                alt="Multigenerational gathering at Sasabase"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-base">
          <div className="mb-12 md:mb-16 text-center">
            <p className="label-text mb-4">Core principles</p>
            <h2 className="heading-serif text-h2 text-foreground">
              Learning &amp; Local Design
            </h2>
            <p className="text-sm text-stone-500 mt-4 max-w-[48ch] mx-auto leading-relaxed">
              Four ideas that shape everything we do at Sasabase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div key={p.number} className="bg-surface rounded-xl border border-border p-7">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl font-bold text-primary/20 leading-none flex-shrink-0 font-serif">
                    {p.number}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-foreground leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-xs text-muted tracking-jp mt-1">{p.titleJp}</p>
                  </div>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Living Laboratory */}
      <section className="section-padding bg-stone-100 border-t border-border">
        <div className="container-base">
          <div className="max-w-[56ch] mx-auto text-center">
            <p className="label-text mb-6">A living laboratory</p>

            <h2 className="heading-serif text-h1 text-foreground mb-10 text-balance leading-[1.4]">
              Education × Local Economy × Global
            </h2>

            <p className="text-base text-stone-600 leading-relaxed mb-6 mx-auto">
              Local challenges cannot be solved locally alone.
              And global challenges cannot move without local action.
            </p>

            <p className="text-base text-stone-600 leading-relaxed mx-auto">
              What LLD is building is a model where learning in a Japanese satoyama
              transforms how organisations develop people, expands what children believe is possible,
              and creates new economic forms for regional communities.
              Small experiments. Real change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border mt-16 md:mt-20 border-t border-border">
            {[
              {
                label: 'Education',
                heading: 'Cultivating questions',
                body: 'Not handing out answers — building the capacity to sit with complexity. The regional community is the best classroom for that.',
              },
              {
                label: 'Local Economy',
                heading: 'Turning life into value',
                body: 'Rebuilding satoyama agriculture, food, and culture as sustainable livelihoods. Creating economic flows that stay in the region.',
              },
              {
                label: 'Global',
                heading: 'From Kawanishi to the world',
                body: "Making local practice articulable and shareable across borders. Local depth generates global value — that's what we're proving.",
              },
            ].map((item) => (
              <div key={item.label} className="py-10 md:py-0 md:px-10 first:pt-0 last:pb-0 md:first:pl-0 md:last:pr-0 md:pt-10 md:first:pt-10">
                <p className="text-xs text-primary font-medium tracking-label uppercase mb-3">
                  {item.label}
                </p>
                <h3 className="heading-serif text-h3 text-foreground mb-4 leading-[1.4]">
                  {item.heading}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-20 items-start">

            <div className="lg:sticky lg:top-32 max-w-xs lg:max-w-none">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/images/穏やかな微笑みのシンプルなポートレート.png"
                  alt="Tomo Fujii — Founder of Sasabase"
                  fill
                  className="object-cover object-[center_15%] brightness-110 contrast-90"
                  sizes="(max-width: 1024px) 320px, 40vw"
                />
              </div>
            </div>

            <div>
              <p className="label-text mb-6">Founder</p>
              <h2 className="heading-serif text-h2 text-foreground mb-2 leading-[1.4]">
                Tomo Fujii
              </h2>
              <p className="text-sm text-muted mb-10">
                Founder &amp; Learning Ecosystem Designer
              </p>

              <div className="text-base text-stone-600 leading-relaxed mb-8 flex flex-col gap-4 max-w-prose">
                <p>
                  Education connects us to the future. As I kept asking what learning really means,
                  I discovered the possibility of connecting the knowledge that lives in local
                  communities to viable economic activity.
                </p>
                <p>
                  Drawing on what I had observed from living abroad — a fresh appreciation for
                  Japan&apos;s regional landscape — I returned to my home region in 2014.
                </p>
                <p>
                  Today I run Sasabase from a restored Showa-era house in Sasabe, the satoyama village
                  where my family has lived for generations. Every program we run is an experiment
                  in what learning and community can be.
                </p>
              </div>

              <div className="flex flex-col gap-8">
                {[
                  {
                    period: '— Corporate career',
                    description:
                      'Worked across diverse teams on international projects. Repeatedly encountering mismatches in values and assumptions sparked a deep interest in how people learn and communicate.',
                  },
                  {
                    period: '— MBA & professional qualifications',
                    description:
                      'Completed an overseas MBA alongside US CPA and CFP qualifications. Still felt a gap between formal learning and the practical ability to move things forward — which led to returning to study at 55.',
                  },
                  {
                    period: '— Return to Kawanishi',
                    description:
                      'Returned to the ancestral family land in Sasabe, Kawanishi in 2014. Began collaborating with the city on community initiatives. Since 2020, has been running Sasabase from the former family Showa-era house.',
                  },
                ].map((item) => (
                  <div key={item.period} className="border-l-2 border-border pl-5">
                    <p className="text-xs text-muted tracking-label uppercase mb-2">{item.period}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary border-t border-primary-600">
        <div className="container-base text-center">
          <p className="text-xs text-primary-200 tracking-label uppercase mb-6">Next step</p>
          <h2 className="heading-serif text-h1 text-white mb-6 text-balance leading-[1.4]">
            Come and visit us.
          </h2>
          <p className="text-sm md:text-base text-primary-200 leading-relaxed mb-4 max-w-[40ch] mx-auto">
            Whether you want to attend a program, explore a collaboration, or simply see the place —
            reach out and we&apos;ll figure it out together.
          </p>
          <p className="text-sm md:text-base text-primary-200 leading-relaxed mb-10 max-w-[40ch] mx-auto">
            A single conversation is a fine place to start.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/en/experience" className="btn-outline-white">
              See programs
            </Link>
            <Link href="/en/contact" className="btn-outline-white">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
