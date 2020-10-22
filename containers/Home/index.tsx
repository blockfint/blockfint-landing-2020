import { ContactBanner } from 'components/ContactBanner'
import React from 'react'
import { GideonSection } from './components/GideonSection'
import { Hero } from './components/Hero'

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <GideonSection />
      <ContactBanner />
    </>
  )
}
