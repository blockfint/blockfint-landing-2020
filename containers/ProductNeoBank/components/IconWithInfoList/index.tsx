import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Loan } from 'assets/icons/loan.svg'
import { ReactComponent as Tasking } from 'assets/icons/tasking.svg'
import { ReactComponent as MobileBanking } from 'assets/icons/mobilebanking.svg'
import { ReactComponent as MicroFinance } from 'assets/icons/microfinance.svg'
import { BREAKPOINT } from 'assets/globalStyle'

const Container = styled.div`
  display: grid;

  margin: 3.75rem auto;
  padding: 0 2rem;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(1, max-content);
  @media ${BREAKPOINT.tablet} {
    justify-content: center;
    grid-gap: 4.75rem;
  }

  @media ${BREAKPOINT.desktop} {
    grid-gap: 6.125rem 4rem;
    justify-content: flex-start;
    grid-template-columns: repeat(2, max-content);
  }
`

const IconWrapper = styled.div`
  grid-area: icon;
  padding: 2rem;
  background-color: var(--primary-2);
  border-radius: 50%;
  @media ${BREAKPOINT.tablet} {
    background-color: transparent;
    border-radius: unset;
    padding: 0;
  }
`

const Item = styled.div`
  display: grid;
  max-width: 20rem;
  justify-items: center;
  text-align: center;
  grid-template-rows: 9.75rem auto auto;
  grid-gap: 0.25rem 4rem;
  grid-template-areas:
    'icon'
    'title'
    'desc';
  @media ${BREAKPOINT.tablet} {
    max-width: unset;
    grid-template-columns: 6.25rem 17rem;
    grid-template-rows: unset;
    grid-template-areas:
      'icon title'
      'icon desc';
  }

  /* @media ${BREAKPOINT.desktop} {
    grid-template-columns: repeat(2, max-content);
  } */

  h5 {
    grid-area: title;
  }
  p {
    grid-area: desc;
    line-height: 1.88;
  }
`
export const IconWithInfoList: React.FC = () => {
  return (
    <Container>
      <Item>
        <IconWrapper>
          <Tasking />
        </IconWrapper>

        <h5>Automate Tasking</h5>
        <p>All routine activities e.g. report & reconciliation will be effortlessly automated </p>
      </Item>
      <Item>
        <IconWrapper>
          <Loan />
        </IconWrapper>
        <h5>Loan Origination</h5>
        <p>LOS Software bundles platform for loan processing and approval. No additional software needed</p>
      </Item>
      <Item>
        <IconWrapper>
          <MicroFinance />
        </IconWrapper>
        <h5>Microfinance</h5>
        <p>Enhance saving/lending services to create effective microfinance from configure model</p>
      </Item>
      <Item>
        <IconWrapper>
          <MobileBanking />
        </IconWrapper>
        <h5>Mobile Banking</h5>
        <p>Revolutionary banking experiences where physical branches are eliminated</p>
      </Item>
    </Container>
  )
}
