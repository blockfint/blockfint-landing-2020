import { PrimaryButton } from 'components/Buttons'
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as GideonSmall } from 'assets/logos/gideon-small.svg'
const Container = styled.div`
  margin: 10.25rem 0;
  text-align: center;
`
const Title = styled.h5`
  line-height: 1.46;
`
const Desc = styled.p`
  margin: 0.5rem 0 2.5rem;
`
export const GideonSection: React.FC = () => {
  return (
    <Container>
      <img src="images/gideon-preview.png" />
      <Title style={{ color: 'var(--primary)' }}>Gideon</Title>
      <Title>Energy Trading Without Barriers</Title>
      <Desc>
        Next-generation electricity trading platform enabling market participants to transact directly leading to better
        efficiencies.
      </Desc>
      <PrimaryButton logo={<GideonSmall />} background={'var(--gradient-gideon)'}>
        Read more
      </PrimaryButton>
    </Container>
  )
}
