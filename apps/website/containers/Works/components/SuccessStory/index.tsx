import React from 'react';
import styled from 'styled-components';
import { BREAKPOINT } from '@blockfint/website/assets/globalStyle';
import { ProjectCard } from './components/ProjectCard';
import { projectInfos } from '@blockfint/website/contents/projects';

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
`;
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
`;
const H5 = styled.h5`
  padding-top: 1.3125rem;
  line-height: 1.88;
  @media ${BREAKPOINT.tablet} {
    font-size: 1rem;
    letter-spacing: 0;
    padding-top: 2.5rem;
  }
`;
const Hr = styled.hr`
  width: 328px;
  height: 2px;
  background-color: var(--grey-5);
  border: 0;
  margin: 2.1875rem 0;
  @media ${BREAKPOINT.tablet} {
    margin: 2.5rem 0;
  }
`;
const ProjectContainer = styled.div`
  display: grid;
  grid-row-gap: 3rem;
  @media ${BREAKPOINT.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3.125rem;
  }
`;
const Div = styled.div`
  @media ${BREAKPOINT.desktop} {
    margin-left: 20rem;
  }
`;
export const SuccessStory = () => {
  const projectData = projectInfos;
  return (
    <StoryContainer>
      <Topic>Success Stories</Topic>
      <Div>
        <H5>Blockfint project includes:</H5>
        <Hr />
        <ProjectContainer>
          {projectPath?.map(({ projectId, link }) => {
            const { title, tags } = projectData[projectId];
            return (
              <ProjectCard project={{ title, link, tags }} key={projectId} />
            );
          })}
          {}
        </ProjectContainer>
      </Div>
    </StoryContainer>
  );
};

const projectPath = [
  {
    projectId: 'ndid',
    link: '/projects/ndid',
  },
  {
    projectId: 'fiderser',
    link: '/projects/fiderser',
  },
  {
    projectId: 'thila',
    link: '/projects/thila',
  },
  {
    projectId: 'cu',
    link: '/projects/cu',
  },
  {
    projectId: 'tbma',
    link: '/projects/tbma',
  },
];
