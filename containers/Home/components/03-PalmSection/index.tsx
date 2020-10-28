import { PrimaryButton } from 'components/Buttons'
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as PalmSmall } from 'assets/logos/palm-small.svg'
import { Container } from '@material-ui/core'
import { BREAKPOINT } from 'assets/globalStyle'
import { PlamImage } from './components/PlamImage'
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

export const PalmSection: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Content>
        <PlamImage />
        <Title style={{ color: 'var(--primary)' }}>Agri Trac</Title>
        <Title>Advance Tracablity for Agricuture Products</Title>
        <Desc>
          World’s first blockchain based platform for agricuture products traceability. For sustainability of Thai
          farmer, which currently apply on palm oil product.
        </Desc>
        <PrimaryButton logo={<PalmSmall />} background={'var(--gradient-palm)'}>
          Read more
        </PrimaryButton>
      </Content>
    </Container>
  )
}
