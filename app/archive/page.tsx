import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '実践ログ — 学びのラボノート',
  description: 'Sasabaseで生まれる実践や学びの試みを、少しずつ記録していきます。',
}

export default function ArchivePage() {
  return (
    <>
      <section className="section-padding border-b border-border">
        <div className="container-base">
          <p className="label-text mb-6">実践ログ</p>
          <h1 className="heading-serif text-display text-foreground mb-8 text-balance leading-[1.25]">
            学びのラボノート
          </h1>
          <p className="text-base md:text-lg text-stone-500 leading-jp tracking-jp max-w-[44ch]">
            Sasabaseで生まれる実践や学びの試みを、
            少しずつ記録していきます。
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base">
          <p className="text-sm text-stone-400 leading-jp tracking-jp">
            現在は準備中ですが、ぜひまた訪れてください。
          </p>
        </div>
      </section>
    </>
  )
}
