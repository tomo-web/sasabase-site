import Link from 'next/link'

export default function AccessSection() {
  return (
    <section className="section-padding bg-background border-t border-border">
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-primary/50" />
              <span className="label-text">アクセス</span>
            </div>
            <h2 className="text-h2 font-bold text-foreground mb-6 leading-jp-tight tracking-jp">
              Sasabaseへのアクセス
            </h2>
            <p className="text-sm text-muted tracking-wide mb-10">
              Kawanishi, Hyogo — How to reach us
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: '📍',
                  label: '住所',
                  value: '〒666-XXXX 兵庫県川西市○○町○-○',
                  sub: 'Kawanishi, Hyogo, Japan',
                },
                {
                  icon: '🚃',
                  label: '電車でお越しの方',
                  value: '阪急川西能勢口駅 / JR川西池田駅 より徒歩約○分、またはバスにて○分',
                  sub: '詳細なルートはお問い合わせください',
                },
                {
                  icon: '🚗',
                  label: 'お車でお越しの方',
                  value: '無料駐車場あり（○台）',
                  sub: '国道173号線から○分',
                },
                {
                  icon: '🕐',
                  label: '開放時間',
                  value: '月曜〜土曜 10:00〜18:00（イベント時は変動あり）',
                  sub: 'スペース利用は要予約',
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/8 flex items-center justify-center text-base flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted tracking-jp mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-foreground tracking-jp leading-jp-tight">
                      {item.value}
                    </p>
                    {item.sub && (
                      <p className="text-xs text-muted tracking-jp mt-0.5">{item.sub}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/access" className="btn-primary">
                アクセス詳細ページへ
              </Link>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="lg:pt-16">
            <div
              className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-border bg-stone-100 relative flex items-center justify-center"
              aria-label="地図（準備中）"
            >
              {/* Grid lines for map feel */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(100,120,100,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(100,120,100,0.12) 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                }}
              />
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'radial-gradient(ellipse at 55% 45%, #b0d5ba 0%, transparent 60%)',
                }}
              />
              {/* Pin */}
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-3">📍</div>
                <div className="bg-white/90 backdrop-blur-sm px-5 py-3 rounded-lg shadow-md border border-border/60">
                  <p className="text-xs font-bold text-foreground tracking-jp">Sasabase</p>
                  <p className="text-[10px] text-muted mt-0.5 tracking-jp">川西市 · 兵庫</p>
                </div>
              </div>
              {/* Label */}
              <div className="absolute bottom-4 right-4 bg-white/80 text-[10px] text-muted px-3 py-1.5 rounded tracking-jp border border-border/40">
                地図は準備中です
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
