import React from 'react'
import styled from 'styled-components'
import { BREAKPOINT } from 'assets/globalStyle'
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
const StyledH6 = styled.h6`
  font-weight: normal;
  color: #333333;
  line-height: 1.88;
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
export const StoryAbout = () => {
  return (
    <Background>
      <div>
        <Topic>The Story About</Topic>
        <Topic style={{ color: 'var(--primary)', paddingTop: '0.25rem' }}>Blockfint</Topic>
      </div>
      <Div>
        <h6 style={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.88 }}>Founded in 2017</h6>
        <StyledHr />
        <StyledH6>Blockfint believes that technology belongs to all the people.</StyledH6>
        <StyledH6>
          We believe that everyone deserves the highest quality of technology for the sustainability and enrichment of
          life. With that faith being announced, our mission is to create a technology where all parties have equal
          accessibility.
        </StyledH6>
        <StyledH6>
          Our team fearlessly takes up challenging obstacles and searches for the optimum solution to promote the true
          betterment of humanity.
        </StyledH6>
      </Div>
    </Background>
  )
}
