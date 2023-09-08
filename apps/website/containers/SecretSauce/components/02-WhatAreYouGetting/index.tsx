import React from 'react'
import { Container } from '@material-ui/core'
import styled from 'styled-components'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { PrimaryButton } from '@blockfint/website/components/Buttons'
import { Trans, useTranslation } from 'next-i18next'
import Link from 'next/link'
import { ReactComponent as Arrow } from '@blockfint/website/assets/icons/arrow.svg'
import { fadein } from '../animation'
import { motion } from 'framer-motion'

const Content = styled.div`
  margin: 30rem 0.5rem 30rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30rem;
`

const H3 = styled(motion.h3)`
  margin: 0 auto;
  max-width: 65rem;
  @media ${BREAKPOINT.tablet} {
    font-size: 2.125rem;
  }
`

const Blue = styled.span`
  color: var(--primary);
`

export const WhatAreYouGetting = () => {
  const { t } = useTranslation()
  return (
    <Container maxWidth="lg">
      <Content>
        <H3 {...fadein}>
          <Trans i18nKey="secret-sauce.what-are-you-getting" components={{ blue: <Blue /> }} />
        </H3>
        <H3 {...fadein}>
          <Trans i18nKey="secret-sauce.what-are-you-getting-two" components={{ blue: <Blue /> }} />
        </H3>
        <div>
          <H3 {...fadein} style={{ marginBottom: '5rem' }}>
            <Trans i18nKey="secret-sauce.what-are-you-getting-three" components={{ blue: <Blue /> }} />
          </H3>
          <Link
            href="https://topgardensites.com/%e0%b9%80%e0%b8%97%e0%b8%84%e0%b8%99%e0%b8%b4%e0%b8%84%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%9b%e0%b8%a5%e0%b8%b9%e0%b8%81%e0%b8%95%e0%b9%89%e0%b8%99%e0%b9%84%e0%b8%a1%e0%b9%89/%e0%b8%a7%e0%b8%b4%e0%b8%98%e0%b8%b5%e0%b8%9b%e0%b8%a5%e0%b8%b9%e0%b8%81%e0%b8%a2%e0%b8%b9%e0%b8%84%e0%b8%b2%e0%b8%a5%e0%b8%b4%e0%b8%9b%e0%b8%95%e0%b8%b1%e0%b8%aa%e0%b9%83%e0%b8%99%e0%b8%9a%e0%b9%89/"
            passHref
          >
            <a target="_blank">
              <PrimaryButton logo={<Arrow />}>{t('secret-sauce.how-to-plant')}</PrimaryButton>
            </a>
          </Link>
        </div>
        <H3 {...fadein}>
          <Trans i18nKey="secret-sauce.what-are-you-getting-four" components={{ blue: <Blue /> }} />
        </H3>
        <H3 {...fadein}>
          <Trans i18nKey="secret-sauce.what-are-you-getting-five" components={{ blue: <Blue /> }} />
        </H3>
        <H3 {...fadein}>
          <Trans i18nKey="secret-sauce.what-are-you-getting-six" components={{ blue: <Blue /> }} />
        </H3>
        <H3 {...fadein}>
          <Trans i18nKey="secret-sauce.what-are-you-getting-seven" components={{ blue: <Blue /> }} />
        </H3>
        <H3 {...fadein}>
          <Trans i18nKey="secret-sauce.what-are-you-getting-eight" components={{ blue: <Blue /> }} />
        </H3>
      </Content>
    </Container>
  )
}
