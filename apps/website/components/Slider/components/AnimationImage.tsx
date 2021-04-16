import React from 'react'
import styled from 'styled-components'
import { BREAKPOINT } from '@blockfint/website/assets/globalStyle'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { wrap } from 'popmotion'
import Image from 'next/image'
const StyledMotionDiv = styled(motion.div)`
  position: absolute;
  max-width: 20.5rem;
  @media ${BREAKPOINT.tablet} {
    max-width: 42.875rem;
  }
`
// const StyledImage = styled(Image)`
//   width: 100%;
//   height: 11.5rem;
//   object-fit: cover;
//   @media ${BREAKPOINT.tablet} {
//     height: 24rem;
//   }
// `;
const Description = styled.h5`
  padding-top: 1.5rem;
  line-height: 1.88;
  @media ${BREAKPOINT.tablet} {
    padding-top: 2.5rem;
    font-size: 1.25rem;
    letter-spacing: -0.4px;
    font-weight: bold;
  }
`
const Hr = styled.hr`
  width: 20.5rem;
  height: 2px;
  background-color: #19213c;
  border: 0;
  @media ${BREAKPOINT.tablet} {
    width: 42.75rem;
  }
`
interface animationProps {
  variants: Variants
  images: string[]
  description: string[]
  type: string
  custom: any
  page: number
}
export const AnimationImage: React.FC<animationProps> = ({ variants, images, description, type, custom, page }) => {
  const imageIndex = wrap(0, images.length, page)
  const index = { left: 2, center: 1, right: 0 }
  return (
    <AnimatePresence initial={false} custom={custom}>
      <StyledMotionDiv
        key={page}
        custom={custom}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 }
        }}
      >
        <Image
          src={images[(imageIndex + index[type]) % images.length]}
          layout="responsive"
          width={800}
          height={450}
          loading="eager"
        />
        <Description>{description[(imageIndex + index[type]) % images.length]}</Description>
        <Hr />
      </StyledMotionDiv>
    </AnimatePresence>
  )
}
