import { Container } from '@material-ui/core'
import { SecondaryButton } from 'components/Buttons'
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { BREAKPOINT } from 'assets/globalStyle'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
const Background = styled.div`
  position: relative;
  height: 27.125rem;
  padding: 10rem 0 0 0;
  @media ${BREAKPOINT.tablet} {
    padding: 5rem 0;
    height: unset;
  }
`
const Content = styled.div`
  max-width: 60.625rem;
  margin: 0 -1rem;
  background-image: linear-gradient(257deg, #2b85be, #5df4ff 98%);
  display: flex;
  height: 17.25rem;

  position: relative;
  justify-content: center;
  align-items: center;

  @media ${BREAKPOINT.tablet} {
    justify-content: flex-start;
    height: 14rem;
    margin: 0 auto;
    padding: 0 2.75rem;
    border-radius: 3.125rem;
  }
  @media ${BREAKPOINT.desktop} {
    padding: 0 6.25rem;
  }
`
const RightContent = styled.div`
  margin: 8rem 1.5rem 0;
  text-align: center;
  color: var(--white);
  display: grid;
  width: 100%;
  grid-gap: 1rem;
  justify-items: center;
  a {
    width: 100%;
  }
  @media ${BREAKPOINT.tablet} {
    margin: 0 0 0 auto;
    width: 23rem;
    a {
      width: unset;
    }
  }
  @media ${BREAKPOINT.desktop} {
    width: 29.375rem;
  }
`

const ExploreImg = styled.div`
  position: absolute;
  max-width: 100vw;
  bottom: 57.5%;
  left: -2rem;
  /* transform: translateX(-50%); */
  @media ${BREAKPOINT.tablet} {
    transform: unset;
    left: -35%;
    bottom: 1.5rem;
  }
  @media ${BREAKPOINT.desktop} {
    left: 0;
    bottom: 0.5rem;
  }
`

const ImageWrapper = styled.div`
  position: static;
  img {
    max-width: 100vw;
  }
  @media ${BREAKPOINT.tablet} {
    position: relative;
    overflow: hidden;
    width: 20rem;
    height: 17.25rem;
    margin: -5rem 0 0 -2.75rem;
  }
  @media ${BREAKPOINT.desktop} {
    position: static;
    width: unset;
    height: unset;
    margin: 0;
  }
`
export const ProductsBanner: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Background>
      <Container maxWidth="lg">
        <Content>
          <ImageWrapper>
            <ExploreImg>
              <Image src={'/images/explore.png'} width={430} height={233} alt="explore hand" />
            </ExploreImg>
          </ImageWrapper>
          <RightContent>
            <h5>{t('home:interesting-in-our-products')}</h5>
            <Link passHref href="/works">
              <a>
                <SecondaryButton>{t('home:see-all-works')}</SecondaryButton>
              </a>
            </Link>
          </RightContent>
        </Content>
      </Container>
    </Background>
  )
}
