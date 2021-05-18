import { ThumbnailBlog } from '@blockfint/website/components/ThumbnailBlog'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { PostOrPage } from '@tryghost/content-api'
import { Container } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { BlogButton } from '@blockfint/website/components/Buttons'
import Link from 'next/link'

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
const Content = styled.div`
  display: grid;
  justify-items: center;
  padding: 5rem 0;
  @media ${BREAKPOINT.desktop} {
    padding: 6.25rem 0;
  }
`
type Props = {
  nextPosts: PostOrPage[]
}
export const WhatNext: React.FC<Props> = ({ nextPosts }) => {
  return (
    <>
      <hr />
      <Container>
        <Content>
          <h2 style={{ textAlign: 'center' }}>What to read next</h2>
          <BlogWrapper>
            {nextPosts.map(({ title, tags, slug, excerpt, published_at, feature_image }) => {
              const mainTag = tags.find(({ visibility }) => visibility === 'public') // find categories
              return (
                <ThumbnailBlog
                  image={feature_image}
                  key={title}
                  tag={mainTag.name}
                  tagLink={`/blog/${mainTag.slug}`}
                  blogLink={`/blog/${mainTag.slug}/${slug}`}
                  title={title}
                  description={excerpt}
                  publishDate={published_at}
                />
              )
            })}
          </BlogWrapper>
          <Link passHref href="/blog">
            <a>
              <BlogButton>SEE MORE</BlogButton>
            </a>
          </Link>
        </Content>
      </Container>
    </>
  )
}
