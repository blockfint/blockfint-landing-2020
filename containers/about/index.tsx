import { ContactBanner } from 'components/ContactBanner'
import { Slider } from 'components/Slider'
import React from 'react'
import styled from 'styled-components'
import { InfoGraphic } from './components/InfoGraphic'
import { StoryAbout } from './components/StoryAbout'
import { TopPage } from './components/TopPage'
import ProgressiveImage from 'react-progressive-image'

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 340px;
`
const Footer = styled.div`
  overflow: hidden;
`
export const About = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <TopPage />
      {/* <MyImage src="/images/blockfint-company.jpg" alt="blockfint-company" width={1200} height={340} quality={100} /> */}
      <ProgressiveImage src="/images/blockfint-company.jpg" placeholder="/images/blockfint-company-lowq.jpg">
        {(src) => <Image src={src} alt="blockfint-company" />}
      </ProgressiveImage>
      <InfoGraphic />
      <StoryAbout />
      <Footer>
        <Slider sectionName="Achievement" images={images} description={description} />
      </Footer>
      <ContactBanner />
    </div>
  )
}
const images = ['/images/slide1.jpg', '/images/slide2.jpg', '/images/slide3.jpg']
const description = [
  'Prouded to be partner with ThaiBMA',
  'Award for Mhor Chana, original version of health passport',
  'Together with ThaiBMA board'
]
