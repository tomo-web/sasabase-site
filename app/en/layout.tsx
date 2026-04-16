import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Sasabase | Learning & Local Life in Rural Japan',
    template: '%s | Sasabase',
  },
  description:
    'A living campus in Kawanishi, Hyogo — where education, community, and local economy come together. Programs for international visitors, organisations, and local learners.',
  keywords: [
    'Sasabase',
    'rural Japan experience',
    'satoyama life Japan',
    'learning travel Japan',
    'place-based learning Japan',
    'farm stay rural Japan',
    'rice farming experience Japan',
    'community-based learning',
    'alternative education Japan',
    '6th sector Japan',
    'Kawanishi',
    'Hyogo',
  ],
  openGraph: {
    title: 'Sasabase | Learning & Local Life in Rural Japan',
    description:
      'A living campus in Kawanishi, Hyogo. Education, community life, and local economy — programs for international visitors, organisations, and local learners.',
    locale: 'en_US',
    type: 'website',
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
