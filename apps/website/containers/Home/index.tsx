import { ContactBanner } from '@blockfint/website/components/ContactBanner'
import { PostOrPage } from '@tryghost/content-api'
import React from 'react'
import { Hero } from './components/00-Hero'
import { GideonSection } from './components/01-GideonSection'
import { ThinkerSection } from './components/02-ThinkerSection'
import { PalmSection } from './components/03-PalmSection'
import { NeoBankSection } from './components/04-NeoBankSection'
import { ProductsBanner } from './components/05-ProductsBanner'
import { OurPartners } from './components/06-OurPartners'
import { Blog } from './components/07-Blog'
import { OurTeam } from './components/08-OurTeam'

type Props = {
  blogsData: PostOrPage[]
}
export const Home: React.FC<Props> = ({ blogsData }) => {
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
      <Blog data={blogsData} />
      <ContactBanner />
    </>
  )
}
