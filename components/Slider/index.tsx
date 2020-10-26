import * as React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useMotionValue } from 'framer-motion'
import { wrap } from 'popmotion'
import { Button } from '@material-ui/core'
import { BREAKPOINT, SIZE } from 'assets/globalStyle'
import { useWindow } from 'hooks/useWindow'
// import { images } from "./image-data";
const images = ['/images/slider.png', '/images/slider2.png', '/images/slider3.png']
const description = ['Enjoying free lunch', 'Enjoying free lunch', 'Enjoying free lunch']
const variantsLeft = {
  enter: (custom) => {
    return {
      x: custom.direction > 0 ? 0 : -15,
      opacity: 1
    }
  },
  center: (custom) => {
    return {
      x: custom.positionLeftPic,
      zIndex: 1,
      opacity: 1
    }
  },
  exit: (custom) => {
    return {
      x: custom.direction > 0 ? -15 : 0,
      opacity: 0,
      zIndex: 0
    }
  }
}
const variants = {
  enter: (custom) => {
    return {
      x: custom.direction > 0 ? -277 : 323,
      opacity: 1
    }
  },
  center: (custom) => {
    console.log(custom)
    return {
      opacity: 1,
      zIndex: 1,
      scale: custom.transformDesktop.scale,
      y: custom.transformDesktop.y,
      x: 0
    }
  },
  exit: (custom) => {
    return {
      x: custom.direction > 0 ? 323 : -277,
      opacity: 0,
      zIndex: 0
    }
  }
}
const variantsRight = {
  enter: (custom) => {
    return {
      x: custom.direction > 0 ? 61 : 600,
      opacity: 1
    }
  },
  center: (custom) => {
    console.log('in', custom.positionRightPic)
    return {
      opacity: 1,
      zIndex: 1,
      x: custom.positionRightPic
    }
  },
  exit: (custom) => {
    return {
      x: custom.direction < 0 ? 600 : 61,
      opacity: 0,
      zIndex: 0
    }
  }
}
const StyledImage = styled.img`
  width: 100%;
`
const StyledMotionDiv = styled(motion.div)`
  position: absolute;
  max-width: 20.5rem;
  @media ${BREAKPOINT.tablet} {
    max-width: 42.875rem;
  }
  @media ${BREAKPOINT.desktop} {
    /* max-width: 52rem; */
  }
`
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 328px;
  height: 15.25rem;
  margin: 0 auto;
  @media ${BREAKPOINT.tablet} {
    width: 686px;
    height: 386px;
  }
  @media ${BREAKPOINT.desktop} {
    width: 830px;
    height: 38rem;
  }
`
const StyledButton = styled.div`
  button {
    width: 60px;
    height: 60px;
    background-color: #f7941d;
    border-radius: 50%;
    :hover {
      background-color: #f5a021;
    }
  }
`
const ButtonGroup = styled.div`
  position: absolute;
  z-index: 2;
  display: inline-flex;
`
const Description = styled.h5`
  font-size: 1rem;
  line-height: 1.88;
`
export const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = wrap(0, images.length, page)
  const paginate = (newDirection: number) => {
    setPage([page - newDirection, newDirection])
  }
  const windowSize = useWindow()
  let position: number
  if (windowSize > 600) {
    if (windowSize < 960) {
      position = 710
    } else {
      position = 900
    }
  } else {
    position = 340
  }

  const transformDesktop = windowSize > 960 ? { y: -100, scale: 1.18 } : { y: 0, scale: 1 }
  const positionRightPic = position
  const positionLeftPic = position * -1
  return (
    <Container>
      <AnimatePresence initial={false} custom={{ direction, positionLeftPic }}>
        <StyledMotionDiv
          key={page}
          custom={{ direction, positionLeftPic }}
          variants={variantsLeft}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
        >
          <StyledImage src={images[imageIndex % images.length]} />
          <Description>{description[imageIndex % images.length]}</Description>
        </StyledMotionDiv>
      </AnimatePresence>
      <AnimatePresence initial={true} custom={{ direction, transformDesktop }}>
        <StyledMotionDiv
          key={page + 1}
          // src={images[(imageIndex + 1) % images.length]}
          custom={{ direction, transformDesktop }}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
        >
          <StyledImage src={images[(imageIndex + 1) % images.length]} />
          <Description>{description[(imageIndex + 1) % images.length]}</Description>
        </StyledMotionDiv>
      </AnimatePresence>
      <AnimatePresence initial={true} custom={{ direction, positionRightPic }}>
        <StyledMotionDiv
          key={page}
          // src={images[(imageIndex + 2) % images.length]}
          custom={{ direction, positionRightPic }}
          variants={variantsRight}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
        >
          <StyledImage src={images[(imageIndex + 2) % images.length]} />
          <Description>{description[(imageIndex + 2) % images.length]}</Description>
        </StyledMotionDiv>
      </AnimatePresence>
      <ButtonGroup>
        <StyledButton className="next" onClick={() => paginate(1)}>
          <Button>next</Button>
        </StyledButton>
        <StyledButton className="prev" onClick={() => paginate(-1)}>
          <Button>prev</Button>
        </StyledButton>
      </ButtonGroup>
    </Container>
  )
}
// const swipeConfidenceThreshold = 10000
// const swipePower = (offset: number, velocity: number) => {
//   return Math.abs(offset) * velocity
// }
