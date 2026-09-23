import { AboutMeSection } from './AboutMeSection'
import { FaqSection } from './FaqSection'
import { ForWhomSection } from './ForWhomSection'
import { HeroSection } from './HeroSection'
import { HowSection } from './HowSection'
import { PricingSection } from './PricingSection'
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
    <HowSection />
    <PricingSection />
    <AboutMeSection />
    <FaqSection />
  </div>
)
