import React, { useState } from 'react'
import styled from 'styled-components'
import { ContactBanner } from '@blockfint/website/components/ContactBanner'
import { AuthorBanner } from '@blockfint/website/components/AuthorBanner'
import Container from '@material-ui/core/Container/Container'
import { ThumbnailBlog } from '@blockfint/website/components/ThumbnailBlog'
import { BlogButton } from '@blockfint/website/components/Buttons'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { getCategory } from '@blockfint/website/utils/getCategory'
import { Author, PostsOrPages } from '@tryghost/content-api'
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
interface AuthorBlogProps {
  profile: Author
  posts: PostsOrPages
}
export const AuthorBlog: React.FC<AuthorBlogProps> = ({ profile, posts }) => {
  const latestPost = posts?.[0]
  const postCategory = getCategory(latestPost?.tags)
  const otherPosts = posts?.slice(1)
  const postLimit = 3
  const isShowButton = otherPosts?.length > postLimit
  const [nPost, setNPost] = useState(isShowButton ? postLimit : otherPosts?.length)
  const handleClick = () => {
    setNPost(otherPosts?.length)
  }
  return (
    <>
      <Container maxWidth="lg">
        <AuthorWrapper>
          <AuthorBanner image={profile?.profile_image} authorName={profile?.name} description={profile?.bio} />
        </AuthorWrapper>
      </Container>
      <Background>
        <Container maxWidth="lg">
          <ThumbnailBlog
            size="L"
            category={postCategory?.name}
            categoryLink={`/blog/cat/${postCategory?.slug}`}
            blogLink={`/blog/${latestPost?.slug}`}
            publishDate={latestPost?.published_at}
            title={latestPost?.title}
            description={latestPost?.og_description}
            image={latestPost?.feature_image}
          />
        </Container>
      </Background>
      <Container maxWidth="lg">
        <BlogWrapper>
          {otherPosts?.slice(0, nPost)?.map(({ feature_image, title, og_description, published_at, tags, slug }) => {
            const category = getCategory(tags)
            return (
              <ThumbnailBlog
                key={slug}
                size="M"
                category={category?.name}
                categoryLink={`/blog/cat/${category.slug}`}
                blogLink={`/blog/${slug}`}
                publishDate={published_at}
                title={title}
                description={og_description}
                image={feature_image}
              />
            )
          })}
        </BlogWrapper>
        {isShowButton && nPost <= postLimit && (
          <ButtonWrapper>
            <BlogButton onClick={handleClick}>See more</BlogButton>
          </ButtonWrapper>
        )}
      </Container>
      <ContactBanner />
    </>
  )
}
