import { BREAKPOINT } from 'assets/globalStyle'
import React from 'react'
import styled from 'styled-components'
const Group = styled.div`
  display: grid;
  grid-template-areas: 'image .' 'image .';
  grid-template-columns: max-content;
  grid-column-gap: 1.25rem;
  width: 13.75rem;
  @media ${BREAKPOINT.tablet} {
    grid-column-gap: 0.5rem;
    width: 11.75rem;
  }
`
const Image = styled.img`
  grid-area: image;
  width: 6.25rem;
  @media ${BREAKPOINT.tablet} {
    width: 5rem;
  }
`
const Text = styled.h4`
  color: var(--primary);
  @media ${BREAKPOINT.tablet} {
    font-size: 16px;
  }
`
const StyledNumber = styled.h1`
  align-self: end;
  font-size: 34px;
`
const Background = styled.div`
  padding: 3.75rem 4.25rem;
  display: grid;
  grid-template-columns: max-content;
  grid-row-gap: 2.5rem;
  justify-content: center;
  @media ${BREAKPOINT.tablet} {
    grid-template-columns: repeat(3, max-content);
    grid-column-gap: 2.5rem;
  }
  @media ${BREAKPOINT.desktop} {
    grid-column-gap: 5rem;
  }
`
export const InfoGraphic = () => {
  return (
    <Background>
      <Group>
        {/*todo*/}
        <Image src="/employer.png" alt="employer" />
        <StyledNumber>60+</StyledNumber>
        <Text>Employee</Text>
      </Group>
      <Group>
        <Image src="/product.svg" alt="product" />
        <StyledNumber>4</StyledNumber>
        <Text>Products</Text>
      </Group>
      <Group>
        <Image src="/partner.png" alt="partner" />
        <StyledNumber>10+</StyledNumber>
        <Text>Projects</Text>
      </Group>
    </Background>
  )
}
