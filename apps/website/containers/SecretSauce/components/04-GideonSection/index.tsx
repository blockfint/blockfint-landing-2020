import { PrimaryButton } from '@blockfint/website/components/Buttons'
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as GideonOneSmall } from '@blockfint/website/assets/logos/gideon-one-small.svg'
import { Container } from '@material-ui/core'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { GideonImage } from './components/GideonImage'
import Link from 'next/link'
import { Trans, useTranslation } from 'next-i18next'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadein } from '../animation'

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
  max-width: 40rem;
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

export const GideonSection = () => {
  const { t } = useTranslation()
  return (
    <Container maxWidth="lg">
      <Content>
        <H3 {...fadein}>
          <Trans i18nKey="secret-sauce.gideon-title" components={{ blue: <Blue /> }} />
        </H3>
        <GideonImage />
        <Title style={{ color: 'var(--primary)' }}>GideonOne</Title>
        <Title>{t('secret-sauce.gideon-header')}</Title>
        <Desc>{t('secret-sauce.gideon-desc')}</Desc>
        <Link href="https://gideon-one.com/" passHref>
          <a target="_blank">
            <PrimaryButton
              logo={<Image src="/icons/gideon-one-small.png" width={24} height={35} />}
              background={'var(--gradient-gideon)'}
            >
              {t('secret-sauce.visit') + ' GideonOne'}
            </PrimaryButton>
          </a>
        </Link>
      </Content>
    </Container>
  )
}
