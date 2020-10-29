import { JoinUsBanner } from 'components/JoinUsBanner'
import { TeamDetailpage } from './components/index'
import styled from 'styled-components'
import { Slider } from 'components/Slider'
import React from 'react'
const Footer = styled.div`
  overflow: hidden;
`
export const TeamDetail: React.FC = () => {
  return (
    <>
      <TeamDetailpage />
      <Footer>
        <Slider sectionName="Our Team" images={images} description={description} />
      </Footer>
      <JoinUsBanner />
    </>
  )
}
const images = ['/images/slide1.jpg', '/images/slide2.jpg', '/images/slide3.jpg']
const description = ['Enjoying free lunch', 'Enjoying free lunch', 'Enjoying free lunch']
