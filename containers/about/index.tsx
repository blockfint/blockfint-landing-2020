import { BREAKPOINT } from 'assets/globalStyle'
import { ContactBanner } from 'components/ContactBanner'
import { Slider } from 'components/Slider'
import React from 'react'
import styled from 'styled-components'
import { InfoGraphic } from './components/InfoGraphic'
import { StoryAbout } from './components/StoryAbout'
import { TopPage } from './components/TopPage'
import Image from 'next/image'
const CoverImage = styled(Image)`
  object-fit: cover;
  height: 340px;
  width: 100%;
`
const Footer = styled.div`
  overflow: hidden;
`
export const About = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <TopPage />
      <CoverImage src="/images/blockfint-company.jpg" unsized quality={100} />
      <InfoGraphic />
      <StoryAbout />
      <Footer>
        <Slider sectionName="Achievement" images={images} description={description} />
      </Footer>
      <ContactBanner />
    </div>
  )
}
const images = ['/images/slide1.jpg', '/images/slide3.jpg']
const description = [
  // 'Registrar Service Platform',
  // 'Award for Mhor Chan',
  // 'Together with ThaiBMA board'
]
