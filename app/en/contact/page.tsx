'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'

const subjectLabels: Record<string, string> = {
  'terraco': "Terra'Co Community Learning",
  'alternative': 'Alternative Learning Support',
  'sixth-sector': '6th-Sector School',
  'stay': 'Farm Stay / Regional Immersion',
  'corporate': 'Corporate Training',
  'collaboration': 'Project Collaboration',
  'visit': 'Visit / Site Tour',
  'media': 'Media / Research',
  'other': 'Other',
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mlgarjnr'

export default function EnContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = e.currentTarget
    const data = new FormData(form)

    const subjectValue = data.get('subject') as string
    const subjectLabel = subjectLabels[subjectValue] ?? subjectValue
    data.set('subject', subjectLabel)
    data.set('_subject', `[Sasabase Enquiry] ${subjectLabel}`)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        const json = await res.json().catch(() => ({}))
        setError(json?.error ?? 'Something went wrong. Please try again in a moment.')
      }
    } catch {
      setError('A network error occurred. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-50 border-b border-border py-16 md:py-24">
        <div className="container-base">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary/50" />
            <span className="label-text">Contact</span>
          </div>
          <h1 className="heading-serif text-h1 text-foreground mb-4 leading-[1.25]">
            Get in touch
          </h1>
          <p className="text-base text-muted tracking-wide mb-4">Contact / Inquiry</p>
          <p className="text-base text-stone-600 leading-relaxed max-w-[52ch]">
            Whether you want to visit, join a program, explore a collaboration, or simply learn more
            about what we do — we&apos;d love to hear from you.
            We typically respond within three business days.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-sm font-bold text-foreground mb-5">
                  Common enquiries
                </h2>
                <div className="space-y-3">
                  {[
                    { icon: '🌱', label: 'Programs & Learning', href: '/en/experience#learn' },
                    { icon: '🏡', label: 'Farm Stay & Visits', href: '/en/experience#stay' },
                    { icon: '🤝', label: 'Corporate Training', href: '/en/experience#create' },
                    { icon: '📍', label: 'Access & Getting Here', href: '/access' },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 bg-stone-50 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/4 transition-all text-sm text-stone-700 group"
                    >
                      <span>{item.icon}</span>
                      {item.label}
                      <svg className="w-3.5 h-3.5 ml-auto text-muted group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sm font-bold text-foreground mb-4">Find us online</h2>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/sasabasers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-stone-600 hover:text-primary transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>

              <div className="bg-stone-50 border border-border rounded-xl p-6">
                <h2 className="text-sm font-bold text-foreground mb-3">Access</h2>
                <p className="text-sm text-stone-600 leading-relaxed mb-1">
                  Sasabase is in Sasabe, Kawanishi, Hyogo.
                </p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  ~50 min from Osaka (Hankyu line) · 3 min walk from Sasabe Station.
                </p>
                <Link href="/access" className="text-xs text-primary hover:opacity-70 transition-opacity mt-3 inline-block">
                  Full directions →
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-surface rounded-xl border border-border p-8 md:p-10 shadow-sm">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="text-5xl mb-6">✉️</div>
                    <h3 className="text-lg font-bold text-foreground mb-4">
                      Message received — thank you!
                    </h3>
                    <p className="text-sm text-muted leading-relaxed max-w-[36ch] mx-auto">
                      We&apos;ll review your message and get back to you within three business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-foreground mb-2">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name" name="name" type="text" required
                          className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="organization" className="block text-xs font-medium text-foreground mb-2">
                          Organisation (optional)
                        </label>
                        <input
                          id="organization" name="organization" type="text"
                          className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          placeholder="Company / school / NGO"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-foreground mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email" required
                        className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-medium text-foreground mb-2">
                        Topic <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject" name="subject" required
                        className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      >
                        <option value="">Select a topic</option>
                        <option value="terraco">Terra&apos;Co Community Learning</option>
                        <option value="alternative">Alternative Learning Support</option>
                        <option value="sixth-sector">6th-Sector School</option>
                        <option value="stay">Farm Stay / Regional Immersion</option>
                        <option value="corporate">Corporate Training</option>
                        <option value="collaboration">Project Collaboration</option>
                        <option value="visit">Visit / Site Tour</option>
                        <option value="media">Media / Research</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-foreground mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message" name="message" required rows={5}
                        className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none leading-relaxed"
                        placeholder="Tell us what you have in mind — we're happy to answer questions or explore ideas together."
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full btn-primary justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Sending…' : 'Send message'}
                    </button>

                    <p className="text-[11px] text-muted text-center leading-relaxed">
                      Your information is used solely to respond to your enquiry and will not be shared with third parties.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
