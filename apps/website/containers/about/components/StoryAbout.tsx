import React from 'react'
import styled from 'styled-components'
import { BREAKPOINT } from '@blockfint/website/assets/globalStyle'
import { useTranslation } from 'react-i18next'
const Topic = styled.h2`
  font-size: 2.125rem;
  @media ${BREAKPOINT.tablet} {
    font-size: 2.625rem;
    letter-spacing: -1.2px;
  }
  @media ${BREAKPOINT.desktop} {
    font-weight: bold;
    line-height: 1.33;
  }
`
const StyledHr = styled.hr`
  width: 86px;
  height: 2px;
  background-color: #dddddd;
  border: 0;
`
const StyledH6 = styled.p`
  font-weight: normal;
  color: #333333;
  line-height: 1.88;
  white-space: pre-line;

  @media ${BREAKPOINT.tablet} {
    font-size: 1rem;
  }
`
const Div = styled.div`
  display: grid;
  grid-row-gap: 1.5rem;
  padding-top: 1.25rem;
`
const Background = styled.div`
  padding: 0 1.5rem 3.75rem;
  @media ${BREAKPOINT.tablet} {
    padding: 0 2.5rem 5rem;
  }
  @media ${BREAKPOINT.desktop} {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 8.1875rem;
    padding: 0 14.6875rem 6.25rem 8.4375rem;
  }
`
export const StoryAbout: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Background>
      <div>
        <Topic>{t('about:section-2-title-1')}</Topic>
        <Topic style={{ color: 'var(--primary)', paddingTop: '0.25rem' }}>{t('about:section-2-title-2')}</Topic>
      </div>
      <Div>
        <h6 style={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.88 }}>{t('about:founded-in-2017')}</h6>
        <StyledHr />
        <StyledH6>
          {t('about:2017-desc-1')}
          <br />
          <br />
          {t('about:2017-desc-2')}
          <br />
          <br />
          {t('about:2017-desc-3')}
        </StyledH6>
      </Div>
    </Background>
  )
}
