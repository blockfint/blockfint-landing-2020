import React from 'react'
import styled from 'styled-components'
import { Container } from '@material-ui/core'
import { PostCard } from 'components/PostCard'
import { BREAKPOINT } from 'assets/globalStyle'
import { SuccessStory } from './components/SuccessStory'
import { ContactBanner } from 'components/ContactBanner'
const TopText = styled.h2`
  text-align: center;
  font-size: 2.125rem;
  @media ${BREAKPOINT.tablet} {
    font-size: 3.375rem;
    line-height: 1.22;
  }
  @media ${BREAKPOINT.desktop} {
  }
`
const TopPage = styled.div`
  padding: 6.25rem 0;
`
const CardContainer = styled.div`
  display: grid;
  grid-row-gap: 1.5rem;
  justify-items: center;
  @media ${BREAKPOINT.desktop} {
    grid-template-columns: repeat(2, max-content);
    grid-gap: 1.875rem;
  }
`
export const Works = () => {
  return (
    <>
      <Container>
        <TopPage>
          <TopText style={{ color: 'var(--primary)' }}>Our works</TopText>
          <TopText>The Products That Challenge The World</TopText>
        </TopPage>
        <CardContainer>
          {projects?.map(({ id, name, image, description, link }) => {
            return <PostCard key={id} title={name} imgSrc={image} desc={description} link={link} />
          })}
        </CardContainer>
        <SuccessStory />
      </Container>
      <ContactBanner />
    </>
  )
}

const projects = [
  {
    id: 'gideon',
    name: 'Gideon',
    image: '/images/gideon-card.png',
    description: 'Energy Trading Without Barriers',
    link: '/products/gideon'
  },
  {
    id: 'neo_bank',
    name: 'Neo Bank',
    image: '/images/neobank-card.png',
    description: 'The New era of Banking Services',
    link: '/products/neobank'
  },
  {
    id: 'thinker',
    name: 'Thinker',
    image: '/images/thinker-card.png',
    description: 'Make Rapid, Optimized & Data Driven Decision.',
    link: '/products/thinker'
  },
  {
    id: 'agritrac',
    name: 'Agri Trac',
    image: '/images/agritrac-card.png',
    description: 'Advance Traceability for Agriculture Products.',
    link: '/products/agri-trac'
  }
]
