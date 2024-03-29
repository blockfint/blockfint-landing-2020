import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { Container } from '@material-ui/core'
import { useTranslation } from 'next-i18next'
const Background = styled.div`
  position: relative;
  padding: 1.5rem 0;
  display: grid;
  grid-template-areas:
    'who what'
    'address address'
    'call call'
    'social social'
    'privacy privacy'
    'copyright copyright';
  grid-gap: 0 1rem;
  @media ${BREAKPOINT.tablet} {
    padding: 2.1875rem 0;
    grid-template-areas:
      'who what address'
      'social social call'
      'copyright copyright privacy ';
    grid-gap: 0.75rem 6rem;
    div:nth-child(-n + 3) h5 {
      padding-bottom: 1.25rem;
    }
  }
  @media ${BREAKPOINT.desktop} {
    padding: 2.5rem 2rem;
    grid-template-columns: repeat(3, minmax(max-content, auto));
    grid-template-areas:
      'who what address'
      '. social call'
      'privacy copyright .';
    grid-gap: 0.75rem 7.9rem;
  }
`
const Who = styled.div`
  grid-area: who;
  @media ${BREAKPOINT.desktop} {
    margin-right: 4rem;
  }
`
const What = styled.div`
  grid-area: what;
`
const Address = styled.div`
  grid-area: address;
  position: relative;
`
const Call = styled.div`
  grid-area: call;
`
const Social = styled.div`
  grid-area: social;
  padding-bottom: 1.75rem;
  @media ${BREAKPOINT.desktop} {
    padding-bottom: 0.25rem;
  }
`
const Title = styled.h5`
  line-height: 1.88;
  padding-bottom: 0.5rem;
  padding-top: 1.875rem;
  @media ${BREAKPOINT.tablet} {
    font-size: 1rem;
    padding-top: 0;
  }
`
const Text = styled.p`
  line-height: 1.57;
  @media ${BREAKPOINT.tablet} {
    font-size: 0.875rem;
  }
`
const SmallText = styled.p`
  font-size: 0.75rem;
  line-height: 1.83;
  text-align: center;
  @media ${BREAKPOINT.tablet} {
    text-align: start;
  }
`
const Privacy = styled(SmallText)`
  grid-area: privacy;
  color: inherit;
  text-decoration: unset;
  cursor: pointer;
`
const AddressText = styled(Text)`
  width: 16.125rem;
  @media ${BREAKPOINT.tablet} {
    width: 14.5rem;
  }
`
const Hr = styled.hr`
  width: 1px;
  height: 46px;
  background-color: var(--grey-1);
  border: 0;
  position: absolute;
  left: -0.625rem;
  top: 3.3125rem;
  display: none;
  @media ${BREAKPOINT.tablet} {
    display: block;
    left: -1.5rem;
  }
`
const StyledIconButton = styled.a`
  cursor: pointer;
  margin-right: 1rem;
`
const ButtonToTop = styled.button`
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 0;
  padding: 0;
  background-color: white;
  border: 0;
  :focus {
    outline: none;
  }
  @media ${BREAKPOINT.tablet} {
    top: 1.5rem;
  }
  @media ${BREAKPOINT.desktop} {
    right: 1rem;
    top: 2.5rem;
  }
`
const StyledLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: var(--gray-1);
  display: block;
  width: max-content;
`
const LinkCall = styled(StyledLink)`
  :hover {
    text-decoration: underline;
  }
`
const InLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Footer = () => {
  const { t } = useTranslation()
  return (
    <Container maxWidth="lg">
      <Background>
        <Who>
          <Title>{t('common.who-we-are')}</Title>
          <Link href="/about" passHref>
            <StyledLink>
              <Text>{t('common.about')}</Text>
            </StyledLink>
          </Link>
        </Who>
        <What>
          <Title>{t('common.what-we-do')}</Title>
          <Link href="/works" passHref>
            <StyledLink>
              <Text>{t('common.works')}</Text>
            </StyledLink>
          </Link>
          <StyledLink target="__blank" rel="noreferrer noopener" href="https://www.instagram.com/blockfint/">
            <Text style={{ paddingTop: '0.25rem' }}>{t('common.life-at-blockfint')}</Text>
          </StyledLink>
        </What>
        <Address>
          <Title>{t('common.address')}</Title>
          <Hr />
          <AddressText>{t('common.address-text')}</AddressText>
        </Address>
        <Call>
          <Title />
          <InLine>
            <img src="/icons/call.svg" alt="mail" width="24" height="24" />
            <LinkCall href="tel:021147182">
              <Text className="call" style={{ marginLeft: '0.5rem' }}>
                +66 (0)2 114 7182
              </Text>
            </LinkCall>
          </InLine>
          <InLine style={{ paddingTop: '0.5rem' }}>
            <img src="/icons/mail.svg" alt="mail" width="24" height="24" />
            <LinkCall href="mailto: info@blockfint.com">
              <Text style={{ marginLeft: '0.5rem' }}>info@blockfint.com</Text>
            </LinkCall>
          </InLine>
        </Call>
        <Social>
          <Title>{t('common.what-we-do-daily')}</Title>
          <StyledIconButton href="https://www.facebook.com/Blockfint/" target="__blank" rel="noreferrer noopener">
            <img src="/icons/facebook.svg" alt="facebook" width="36" />
          </StyledIconButton>
          <StyledIconButton
            href="https://www.youtube.com/channel/UCTtEVhgmbDc9oYLy5mGC33g"
            target="__blank"
            rel="noreferrer noopener"
          >
            <img src="/icons/youtube.svg" alt="youtube" width="36" />
          </StyledIconButton>

          <StyledIconButton href="https://www.instagram.com/blockfint/" target="__blank" rel="noreferrer noopener">
            <img src="/icons/instagram.svg" alt="instagram" width="36" />
          </StyledIconButton>
          <StyledIconButton href="https://th.linkedin.com/company/blockfint" target="__blank" rel="noreferrer noopener">
            <img src="/icons/linkin.svg" alt="linkin" width="36" />
          </StyledIconButton>
        </Social>
        <Link href="/policy">
          <Privacy as="a">{t('common.privacy-and-policy')}</Privacy>
        </Link>
        <SmallText style={{ gridArea: 'copyright' }}>{t('common.copyright')}</SmallText>
        <ButtonToTop
          onClick={() => {
            const rootElement = document.documentElement
            rootElement.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <img src="/icons/arrow-to-top.svg" alt="linkin" width="36" />
        </ButtonToTop>
      </Background>
    </Container>
  )
}
