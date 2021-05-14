import { PrimaryButton } from '@blockfint/website/components/Buttons'
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as NeoBankSmall } from '@blockfint/website/assets/logos/neobank-small.svg'
import { Container } from '@material-ui/core'
import { BREAKPOINT } from '@blockfint/website/assets/globalStyle'
import { NeobankImage } from './components/NeobankImage'
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

export const NeoBankSection: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Container maxWidth="lg">
      <Content>
        <NeobankImage />

        <Title style={{ color: 'var(--primary)' }}>Thinker Bank</Title>
        <Title>The New Era of Banking Services</Title>
        <Desc>{t('home.neobank-desc')}</Desc>
        <Link href={'/products/neobank'} passHref>
          <a>
            <PrimaryButton logo={<NeoBankSmall />} background={'var(--gradient-neo-bank)'}>
              {t('common.read-more')}
            </PrimaryButton>
          </a>
        </Link>
      </Content>
    </Container>
  )
}
