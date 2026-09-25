import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Sasabase | Community hub in Kawanishi',
  description:
    'Sasabase is a renovated Showa-era house in Sasabe, Kawanishi — a whole-community campus where people of all ages learn alongside one another through everyday life and local activities.',
  openGraph: {
    title: 'About Sasabase | Community hub in Kawanishi',
    description:
      'A whole-community campus in Kawanishi, Hyogo. An inclusive gathering place where learning, everyday life, and community come together.',
    locale: 'en_US',
    type: 'website',
  },
}

const activities = [
  { href: '/en/terraco',      label: "Terra'Co — Multigenerational Learning Space" },
  { href: '/en/oto-gohan',    label: 'Oto-Gohan — Music & Food Gathering' },
  { href: '/en/6th-sector',   label: '6th-Sector School' },
  { href: '/en/sasamai-club', label: 'Sasamai Club' },
]

export default function EnAboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-8 md:py-10 border-b border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            <div>
              <p className="label-text normal-case mb-4">About Sasabase</p>
              <h1 className="heading-serif text-h1 text-foreground mb-5 leading-[1.3] text-balance">
                A Showa-era house in Sasabe
                <br className="hidden sm:block" />
                becomes a place for learning.
              </h1>
              <p className="text-base md:text-lg text-stone-500 leading-relaxed">
                Sasabase is a renovated Showa-era house in the satoyama village of Sasabe,
                northern Kawanishi, Hyogo. It is a community learning space that uses the local
                region itself as a campus — a &ldquo;whole-community campus.&rdquo;
                We aim to build a place where opening the front door makes everyone feel like family.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_8964.JPEG"
                alt="Children exploring the paths around Sasabase"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* The place */}
      <section className="py-10 md:py-14 lg:py-16 border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            <div>
              <p className="label-text mb-4">The place</p>
              <h2 className="heading-serif text-h2 text-foreground mb-5 leading-[1.4]">
                A warm Showa-era house where people connect naturally
              </h2>
              <p className="text-base text-stone-600 leading-relaxed mb-4">
                Through events and farm work at the old house,
                we create a space where people connect naturally.
              </p>
              <p className="text-base text-stone-600 leading-relaxed">
                The exchanges that grow from satoyama life gently loosen the boundaries
                between generations and backgrounds.
              </p>
            </div>

            <div className="relative aspect-[4/3] md:aspect-[3/4] w-full">
              <Image
                src="/images/IMG_5518 (2).JPEG"
                alt="People gathering at Sasabase"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-10 md:py-14 lg:py-16 bg-stone-50 border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            <div>
              <p className="label-text mb-4">Vision</p>
              <h2 className="heading-serif text-h2 text-foreground mb-5 leading-[1.4]">
                An inclusive place where you can simply be.
              </h2>
              <p className="text-base text-stone-600 leading-relaxed mb-5">
                What we are truly building is a place of belonging —
                a space where anyone can show up, at any stage of life, and find something meaningful.
              </p>
              <ul className="flex flex-col gap-3 mb-5">
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
              <p className="text-base text-stone-600 leading-relaxed">
                We believe that small, sustainable places like this — gently connected to one another —
                are how social change actually happens.
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

      {/* Education */}
      <section className="py-10 md:py-14 lg:py-16 border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            <div>
              <p className="label-text mb-4">Education</p>
              <h2 className="heading-serif text-h2 text-foreground mb-5 leading-[1.4]">
                Learning expands when school and community work together
              </h2>
              <p className="text-base text-stone-600 leading-relaxed mb-4">
                What matters is that adults recognise and respect both what can only be
                learned at school and what can only be learned in the community.
              </p>
              <p className="text-base text-stone-600 leading-relaxed">
                When school and community collaborate, children&apos;s learning
                and possibilities become richer.
              </p>
            </div>

            <div className="relative aspect-[4/3] md:aspect-[3/4] w-full">
              <Image
                src="/images/S__145113093.jpg"
                alt="Children playing in the tatami rooms of the Sasabase"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-10 md:py-14 lg:py-16 bg-stone-50 border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            <div>
              <p className="label-text mb-4">Activities</p>
              <p className="text-base text-stone-600 leading-relaxed mb-6">
                Sasabase currently runs four activities.
              </p>
              <ul className="flex flex-col gap-4">
                {activities.map((item) => (
                  <li key={item.href} className="flex items-start gap-3 text-sm text-stone-600 leading-relaxed">
                    <span className="mt-[0.35em] w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    <Link
                      href={item.href}
                      className="text-primary underline underline-offset-2 hover:opacity-70 transition-opacity"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/IMG_5829 (2).JPEG"
                alt="Terra'Co sign at Sasabase"
                fill
                className="object-contain object-center bg-stone-100"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Our belief */}
      <section className="py-10 md:py-14 lg:py-16 border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            <div>
              <p className="label-text mb-4">Our belief</p>
              <h2 className="heading-serif text-h2 text-foreground mb-5 leading-[1.4]">
                Small practices build the future
              </h2>
              <p className="text-base text-stone-600 leading-relaxed mb-4">
                Many small places, each continuing at their own pace,
                gently connecting to one another.
              </p>
              <p className="text-base text-stone-600 leading-relaxed">
                We believe that this accumulation is what generates
                new forms of learning and community.
              </p>
            </div>

            <div className="relative aspect-square w-full">
              <Image
                src="/images/IMG_4474.JPEG"
                alt="Rice fields and satoyama hills at Sasabase"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Access */}
      <section className="py-10 md:py-14 lg:py-16 bg-stone-50 border-t border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            <div>
              <p className="label-text mb-4">Access</p>
              <h2 className="heading-serif text-h2 text-foreground mb-5 leading-[1.4]">
                Getting here
              </h2>
              <p className="text-base text-stone-600 leading-relaxed mb-8">
                Sasabase is in the satoyama hills of Kawanishi — about 50 minutes from Hankyu
                Umeda by train, and just 3 minutes on foot from Sasabe Station.
                The &ldquo;convenient countryside.&rdquo;
              </p>
              <Link href="/en/access" className="btn-primary">
                Access page →
              </Link>
            </div>

            <div className="relative aspect-[4/3] md:aspect-[3/4] w-full">
              <Image
                src="/images/IMG_1589.JPEG"
                alt="Sasabe Station surrounded by satoyama hills"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-14 bg-primary border-t border-primary-600">
        <div className="container-base text-center">
          <h2 className="heading-serif text-h2 text-white mb-5 leading-[1.4]">
            Come and visit us.
          </h2>
          <p className="text-sm md:text-base text-primary-200 leading-relaxed mb-8 max-w-[40ch] mx-auto">
            If you would like to visit or take part, please feel free to get in touch.
          </p>
          <Link href="/en/contact" className="btn-outline-white">
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
