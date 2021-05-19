import { PostResult } from '@blockfint/website/api/ghostCMS/posts'
import { ThumbnailBlog } from '@blockfint/website/components/ThumbnailBlog'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { typography } from '@blockfint/website/styles/typography'
import { useRouter } from 'next/router'
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
type Props = {
  data: PostResult[]
}

export const Blog: React.FC<Props> = ({ data }) => {
  const router = useRouter()
  const allImages = data.map((post) => post.feature_image)
  const allTitle = data.map((post) => post.title)
  const allDescription = data.map((post) => post.og_description)
  const publishDate = data.map((post) => post.published_at)
  const tags = data.map((post) => post.tags[0].slug)
  // console.log(tags)
  // console.log(AllImages[0])
  console.log(data, router.asPath)
  return (
    <>
      <Global />
      <CustomContainer maxWidth="lg">
        <Heading>Blog</Heading>
        <BlogWrapper>
          <ThumbnailBlog
            image={allImages[0]}
            title={allTitle[0]}
            description={allDescription[0]}
            publishDate={new Date(publishDate[0])}
            tag={tags[0]}
            tagLink={tags[0]}
            blogLink=""
          />
          <ThumbnailBlog
            image={allImages[2]}
            title={allTitle[2]}
            description={allDescription[2]}
            publishDate={new Date(publishDate[2])}
            tag={tags[2]}
            tagLink={tags[2]}
            blogLink=""
          />
        </BlogWrapper>
      </CustomContainer>
    </>
  )
}
