import { ArrowLink } from 'components/ArrowLink'
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as CheckSvg } from 'assets/icons/check.svg'
import { useContactContext } from 'components/ContactDialog'

const Container = styled.div`
  margin: auto;
  display: grid;

  justify-items: center;
  text-align: center;
  grid-gap: 1.5rem;
`
const Texts = styled.div`
  justify-items: center;
  display: grid;
  text-align: center;
  grid-gap: 0.5rem;
`
export const Success: React.FC = () => {
  const { onClose } = useContactContext()
  return (
    <Container>
      <CheckSvg />
      <Texts>
        <h5>Success</h5>
        <p>We will contact you as soon as possible</p>
        <a onClick={onClose} style={{ cursor: 'pointer' }}>
          <ArrowLink>Back to Homepage</ArrowLink>
        </a>
      </Texts>
    </Container>
  )
}
