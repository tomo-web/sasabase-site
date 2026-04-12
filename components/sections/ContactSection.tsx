'use client'

import Link from 'next/link'
import { useState, FormEvent } from 'react'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    // Placeholder: integrate with your form backend here
    await new Promise((r) => setTimeout(r, 1000))
    setSending(false)
    setSubmitted(true)
  }

  return (
    <section className="section-padding bg-primary-50 border-t border-border">
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">
          {/* Left info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-primary/50" />
              <span className="label-text">お問い合わせ</span>
            </div>
            <h2 className="text-h2 font-bold text-foreground mb-4 leading-jp-tight tracking-jp">
              気軽にご連絡ください
            </h2>
            <p className="text-sm text-muted tracking-wide mb-8">Contact / Inquiry</p>
            <div className="space-y-4 text-sm text-stone-600 leading-jp tracking-jp mb-10">
              <p>
                プログラムへの参加、スペースのご利用、取材・視察など、
                どんなことでもお気軽にご連絡ください。
              </p>
              <p>
                通常3営業日以内にご返信します。お待たせしません。
              </p>
            </div>
            {/* Social links */}
            <div className="space-y-3">
              <p className="text-xs font-medium text-muted tracking-label uppercase">SNS</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-sm text-stone-600 hover:text-primary transition-colors tracking-jp"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-sm text-stone-600 hover:text-primary transition-colors tracking-jp"
                >
                  Facebook
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <Link href="/contact" className="btn-ghost group text-sm">
                お問い合わせページへ
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Form */}
          <div className="bg-surface rounded-xl border border-border p-7 md:p-9 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-lg font-bold text-foreground tracking-jp mb-3">
                  送信が完了しました
                </h3>
                <p className="text-sm text-muted tracking-jp leading-jp">
                  お問い合わせありがとうございます。
                  <br />
                  3営業日以内にご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-foreground tracking-jp mb-1.5"
                    >
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-2.5 text-sm border border-border rounded-md bg-background
                                 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
                                 tracking-jp transition-colors"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-foreground tracking-jp mb-1.5"
                    >
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-2.5 text-sm border border-border rounded-md bg-background
                                 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
                                 tracking-jp transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium text-foreground tracking-jp mb-1.5"
                  >
                    お問い合わせの種類
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2.5 text-sm border border-border rounded-md bg-background
                               focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
                               tracking-jp transition-colors"
                  >
                    <option value="">選択してください</option>
                    <option value="programs">プログラムについて</option>
                    <option value="space">スペース貸しについて</option>
                    <option value="terraco">Terra&apos;Coについて</option>
                    <option value="visit">見学・視察</option>
                    <option value="media">取材・メディア</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-foreground tracking-jp mb-1.5"
                  >
                    メッセージ <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 text-sm border border-border rounded-md bg-background
                               focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
                               tracking-jp transition-colors resize-none leading-jp"
                    placeholder="ご質問・ご要望をご記入ください"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? '送信中...' : '送信する'}
                </button>

                <p className="text-[10px] text-muted text-center tracking-jp leading-jp">
                  送信いただいた情報は、お問い合わせへの返答のみに使用します。
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
