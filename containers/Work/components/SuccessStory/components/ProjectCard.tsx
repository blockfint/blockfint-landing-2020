import React from 'react'
import styled from 'styled-components'
import { ChipTag } from 'components/ChipTag'
import { ArrowLink } from 'components/ArrowLink'
import { BREAKPOINT } from 'assets/globalStyle'
import Link from 'next/link'
const Box = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-row-gap: 0.25rem;
  @media ${BREAKPOINT.tablet} {
  }
`
const TagGroup = styled.div`
  display: inline-flex;
  padding-bottom: 0.75rem;
`
const Title = styled.h4`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.8;
  @media ${BREAKPOINT.tablet} {
    font-size: 1.25rem;
    letter-spacing: -0.4px;
    width: 18.75rem;
  }
`
interface Props {
  project: {
    tags: string[]
    title: string
    link: string
  }
}
export const ProjectCard: React.FC<Props> = ({ project: { tags, title, link } }) => {
  return (
    <Box>
      <TagGroup>
        {tags?.map(
          (
            tag: 'Traceability' | 'National Platform' | 'Agriculture' | 'Financial' | 'Digital Bond' | 'Energy Trading',
            index
          ) => (
            <ChipTag label={tag} style={{ marginRight: '0.5rem' }} key={tag + index} />
          )
        )}
      </TagGroup>
      <Title>{title}</Title>
      <Link href={link} passHref>
        <ArrowLink>See the project</ArrowLink>
      </Link>
    </Box>
  )
}
