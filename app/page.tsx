import Hero from '@/components/sections/home/Hero'
import Intro from '@/components/sections/home/Intro'
import WhatWeDo from '@/components/sections/home/WhatWeDo'
import FieldSection from '@/components/sections/home/FieldSection'
import ArchivePreview from '@/components/sections/home/ArchivePreview'
import CtaBanner from '@/components/sections/home/CtaBanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <WhatWeDo />
      <FieldSection />
      <ArchivePreview />
      <CtaBanner />
    </>
  )
}
