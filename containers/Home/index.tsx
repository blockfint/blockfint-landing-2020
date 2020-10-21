import { Container } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as HeroTop } from 'assets/bg/hero-top.svg'
import { ReactComponent as HeroBottom } from 'assets/bg/hero-bottom.svg'
import { BREAKPOINT } from 'assets/globalStyle'
const Background = styled.div`
  min-height: 50rem;
  @media ${BREAKPOINT.desktop} {
    min-height: 100vh;
  }
  position: relative;
  :before {
    content: ' ';
    z-index: -2;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fafafa;
  }
`
const StyleHeroTop = styled(HeroTop)`
  position: absolute;
  top: -0.5em;
  z-index: -1;
  font-size: clamp(11rem, 20vw, 17rem);
`
const StyleHeroBottom = styled(HeroBottom)`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
  font-size: clamp(11rem, 20vw, 17rem);
`

export const Home: React.FC = () => {
  return (
    <Background>
      <Container maxWidth="lg">HEllo</Container>
      <StyleHeroTop />
      <StyleHeroBottom />
    </Background>
  )
}
