import { PrimaryButton } from '@blockfint/website/components/Buttons'
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as VCSmall } from '@blockfint/website/assets/logos/vc-small.svg'
import { Container } from '@material-ui/core'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { VCImage } from './components/VCImage'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
const Content = styled.div`
  margin: 6.25rem 0;
  @media ${BREAKPOINT.tablet} {
    margin: 10.25rem 0 8.25rem;
  }
  text-align: center;
`
const Title = styled.h5`
  line-height: 1.46;
`
const Desc = styled.p`
  max-width: 35rem;
  margin: 0.5rem auto 2.5rem;
  line-height: 1.88;
`

export const VCSection = () => {
  const { t } = useTranslation()
  return (
    <Container maxWidth="lg">
      <Content>
        <VCImage />
        <Title style={{ color: 'var(--primary)' }}>Verified Credentials</Title>
        <Title>{t('common.vc-quote')}</Title>
        <Desc>{t('home.vc-desc')}</Desc>
        <Link href={'/products/vc'} passHref>
          <a>
            <PrimaryButton logo={<VCSmall />} background={'var(--gradient-vc)'}>
              {t('common.read-more')}
            </PrimaryButton>
          </a>
        </Link>
      </Content>
    </Container>
  )
}
