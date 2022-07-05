import React from 'react'
import styled from 'styled-components'
import Thunder from './components/Thunder'
import Oval from './components/Oval'
import Triangle from './components/Triangle'
import { motion } from 'framer-motion'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
const StyleImage = styled.div`
  max-width: 95vw;
  width: 100%;
`
const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 48rem;
  margin: 0 auto;
  font-size: clamp(0.5rem, 2vw, 1rem);
`
const Floating = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const GideonImage  = () => {
  const { ref, inView } = useInView()
  return (
    <Container ref={ref}>
      <StyleImage>
        <Image src="/images/gideon-preview.png" width={2304} height={1050} alt="phone & tablet" />
      </StyleImage>

      {inView && (
        <Floating>
          <motion.div
            initial={{
              opacity: 0,
              position: 'relative',
              translateY: -20,
              height: '100%'
            }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              delay: 0.5
            }}
          >
            <IconWrapper bottom={0} left="50%">
              <Thunder color="#7CD55E" />
            </IconWrapper>
            <IconWrapper top={'10%'} left="54%" size="2em">
              <Oval color="#00C1FF" />
            </IconWrapper>
            <IconWrapper top={'40%'} left="82.5%" size="1.8em">
              <Oval color="#00C1FF" />
            </IconWrapper>
            <IconWrapper bottom={0} right="5%">
              <Triangle color="#FF7278" />
            </IconWrapper>
            <IconWrapper bottom={'10%'} left="17.5%" size="1.2em">
              <Oval color="#FF7278" />
            </IconWrapper>
            <IconWrapper top={'5%'} left="5%" size="3.5em">
              <Oval color="#FF7278" />
            </IconWrapper>
          </motion.div>
        </Floating>
      )}
    </Container>
  )
}

const Wrapper = styled(motion.div)`
  position: absolute;
`

type Position = {
  left?: number | string
  right?: number | string
  bottom?: number | string
  top?: number | string
  size?: string
}
const IconWrapper <Position> = ({ children, size = '4em', ...position }) => (
  <Wrapper
    initial={{ ...position, fontSize: size }}
    animate={{ rotate: [0, -30, 30, 0] }}
    transition={{
      type: 'spring',
      duration: 1,
      stiffness: 2000,
      delay: 1
    }}
  >
    {children}
  </Wrapper>
)
