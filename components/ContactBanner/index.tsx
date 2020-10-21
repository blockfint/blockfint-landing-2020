import { Container } from '@material-ui/core'
import { SecondaryButton } from 'components/Buttons'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  background-color: #19213c;
  padding: 5rem 0;
  position: relative;
`
const Content = styled.div`
  margin: 0 6.25rem;
  background-color: #fcbc14;
  display: flex;
  height: 14rem;
  border-radius: 3.125rem;
  position: relative;
  padding: 0 6.25rem;
  align-items: center;
`
const LeftContent = styled.div`
  color: var(--white);
  display: grid;
  grid-gap: 1rem;
  justify-items: center;
  width: 29.375rem;
`

const MailImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 6.25rem;
`
export const ContactBanner: React.FC = () => {
  return (
    <Background>
      <Container maxWidth="lg">
        <Content>
          <LeftContent>
            <h3>Interested to be our partner?</h3>
            <Link passHref href="/contact">
              <a>
                <SecondaryButton>Contact us</SecondaryButton>
              </a>
            </Link>
          </LeftContent>
          <MailImage src={'/images/mailbox.png'} />
        </Content>
      </Container>
    </Background>
  )
}
