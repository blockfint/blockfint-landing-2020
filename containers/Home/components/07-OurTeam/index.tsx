import { Container } from '@material-ui/core'
import { BREAKPOINT } from 'assets/globalStyle'
import { ArrowLink } from 'components/ArrowLink'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  background-color: #f8faff;
  max-width: 100vw;
  overflow: hidden;
`

const BlueTitle = styled.h3`
  color: var(--primary);
  @media ${BREAKPOINT.tablet} {
    font-size: 1.625rem;
    line-height: 1.46;
  }
  @media ${BREAKPOINT.desktop} {
    font-size: 2.625rem;
  }
`
const Title = styled.h3`
  margin-bottom: 1.5rem;
  @media ${BREAKPOINT.tablet} {
    font-size: 1.625rem;
    line-height: 1.46;
  }
  @media ${BREAKPOINT.desktop} {
    font-size: 2.625rem;
  }
`
const Wrapper = styled.div`
  padding: 2.5rem 0;
  display: grid;

  grid-gap: 2.25rem 1rem;
  justify-content: space-between;
  align-items: center;

  @media ${BREAKPOINT.tablet} {
    grid-template-columns: minmax(50%, 28.125rem) minmax(0%, 50%);
  }
`
const Desc = styled.p`
  line-height: 1.88;
  margin-bottom: 1.25rem;

  @media ${BREAKPOINT.tablet} {
    font-size: 1rem;
    max-width: 30ch;
  }
  @media ${BREAKPOINT.desktop} {
    max-width: 38ch;
  }
`
const ImageWrapper = styled.div`
  max-width: 95vw;
  @media ${BREAKPOINT.desktopHd} {
    width: calc(100% + 5rem);
  }
  object-fit: contain;
`
export const OurTeam: React.FC = () => {
  return (
    <Background>
      <Container maxWidth="lg">
        <Wrapper>
          <div>
            <BlueTitle>Our Team</BlueTitle>
            <Title>Consists of Highly Qualified</Title>
            <Desc>
              We are a technology company for Innovators Build great company, not good company together. Good is enough.
              We want greatness.
            </Desc>
            <Link href="/team" passHref>
              <ArrowLink>Meet the team</ArrowLink>
            </Link>
          </div>
          {/* <StyleImage src="/images/team@3x.png" /> */}
          <ImageWrapper>
            <Image src="/images/team@3x.png" width={2064} height={1935} quality={100} />
          </ImageWrapper>
        </Wrapper>
      </Container>
    </Background>
  )
}
