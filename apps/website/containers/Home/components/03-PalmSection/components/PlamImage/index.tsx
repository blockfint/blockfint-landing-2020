import React from 'react'
import PlamSvg from './components/PlamSvg'
import styled from 'styled-components'

const Content = styled.div`
  width: 100%;
`
const StylePlamSvg = styled(PlamSvg)`
  width: 100%;
`
export const PlamImage = () => {
  return (
    <Content>
      <StylePlamSvg />
    </Content>
  )
}
