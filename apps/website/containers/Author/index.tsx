import React from 'react'
import styled from 'styled-components'
import { ContactBanner } from '@blockfint/website/components/ContactBanner'
import { AuthorBanner } from '@blockfint/website/components/AuthorBanner'
import Container from '@material-ui/core/Container/Container'
import { ThumbnailBlog } from '@blockfint/website/components/ThumbnailBlog'
import { BlogButton } from '@blockfint/website/components/Buttons'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
const AuthorWrapper = styled.div`
  padding: 2.5rem 0 3.75rem;
  @media ${BREAKPOINT.tablet} {
    padding: 2.5rem 5rem 3.75rem;
  }
  @media ${BREAKPOINT.desktop} {
    padding: 5rem 5rem;
  }
`
const Background = styled.div`
  background-color: #f0f5f5;
  padding: 3.75rem 0;
  @media ${BREAKPOINT.desktop} {
    padding: 5rem;
  }
`
const BlogWrapper = styled.div`
  padding: 3.75rem 0 2.5rem;
  display: grid;
  grid-row-gap: 2.5rem;
  @media ${BREAKPOINT.tablet} {
    padding: 2.5rem 0;
    grid-row-gap: 1.5rem;
  }
  @media ${BREAKPOINT.desktop} {
    padding: 6.25rem 0;
    grid-row-gap: 3.75rem;
  }
`
const ButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  @media ${BREAKPOINT.desktop} {
    margin-bottom: 6.25rem;
  }
`
export const Author = () => {
  return (
    <>
      <Container maxWidth="lg">
        <AuthorWrapper>
          <AuthorBanner
            authorName="John"
            description="Chief Executive Officer. Nick had worked with lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat."
          />
        </AuthorWrapper>
      </Container>
      <Background>
        <Container maxWidth="lg">
          <ThumbnailBlog
            size="L"
            blogLink=""
            tagLink=""
            tag="Technology"
            publishDate="2020"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Quis autem vel eum iure reprehenderit qui "
            description=""
          />
        </Container>
      </Background>
      <Container maxWidth="lg">
        <BlogWrapper>
          {[0, 1, 2, 3].map((index) => (
            <ThumbnailBlog
              key={index}
              size="M"
              blogLink=""
              tagLink=""
              tag="TECHNOLOGY"
              publishDate="2020"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              ut aliquip ex ea commodo consequat. "
              description="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla"
            />
          ))}
        </BlogWrapper>
        <ButtonWrapper>
          <BlogButton>See more</BlogButton>
        </ButtonWrapper>
      </Container>
      <ContactBanner />
    </>
  )
}
