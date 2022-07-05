import { Container } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
const Content = styled.div`
  display: grid;

  justify-items: center;
  align-items: center;
  margin: 4rem 0;
  max-height: 30rem;
`

export const ThinkerImage = () => {
  return (
    <Container maxWidth="lg">
      <Content>
        <Image src="/images/thinker-los-banner.png" width={3090} height={1410} quality={100} />
      </Content>
    </Container>
  )
}
