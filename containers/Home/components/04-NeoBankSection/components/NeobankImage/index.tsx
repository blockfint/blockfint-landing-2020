import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import Tab from './components/Tab'
import Oval from './components/Oval'
import Euro from './components/Euro'
import Dollar from './components/Dollar'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
const Container = styled.div`
  position: relative;
  margin: 0 auto;
`
const ImageWrapper = styled.div`
  width: 100%;

  object-fit: contain;
  object-position: center;
`

const StyleTabTop = styled(Tab)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 25%;
  font-size: clamp(5rem, 20vw, 20rem);
`
const StyleTabBottom = styled(Tab)`
  position: absolute;
  left: 44%;
  /* transform: translateX(-50%); */
  top: 34%;
  font-size: clamp(5rem, 20vw, 20rem);
`

const StyleDollar = styled(Dollar)`
  position: absolute;
  bottom: 25%;
  left: 30%;
  font-size: clamp(2rem, 4vw, 4rem);
`

const StyleEuro = styled(Euro)`
  position: absolute;
  top: 15%;
  right: 32.5%;
  font-size: clamp(2rem, 4vw, 4rem);
`

const StyleOval = styled(Oval)`
  position: absolute;
  top: 27.5%;
  right: 30%;
  font-size: clamp(0.5rem, vw, 1rem);
`
const variantsParent = {
  open: {
    transition: { staggerChildren: 0.12, delayChildren: 0.4 }
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 }
  }
}
const variantsTab = {
  open: {
    opacity: 1
  },
  closed: {
    opacity: 0
  }
}
export const NeobankImage: React.FC = () => {
  const { ref, inView } = useInView()
  return (
    <Container ref={ref}>
      <Image src="/images/neobank.png" width={2060} height={960} />
      {inView && (
        <motion.div initial={'closed'} animate={'open'} variants={variantsParent}>
          <motion.div variants={variantsTab}>
            <StyleTabTop />
          </motion.div>
          <motion.div variants={variantsTab}>
            <StyleTabBottom />
          </motion.div>

          <motion.div variants={variantsTab}>
            <StyleDollar />
            <StyleEuro />
            <StyleOval />
          </motion.div>
        </motion.div>
      )}
    </Container>
  )
}
