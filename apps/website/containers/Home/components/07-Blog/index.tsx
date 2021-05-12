import { ThumbnailBlog } from '@blockfint/website/components/ThumbnailBlog'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { typography } from '@blockfint/website/styles/typography'
import Container from '@material-ui/core/Container'
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
const Heading = styled.h2`
  text-align: center;
`
const CustomContainer = styled(Container)`
  padding: 3.75rem 1rem;
  @media ${BREAKPOINT.tablet} {
    padding: 5rem 1.5rem;
  }
  @media ${BREAKPOINT.desktop} {
    padding: 3.75rem 1.5rem;
  }
`
const BlogWrapper = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-gap: 1.5rem;
  @media ${BREAKPOINT.tablet} {
    margin-top: 2.5rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${BREAKPOINT.desktop} {
    grid-column-gap: 3rem;
    .imageWrapper {
      height: 309px;
    }
  }
`
const Global = createGlobalStyle`
body{
  ${typography}
}
`
export const Blog: React.FC = () => {
  return (
    <>
      <Global />
      <CustomContainer maxWidth="lg">
        <Heading>Blog</Heading>
        <BlogWrapper>
          <ThumbnailBlog
            image="/images/kbtg.jpg"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
          />
          <ThumbnailBlog
            image="/images/kbtg.jpg"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
          />
        </BlogWrapper>
      </CustomContainer>
    </>
  )
}
