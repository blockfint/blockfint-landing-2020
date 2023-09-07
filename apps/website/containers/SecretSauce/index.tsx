import { PostOrPage } from '@tryghost/content-api'
import React from 'react'
import { Hero } from './components/00-Hero'
import { OpeningMessage } from './components/01-OpeningMessage'
import { WhatAreYouGetting } from './components/02-WhatAreYouGetting'
import { ThinkerSection } from './components/03-ThinkerSection'
import { GideonSection } from './components/04-GideonSection'
import { ContactBanner } from '@blockfint/website/components/ContactBanner'

type Props = {
  blogsData?: PostOrPage[]
}
export const SecretSauce: React.FC<Props> = () => {
  return (
    <>
      <Hero />
      <OpeningMessage />
      <WhatAreYouGetting />
      <ThinkerSection />
      <GideonSection />
      <ContactBanner />
    </>
  )
}
