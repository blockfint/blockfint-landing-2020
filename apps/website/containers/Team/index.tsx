import { ContactBanner } from '@blockfint/website/components/ContactBanner'
import { TeamLead } from './components/teamLead'
import styled from 'styled-components'
import { Slider } from '@blockfint/website/components/Slider'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

const Footer = styled.div`
  overflow: hidden;
`
export const Team = () => {
  const { t } = useTranslation()
  const description = useMemo(
    () => [
      t('team.blockfint-outing'),
      t('team.company-meeting'),
      t('team.brain-storming'),
      t('team.coding'),
      t('team.townhall'),
      t('team.play-time')
    ],
    [t]
  )
  return (
    <>
      <TeamLead />
      <Footer>
        <Slider sectionName={t('team.our-team')} images={images} description={description} />
      </Footer>
      <ContactBanner />
    </>
  )
}
const images = [
  '/images/Blockfint-Outing.jpg',
  '/images/Daily-stand-up.jpg',
  '/images/Developer-consulting.jpg',
  '/images/Focusing-work.jpg',
  '/images/Townhall.jpg',
  '/images/Trained-national-coach.jpg'
]
