import { JoinUsBanner } from 'components/JoinUsBanner'
import { TeamLead } from './components/teamLead'
import styled from 'styled-components'
import { Slider } from 'components/Slider'
import React from 'react'

const Footer = styled.div`
  overflow: hidden;
`
export const Team: React.FC = () => {
  return (
    <>
      <TeamLead />
      <Footer>
        <Slider sectionName="Our Team" images={images} description={description} />
      </Footer>
      <JoinUsBanner />
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
const description = [
  'Blockfint Outing',
  'Daily standup',
  'Developer Consulting',
  'Focusing Work',
  'Townhall',
  'Trained National Coach'
]
