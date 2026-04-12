import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export default function ActivitiesSection() {
  return (
    <section className="section-padding bg-stone-50 border-t border-border">
      <div className="container-base">
        <SectionHeader
          label="活動"
          labelEn="Activities"
          title="Sasabaseの日常的な活動"
          titleEn="Community Activities"
          description="プログラムとは別に、Sasabaseには地域に根ざした日常の活動があります。"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Terra'Co */}
          <div
            id="terraco"
            className="bg-surface rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <ImagePlaceholder
              label="Terra'Co — 多世代の学び場"
              aspectRatio="video"
              variant="green"
              className="rounded-none"
            />
            <div className="p-7">
              <span className="label-text block mb-3">活動 01</span>
              <h3 className="text-xl font-bold text-foreground tracking-jp mb-1 leading-jp-tight">
                Terra&apos;Co
              </h3>
              <p className="text-xs text-muted tracking-wide mb-4">
                Multi-generational Learning Space
              </p>
              <div className="space-y-3 text-sm text-stone-600 leading-jp tracking-jp mb-6">
                <p>
                  テラコは、子どもから大人まで多世代が集まるSasabaseの日常的な学び場です。
                  放課後の学習支援、地域の大人によるワークショップ、
                  料理や工作、読書の場など、多様な活動が日々行われています。
                </p>
                <p>
                  「居場所」であり「学び場」でもあるテラコは、
                  地域の人々が気軽に立ち寄れる開かれた場所として運営されています。
                </p>
              </div>
              <Link href="/activities#terraco" className="btn-ghost group text-sm">
                Terra&apos;Coについて詳しく
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Sasamai Club */}
          <div
            id="sasamai"
            className="bg-surface rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <ImagePlaceholder
              label="ささ米クラブ — 米づくりと食の学び"
              aspectRatio="video"
              variant="amber"
              className="rounded-none"
            />
            <div className="p-7">
              <span className="label-text block mb-3">活動 02</span>
              <h3 className="text-xl font-bold text-foreground tracking-jp mb-1 leading-jp-tight">
                ささ米クラブ
              </h3>
              <p className="text-xs text-muted tracking-wide mb-4">
                Sasamai Club — Rice &amp; Food Learning
              </p>
              <div className="space-y-3 text-sm text-stone-600 leading-jp tracking-jp mb-6">
                <p>
                  ささ米クラブは、米づくりを軸にした食と農の学習活動です。
                  田植えから収穫まで、地域の農家と一緒に稲作の一年を体験します。
                </p>
                <p>
                  収穫した米は「ささ米」として地域で流通させるほか、
                  調理や加工を通じて食の学びへとつなげています。
                  子ども連れのご家族にも人気のプログラムです。
                </p>
              </div>
              <Link href="/activities#sasamai" className="btn-ghost group text-sm">
                ささ米クラブについて詳しく
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
