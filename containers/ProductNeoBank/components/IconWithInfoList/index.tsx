import React from 'react'
import styled from 'styled-components'
// import { ReactComponent as CustomerFocus } from 'assets/icons/Customer_focus.svg'
// import { ReactComponent as FullyAutomated } from 'assets/icons/Fully_automated.svg'
// import { ReactComponent as NewInnovations } from 'assets/icons/new_innovations.svg'
// import { ReactComponent as NoBranchNeeded } from 'assets/icons/No_branch_needed.svg'
import { BREAKPOINT } from 'assets/globalStyle'

const Container = styled.div`
  display: grid;

  margin: 3.75rem auto;
  justify-content: center;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(1, max-content);
  @media ${BREAKPOINT.tablet} {
    padding: 0 2rem;

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
  margin-bottom: 1rem;
  background-color: var(--primary-2);
  border-radius: 50%;
  @media ${BREAKPOINT.tablet} {
    margin-bottom: unset;
    background-color: transparent;
    border-radius: unset;
    padding: 0;
  }
`

const Item = styled.div`
  display: grid;
  max-width: 18rem;
  justify-items: start;
  grid-template-rows: 1fr auto auto;
  grid-gap: 0.25rem 4rem;
  grid-template-areas:
    'icon'
    'title'
    'desc';
  @media ${BREAKPOINT.tablet} {
    max-width: 20rem;
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
          {/* <NewInnovations /> */}
          <img src="/icons/new_innovations.svg" width="100" />
        </IconWrapper>
        <h5>Innovative Services & Ideas</h5>
        <p>Offering new innovative services and ideas such as “One account” where saving and current are merged. </p>
      </Item>
      <Item>
        <IconWrapper>
          {/* <CustomerFocus /> */}
          <img src="/icons/Customer_focus.svg" width="100" />
        </IconWrapper>
        <h5>Customers Focused</h5>
        <p>
          We are creating a platform where customers are fully focused and smooth transaction experiences are enhanced.
        </p>
      </Item>
      <Item>
        <IconWrapper>
          {/* <NoBranchNeeded /> */}
          <img src="/icons/No_branch_needed.svg" width="100" />
        </IconWrapper>
        <h5>No Physical Branch Needed</h5>
        <p>Mobile banking integrated with the goal of no essential physical branch ever needed.</p>
      </Item>
      <Item>
        <IconWrapper>
          {/* <FullyAutomated /> */}
          <img src="/icons/Fully_automated.svg" width="100" />
        </IconWrapper>
        <h5>Fully Automated</h5>
        <p>Designed to reduce opex, capex and personnel by fully automated. </p>
      </Item>
    </Container>
  )
}
