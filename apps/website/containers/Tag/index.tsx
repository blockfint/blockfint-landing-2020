import { BlogButton } from '@blockfint/website/components/Buttons'
import { ContactBanner } from '@blockfint/website/components/ContactBanner'
import { ThumbnailBlog } from '@blockfint/website/components/ThumbnailBlog'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import Container from '@material-ui/core/Container'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
const Heading = styled.div`
  text-align: center;
  margin-top: 1rem;
  @media ${BREAKPOINT.tablet} {
    margin-top: 2.5rem;
  }
  @media ${BREAKPOINT.desktop} {
    margin-top: 3.75rem;
  }
`
const TagText = styled.h2`
  color: var(--primary);
`
const BlogWrapper = styled.div`
  margin: 2.5rem 0;
  display: grid;
  grid-gap: 2.5rem 1.5rem;
  @media ${BREAKPOINT.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${BREAKPOINT.desktop} {
    margin: 5rem 3.75rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3.75rem 3rem;
  }
`
const ButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  @media ${BREAKPOINT.desktop} {
    margin-bottom: 6.25rem;
  }
`
export const Tag = () => {
  const router = useRouter()
  const tagName = router.asPath.split('tag/')[1]
  const output = tagName.charAt(0).toUpperCase() + tagName.slice(1)
  return (
    <>
      <Container maxWidth="lg">
        <Heading>
          <h6>Tag</h6>
          <TagText>{output}</TagText>
        </Heading>

        <BlogWrapper>
          <ThumbnailBlog blogLink="#t" tagLink="" title="A" description="B" publishDate="2020" />
          <ThumbnailBlog blogLink="" tagLink="" title="A" description="B" publishDate="2020" />
          <ThumbnailBlog blogLink="" tagLink="" title="A" description="B" publishDate="2020" />
          <ThumbnailBlog blogLink="" tagLink="" title="A" description="B" publishDate="2020" />
        </BlogWrapper>
        <ButtonWrapper>
          <BlogButton>See more</BlogButton>
        </ButtonWrapper>
      </Container>
      <ContactBanner />
    </>
  )
}
