import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import VisionSection from '@/components/sections/about/VisionSection'
import FounderSection from '@/components/sections/about/FounderSection'

export const metadata: Metadata = {
  title: 'コンセプト — Learning & Local Design',
  description: 'Sasabaseのコンセプト「Learning & Local Design」。地域と教育のつながりをデザインし、川西という場所で実験を続けています。',
}

const principles = [
  {
    number: '01',
    title: '地域を教材にする',
    titleEn: 'Community as Curriculum',
    body: '農業・食・商業・文化など、地域の営みすべてが学びの素材になります。教科書の知識ではなく、生きた地域の文脈の中で学ぶことで、知識は深く根付きます。教室の外に出ることで、初めて見えてくるものがあります。',
  },
  {
    number: '02',
    title: '教育と経済をつなぐ',
    titleEn: 'Connecting Education & Economy',
    body: '学びの成果が地域経済に還元される仕組みをデザインします。6次産業教育では、農作業から加工、販売までを一貫して行い、地域の人や事業者と関わりながら、学びがそのまま地域経済に関わる形を生み出しています。',
  },
  {
    number: '03',
    title: '実験し、記録し、共有する',
    titleEn: 'Experiment, Document, Share',
    body: '試行錯誤のプロセスを丁寧に記録し、知見を社会に開いていきます。Sasabaseは「答え」を持っているのではなく、地域と共に問いを立て、実験する場です。その経験を積み重ね、広く共有することが私たちの使命です。',
  },
  {
    number: '04',
    title: '多様な参加者をつなぐ',
    titleEn: 'Building Connections',
    body: '子ども・保護者・教育者・農家・企業・研究者——異なる立場の人々が同じ場に集い、対話することで、新しいつながりと学びが生まれます。Sasabaseは、そうした出会いが起きる場でありたいと思っています。',
  },
]

export default function ConceptPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-primary-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
          aria-hidden="true"
        />
        <div className="container-base relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-amber-light/60" />
            <span className="text-amber-light text-xs font-medium tracking-label uppercase">Concept</span>
          </div>
          <h1 className="text-display font-bold text-white mb-6 tracking-jp text-balance leading-[1.2]">
            Learning &amp;<br />Local Design
          </h1>
          <p className="text-base text-white/60 tracking-wide max-w-[48ch]">
            教育と地域をつなぐ、新しい学びの設計
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <SectionHeader label="コンセプトについて" title="Learning & Local Designとは" />
              <div className="space-y-4 prose-jp">
                <p>
                  「Learning & Local Design」は、教育と地域経済のつながりを
                  デザインするSasabaseの核心的なコンセプトです。
                </p>
                <p>
                  従来の教育は、地域の産業・文化・生活から切り離された形で
                  行われることが多くありました。しかしSasabaseは問います——
                  もし地域そのものが教材であり、学びの成果が地域に還元されるとしたら？
                </p>
                <p>
                  農業（生産）と加工と販売をつなぐ「6次産業」の概念のように、
                  教育も地域経済の循環の中に位置づけることができます。
                  Sasabaseはその可能性を、川西市笹部という具体的な地域で実験しています。
                </p>
              </div>
            </div>

            {/* Diagram */}
            <div>
              <svg
                viewBox="0 0 520 380"
                className="w-full"
                aria-label="教育・地域資源・ビジネスが循環し、地域まるごとキャンパスにつながる関係図"
              >
                <defs>
                  <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0,0.5 L0,5.5 L6,3 z" fill="#c4b9b0" />
                  </marker>
                </defs>
                <path d="M 332 72 Q 468 158 448 272" stroke="#d6d3d1" strokeWidth="1.5" fill="none" markerEnd="url(#arr)" />
                <path d="M 358 308 Q 260 354 174 308" stroke="#d6d3d1" strokeWidth="1.5" fill="none" markerEnd="url(#arr)" />
                <path d="M 72 272 Q 52 158 188 72" stroke="#d6d3d1" strokeWidth="1.5" fill="none" markerEnd="url(#arr)" />
                <text x="260" y="183" textAnchor="middle" fill="#a8a29e" fontSize="11" letterSpacing="1.5" fontFamily="Georgia, serif">地域まるごと</text>
                <text x="260" y="203" textAnchor="middle" fill="#a8a29e" fontSize="11" letterSpacing="1.5" fontFamily="Georgia, serif">キャンパス</text>
                <rect x="170" y="22" width="180" height="72" rx="2" fill="white" stroke="#e7e5e4" strokeWidth="1.5" />
                <text x="260" y="52" textAnchor="middle" fill="#1c1917" fontSize="15" fontWeight="600" letterSpacing="3">教育</text>
                <text x="260" y="74" textAnchor="middle" fill="#a8a29e" fontSize="10" letterSpacing="3">Learning</text>
                <rect x="10" y="272" width="162" height="72" rx="2" fill="white" stroke="#e7e5e4" strokeWidth="1.5" />
                <text x="91" y="302" textAnchor="middle" fill="#1c1917" fontSize="15" fontWeight="600" letterSpacing="3">地域資源</text>
                <text x="91" y="323" textAnchor="middle" fill="#a8a29e" fontSize="10" letterSpacing="2">Local Resources</text>
                <rect x="348" y="272" width="162" height="72" rx="2" fill="white" stroke="#e7e5e4" strokeWidth="1.5" />
                <text x="429" y="302" textAnchor="middle" fill="#1c1917" fontSize="15" fontWeight="600" letterSpacing="3">ビジネス</text>
                <text x="429" y="323" textAnchor="middle" fill="#a8a29e" fontSize="10" letterSpacing="2">Economy</text>
              </svg>
            </div>

          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-stone-50 border-t border-border">
        <div className="container-base">
          <SectionHeader
            label="4つの原則"
            title="Learning & Local Designの考え方"
            titleEn="Core Principles"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div key={p.number} className="bg-surface rounded-xl border border-border p-7">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl font-bold text-primary/20 leading-none flex-shrink-0 font-serif">
                    {p.number}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-foreground tracking-jp leading-jp-tight">
                      {p.title}
                    </h3>
                    <p className="text-xs text-muted tracking-wide mt-1">{p.titleEn}</p>
                  </div>
                </div>
                <p className="text-sm text-stone-600 leading-jp tracking-jp">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VisionSection />

      {/* Living Laboratory */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-base">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              label="生きた実験の場"
              title="Sasabaseは実験室である"
              titleEn="A Living Laboratory"
              align="center"
              description={<>Sasabaseは答えを持った場所ではなく、問いを立て続ける実験の場です。<br />地域・教育・経済のつながりを、この場所で試し、記録し、開いていきます。</>}
            />
            <Link href="/sasabase" className="btn-primary inline-flex">
              Sasabaseについてもっと知る
            </Link>
          </div>
        </div>
      </section>

      <FounderSection />
    </>
  )
}
