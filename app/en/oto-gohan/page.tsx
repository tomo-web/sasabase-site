import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Oto-Gohan — Music & Food Gathering | Sasabase',
  description:
    'An informal gathering at Sasabase in Kawanishi, built around food and music. Participants cook together and share a meal. Held irregularly.',
  openGraph: {
    title: 'Oto-Gohan — Music & Food Gathering | Sasabase',
    description:
      'Eating together, listening together, talking together. That is all it takes to connect. Held irregularly at Sasabase, Kawanishi.',
    locale: 'en_US',
    type: 'website',
  },
}

export default function EnOtoGohanPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="container-base py-14 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div>
              <p className="label-text normal-case mb-8">Activity at Sasabase</p>

              <h1 className="heading-serif text-h1 text-foreground mb-8 leading-[1.35] text-balance">
                Oto-Gohan
                <br />
                Music &amp; Food Gathering
              </h1>

              <p className="text-base md:text-lg text-stone-500 leading-relaxed mb-4 max-w-[36ch]">
                Eating together, listening together, talking together.
              </p>
              <p className="text-base md:text-lg text-stone-500 leading-relaxed mb-12 max-w-[36ch]">
                That is all it takes to connect.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="#about" className="btn-primary">
                  About Oto-Gohan
                </Link>
                <Link href="/en/contact" className="btn-outline">
                  Contact us
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/oto-gohan-1.jpg"
                alt="Oto-Gohan gathering — food and guitar music at Sasabase"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding border-t border-border scroll-mt-[68px]">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div>
              <p className="label-text mb-8">What is Oto-Gohan?</p>
              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                Sharing food and music at Sasabase.
              </h2>

              <div className="space-y-6 text-base text-stone-600 leading-relaxed">
                <p>
                  Oto-Gohan is a small informal gathering held irregularly
                  at Sasabase in Sasabe, Kawanishi.
                </p>
                <p>
                  Each time, we prepare food around a theme. We sometimes ask participants
                  to help with the preparation. Then we eat together and listen to music —
                  a slow, unhurried time.
                </p>
                <p>
                  Whether you know people here or are visiting for the first time,
                  sitting around the same table naturally brings conversation.
                </p>
                <p>
                  It is a chance to experience Sasabase&apos;s way of &ldquo;opening a space&rdquo;
                  through food and music.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] md:aspect-[3/4] w-full">
              <Image
                src="/images/oto-gohan-2.jpg"
                alt="Participants gathered around a long table at Oto-Gohan"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            <div>
              <p className="label-text mb-8">Schedule</p>
              <h2 className="heading-serif text-h2 text-foreground mb-10 leading-[1.4]">
                Held irregularly.
                <br />
                Check Instagram for the next date.
              </h2>

              <div className="space-y-5 text-base text-stone-600 leading-relaxed mb-10">
                <p>
                  Announcements are posted on Instagram.
                  Please check our Instagram account for the next event.
                </p>
                <p>
                  Spaces are limited. If you would like to attend,
                  we recommend getting in touch early.
                </p>
              </div>

              <a
                href="https://www.instagram.com/sasabasers/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex"
              >
                Check Instagram for updates →
              </a>
            </div>

            <div className="bg-white border border-border p-8 lg:p-10 self-start">
              <p className="label-text mb-8">At a glance</p>
              <div className="space-y-6 divide-y divide-border">
                <div className="pb-6">
                  <p className="text-xs text-muted mb-2">Frequency</p>
                  <p className="text-base font-medium text-foreground">Irregular</p>
                </div>
                <div className="pt-6 pb-6">
                  <p className="text-xs text-muted mb-2">Capacity</p>
                  <p className="text-base font-medium text-foreground">Small group (varies by event)</p>
                </div>
                <div className="pt-6 pb-6">
                  <p className="text-xs text-muted mb-2">Location</p>
                  <p className="text-base font-medium text-foreground">Sasabase, Sasabe, Kawanishi</p>
                </div>
                <div className="pt-6">
                  <p className="text-xs text-muted mb-2">Fee</p>
                  <p className="text-base font-medium text-foreground">Announced per event</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary border-t border-primary-600">
        <div className="container-base text-center">
          <p className="text-xs text-primary-200 tracking-label uppercase mb-6">Contact</p>
          <h2 className="heading-serif text-h1 text-white mb-6 text-balance leading-[1.4]">
            We will let you know
            <br />
            about the next event.
          </h2>
          <p className="text-sm md:text-base text-primary-200 leading-relaxed mb-10 max-w-[40ch] mx-auto">
            If you would like to attend or find out more,
            please feel free to get in touch.
          </p>
          <Link href="/en/contact" className="btn-outline-white">
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
