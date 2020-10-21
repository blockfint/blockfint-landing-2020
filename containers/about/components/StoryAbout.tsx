import React from 'react'
import styled from 'styled-components'
const Topic = styled.h1`
  font-size: 34px;
`
const StyledText = styled.h1`
  font-size: 34px;
  color: var(--primary);
  padding-top: 0.25rem;
`
const StyledHr = styled.hr`
  width: 86px;
  height: 2px;
  background-color: #dddddd;
`
const StyledH4 = styled.h4`
  font-weight: normal;
  color: #333333;
`
const Div = styled.div`
  display: grid;
  grid-row-gap: 1.5rem;
  padding-top: 1.25rem;
`
const Background = styled.div`
  padding: 0 1.5rem 3.75rem;
`
export const StoryAbout = () => {
  return (
    <Background>
      <Topic>The Story About</Topic>
      <StyledText>Blockfint</StyledText>
      <Div>
        <h4>Founded in 2017</h4>
        <StyledHr />
        <StyledH4>Blockfint believes that technology belongs to all the people.</StyledH4>
        <StyledH4>
          We believe that everyone deserves the highest quality of technology for the sustainability and enrichment of
          life. With that faith being announced, our mission is to create a technology where all parties have equal
          accessibility.
        </StyledH4>
        <StyledH4>
          Our team fearlessly takes up challenging obstacles and searches for the optimum solution to promote the true
          betterment of humanity.
        </StyledH4>
      </Div>
    </Background>
  )
}
