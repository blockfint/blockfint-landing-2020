import React from 'react'
import styled from 'styled-components'
import { ReactComponent as BlockLeft } from '@blockfint/website/assets/bg/block-left.svg'
import { ReactComponent as BlockRight } from '@blockfint/website/assets/bg/block-right.svg'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'

const RelativeContainer = styled.div`
  position: relative;
  margin-top: -5rem;
  overflow: hidden;
  /* @media ${BREAKPOINT.tablet} {
    min-height: 62rem;
  }
  @media ${BREAKPOINT.desktop} {
    min-height: 100vh;
  } */
  :before {
    content: ' ';
    z-index: -2;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #ffffff;
  }
`
const MarginContainer = styled.div`
  margin-top: 5rem;
`
const StyledBlockLeft = styled(BlockLeft)`
  position: absolute;
  top: -6px;
  font-size: clamp(10.725rem, 20vw, 17rem);
  z-index: -1;
  color: #f4f4f4;
  @media ${BREAKPOINT.desktop} {
    top: -14px;
  }
`
const StyledBlockRight = styled(BlockRight)`
  color: #f4f4f4;
  position: absolute;
  top: 21.25rem;
  right: 0;
  z-index: -1;
  font-size: clamp(10.725rem, 20vw, 17rem);
  @media ${BREAKPOINT.tablet} {
    top: 17.5rem;
  }
  @media ${BREAKPOINT.desktop} {
    top: 10rem;
  }
`

export const Background = (children: React.ReactNode | Element[] | any) => {
  return (
    <RelativeContainer>
      <MarginContainer>
        {children}
        <StyledBlockLeft />
        <StyledBlockRight />
      </MarginContainer>
    </RelativeContainer>
  )
}
