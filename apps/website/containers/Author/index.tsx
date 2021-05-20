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
`
const Background = styled.div`
  background-color: #f0f5f5;
  padding: 3.75rem 0;
`
const BlogWrapper = styled.div`
  padding: 3.75rem 0 2.5rem;
  display: grid;
  grid-row-gap: 2.5rem;
  @media ${BREAKPOINT.tablet} {
    grid-row-gap: 1.5rem;
    padding: 2.5rem 0;
  }
`
const ButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 80px;
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
          {[...new Array(4)].map(() => (
            <ThumbnailBlog
              size="M"
              blogLink=""
              tagLink=""
              tag="TECHNOLOGY"
              publishDate="2020"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
              description=""
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
