import React from 'react'
import styled from 'styled-components'
import { Container } from '@material-ui/core'
import { PostCard } from 'components/PostCard'
import { BREAKPOINT } from 'assets/globalStyle'
const TopText = styled.h2`
  text-align: center;
  font-size: 2.125rem;
`
const TopPage = styled.div`
  padding: 6.25rem 0;
`
const CardContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  @media ${BREAKPOINT.desktop} {
    grid-template-columns: repeat(2, 36.25rem);
    grid-gap: 1.125rem;
  }
`
export const Work = () => {
  return (
    <Container>
      <TopPage>
        <TopText style={{ color: 'var(--primary)' }}>Our work</TopText>
        <TopText>The Products That Challenge The World</TopText>
      </TopPage>
      <CardContainer>
        {projects?.map(({ id, name, image, description, link }) => {
          return <PostCard key={id} title={name} imgSrc={image} desc={description} link={link} />
        })}
      </CardContainer>
    </Container>
  )
}

const projects = [
  {
    id: 'gideon',
    name: 'Gideon',
    image: '/images/gideon-card.png',
    description: 'Energy Trading Without Barriers',
    link: ''
  },
  {
    id: 'neo_bank',
    name: 'Neo Bank',
    image: '/images/neobank-card.png',
    description: 'The New era of Banking Services',
    link: ''
  },
  {
    id: 'thinker',
    name: 'Thinker',
    image: '/images/thinker-card.png',
    description: 'Make Rapid, Optimized & Data Driven Decision.',
    link: ''
  },
  {
    id: 'agritrac',
    name: 'Agri Trac',
    image: '/images/agritrac-card.png',
    description: 'Advance Traceability for Agriculture Products.',
    link: ''
  }
]
