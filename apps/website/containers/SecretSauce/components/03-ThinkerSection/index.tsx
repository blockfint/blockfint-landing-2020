import { PrimaryButton } from '@blockfint/website/components/Buttons'
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as ThinkerFintSmall } from '@blockfint/website/assets/logos/thinkerfint-small.svg'
import { Container } from '@material-ui/core'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { ThinkerImage } from './components/ThinkerImage'
import Link from 'next/link'
import { Trans, useTranslation } from 'next-i18next'
import { fadein } from '../animation'
import { motion } from 'framer-motion'
const Content = styled.div`
  margin: 6.25rem 0 8.25rem;
  @media ${BREAKPOINT.tablet} {
    margin: 10.25rem 0 20rem;
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

const H3 = styled(motion.h3)`
  margin: 0 auto 2rem;
  max-width: 65rem;
  @media ${BREAKPOINT.tablet} {
    margin: 0 auto 4rem;
    font-size: 2.125rem;
  }
`

const Blue = styled.span`
  color: var(--primary);
`

export const ThinkerSection = () => {
  const { t } = useTranslation()
  return (
    <Container maxWidth="lg">
      <Content>
      <H3 {...fadein}>
          <Trans i18nKey="secret-sauce.thinkerfint-title" components={{ blue: <Blue /> }} />
        </H3>
        <ThinkerImage />
        <Title style={{ color: 'var(--primary)' }}>ThinkerFint</Title>
        <Title>{t('secret-sauce.thinkerfint-header')}</Title>
        <Desc>{t('secret-sauce.thinkerfint-desc')}</Desc>
        <Link href="https://thinkerfint.com/" passHref>
          <a target="_blank">
            <PrimaryButton logo={<ThinkerFintSmall />} background={'var(--gradient-thinker-los)'}>
              {t('secret-sauce.visit') + ' ThinkerFint'}
            </PrimaryButton>
          </a>
        </Link>
      </Content>
    </Container>
  )
}
