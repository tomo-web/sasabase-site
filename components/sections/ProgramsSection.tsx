import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

const programs = [
  {
    id: 'sixth-sector',
    tag: 'プログラム 01',
    title: '6次産業学校',
    titleEn: '6th Sector School',
    description:
      '農業（生産）×加工×販売の一体的なサイクルを体験する学習プログラムです。地域の農家や事業者と連携しながら、作ることと売ることの両方を実践的に学びます。小学生から大人まで参加できます。',
    href: '/programs#sixth-sector',
    variant: 'green' as const,
  },
  {
    id: 'corporate',
    tag: 'プログラム 02',
    title: '企業研修',
    titleEn: 'Corporate Training',
    description:
      '川西の自然と地域資源を活用した、フィールド型の企業向け研修プログラムです。チームビルディング、SDGs、地域共生など、現代企業が必要とするテーマに対応しています。',
    href: '/programs#corporate',
    variant: 'amber' as const,
  },
  {
    id: 'immersive',
    tag: 'プログラム 03',
    title: '滞在型プログラム',
    titleEn: 'Immersive Stay Program',
    description:
      '数日間、Sasabaseに滞在しながら地域の生活に溶け込む体験型プログラムです。農作業、料理、地域の人々との交流を通じて、教育と地域のつながりを実感します。',
    href: '/programs#immersive',
    variant: 'stone' as const,
  },
  {
    id: 'support',
    tag: 'プログラム 04',
    title: '学習・居場所支援',
    titleEn: 'Learning & Belonging Support',
    description:
      '大学院生によるチュータリング、Kubiロボットを活用したリモート参加支援、Terra\'Coとの連携、保護者へのコンサルテーションなど、多様な学び方を支援します。',
    href: '/programs#support',
    variant: 'green' as const,
  },
]

export default function ProgramsSection() {
  return (
    <section className="section-padding bg-background border-t border-border">
      <div className="container-base">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
          <SectionHeader
            label="プログラム"
            labelEn="Programs"
            title="地域で学ぶ、4つのプログラム"
            titleEn="Learning Programs"
            className="mb-0"
          />
          <Link
            href="/programs"
            className="btn-ghost text-sm flex-shrink-0 group"
          >
            すべてのプログラムを見る
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {programs.map((prog) => (
            <Link
              key={prog.id}
              href={prog.href}
              className="group border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col bg-surface"
            >
              <ImagePlaceholder
                label={prog.title}
                aspectRatio="video"
                variant={prog.variant}
                className="rounded-none"
              />
              <div className="p-6 flex flex-col flex-1">
                <span className="label-text mb-3 block">{prog.tag}</span>
                <h3 className="text-lg font-bold text-foreground tracking-jp mb-1 leading-jp-tight">
                  {prog.title}
                </h3>
                <p className="text-xs text-muted tracking-wide mb-4">{prog.titleEn}</p>
                <p className="text-sm text-stone-600 leading-jp tracking-jp flex-1">
                  {prog.description}
                </p>
                <div className="mt-5 pt-4 border-t border-border/60 flex items-center gap-1.5 text-xs font-medium text-primary">
                  詳しく見る
                  <svg
                    className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
