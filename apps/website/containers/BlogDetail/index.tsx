import { ContactBanner } from '@blockfint/website/components/ContactBanner'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { Container } from '@material-ui/core'
import { PostOrPage } from '@tryghost/content-api'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { Breadcrumb } from './components/Breadcrumb'

export const Wrapper = styled.div`
  margin-top: 2.625rem;
`
export const GhostContent = styled.div`
  margin-bottom: 2.5rem;
  h2 {
    //h2 of Ghost are h5 of us (mobile)
    font-weight: 700;
    font-size: 20px;
    line-height: 36px;
  }
  h3 {
    //h3 of Ghost are h6 of us (mobile)
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
  }
  figcaption {
    text-align: center;
  }
  // Image Normal
  .kg-card {
    margin-top: 2rem;
    img {
      width: 100%;
      max-width: 100vw;
      height: auto;
      object-fit: contain;
    }
  }
  h2,
  h3 {
    margin-top: 2.5rem;
  }
  p {
    /* margin-top: 1.5rem; */
    min-height: 1.5rem;
  }

  //gallery
  .kg-gallery-card {
    .kg-gallery-row {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));

      justify-content: center;
      align-items: center;
    }
  }

  // Youtube
  .kg-embed-card {
    height: 0;
    padding-top: 56.5%;
    width: 100%;
    margin: 0.75rem auto;
    position: relative;
    iframe {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
    }
  }
  //table
  table {
    width: 100%;
  }
  ul,
  ol {
    margin-left: 2ch;
  }

  //divider
  hr {
    margin: 1.5rem 0;
  }

  @media ${BREAKPOINT.tablet} {
    h2 {
      //h2 of Ghost are h5 of us
      font-size: 20px;
      line-height: 38px;
    }
    // container
    .gh-content {
      max-width: 32.5rem;
      margin: 0 auto;
    }
  }
  @media ${BREAKPOINT.desktop} {
    h2 {
      //h2 of Ghost are h5 of us
      font-size: 24px;
      line-height: 38px;
    }
    // container
    .gh-content {
      max-width: 50rem;
      margin: 0 auto;
    }

    .kg-width-wide {
      margin: 2rem -6rem;
    }
    .kg-width-full {
      width: 100vw;
      margin: 2rem calc(-1 * (50vw - 400px));
    }
  }
`
const TopImage = styled.div`
  width: 100vw;
`
const Title = styled.h2`
  text-align: center;
  margin-bottom: 3.75rem;
`

export const BlogDetail: React.FC<{ post: PostOrPage }> = ({ post }) => {
  console.log(post)
  return (
    <Wrapper>
      <Container maxWidth="lg">
        <Breadcrumb />
        <Title>{post?.title}</Title>
      </Container>
      <TopImage>
        <Image src={post?.feature_image} width={2000} height={1215} layout="responsive" />
      </TopImage>
      <Container maxWidth="lg">
        <GhostContent>
          <div dangerouslySetInnerHTML={{ __html: post?.html }} className="gh-content gh-canvas" />
        </GhostContent>
      </Container>
      <ContactBanner />
    </Wrapper>
  )
}
