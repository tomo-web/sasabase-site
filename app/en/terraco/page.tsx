import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Terra'Co | Multigenerational Learning Space, Kawanishi",
  description:
    "Terra'Co is a multigenerational gathering space held every Wednesday at Sasabase in Kawanishi. Children, adults, and elders learn alongside one another — no fixed teacher, no fixed student.",
  openGraph: {
    title: "Terra'Co | Multigenerational Learning Space, Kawanishi",
    description:
      "Every Wednesday at Sasabase, Kawanishi. A space for all ages where learning happens naturally through conversation and shared activity.",
    locale: 'en_US',
    type: 'website',
  },
}

const happenings = [
  {
    title: 'No boundary between teacher and student',
    body: 'There is no fixed role of teacher or student. One person\'s experience or words becomes learning for someone else.',
  },
  {
    title: 'Learning arises naturally within everyday life',
    body: 'There is no special curriculum. Each person\'s learning emerges from the conversations and encounters of that day.',
  },
  {
    title: 'New perspectives through dialogue',
    body: 'Simply having people of different ages and backgrounds in the same space creates unexpected discoveries.',
  },
  {
    title: 'Relationships gradually change',
    body: 'You cannot see it in one visit. By continuing to come, connections with others slowly grow.',
  },
]

const forWhom = [
  'Children and adults alike',
  'Those who want to enjoy learning',
  'Those who want to talk with someone',
  'Those who want to be involved at their own pace',
  'Those looking for a place to belong',
]

export default function EnTerraCoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="container-base py-14 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

            <div>
              <p className="label-text mb-8">Multigenerational Learning Space</p>

              <h1 className="heading-serif text-h1 text-foreground mb-8 leading-[1.35] text-balance">
                Terra&apos;Co
              </h1>

              <p className="text-base md:text-lg text-stone-500 leading-relaxed mb-4 max-w-[36ch]">
                Everyone is a teacher. Everyone is a student.
              </p>
              <p className="text-base md:text-lg text-stone-500 leading-relaxed mb-12 max-w-[36ch]">
                A space where those kinds of relationships arise naturally, within everyday life.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="#about" className="btn-primary">
                  About Terra&apos;Co
                </Link>
                <Link href="#schedule" className="btn-outline">
                  Schedule
                </Link>
              </div>
            </div>

            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/S__145113093.jpg"
                alt="Terra'Co — a multigenerational gathering at Sasabase"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 shadow-md border-l-2 border-primary">
                <p className="text-sm font-medium text-foreground">Every Wednesday</p>
                <p className="text-xs text-muted mt-0.5">14:00 – 20:00</p>
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
              <p className="label-text mb-8">What is Terra&apos;Co?</p>

              <h2 className="heading-serif text-h2 text-foreground mb-12 leading-[1.5] text-balance">
                A place where people of all ages
                <br />
                come together to learn from one another.
              </h2>

              <div className="space-y-6 text-base text-stone-600 leading-relaxed">
                <p>
                  Terra&apos;Co is a multigenerational gathering space where children, adults,
                  and elders come together to learn alongside one another.
                </p>
                <p>
                  Here, there is no separation between those who teach and those who learn.
                </p>
                <p>
                  One person&apos;s experience or words becomes learning for someone else,
                  and that insight connects on to yet another person.
                </p>
                <p>
                  You can simply sit and be, or talk with someone.
                </p>
                <p>
                  Each person&apos;s way of being here is respected.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_3663.JPEG"
                alt="Elders and children learning together in the tatami room at Sasabase"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* What happens here */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">

          <div className="mb-14">
            <p className="label-text mb-6">What happens here</p>
            <h2 className="heading-serif text-h2 text-foreground leading-[1.4] text-balance">
              There is no fixed programme.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
            {happenings.map((item, i) => (
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

          <p className="text-sm text-stone-500 leading-relaxed max-w-[48ch]">
            Each person&apos;s own learning emerges from the day&apos;s encounters and conversations.
          </p>

        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="section-padding border-t border-border scroll-mt-[68px]">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

            <div>
              <p className="label-text mb-8">Schedule</p>
              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                Every Wednesday,
                <br />
                Sasabase is open.
              </h2>

              <div className="space-y-5 text-base text-stone-600 leading-relaxed mb-10">
                <p>
                  You are free to come and go as you please.
                  Come when you want to come, and leave when you want to leave.
                  That is the kind of place we aim to be.
                </p>
                <p>
                  From 16:00 to around 20:00, learning support is available
                  from a former junior high school teacher.
                  The focus is not on one-way instruction, but on each person
                  thinking and learning for themselves.
                </p>
              </div>

              <p className="text-xs text-stone-400 leading-relaxed">
                ※ Dates and content may change.
                <br />
                Please check Instagram or contact us for the latest information.
              </p>
            </div>

            <div className="bg-stone-50 border border-border p-8 lg:p-10 self-start">
              <p className="label-text mb-8">When</p>

              <div className="space-y-6 divide-y divide-border">
                <div className="pb-6">
                  <p className="text-xs text-muted mb-2">Day</p>
                  <p className="heading-serif text-h3 text-foreground">Every Wednesday</p>
                </div>
                <div className="pt-6 pb-6">
                  <p className="text-xs text-muted mb-2">Hours</p>
                  <p className="heading-serif text-h3 text-foreground">14:00 – 20:00</p>
                  <p className="text-xs text-stone-400 mt-2">Free to come and go</p>
                </div>
                <div className="pt-6">
                  <p className="text-xs text-muted mb-2">Learning support</p>
                  <p className="text-sm text-foreground leading-relaxed">16:00 – 20:00</p>
                  <p className="text-xs text-stone-400 mt-1">By a former junior high school teacher</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p className="label-text mb-8">Who it&apos;s for</p>
              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                This is not a space
                <br />
                limited to a specific group.
              </h2>

              <ul className="flex flex-col gap-4 mb-10">
                {forWhom.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 text-base text-stone-600 leading-relaxed"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-stone-500 leading-relaxed">
                Each person&apos;s way of being here is respected.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_3827.JPEG"
                alt="An adult and child playing together at Sasabase"
                fill
                className="object-contain object-center bg-stone-100"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* How to join */}
      <section className="section-padding border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p className="label-text mb-8">How to join</p>
              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                Just drop by.
              </h2>

              <div className="space-y-5 text-base text-stone-600 leading-relaxed">
                <p>
                  No special procedures are needed to participate in Terra&apos;Co.
                </p>
                <p>
                  There is no participation fee, but we do have a donation box
                  to help keep the space going.
                </p>
                <p>
                  For events and cooking sessions announced in advance,
                  we may ask for a small contribution to cover materials.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_8909.JPG"
                alt="Relaxing on the engawa at Sasabase"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Local Supporters' Camp */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">

          <div className="mb-10 lg:mb-14">
            <p className="label-text mb-4">Overnight stay</p>
            <h2 className="heading-serif text-h2 text-foreground mb-5 leading-[1.4]">
              Local Supporters&rsquo; Camp
            </h2>
            <p className="text-base text-stone-600 leading-relaxed max-w-[52ch]">
              For groups whose representative lives in Kawanishi, we offer exclusive use of the whole
              Sasabase building for an overnight stay. Everyone brings food to share, cooks together,
              and spends the night in the satoyama. As part of the stay, the group takes part in one
              task at Sasabase. Please bring your own bedding and consumables, and take everything
              you bring with you when you leave.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-12">

            <div className="space-y-6">

              <div className="bg-white border border-border p-6">
                <h3 className="text-[10px] font-medium tracking-label uppercase text-stone-500 mb-5">
                  Basic information
                </h3>
                <dl className="space-y-5">
                  <div>
                    <dt className="text-xs text-muted mb-1">For</dt>
                    <dd className="text-sm text-foreground leading-relaxed">
                      Groups of 4–15 with a Kawanishi-based representative
                    </dd>
                  </div>
                  <div className="pt-5 border-t border-border">
                    <dt className="text-xs text-muted mb-1">Rate</dt>
                    <dd>
                      <span className="heading-serif text-h3 text-foreground">¥19,000</span>
                      <span className="text-xs text-stone-500 ml-2">
                        whole building / group / night
                      </span>
                    </dd>
                  </div>
                  <div className="pt-5 border-t border-border">
                    <dt className="text-xs text-muted mb-1">Check-in / Check-out</dt>
                    <dd className="text-sm text-foreground leading-relaxed">
                      15:00 / 10:00 next morning
                      <span className="text-stone-400 ml-1 text-xs">(times are negotiable)</span>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="bg-white border border-border p-6">
                <h3 className="text-[10px] font-medium tracking-label uppercase text-stone-500 mb-5">
                  Options
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between gap-4 text-sm leading-relaxed">
                    <span className="text-stone-600">Kitchen use only</span>
                    <span className="text-foreground font-medium whitespace-nowrap">+ ¥1,000</span>
                  </li>
                  <li className="flex items-center justify-between gap-4 text-sm leading-relaxed border-t border-border pt-3">
                    <span className="text-stone-600">Kitchen + outdoor wood-fired oven</span>
                    <span className="text-foreground font-medium whitespace-nowrap">+ ¥2,000</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[10px] font-medium tracking-label uppercase text-stone-500 mb-4">
                  House rules
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    'Complete one task at Sasabase during your stay (farm work, weeding, pruning, etc.)',
                    'Bring your own bedding and consumables',
                    'Take all waste and belongings with you when you leave',
                    'Clean up and restore the space to its original condition before leaving',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-stone-600 leading-relaxed">
                      <span className="mt-[0.5em] w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_2.JPEG"
                alt="Group doing garden work at Sasabase"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>

          <div className="border-t border-border pt-10 mb-10">
            <h3 className="text-[10px] font-medium tracking-label uppercase text-stone-500 mb-6">
              Sample schedule
            </h3>
            <div className="flex flex-col max-w-xl">
              {[
                { time: '15:00', note: 'Garden weeding — "everything is fun when you do it together"' },
                { time: '16:30', note: 'Shopping and dinner preparation' },
                { time: '',      note: 'Each household brings a cup of rice or fridge vegetables; pick up anything else at the nearby supermarket', sub: true },
                { time: '18:00', note: 'Dinner' },
                { time: '19:30', note: 'Fireworks in the back garden' },
                { time: '20:30', note: 'Bath and bedtime preparations' },
                { time: '21:30', note: 'Lights out' },
                { time: 'Next 06:30', note: 'Rise and breakfast preparations' },
                { time: '08:00', note: 'Morning walk' },
                { time: '09:00', note: 'Cleaning' },
                { time: '10:00', note: 'Check-out' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-5 py-3 border-b border-border last:border-0 ${item.sub ? 'border-b-0 pt-0' : ''}`}
                >
                  <span className={`text-xs font-mono w-20 flex-shrink-0 pt-0.5 ${item.sub ? 'text-transparent' : 'text-primary'}`}>
                    {item.time || '　'}
                  </span>
                  <p className={`text-sm leading-relaxed ${item.sub ? 'text-stone-400 text-xs' : 'text-stone-600'}`}>
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-stone-500 leading-relaxed mb-5">
              For details on availability, dates, and conditions, please get in touch.
            </p>
            <Link href="/en/contact" className="btn-primary">
              Enquire about the camp
            </Link>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary border-t border-primary-600">
        <div className="container-base text-center">
          <p className="text-xs text-primary-200 tracking-label uppercase mb-6">Contact</p>

          <h2 className="heading-serif text-h1 text-white mb-6 text-balance leading-[1.4]">
            Come and feel the air of this place.
          </h2>

          <p className="text-sm md:text-base text-primary-200 leading-relaxed mb-4 max-w-[36ch] mx-auto">
            If you would like to visit or take part,
            please feel free to get in touch.
          </p>
          <p className="text-sm md:text-base text-primary-200 leading-relaxed mb-10 max-w-[36ch] mx-auto">
            Just dropping by is perfectly fine.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/en/contact" className="btn-outline-white">Contact us</Link>
            <Link href="/en/access" className="btn-outline-white">Access →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
