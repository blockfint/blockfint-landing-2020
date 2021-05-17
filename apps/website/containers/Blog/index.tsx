import { BlogButton } from '@blockfint/website/components/Buttons/BlogButton'
import { ContactBanner } from '@blockfint/website/components/ContactBanner'
import { ThumbnailBlog } from '@blockfint/website/components/ThumbnailBlog'
import { Container } from '@material-ui/core'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Category } from './components/Category'
const HeadingText = styled.h2`
  text-align: center;
  padding: 1rem 0 2.5rem;
`
const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 1.375rem;
  justify-content: center;
  a {
    :nth-child(odd) {
      margin-right: 1rem;
    }
    :not(:nth-last-child(-n + 2)) {
      margin-bottom: 1rem;
    }
  }
`
const BlogWrapper = styled.div`
  padding: 40px 0;
`
const ButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 80px;
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
            <Category text={cat} selected={cat.toLowerCase() === category} />
          ))}
        </CategoryWrapper>
        <BlogWrapper>
          {posts.map((post) => (
            <ThumbnailBlog
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
  { tagLink: '', blogLink: '', title: 'Test', description: 'test', publishDate: dayjs() }
]
