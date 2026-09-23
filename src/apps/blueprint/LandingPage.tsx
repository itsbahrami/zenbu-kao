import { HeroSection } from './HeroSection'
import { WhatSection } from './WhatSection'
import { WithSection } from './WithSection'

export const LandingPage = () => (
  <div className='min-h-dvh leading-relaxed'>
    <HeroSection />
    <WhatSection />
    <WithSection />
  </div>
)
