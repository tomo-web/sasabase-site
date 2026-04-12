import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

const usages = [
  { icon: '📚', label: '学習・研修' },
  { icon: '🎨', label: 'ワークショップ' },
  { icon: '🤝', label: '会議・打ち合わせ' },
  { icon: '📷', label: '撮影' },
  { icon: '🎉', label: 'イベント・交流会' },
  { icon: '🌿', label: '自然体験' },
]

export default function SpaceSection() {
  return (
    <section className="section-padding bg-background border-t border-border">
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <SectionHeader
              label="スペース貸し"
              labelEn="Space Rental"
              title="古民家の空間を、あなたの活動に"
              titleEn="Use the Space for Your Activities"
              description="Sasabaseの古民家スペースは、学習・研修・ワークショップ・撮影など、多様な目的でご利用いただけます。"
            />

            {/* Usage tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {usages.map((u) => (
                <span
                  key={u.label}
                  className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-700 text-xs px-3 py-1.5 rounded-full tracking-jp border border-stone-200"
                >
                  <span>{u.icon}</span>
                  {u.label}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {[
                '古民家ならではの温かみのある空間',
                '川西の自然に囲まれた落ち着いた環境',
                '最大○名収容（要問い合わせ）',
                '利用者向け紹介ページの作成サポート（オプション）',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-stone-600 tracking-jp leading-jp">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/space" className="btn-primary">
                スペースの詳細を見る
              </Link>
              <Link href="/contact" className="btn-ghost group text-sm">
                見学・問い合わせ
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-4">
              <ImagePlaceholder
                label="メインホール"
                aspectRatio="portrait"
                variant="green"
                className="col-span-1"
              />
            </div>
            <div className="grid gap-4 pt-8">
              <ImagePlaceholder
                label="縁側・庭"
                aspectRatio="square"
                variant="stone"
              />
              <ImagePlaceholder
                label="和室"
                aspectRatio="square"
                variant="amber"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
