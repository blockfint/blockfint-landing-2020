import { Container } from '@material-ui/core'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
const Background = styled.div`
  text-align: center;
  padding: 5rem 1.5rem;
  @media ${BREAKPOINT.tablet} {
    padding: 6.25rem 2.5rem;
  }
`
const StyledText = styled.h1`
  font-size: 2.125rem;
  @media ${BREAKPOINT.tablet} {
    font-size: 3.375rem;
    letter-spacing: -1.6px;
  }
`
export const TopPage = () => {
  const { t } = useTranslation()
  return (
    <Background>
      <StyledText style={{ color: 'var(--primary)' }}>{t('about.section-1-title-1')}</StyledText>
      <StyledText>{t('about.section-1-title-2')}</StyledText>
    </Background>
  )
}
