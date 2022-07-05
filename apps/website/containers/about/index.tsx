import { ContactBanner } from '@blockfint/website/components/ContactBanner'
import { Slider } from '@blockfint/website/components/Slider'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import { InfoGraphic } from './components/InfoGraphic'
import { StoryAbout } from './components/StoryAbout'
import { TopPage } from './components/TopPage'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
const Footer = styled.div`
  overflow: hidden;
`
export const About = () => {
  const { t } = useTranslation()
  const description = useMemo(
    () => [
      t('about.main-contributor-for-ndid'),
      t('about.thailand-first-blockchain-bond'),
      t('about.supply-technology-for-ktb')
    ],
    [t]
  )
  return (
    <div style={{ overflow: 'hidden' }}>
      <TopPage />

      <Image src="/images/blockfint-company.jpg" layout="responsive" width={4320} height={1020} />

      <InfoGraphic />
      <StoryAbout />
      <Footer>
        <Slider sectionName={t('about.achievement')} images={images} description={description} />
      </Footer>
      <ContactBanner />
    </div>
  )
}
const images = ['/images/ndid.jpg', '/images/toyota.jpg', '/images/kbtg.jpg']
