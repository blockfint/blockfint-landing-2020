import { BREAKPOINT } from 'assets/globalStyle'
import React from 'react'
import styled from 'styled-components'
import { InfoGraphic } from './components/InfoGraphic'
import { StoryAbout } from './components/StoryAbout'
import { TopPage } from './components/TopPage'
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 340px;
`
export const About = () => {
  return (
    <div>
      <TopPage />
      <Image src="/office-life.png" alt="" />
      <InfoGraphic />
      <StoryAbout/>
    </div>
  )
}
