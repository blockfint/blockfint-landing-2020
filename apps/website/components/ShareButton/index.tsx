import React from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'

const ShareButtonCSR = dynamic(() => import('./components/ShareButtonCSR'), { ssr: false })

const Container = styled.div`
  border: 1px solid red;
  width: 500px;
  height: 200px;
`
export const ShareButton: React.FC = () => {
  return (
    <Container>
      <ShareButtonCSR />
    </Container>
  )
}
