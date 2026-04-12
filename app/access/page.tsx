import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'アクセス',
  description: 'Sasabaseへのアクセス情報。兵庫県川西市。電車・バス・お車でのルート案内と開放時間をご確認いただけます。',
}

export default function AccessPage() {
  return (
    <>
      <section className="bg-stone-50 border-b border-border py-16 md:py-24">
        <div className="container-base">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary/50" />
            <span className="label-text">Access</span>
          </div>
          <h1 className="text-h1 font-bold text-foreground mb-4 tracking-jp">アクセス</h1>
          <p className="text-base text-muted tracking-wide mb-4">How to Reach Sasabase — Kawanishi, Hyogo</p>
          <p className="prose-jp">里山でありながら、電車でアクセスできる「便利な田舎」です。</p>
        </div>
      </section>

      {/* Map — full width */}
      <section className="bg-background border-b border-border">
        <div className="container-base py-10 md:py-14">
          <div className="mb-5">
            <p className="text-xs font-medium tracking-label text-muted mb-2">所在地</p>
            <p className="text-base font-medium text-foreground tracking-jp">
              〒666-0104 兵庫県川西市笹部3-5-4
            </p>
            <p className="text-sm text-muted tracking-wide mt-0.5">Kawanishi, Hyogo, Japan</p>
          </div>

          <div className="w-full rounded-xl overflow-hidden border border-border shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=兵庫県川西市笹部3-5-4&output=embed&hl=ja&z=16"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sasabase — 兵庫県川西市笹部3-5-4"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            {/* Info */}
            <div className="space-y-8">
              {/* Train */}
              <div>
                <h2 className="text-sm font-bold text-foreground tracking-jp mb-4 flex items-center gap-2">
                  <span>🚃</span> 電車でお越しの方
                </h2>
                <p className="text-sm text-stone-600 tracking-jp leading-jp mb-4">
                  阪急梅田駅またはJR大阪駅から約50分。
                </p>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <p className="text-sm font-medium text-foreground tracking-jp leading-jp">
                        阪急梅田駅 →（宝塚線）→ 川西能勢口駅
                      </p>
                      <p className="text-xs text-muted tracking-jp mt-0.5">
                        または JR大阪駅 →（福知山線）→ 川西池田駅
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <p className="text-sm font-medium text-foreground tracking-jp leading-jp">
                        能勢電鉄に乗り換え
                      </p>
                      <p className="text-xs text-muted tracking-jp mt-0.5">
                        山下駅で妙見線に乗り換え → 笹部駅へ（1駅）
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <p className="text-sm font-medium text-foreground tracking-jp leading-jp">
                        笹部駅下車後、徒歩約3分
                      </p>
                      <p className="text-xs text-muted tracking-jp mt-0.5">
                        山側へ歩き、橋を渡って左へ
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Car */}
              <div>
                <h2 className="text-sm font-bold text-foreground tracking-jp mb-4 flex items-center gap-2">
                  <span>🚗</span> お車でお越しの方
                </h2>
                <p className="text-sm text-stone-600 tracking-jp leading-jp mb-4">
                  大阪市内から約1時間。ナビで「兵庫県川西市笹部3-5-4」と入力してください。
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    '笹部駅周辺までは問題なくお越しいただけますが、最後の道はやや細くなりますので、ゆっくりお進みください。',
                    '駐車スペースは2〜3台分ございますが、数に限りがあります。利用者同士で譲り合ってご利用ください。',
                    '満車の場合は、山下駅前のコインパーキングをご利用ください。山下駅からは裏道を通って徒歩約6分です。',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-[7px] flex-shrink-0" />
                      <span className="text-sm text-stone-600 tracking-jp leading-jp">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="btn-primary inline-flex">
                見学・訪問のお申し込み
              </Link>
            </div>

            {/* Surrounding area */}
            <div className="sticky top-24 bg-surface border border-border rounded-xl p-6">
              <h3 className="text-xs font-bold text-foreground tracking-jp mb-3 uppercase tracking-label">
                周辺について
              </h3>
              <p className="text-sm text-stone-600 leading-jp tracking-jp">
                笹部は川西市北部の里山エリア。
                能勢電鉄の終点に近い静かな集落で、
                棚田や古民家が残るのどかな風景が広がっています。
                大阪中心部から電車一本でアクセスできる、便利な田舎です。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
