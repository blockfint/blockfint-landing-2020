import React from 'react'
import { Container } from '@material-ui/core'
import styled from 'styled-components'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { Trans, useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { fadein } from '../animation'

const Content = styled.div`
  margin: 20rem 0.5rem 30rem;
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

export const OpeningMessage = () => {
  const { t } = useTranslation()
  return (
    <Container maxWidth="lg">
      <Content>
        <H3 {...fadein}>
          <Trans i18nKey="secret-sauce.opening-message" components={{ blue: <Blue /> }} />
        </H3>
        <H3 {...fadein}>
          <Trans i18nKey="secret-sauce.opening-message-two" components={{ blue: <Blue /> }} />
        </H3>
      </Content>
    </Container>
  )
}
