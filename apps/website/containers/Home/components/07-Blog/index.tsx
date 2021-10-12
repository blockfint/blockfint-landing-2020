import { ThumbnailBlog } from '@blockfint/website/components/ThumbnailBlog'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { typography } from '@blockfint/website/styles/typography'
import { getCategory } from '@blockfint/website/utils/getCategory'
import { BlogButton } from '@blockfint/website/components/Buttons'
import Container from '@material-ui/core/Container'
import { PostOrPage } from '@tryghost/content-api'
import dayjs from 'dayjs'
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { useTranslation } from 'react-i18next'
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

const Center = styled.div`
  display: grid;
  justify-content: center;
`
const Global = createGlobalStyle`
body{
  ${typography}
}
`
type Props = {
  data: PostOrPage[]
}

export const Blog: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation()
  return (
    <>
      <Global />
      <CustomContainer maxWidth="lg">
        <Heading>Blog</Heading>
        <BlogWrapper>
          {data.map(({ id, feature_image, title, og_description, published_at, tags, slug }) => {
            const category = getCategory(tags) // find categories
            return (
              <ThumbnailBlog
                key={id}
                image={feature_image}
                title={title}
                description={og_description}
                publishDate={dayjs(published_at)}
                category={category.name}
                categoryLink={`/blog/cat/${category.slug}`} // phase 3
                blogLink={`/blog/${slug}`}
              />
            )
          })}
        </BlogWrapper>
        <Center>
          <BlogButton>{t('common.go-to-blog')}</BlogButton>
        </Center>
      </CustomContainer>
    </>
  )
}
