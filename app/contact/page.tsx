'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'

const subjectLabels: Record<string, string> = {
  'sixth-sector': '6次産業スクールについて',
  'corporate': '企業研修について',
  'support': '不登校・学習支援について',
  'terraco': "多世代寺子屋 Terra'Coについて",
  'stay': '滞在体験について',
  'sasamai': '米づくり・笹米クラブについて',
  'space': 'スペース貸しについて',
  'visit': '見学・視察について',
  'media': '取材・メディアについて',
  'other': 'その他',
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mlgarjnr'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = e.currentTarget
    const data = new FormData(form)

    // お問い合わせ種別を日本語ラベルに変換
    const subjectValue = data.get('subject') as string
    const subjectLabel = subjectLabels[subjectValue] ?? subjectValue
    data.set('subject', subjectLabel)

    // Formspree のメール件名
    data.set('_subject', `【Sasabaseお問い合わせ】${subjectLabel}`)

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
        setError(json?.error ?? '送信に失敗しました。時間をおいて再度お試しください。')
      }
    } catch {
      setError('ネットワークエラーが発生しました。接続を確認して再度お試しください。')
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
          <h1 className="text-h1 font-bold text-foreground mb-4 tracking-jp">お問い合わせ</h1>
          <p className="text-base text-muted tracking-wide mb-4">Contact / Inquiry</p>
          <p className="prose-jp">
            プログラムへの参加、スペースのご利用、見学・取材など、
            どんなことでもお気軽にご連絡ください。
            通常3営業日以内にご返信いたします。
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-sm font-bold text-foreground tracking-jp mb-5">
                  よくお問い合わせいただく内容
                </h2>
                <div className="space-y-3">
                  {[
                    { icon: '🌾', label: 'プログラムについて', href: '/#what-we-do' },
                    { icon: '🏠', label: 'スペース貸しについて', href: '/space' },
                    { icon: '🌾', label: '米づくり・笹米クラブ', href: '/activities' },
                    { icon: '📍', label: 'アクセス・見学', href: '/access' },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 bg-stone-50 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/4 transition-all text-sm text-stone-700 tracking-jp group"
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
                <h2 className="text-sm font-bold text-foreground tracking-jp mb-4">SNS</h2>
                <div className="flex gap-3">
                  <a href="#" className="text-sm text-stone-600 hover:text-primary tracking-jp transition-colors">Instagram</a>
                  <a href="#" className="text-sm text-stone-600 hover:text-primary tracking-jp transition-colors">Facebook</a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-surface rounded-xl border border-border p-8 md:p-10 shadow-sm">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="text-5xl mb-6">✉️</div>
                    <h3 className="text-lg font-bold text-foreground tracking-jp mb-4">
                      お問い合わせを受け付けました
                    </h3>
                    <p className="text-sm text-muted tracking-jp leading-jp max-w-[36ch] mx-auto">
                      ありがとうございます。内容を確認の上、
                      3営業日以内にご連絡いたします。
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-foreground tracking-jp mb-2">
                          お名前 <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name" name="name" type="text" required
                          className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary tracking-jp transition-colors"
                          placeholder="山田 太郎"
                        />
                      </div>
                      <div>
                        <label htmlFor="organization" className="block text-xs font-medium text-foreground tracking-jp mb-2">
                          所属・団体名
                        </label>
                        <input
                          id="organization" name="organization" type="text"
                          className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary tracking-jp transition-colors"
                          placeholder="○○小学校 / 株式会社○○"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-foreground tracking-jp mb-2">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email" required
                        className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary tracking-jp transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-medium text-foreground tracking-jp mb-2">
                        お問い合わせの種類 <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject" name="subject" required
                        className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary tracking-jp transition-colors"
                      >
                        <option value="">選択してください</option>
                        <option value="sixth-sector">6次産業スクールについて</option>
                        <option value="corporate">企業研修について</option>
                        <option value="support">不登校・学習支援について</option>
                        <option value="terraco">多世代寺子屋 Terra&apos;Coについて</option>
                        <option value="stay">滞在体験について</option>
                        <option value="sasamai">米づくり・笹米クラブについて</option>
                        <option value="space">スペース貸しについて</option>
                        <option value="visit">見学・視察について</option>
                        <option value="media">取材・メディアについて</option>
                        <option value="other">その他</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-foreground tracking-jp mb-2">
                        メッセージ <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message" name="message" required rows={5}
                        className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary tracking-jp transition-colors resize-none leading-jp"
                        placeholder="ご質問・ご要望をご自由にお書きください"
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 tracking-jp">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full btn-primary justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? '送信中...' : '送信する'}
                    </button>

                    <p className="text-[11px] text-muted text-center tracking-jp leading-jp">
                      送信いただいた情報は、お問い合わせへの返答のみに使用し、第三者に提供することはありません。
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
