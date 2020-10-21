import { Container } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
const Background = styled.div`
  text-align: center;
  padding: 5rem 1.5rem;
  
`
const StyledText = styled.h1`
  color: var(--primary);
`
export const TopPage = () => {
  return (
    <Background>
      {/*todo*/}
      <StyledText>Make Future Innovations Happen Today</StyledText>
      <h1>Through Our Products</h1>
    </Background>
  )
}
