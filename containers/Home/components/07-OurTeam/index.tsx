import { Container } from '@material-ui/core'
import { ArrowLink } from 'components/ArrowLink'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  background-color: #f8faff;
`

const BlueTitle = styled.h3`
  color: var(--primary);
`
const Title = styled.h3`
  margin-bottom: 1.5rem;
`
const Wrapper = styled.div`
  padding: 2.5rem 0;
  display: grid;
  grid-template-columns: 28.125rem 50%;
  justify-content: space-between;
  align-items: center;
`
const Desc = styled.p`
  line-height: 1.88;
  margin-bottom: 1.25rem;
`
const Image = styled.img`
  width: calc(100% + 5rem);
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
          <Image src="images/team@3x.png" />
        </Wrapper>
      </Container>
    </Background>
  )
}
