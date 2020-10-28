import { ArrowLink } from 'components/ArrowLink'
import styled from 'styled-components'
import React from 'react'

const BlueTitle = styled.h2`
  max-width: 60rem;
  color: var(--primary);
  margin-bottom: 1rem;
`
const Title = styled.h3`
  max-width: 60rem;
  margin-bottom: 1.5rem;
`
const Desc = styled.p`
  max-width: 60rem;
  line-height: 1.88;
  margin-bottom: 1.25rem;
`
const YoutubeWrapper = styled.div`
  width: 52.5rem;
  margin: 4rem auto;
`
const SecondaryTitle = styled.h5`
  width: 35rem;
`
interface Props {
  name: string
  title: string
  description: string

  linkHref?: string
  youtube?: string
  secondaryTittle?: string
}

export const ProductDetail: React.FC<Props> = ({ name, title, description, linkHref, secondaryTittle }) => {
  return (
    <div>
      <BlueTitle>{name}</BlueTitle>
      <Title>{title}</Title>
      <Desc>{description}</Desc>
      <ArrowLink href="https://gideon.energy" hrefLang="en">
        Go to website
      </ArrowLink>
      <YoutubeWrapper></YoutubeWrapper>
      <SecondaryTitle>
        The multi-dimensional energy trading platform where everyone can easily buy and sell electrical energy.
      </SecondaryTitle>
    </div>
  )
}
