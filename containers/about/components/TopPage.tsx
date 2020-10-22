import { Container } from '@material-ui/core'
import { BREAKPOINT } from 'assets/globalStyle'
import React from 'react'
import styled from 'styled-components'
const Background = styled.div`
  text-align: center;
  padding: 5rem 1.5rem;
  @media ${BREAKPOINT.tablet} {
    padding: 6.25rem 2.5rem;
  }
`
const StyledText = styled.h1`
  color: var(--primary);
  font-size: 54px;
  letter-spacing: -1.6px;
`
export const TopPage = () => {
  return (
    <Background>
      {/*todo*/}
      <StyledText>Make Future Innovations Happen Today</StyledText>
      <h1 style={{ fontSize: '54px', letterSpacing: '-1.6px' }}>Through Our Products</h1>
    </Background>
  )
}
