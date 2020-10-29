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
const images = ['/images/slide1.jpg', '/images/slide2.jpg', '/images/slide3.jpg']
const description = ['Enjoying free lunch', 'Enjoying free lunch', 'Enjoying free lunch']
