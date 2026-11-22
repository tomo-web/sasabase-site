import { SchoolNews } from '@/components/sections/SchoolUpdate'
import Hero from '@/components/sections/home/Hero'
import Intro from '@/components/sections/home/Intro'
import WhatWeDo from '@/components/sections/home/WhatWeDo'
import CtaBanner from '@/components/sections/home/CtaBanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <WhatWeDo />
      <SchoolNews />
      <CtaBanner />
    </>
  )
}
