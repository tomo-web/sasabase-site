import Image from 'next/image'
import Link from 'next/link'

const voices = {
  ja: [
    '高校のビジネスの授業で、Sasabaseで学んだマーケティング用語が出てきて、うれしかったです。',
    '卒業後は就職する予定で、いろいろな場所で就業体験をしています。Sasabaseで、チームで何かに取り組む経験ができてよかったです。',
    'これからの進路を考えているところです。1年間を通して、計算に自信が持てたのがよかったかな（笑）。',
  ],
  en: [
    'I was happy when marketing terms I had learned at Sasabase came up in my high school business class.',
    'I plan to work after graduation and am trying work placements in different places. I am glad I had the experience of working on something as a team at Sasabase.',
    'I am thinking about what to do next in my education. Over the year, I think I became more confident with calculations! (laughs)',
  ],
}

export function SchoolNews({ english = false }: { english?: boolean }) {
  return (
    <section className="border-t border-border bg-stone-50 py-10 md:py-14">
      <div className="container-base grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <p className="label-text mb-3">{english ? 'Farm to Market / News' : '「畑からマーケット」スクールからのお知らせ'}</p>
          <h2 className="heading-serif text-h3 text-foreground mb-3">{english ? 'Our first cohort has completed the programme.' : '第1期が修了。学びは、それぞれの次の一歩へ。'}</h2>
          <p className="text-sm text-stone-600 leading-relaxed">{english ? 'Read the reflections and explore the April 2027 programme, including a new primary-school course.' : '最終回の振り返りと参加者の声を紹介しています。2027年4月は、小学生コースも同時開講します。'}</p>
        </div>
        <Link href={english ? '/en/6th-sector#completion' : '/6th-sector#completion'} className="btn-primary">{english ? 'Read the update →' : '修了報告・2027年度の案内 →'}</Link>
      </div>
    </section>
  )
}

export default function SchoolUpdate({ english = false }: { english?: boolean }) {
  const lang = english ? 'en' : 'ja'
  return (
    <>
      <section id="completion" className="section-padding border-t border-border scroll-mt-[68px]">
        <div className="container-base">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="label-text mb-6">{english ? 'First cohort / Completion report' : '第1期 修了報告'}</p>
              <h2 className="heading-serif text-h2 text-foreground mb-6 leading-[1.4]">{english ? 'Beyond the sale. Thinking about what comes next.' : '売って終わりではなく、その先へ。'}</h2>
              <p className="text-base text-stone-600 leading-jp mb-5">{english ? 'The first cohort completed its final session and closing ceremony. After developing and selling rice-flour cookies, participants calculated the sales results, reflected on their experience and considered their next steps.' : '第1期は、最終回の売上計算と振り返り、そして修了式を終えました。田植えから米粉クッキーの商品企画・製造委託・販売まで取り組んだ経験を振り返り、その先を考える時間になりました。'}</p>
              <p className="text-base text-stone-600 leading-jp">{english ? 'The final session looked beyond how many products sold: comparing revenue and costs, considering the work behind each task, reviewing assumptions about customers and thinking about improvements. Participants also reflected on what they could now do and how they had worked with others.' : '最終回では、売れた数だけでなく、売上と費用の違い、仕事にかかる時間や人件費、お客さまへの仮説、次に改善できることを考えました。1年前と比べてできるようになったことや、仲間との関わりも振り返りました。'}</p>
            </div>
            <figure>
              <Image src="/images/farm-to-market-completion-2026.webp" width={1447} height={1087} alt={english ? 'Participants and facilitator at the first-cohort closing ceremony at Sasabase; participants’ faces are covered with trophy graphics' : 'Sasabaseでの第1期修了式。参加者の顔はトロフィーのイラストで覆っています'} className="w-full h-auto rounded-sm" sizes="(max-width: 1024px) 100vw, 50vw" />
              <figcaption className="text-xs text-stone-500 leading-relaxed mt-3">{english ? 'Celebrating a year of learning together at Sasabase.' : '1年間の学びを終えて。Sasabaseでの修了式のひとこま。'}</figcaption>
            </figure>
          </div>
          <div className="mt-12 md:mt-16">
            <h3 className="heading-serif text-h3 text-foreground mb-6">{english ? 'Participant voices — taking learning into the next chapter' : '参加者の声｜学びを、それぞれの次の一歩へ'}</h3>
            <div className="grid md:grid-cols-3 gap-5">
              {voices[lang].map((voice, i) => <blockquote key={i} className="border-t-2 border-primary bg-stone-50 p-6 md:p-8"><p className="text-base text-stone-700 leading-jp">{voice}</p></blockquote>)}
            </div>
            <p className="text-xs text-stone-500 mt-4 leading-relaxed">{english ? 'From reflections in the final session. Edited for publication and translated from Japanese.' : '最終回の振り返りより。掲載にあたり一部編集。'}</p>
          </div>
          <div className="mt-10 border-l-2 border-primary pl-6 max-w-3xl">
            <h3 className="heading-serif text-h3 text-foreground mb-4">{english ? 'What we are carrying into the next programme' : '次の実践へつなぐこと'}</h3>
            <p className="text-base text-stone-600 leading-jp">{english ? 'We want to support both young people’s ideas and the skills needed to make something customers will choose. The 2027 programme includes learning confectionery-making from a professional, supervised trials and opportunities for different age groups to share their ideas.' : '子どもたちが自分で考える時間と、お客さまに届けるための基礎を学ぶ時間。その両方を大切に、次の実践へつなげます。2027年度の中高生コースには、プロに菓子作りを習い、監修のもとで試作する時間を設けます。小学生とも試食や疑似マーケットを通じて学び合います。'}</p>
          </div>
        </div>
      </section>
      <section id="programme-2027" className="section-padding border-t border-border bg-stone-50 scroll-mt-[68px]">
        <div className="container-base">
          <p className="label-text mb-6">{english ? 'Starting April 2027' : '2027年4月スタート'}</p>
          <h2 className="heading-serif text-h2 text-foreground mb-6 leading-[1.4]">{english ? 'A new primary-school course. Small groups, shared learning.' : '小学生コースも、同時開講。少人数で、ともに学ぶ。'}</h2>
          <p className="text-base text-stone-600 leading-jp max-w-3xl mb-10">{english ? 'A place to build everyday capabilities through local practice: making choices, explaining ideas, sharing responsibilities and learning from results. Each course has six places per term, with time to learn across age groups and generations.' : '地域の実践を通じて、生きる力を育む、もうひとつの学びの場。自分で選び、理由を伝える。仲間と相談し、役割を担う。試した結果から次の工夫を考える。各期・各コース6名の少人数制で、地域の人や異なる世代と学び合う時間も大切にします。'}</p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <article className="bg-white border border-border p-7 md:p-9"><h3 className="heading-serif text-h3 text-foreground mb-4">{english ? 'Primary-school course' : '小学生コース'}</h3><p className="text-xs text-primary mb-4">{english ? 'For primary-school children, mainly Years 5–6' : '小学生対象（5・6年生中心）'}</p><p className="text-base text-stone-600 leading-jp">{english ? 'Explore farming and local food, then plan a shop using rice balls and vegetables. Practise sourcing, pricing and serving customers with simulated currency in a mock market.' : '農作業や生産者の話から、食と地域を学びます。おにぎりや野菜を疑似通貨で仕入れ、品ぞろえ・値段・接客を考え、自分たちのお店を開きます。'}</p></article>
            <article className="bg-white border border-border p-7 md:p-9"><h3 className="heading-serif text-h3 text-foreground mb-4">{english ? 'Junior and senior high-school course' : '中高生コース'}</h3><p className="text-xs text-primary mb-4">{english ? 'For junior and senior high-school students' : '中学生・高校生対象'}</p><p className="text-base text-stone-600 leading-jp">{english ? 'Learn confectionery-making from a professional and develop a product through supervised trials. Research customers, work on costs and pricing, sell at a local market and reflect on the results.' : 'プロに菓子作りを習い、監修のもと試作します。お客さまを調べ、原価・商品・値付けを考え、地域のマルシェで販売。その結果から次の工夫を考えます。'}</p></article>
          </div>
          <div className="bg-white border border-border p-7 md:p-10">
            <h3 className="heading-serif text-h3 text-foreground mb-6">{english ? '2027 programme details' : '2027年度 開催概要'}</h3>
            <dl className="grid md:grid-cols-[9rem_1fr] gap-x-8 gap-y-5 text-sm leading-jp text-stone-600">
              <dt className="font-medium text-foreground">{english ? 'Terms' : '開催期間'}</dt><dd>{english ? 'Spring–summer: April–September 2027. Autumn–winter: October 2027–March 2028. Six sessions per term.' : '春夏期：2027年4〜9月／秋冬期：2027年10月〜2028年3月。各期全6回。'}</dd>
              <dt className="font-medium text-foreground">{english ? 'Time' : '時間'}</dt><dd>{english ? 'Usually the second Saturday, 10:30–14:30, including a 60-minute lunch break. First session: 10 April 2027.' : '原則第2土曜日 10:30〜14:30（昼休憩60分）。春夏期の初回は4月10日です。'}</dd>
              <dt className="font-medium text-foreground">{english ? 'Places' : '定員'}</dt><dd>{english ? 'Six participants per course, per term. Shared farming, tasting and mock-market activities connect the age groups; tasting is optional.' : '各期・各コース6名。農作業・合同試食・疑似マーケットなどで、学年や世代をこえて学び合います。試食は任意です。'}</dd>
              <dt className="font-medium text-foreground">{english ? 'Pilot fee' : '参加費'}</dt><dd><strong className="text-lg text-primary">{english ? '¥12,000 per person for six sessions, per term' : 'お一人・各期 全6回 12,000円'}</strong><p className="mt-2">{english ? 'Includes teaching materials. Ingredient costs may be charged separately at cost. Apply for all six sessions together and pay before the first session.' : '教材費込み。材料費を実費でお願いする場合があります。各期全6回を一括でお申し込みのうえ、初回までにお支払いください。'}</p><p className="mt-2">{english ? 'The programme remains a pilot in 2027. Details and fees for 2028 onwards will be announced after reviewing the programme.' : '2027年度もパイロット実施を継続します。2028年度以降の実施内容・参加費は、実践を踏まえて改めてご案内します。'}</p></dd>
              <dt className="font-medium text-foreground">{english ? 'Sales practice' : '中高生の販売実習'}</dt><dd>{english ? 'One additional market day is planned before the final joint session each term. Primary-school participants attend six days; high-school participants attend seven days including sales practice. The market date, venue and conditions will be announced when confirmed.' : '各期の最終合同回より前に、別日のマルシェ販売実習を1日予定しています。小学生は各期6日間、中高生は販売実習を含め各期7日間です。販売実習の日程・会場・詳しい条件は決定後にご案内します。'}</dd>
              <dt className="font-medium text-foreground">{english ? 'Venue' : '会場'}</dt><dd>{english ? 'Sasabase and nearby fields, 3-5-4 Sasabe, Kawanishi, Hyogo. About three minutes on foot from Sasabe Station.' : 'Sasabaseと周辺の田畑（兵庫県川西市笹部3-5-4）。能勢電鉄笹部駅から徒歩約3分。'}</dd>
            </dl>
            <p className="text-xs text-stone-500 leading-relaxed mt-6">{english ? 'Dates and activities may change with weather, seasons and crop conditions. The Japanese schedule PDF includes all dates and cancellation terms.' : '内容・日程は変更する場合があります。農作業は季節・天候・作物の状況に合わせます。全日程とキャンセル・欠席の取り扱いは日程別紙をご確認ください。'}</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
              <Link href={english ? '/en/contact?subject=sixth-sector' : '/contact?subject=sixth-sector'} className="btn-primary">{english ? 'Ask about joining' : '参加のご相談・お問い合わせ'}</Link>
              <a href="/downloads/farm-to-market-2027-schedule.pdf" className="btn-ghost" target="_blank" rel="noopener noreferrer">{english ? 'Schedule & terms (Japanese PDF) ↗' : '開催日程・参加条件を見る（PDF）↗'}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
