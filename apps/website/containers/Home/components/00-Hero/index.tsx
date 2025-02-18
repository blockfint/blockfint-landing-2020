import { Container } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as HeroTop } from '@blockfint/website/assets/bg/hero-top.svg'
import { ReactComponent as HeroBottom } from '@blockfint/website/assets/bg/hero-bottom.svg'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { ScrollAnimation } from './components/ScrollAnimation'
import { PrimaryButton } from '@blockfint/website/components/Buttons'
import { ReactComponent as BlockfintSmallLogo } from '@blockfint/website/assets/logos/blockfint-small.svg'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { VideoIframe } from '@blockfint/website/components/VideoIframe'

const Background = styled.div`
  margin-top: -5rem;
  min-height: 46rem;
  overflow: hidden;
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
  padding: 8.25rem 0;
  @media ${BREAKPOINT.tablet} {
    padding: 12rem 0;
  }
  text-align: center;
`
const Title = styled.h1`
  line-height: 1.15;
  color: var(--primary);
  font-size: 2.625rem;
  font-weight: 600;
  @media ${BREAKPOINT.tablet} {
    font-size: 4.25rem;
  }
`

const Desc = styled.p`
  line-height: 1.88;
  margin: 1.5rem auto 2.5rem;

  @media ${BREAKPOINT.tablet} {
    margin: 1.5rem auto 3.75rem;
    padding: 0 7rem;
  }
  @media ${BREAKPOINT.desktop} {
    max-width: 46rem;
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
      <Container maxWidth="lg">
        <Content>
          <div>
            <Title>Make Future Innovations </Title>
            <Title style={{ color: '#19213c' }}>Happen Today</Title>
          </div>
          <Desc>{t('home.section-1-desc')}</Desc>
          <VideoIframe title={''} src="https://www.youtube-nocookie.com/embed/d-1b9D72pag" />
          <Link href="/about" passHref>
            <a>
              <PrimaryButton style={{ marginTop: '60px' }} logo={<BlockfintSmallLogo style={{ fontSize: '1.5rem' }} />}>
                {t('common.about')}
              </PrimaryButton>
            </a>
          </Link>
        </Content>
      </Container>
      <ScrollWrapper>
        <ScrollAnimation />
      </ScrollWrapper>
      <StyleHeroTop />
      <StyleHeroBottom />
    </Background>
  )
}
