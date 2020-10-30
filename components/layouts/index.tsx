import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Footer } from './Footer'
const Background = styled.div`
  overflow: hidden;
`
export const Layout = ({ children }) => {
  return (
    <Background>
      <Navbar transparent={false} />
      {children}
      <Footer />
    </Background>
  )
}
