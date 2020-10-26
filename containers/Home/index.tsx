import { ContactBanner } from 'components/ContactBanner'
import React from 'react'
import { Hero } from './components/00-Hero'
import { GideonSection } from './components/01-GideonSection'
import { ThinkerSection } from './components/02-ThinkerSection'
import { PalmSection } from './components/03-PalmSection'
import { NeoBankSection } from './components/04-NeoBankSection'
import { ProductsBanner } from './components/05-ProductsBanner'
import { OurPartners } from './components/06-OurPartners'
import { OurTeam } from './components/07-OurTeam'

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <GideonSection />
      <ThinkerSection />
      <PalmSection />
      <NeoBankSection />
      <ProductsBanner />
      <OurPartners />
      <OurTeam />
      <ContactBanner />
    </>
  )
}
