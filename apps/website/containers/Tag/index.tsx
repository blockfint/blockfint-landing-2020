import React, { useState } from 'react'
import styled from 'styled-components'
import { BlogButton } from '@blockfint/website/components/Buttons'
import { ContactBanner } from '@blockfint/website/components/ContactBanner'
import { ThumbnailBlog } from '@blockfint/website/components/ThumbnailBlog'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import Container from '@material-ui/core/Container'
import { PostsOrPages } from '@tryghost/content-api'
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
interface Props {
  tag: string
  posts: PostsOrPages
}
export const Tag: React.FC<Props> = ({ tag, posts }) => {
  const output = tag?.charAt(0)?.toUpperCase() + tag?.slice(1)
  const isShowButton = posts.length > 9
  const [nPost, setNPost] = useState(isShowButton ? 9 : posts.length)
  const handleClick = () => {
    setNPost(posts.length)
  }
  return (
    <>
      <Container maxWidth="lg">
        <Heading>
          <h6>Tag</h6>
          <TagText>#{output ? output : ''}</TagText>
        </Heading>

        <BlogWrapper>
          {posts?.slice(0, nPost)?.map(({ feature_image, title, og_description, published_at, tags, slug }) => {
            const category = tags?.find(({ visibility }) => visibility === 'public')
            return (
              <ThumbnailBlog
                key={title}
                image={feature_image}
                title={title}
                description={og_description}
                category={category?.name}
                categoryLink={`/blog/cat/${category?.slug}`}
                blogLink={`/blog/${slug}`}
                publishDate={published_at}
              />
            )
          })}
        </BlogWrapper>
        {isShowButton && nPost <= 9 && (
          <ButtonWrapper>
            <BlogButton onClick={handleClick}>See more</BlogButton>
          </ButtonWrapper>
        )}
      </Container>
      <ContactBanner />
    </>
  )
}
