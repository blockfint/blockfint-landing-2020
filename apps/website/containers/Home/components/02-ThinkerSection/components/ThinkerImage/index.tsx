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

export const ThinkerImage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Content>
        <Image src="/images/thinker-los-banner.svg" width={1000} height={280} />
      </Content>
    </Container>
  )
}
