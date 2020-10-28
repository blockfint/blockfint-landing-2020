import { Container } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import Tree from './components/Tree'
const Content = styled.div`
  display: grid;
  grid-template-columns: 60% auto;
  justify-items: center;
  align-items: center;
  margin: 4rem 0;
  max-height: 30rem;
`
const StyleTree = styled(Tree)`
  max-width: 100%;
  font-size: clamp(10rem, 20vw, 20rem);
`
const Image = styled.img`
  width: 100%;
  max-width: 25rem;
  object-fit: contain;
  align-self: flex-start;
`
export const ThinkerImage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Content>
        <StyleTree />
        <Image src="images/thinker-person.png" />
      </Content>
    </Container>
  )
}
