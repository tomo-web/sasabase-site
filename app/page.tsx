import Hero from '@/components/sections/home/Hero'
import Intro from '@/components/sections/home/Intro'
import AudienceNav from '@/components/sections/home/AudienceNav'
import WhatWeDo from '@/components/sections/home/WhatWeDo'
import FieldSection from '@/components/sections/home/FieldSection'
import ArchivePreview from '@/components/sections/home/ArchivePreview'
import CtaBanner from '@/components/sections/home/CtaBanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AudienceNav />
      <Intro />
      <WhatWeDo />
      <FieldSection />
      <ArchivePreview />
      <CtaBanner />
    </>
  )
}
