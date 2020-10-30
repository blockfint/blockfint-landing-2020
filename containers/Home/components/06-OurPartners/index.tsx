import { Container } from '@material-ui/core'
import { BREAKPOINT } from 'assets/globalStyle'
import React from 'react'
import styled from 'styled-components'

const Title = styled.h3`
  margin-top: 3.75rem;
  @media ${BREAKPOINT.tablet} {
    margin-top: 1.625rem;
  }
  text-align: center;
`
const PartnerWrapper = styled.div`
  margin: 1.875rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
const Logo = styled.img`
  filter: grayscale(1);
  flex: 0 1 150px;
  margin: 2.5rem 0;
  justify-content: space-between;
  // width: 5rem;
  height: 2.25rem;
  @media ${BREAKPOINT.tablet} {
    margin: 1.875rem 1.5rem;
    width: 9.375rem;
    height: 2.75rem;
  }

  object-fit: contain;
`
export const OurPartners: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Title>Our Partners and Customers</Title>
      <PartnerWrapper>
        <Logo src={'images/partners/AF.png'} />
        <Logo src={'images/partners/BMA.png'} />
        <Logo src={'images/partners/CU.png'} />
        <Logo src={'images/partners/EA.png'} />
        <Logo src={'images/partners/Fiderser.png'} />
        <Logo src={'images/partners/KA.svg'} />
        <Logo src={'images/partners/KTB.png'} />
        <Logo src={'images/partners/Ndid.png'} />
        <Logo src={'images/partners/PEA.png'} />
        <Logo src={'images/partners/SE.svg'} />
        <Logo src={'images/partners/OS.png'} />
      </PartnerWrapper>
    </Container>
  )
}
