import * as React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { wrap } from 'popmotion'
// import { Button } from '@material-ui/core'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { useWindow } from '@blockfint/website/hooks/useWindow'
import { AnimationImage } from './components/AnimationImage'
import { variantsRight, variants, variantsLeft } from './components/variants'
import { AnimateSharedLayout } from 'framer-motion'
const Background = styled.div`
  background-color: #eff6f7;
  padding-bottom: 6.25rem;
  @media ${BREAKPOINT.desktop} {
    padding-bottom: 0;
    margin-bottom: -5rem;
  }
`
const SectionName = styled.h2`
  font-size: 2.125rem;
  text-align: center;
  padding: 3.75rem 4.25rem;
  @media ${BREAKPOINT.desktop} {
  }
`
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85vw;
  height: 15.25rem;
  margin: 0 auto;
  @media ${BREAKPOINT.tablet} {
    width: 93vw;
    height: 29.25rem;
  }
  @media ${BREAKPOINT.desktop} {
    width: 35vw;
    height: 47rem;
  }
`
const StyledButton = styled.div`
  button {
    height: 60px;
    background-color: #f7941d;
    border-radius: 50%;
    :hover {
      background-color: #f5a021;
    }
  }
  transform: scale(0.6);
  z-index: 3;
  position: absolute;
  top: 4.5rem;
  @media ${BREAKPOINT.tablet} {
    top: 11.5rem;
    transform: scale(1);
  }

  &.next {
    right: -1.1rem;
    @media ${BREAKPOINT.desktop} {
      top: 19rem;
      right: -22rem;
    }
  }
  &.prev {
    left: -1.1rem;
    @media ${BREAKPOINT.desktop} {
      top: 19rem;
      left: -22rem;
    }
  }
`
const ArrowButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 3.25rem;
  height: 3.25rem;
  background-color: var(--secondary);
  border-radius: 50%;
  @media ${BREAKPOINT.desktop} {
    width: 3.75rem;
    height: 3.75rem;
  }
`
interface Props {
  sectionName: string
  images: string[]
  description: string[]
}
export const Slider: React.FC<Props> = ({ sectionName, images, description }) => {
  const [[page, direction], setPage] = useState([0, 0])
  const paginate = (newDirection: number) => {
    setPage([page - newDirection, newDirection])
  }
  const windowSize = useWindow()
  let position: number
  if (windowSize > 600) {
    if (windowSize < 960) {
      position = 710
    } else {
      position = 820
    }
  } else {
    position = 340
  }
  const transformDesktop = windowSize > 960 ? { y: -100, scale: 1.18 } : { y: 0, scale: 1 }
  const positionRightPic = position
  const positionLeftPic = position * -1
  const listItemProps = [
    {
      variants: variantsLeft,
      type: 'left',
      custom: { positionLeftPic, transformDesktop },
      page: page
    },
    {
      variants: variants,
      type: 'center',
      custom: { transformDesktop },
      page: page
    },
    {
      variants: variantsRight,
      type: 'right',
      custom: { positionRightPic, transformDesktop },
      page: page
    }
  ]
  return (
    <Background>
      <SectionName>{sectionName}</SectionName>
      <Container>
        <AnimateSharedLayout>
          {listItemProps?.map((Item, index) => {
            return (
              <AnimationImage
                key={index}
                variants={Item.variants}
                images={images}
                description={description}
                type={Item.type}
                custom={{ direction, ...Item.custom }}
                page={Item.page}
              />
            )
          })}
        </AnimateSharedLayout>
        <StyledButton className="next" onClick={() => paginate(1)}>
          <ArrowButton>
            <img src="/icons/right-arrow.svg" alt="rightarrow" />
          </ArrowButton>
        </StyledButton>
        <StyledButton className="prev" onClick={() => paginate(-1)}>
          <ArrowButton>
            <img src="/icons/left-arrow.svg" alt="leftarrow" />
          </ArrowButton>
        </StyledButton>
      </Container>
    </Background>
  )
}
