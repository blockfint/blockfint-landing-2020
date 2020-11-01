import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Footer } from './Footer'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
const Container = styled.div`
  max-width: 100vw;
  height: auto;
`
const HeadContainer = styled(motion.div)`
  position: sticky;
  top: 0;
  z-index: 500;
`
const RelativeBox = styled.div`
  position: relative;
`
interface Props {
  transparent?: boolean
  id?: string
}
const YRangeTrigger = [0, 64]
export const Layout: React.FC<Props> = ({ children, transparent = false, id }) => {
  const { scrollY } = useViewportScroll()
  // const background = useTransform(scrollY, YRangeTrigger, ['rgba(255,255,255,0)', 'rgba(255,255,255,1)'])
  const boxShadow = useTransform(scrollY, YRangeTrigger, [
    '0 0 14px rgba(217, 225, 233, 0)',
    '0 0 14px rgba(217, 225, 233, 0.24)'
  ])
  // const color = useTransform(scrollY, YRangeTrigger, ['#ffffff', 'rgb(25, 33, 60)'])
  const changeTransparent = useTransform(scrollY, YRangeTrigger, [0, 64])
  const [transparentValue, setTransparent] = useState(transparent)

  useEffect(() => {
    if (scrollY.get() < 20) {
      setTransparent(transparent)
    } else {
      setTransparent(false)
    }
  }, [changeTransparent])
  changeTransparent.onChange((lastest) => {
    if (lastest < 20) {
      setTransparent(transparent)
    } else {
      setTransparent(false)
    }
  })
  return (
    <>
      {/* <HeadContainer style={transparent && { background, boxShadow, color }}> */}
      <HeadContainer style={transparent && { boxShadow }}>
        <RelativeBox>
          <Navbar transparent={transparentValue} />
        </RelativeBox>
      </HeadContainer>
      <Container>{children}</Container>
      <Footer />
    </>
  )
}
