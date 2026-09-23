import { ForWhomSection } from './ForWhomSection'
import { HeroSection } from './HeroSection'
import { WhatSection } from './WhatSection'
import { WhyMeSection } from './WhyMeSection'
import { WithSection } from './WithSection'

export const LandingPage = () => (
  <div className='min-h-dvh leading-relaxed'>
    <HeroSection />
    <WhatSection />
    <WithSection />
    <ForWhomSection />
    <WhyMeSection />
  </div>
)
