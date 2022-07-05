import React from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'

const ShareButtonCSR = dynamic(() => import('./CSR'), { ssr: false })

const Container = styled.div`
  height: 2.75rem;
  min-width: 4.375rem;
`
export const ShareButton = () => {
  return (
    <Container>
      <ShareButtonCSR />
    </Container>
  )
}
