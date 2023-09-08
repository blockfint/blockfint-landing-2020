import { Container } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as HeroTop } from '@blockfint/website/assets/bg/hero-top.svg'
import { ReactComponent as HeroBottom } from '@blockfint/website/assets/bg/hero-bottom.svg'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { ScrollAnimation } from './components/ScrollAnimation'
import { useTranslation } from 'next-i18next'

const Background = styled.div`
  margin-top: -5rem;
  min-height: 46rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media ${BREAKPOINT.tablet} {
    min-height: 62rem;
  }
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

const StyledContainer = styled(Container)`
  margin: auto;
  padding: 8rem 24px;
`;

const StyleHeroTop = styled(HeroTop)`
  position: absolute;
  top: -0.25em;
  z-index: -1;
  font-size: clamp(11rem, 20vw, 17rem);
  color: #f4f4f4;
`
const StyleHeroBottom = styled(HeroBottom)`
  color: #f4f4f4;
  position: absolute;
  bottom: -10%;
  right: 0;
  z-index: -1;
  font-size: clamp(11rem, 20vw, 17rem);
`
const Content = styled.div`
  text-align: center;
`
const Title = styled.h1`
  line-height: 1.15;
  color: var(--primary);
  font-size: 2.625rem;
  font-weight: 700;
  @media ${BREAKPOINT.tablet} {
    font-size: 4.25rem;
  }
`

const Desc = styled.h3`
  line-height: 1.88;
  margin: 5rem auto 2.5rem;

  @media ${BREAKPOINT.tablet} {
    margin: 5rem auto 3.75rem;
    padding: 0 7rem;
    font-size: 2.125rem;
  }
  @media ${BREAKPOINT.desktop} {
    max-width: 70rem;
  }
`
const ScrollWrapper = styled.div`
  z-index: 1;
  position: absolute;
  bottom: 8rem;
  left: 50%;
  transform: translateX(-50%);
  @media ${BREAKPOINT.tablet} {
    bottom: 7.5rem;
  }
`

export const Hero = () => {
  const { t } = useTranslation()
  return (
    <Background>
      <StyledContainer maxWidth="lg">
        <Content>
          <div>
            <Title>Blockfint at The Secret Sauce Summit 2023</Title>
          </div>
          <Desc>{t('secret-sauce.thank-you-message')}</Desc>
        </Content>
      </StyledContainer>
      <ScrollWrapper>
        <ScrollAnimation />
      </ScrollWrapper>
      <StyleHeroTop />
      <StyleHeroBottom />
    </Background>
  )
}
