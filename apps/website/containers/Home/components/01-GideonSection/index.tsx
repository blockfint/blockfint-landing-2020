import { PrimaryButton } from '@blockfint/website/components/Buttons'
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as GideonSmall } from '@blockfint/website/assets/logos/gideon-small.svg'
import { Container } from '@material-ui/core'
import { BREAKPOINT } from '@blockfint/website/assets/globalStyle'
import { GideonImage } from './components/GideonImage'
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
  max-width: 40rem;
  margin: 0.5rem auto 2.5rem;
  line-height: 1.88;
`

export const GideonSection: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Container maxWidth="lg">
      <Content>
        <GideonImage />
        <Title style={{ color: 'var(--primary)' }}>Gideon</Title>
        <Title>Energy Trading Without Barriers</Title>
        <Desc>{t('home.gideon-desc')}</Desc>
        <Link href={'/products/gideon'} passHref>
          <a>
            <PrimaryButton logo={<GideonSmall />} background={'var(--gradient-gideon)'}>
              {t('common.read-more')}
            </PrimaryButton>
          </a>
        </Link>
      </Content>
    </Container>
  )
}
