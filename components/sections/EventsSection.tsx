import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'

const events = [
  {
    id: 1,
    type: 'イベント',
    date: '2024年11月30日',
    title: '田んぼの学校 — 収穫祭2024',
    description:
      'ささ米クラブの今年の収穫を祝う収穫祭。脱穀体験、地域の食材を使った料理、子どもたちの展示発表があります。',
    href: '/events/harvest-2024',
  },
  {
    id: 2,
    type: 'お知らせ',
    date: '2024年11月15日',
    title: 'スペース貸し 新料金プランのご案内',
    description:
      '2025年1月より、非営利・教育目的での利用を対象とした新しい料金プランを開始します。詳細はスペースページをご覧ください。',
    href: '/events/space-pricing-2025',
  },
  {
    id: 3,
    type: 'レポート',
    date: '2024年11月1日',
    title: '6次産業学校 秋学期 活動レポート',
    description:
      'さつまいもの収穫と加工体験、地域マルシェでの販売まで——今学期の6次産業学校の活動をまとめました。',
    href: '/events/sixth-sector-report-autumn-2024',
  },
]

const typeColors: Record<string, string> = {
  イベント: 'bg-primary/10 text-primary',
  お知らせ: 'bg-amber-50 text-amber',
  レポート: 'bg-stone-100 text-stone-600',
}

export default function EventsSection() {
  return (
    <section className="section-padding bg-stone-50 border-t border-border">
      <div className="container-base">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <SectionHeader
            label="イベント・お知らせ"
            labelEn="Events & News"
            title="最新の活動情報"
            className="mb-0"
          />
          <Link href="/events" className="btn-ghost group text-sm flex-shrink-0">
            すべての投稿を見る
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {events.map((event) => (
            <Link
              key={event.id}
              href={event.href}
              className="group bg-surface rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-[10px] font-medium tracking-label px-2.5 py-1 rounded-full ${typeColors[event.type] ?? 'bg-stone-100 text-stone-600'}`}
                >
                  {event.type}
                </span>
                <time className="text-xs text-muted tracking-jp">{event.date}</time>
              </div>
              <h3 className="text-sm font-bold text-foreground tracking-jp leading-jp-tight mb-3 group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              <p className="text-xs text-stone-500 leading-[1.9] tracking-jp flex-1">
                {event.description}
              </p>
              <div className="mt-5 pt-4 border-t border-border/60 flex items-center gap-1.5 text-xs font-medium text-primary">
                続きを読む
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
