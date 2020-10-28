import { BREAKPOINT } from 'assets/globalStyle'
import React from 'react'
import styled from 'styled-components'
import { ProjectCard } from './components/ProjectCard'
const StoryContainer = styled.div`
  padding: 3.5625rem 0;
  @media ${BREAKPOINT.tablet} {
    margin: auto;
    max-width: 42.875rem;
    padding: 6.0625rem 0 3.5625rem;
  }
  @media ${BREAKPOINT.desktop} {
    max-width: none;
  }
`
const Topic = styled.h2`
  font-size: 2.125rem;
  @media ${BREAKPOINT.tablet} {
    font-size: 2.625rem;
    font-weight: bold;
    line-height: 1.33;
    letter-spacing: -1.2px;
  }
  @media ${BREAKPOINT.desktop} {
    font-size: 3.375rem;
    letter-spacing: -1.6px;
    font-weight: 600;
  }
`
const H5 = styled.h5`
  padding-top: 1.3125rem;
  line-height: 1.88;
  @media ${BREAKPOINT.tablet} {
    font-size: 1rem;
    letter-spacing: 0;
    padding-top: 2.5rem;
  }
`
const Hr = styled.hr`
  width: 328px;
  height: 2px;
  background-color: var(--grey-5);
  border: 0;
  margin: 2.1875rem 0;
  @media ${BREAKPOINT.tablet} {
    margin: 2.5rem 0;
  }
`
const ProjectContainer = styled.div`
  display: grid;
  grid-row-gap: 3rem;
  @media ${BREAKPOINT.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3.125rem;
  }
`
const Div = styled.div`
  @media ${BREAKPOINT.desktop} {
    margin-left: 20rem;
  }
`
export const SuccessStory = () => {
  return (
    <StoryContainer>
      <Topic>Success Stories</Topic>
      <Div>
        <H5>Blockfint project includes:</H5>
        <Hr />
        <ProjectContainer>
          {projectList?.map((project) => (
            <ProjectCard project={project} />
          ))}
        </ProjectContainer>
      </Div>
    </StoryContainer>
  )
}

const projectList = [
  {
    tags: ['National Platform'],
    name: 'Digital Identity for all',
    link: ''
  },
  {
    tags: ['Traceability', 'Agriculture'],
    name: 'Blockfint launches south-east asia’s first blockchain platform',
    link: ''
  },
  {
    tags: ['Traceability', 'National Platform'],
    name: 'Morchana - COVID-19 Traceability  (Part of Volunteer team)',
    link: ''
  },
  {
    tags: ['Financial', 'Digital Bond'],
    name: 'PDMO readies 2nd batch of 1-baht savings bonds',
    link: ''
  },
  {
    tags: ['Energy Trading', 'National Platform'],
    name: 'Blockfint ’s Gideon platform to power electricity trading and intelligent building pilot',
    link: ''
  },
  {
    tags: ['Financial', 'Digital Bond'],
    name: 'First Thai digital bond market platform',
    link: ''
  }
]
