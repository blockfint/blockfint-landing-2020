import { BREAKPOINT } from '@blockfint/website/assets/globalStyle'
import { Benefit } from '@blockfint/website/contents/projects'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(5rem, 12.5rem));
  justify-content: space-between;
  grid-gap: 1.5rem 0;
  max-width: 50rem;
  margin: 2.5rem 0;
  @media ${BREAKPOINT.tablet} {
    grid-template-columns: repeat(3, minmax(5rem, 12.5rem));
  }
`

const OvalWrapper = styled.div`
  background-color: var(--border-color);
  padding: 2rem;
  width: 1em;
  height: 1em;
  font-size: 3.75rem;
  box-sizing: content-box;
  border-radius: 50%;
  margin-bottom: 1rem;
`
const OvalIcon = styled.img`
  position: relative;

  width: 3.75rem;
`
const Title = styled.h5`
  line-height: 1.46;
  letter-spacing: -1px;
  margin: 0.25rem;
`

const Desc = styled.p`
  line-height: 1.88;
`
export const Benefits: React.FC<{ benefits: Benefit[] }> = ({ benefits }) => {
  const { t } = useTranslation()
  return (
    <Container>
      {benefits.map(({ iconSrc, title, description }) => (
        <div key={title}>
          <OvalWrapper>
            <OvalIcon src={`/images/partners/iconBenefits/${iconSrc}`} />
          </OvalWrapper>
          <Title>{t(`project:${title}`)}</Title>
          <Desc>{t(`project:${description}`)}</Desc>
        </div>
      ))}
    </Container>
  )
}
