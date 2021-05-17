import { BlogButton } from '@blockfint/website/components/Buttons/BlogButton'
import { ContactBanner } from '@blockfint/website/components/ContactBanner'
import { ThumbnailBlog } from '@blockfint/website/components/ThumbnailBlog'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { Container } from '@material-ui/core'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Category } from './components/Category'
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
  padding: 1.5rem 0 2.5rem;
  @media ${BREAKPOINT.tablet} {
    display: grid;
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
export const Blog: React.FC = () => {
  const router = useRouter()
  const [category, setCategory] = useState('all')
  useEffect(() => {
    const cat = router.asPath.split('#')[1]
    if (cat !== undefined) setCategory(cat)
  }, [router.asPath])
  return (
    <>
      <Container maxWidth="lg">
        <HeadingText>Blog</HeadingText>
        <CategoryWrapper>
          {categoryList.map((cat) => (
            <Category key={cat} text={cat} selected={cat.toLowerCase() === category} />
          ))}
        </CategoryWrapper>
        <BlogWrapper>
          {posts.map((post) => (
            <ThumbnailBlog
              key={post.title}
              tagLink={post.tagLink}
              blogLink={post.blogLink}
              title={post.title}
              description={post.description}
              publishDate={post.publishDate}
            />
          ))}
        </BlogWrapper>
        <ButtonWrapper>
          <BlogButton>See More</BlogButton>
        </ButtonWrapper>
      </Container>
      <ContactBanner />
    </>
  )
}
const categoryList = ['All', 'Technology', 'Business', 'Education', 'Agriculture', 'Inspiration']
const posts = [
  { tagLink: '', blogLink: '', title: 'Test', description: 'test', publishDate: dayjs() },
  { tagLink: '', blogLink: '', title: 'Test', description: 'test', publishDate: dayjs() },
  { tagLink: '', blogLink: '', title: 'Test', description: 'test', publishDate: dayjs() },
  { tagLink: '', blogLink: '', title: 'Test', description: 'test', publishDate: dayjs() }
]
