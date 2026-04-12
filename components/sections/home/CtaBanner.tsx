import Link from 'next/link'

export default function CtaBanner() {
  return (
    <section className="section-padding bg-primary border-t border-primary-600">
      <div className="container-base text-center">

        <p className="text-xs text-primary-200 tracking-label uppercase mb-6">
          Contact
        </p>

        <h2 className="heading-serif text-h1 text-white mb-6 text-balance leading-[1.4]">
          一緒に、実験しませんか。
        </h2>

        <p className="text-sm md:text-base text-primary-200 leading-jp tracking-jp mb-3 max-w-[40ch] mx-auto">
          企業研修・教育プログラム・不登校支援・地域プロジェクトなど、
          関わり方はさまざまです。
        </p>
        <p className="text-sm md:text-base text-primary-200 leading-jp tracking-jp mb-10 max-w-[40ch] mx-auto">
          まずは「知る」ことからでも大丈夫です。
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Link href="/#what-we-do" className="btn-outline-white">
            プログラムを見る
          </Link>
          <Link href="/contact" className="btn-outline-white">
            お問い合わせ
          </Link>
        </div>

        <a
          href="https://www.instagram.com/sasabasers/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-200 hover:text-white transition-colors tracking-jp"
        >
          Instagram →
        </a>

      </div>
    </section>
  )
}
