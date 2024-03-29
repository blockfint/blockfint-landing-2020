import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { BlogButton } from '@blockfint/website/components/Buttons/BlogButton'
import { ContactBanner } from '@blockfint/website/components/ContactBanner'
import { ThumbnailBlog } from '@blockfint/website/components/ThumbnailBlog'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { Container } from '@material-ui/core'
import { Category } from './components/Category'
import { PostsOrPages } from '@tryghost/content-api'
import { Background } from '@blockfint/website/components/layouts/Background'
const HeadingText = styled.h2`
  text-align: center;
  padding: 1rem 0 2.5rem;
  @media ${BREAKPOINT.tablet} {
    padding: 2.5rem 0;
  }
  @media ${BREAKPOINT.desktop} {
    padding: 3.75rem 0 5rem;
  }
`
const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.75rem;
  justify-content: center;
  @media ${BREAKPOINT.tablet} {
    padding: 0 2rem;
  }
`
const BlogWrapper = styled.div`
  display: grid;
  row-gap: 2.5rem;
  padding: 1.5rem 0 2.5rem;
  @media ${BREAKPOINT.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.5rem 1.5rem;
  }
  @media ${BREAKPOINT.desktop} {
    padding: 2.75rem 0 3.75rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3.75rem 3rem;
  }
`
const ButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 80px;
  @media ${BREAKPOINT.desktop} {
    margin-bottom: 100px;
  }
`
const Space = styled.div`
  width: 100%;
  height: 23.25rem;
`
interface BlogProps {
  category?: string
  categoryList?: string[]
  posts: PostsOrPages
}
export const Blog: React.FC<BlogProps> = ({ category = 'all', categoryList, posts }) => {
  const allCategory = ['All', ...categoryList.map((cat) => cat.replace('-', ' '))]
  const postLimit = 9
  const [nPost, setNPost] = useState(postLimit)
  const isShowButton = useMemo(() => posts?.length > nPost, [nPost, posts?.length])
  const handleClick = () => {
    setNPost(posts?.length)
  }
  useEffect(() => {
    if (isShowButton && nPost !== postLimit) setNPost(postLimit)
    else if (!isShowButton && nPost !== posts?.length) setNPost(posts?.length)
  }, [isShowButton, nPost, posts?.length])
  return (
    <Background>
      <Container maxWidth="lg">
        <HeadingText>Blog</HeadingText>
        <CategoryWrapper>
          {allCategory.map((cat) => (
            <Category key={cat} text={cat} selected={cat.toLowerCase() === category} />
          ))}
        </CategoryWrapper>
        <BlogWrapper>
          {posts.length === 0 && <Space />}
          {posts?.slice(0, nPost)?.map(({ feature_image, title, og_description, published_at, tags, slug }) => {
            const category = tags?.find(({ visibility }) => visibility === 'public')
            return (
              <ThumbnailBlog
                key={title}
                image={feature_image}
                category={category.name}
                categoryLink={`/blog/cat/${category.slug}`}
                blogLink={`/blog/${slug}`}
                title={title}
                description={og_description}
                publishDate={published_at}
              />
            )
          })}
        </BlogWrapper>
        {isShowButton && nPost <= postLimit && (
          <ButtonWrapper>
            <BlogButton onClick={handleClick}>See More</BlogButton>
          </ButtonWrapper>
        )}
      </Container>
      <ContactBanner />
    </Background>
  )
}
