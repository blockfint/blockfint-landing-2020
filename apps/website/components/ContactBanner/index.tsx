import { Container } from '@material-ui/core'
import { BREAKPOINT } from '@blockfint/website/assets/globalStyle'
import { SecondaryButton } from '@blockfint/website/components/Buttons'
import { useContactContext } from '@blockfint/website/components/ContactDialog'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  background-color: #19213c;

  position: relative;
  height: 27.125rem;
  padding: 17.125rem 0 0 0;
  @media ${BREAKPOINT.tablet} {
    padding: 5rem 0;
    height: unset;
  }
`
const Content = styled.div`
  max-width: 60.625rem;
  margin: 0 -1rem;
  background-color: #fcbc14;
  display: flex;
  height: 10rem;

  justify-content: center;
  align-items: center;
  @media ${BREAKPOINT.tablet} {
    position: relative;
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
const LeftContent = styled.div`
  margin: 0 1.5rem 0;
  color: var(--white);
  display: grid;
  width: 100%;
  grid-gap: 1rem;
  justify-items: center;
  a {
    width: 100%;
  }
  @media ${BREAKPOINT.tablet} {
    margin: 0;
    width: 23rem;
    a {
      width: unset;
    }
  }
  @media ${BREAKPOINT.desktop} {
    width: 29.375rem;
  }
`

const MailImage = styled.div`
  position: absolute;
  top: 1.375rem;
  right: 2.375rem;
  width: 15.5rem;
  /* left: 50%;
  transform: translateX(-50%); */
  @media ${BREAKPOINT.tablet} {
    width: unset;
    left: unset;
    top: unset;
    transform: unset;
    right: 2.75rem;
    bottom: 0rem;
  }
  @media ${BREAKPOINT.desktop} {
    right: 6.25rem;
    bottom: 0rem;
  }
`
export const ContactBanner: React.FC = () => {
  const { t } = useTranslation()
  const { onOpen } = useContactContext()
  const handleOpen = () => {
    onOpen()
  }
  return (
    <Background>
      <Container maxWidth="lg">
        <Content>
          <LeftContent>
            <h5>{t('common.contact-banner-title')}</h5>
            <SecondaryButton onClick={handleOpen}>{t('common.contact-us')}</SecondaryButton>
          </LeftContent>
          <MailImage>
            <Image src={'/images/mailbox.png'} width={285} height={291} alt="Mailbox" />
          </MailImage>
        </Content>
      </Container>
    </Background>
  )
}
