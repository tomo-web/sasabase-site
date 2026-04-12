import Link from 'next/link'

export default function ArchivePreview() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-base">

        <div className="mb-14">
          <p className="label-text mb-4">実践ログ</p>
          <Link href="/archive">
            <h2 className="heading-serif text-h2 text-foreground hover:opacity-70 transition-opacity">
              学びのラボノート
            </h2>
          </Link>
        </div>

        <div className="text-center max-w-[48ch] mx-auto">
          <p className="text-sm text-stone-500 leading-jp tracking-jp">
            Sasabaseで生まれる実践や学びの試みを、
            <br className="hidden sm:block" />
            少しずつ記録していきます。
          </p>
          <p className="text-sm text-stone-500 leading-jp tracking-jp mt-3">
            現在は準備中ですが、ぜひまた訪れてください。
          </p>
        </div>

      </div>
    </section>
  )
}
