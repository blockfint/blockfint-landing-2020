import { AuthorBanner } from '@blockfint/website/components/AuthorBanner'
import { ContactBanner } from '@blockfint/website/components/ContactBanner'
import { ShareButton } from '@blockfint/website/components/ShareButton'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { Container } from '@material-ui/core'
import { PostOrPage } from '@tryghost/content-api'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo } from 'react'
import styled from 'styled-components'
// import { Breadcrumb } from './components/Breadcrumb'
import { WhatNext } from './components/WhatNext'

export const Wrapper = styled.div`
  margin-top: 2.625rem;
`
export const GhostContent = styled.div`
  // container

  max-width: 32.5rem;
  margin: 0 auto;
  .gh-content {
    margin: 2.5rem auto 2.5rem;
    overflow-wrap: break-word;
    letter-spacing: 0;
  }
  strong,
  em,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  li,
  blockquote,
  figcaption {
    font-family: 'Montserrat', 'Sarabun', sans-serif;
  }
  h2 {
    //h2 of Ghost are h5 of us (mobile)
    font-weight: 700;
    font-size: 20px;
    line-height: 36px;
    letter-spacing: 0;
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
    margin: 2.5rem 0;
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
    margin-bottom: 1.5rem;
    font-family: 'Montserrat', 'Sarabun', sans-serif;
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
  ul {
    margin-left: 2ch;
  }
  ol {
    list-style: none;
    /* margin: 40px 0; */
  }

  ol li:before {
    content: counter(custom) ' ';
    /* font-family: 'Montserrat'; */
    color: var(--primary);
    padding-right: 1rem;
    font-weight: 600;
  }

  ol li:first-child {
    counter-reset: custom;
  }
  li {
    /* font-family: 'Montserrat', 'Sarabun'; */
    font-size: 1rem;
    line-height: 24px;
    counter-increment: custom;
    margin-bottom: 1rem;
    ::marker {
      color: var(--primary);
    }
  }

  //divider
  hr {
    border-color: transparent;
    height: 80px;
    font-size: 36px;
    position: relative;
    :before {
      font-family: sans-serif;
      content: '. . .';
      line-height: 28px;
      position: absolute;
      left: 50%;
      bottom: 50%;
      transform: translateX(-50%);
    }
  }
  blockquote {
    margin-bottom: 1.5rem;
    border-left: 2px solid var(--primary);
    padding-left: 1.5rem;
    strong {
      font-size: 24px;
      font-weight: normal;
      line-height: 1.58;
      color: #333333;
    }
    font-size: 16px;
    line-height: 1.88;
    color: #828282;
  }
  @media ${BREAKPOINT.tablet} {
    .gh-content {
      margin: 3.75rem auto 3.75rem;
    }
    h2 {
      //h2 of Ghost are h5 of us
      font-size: 20px;
      line-height: 38px;
    }
  }
  @media ${BREAKPOINT.desktop} {
    /* ol {
      margin: 56px 0;
    } */
    li {
      margin-bottom: 1.5rem;
    }
    hr {
      height: 7.5rem;
    }
    // container

    max-width: 50rem;

    h2 {
      //h2 of Ghost are h5 of us
      font-size: 24px;
      line-height: 38px;
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
  padding-bottom: 1.5rem;
`
const Title = styled.h2`
  text-align: center;
  margin-bottom: 3.75rem;
  font-family: 'Prompt', sans-serif;
`

const TagA = styled.a`
  color: var(--primary);
  font-weight: normal;
  text-decoration: inherit;
  margin-left: 0.5rem;
  :last-child {
    &:after {
      content: '';
    }
  }
`
const AuthorWrapper = styled.div`
  margin: 80px 0;
`
const LeftRight = styled.div`
  display: flex;
  justify-content: space-between;
`

const DateTime = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  grid-column-gap: 0.5rem;
  grid-area: datetime;
`
const Date = styled.h6`
  color: #bdbdbd;
`
const Icon = styled.img`
  width: 16px;
  height: 16px;
`

const Tag = styled.h6`
  text-align: center;
  margin-bottom: 1.5rem;
`
const Divider = styled.hr`
  max-width: 32.5rem;
  @media ${BREAKPOINT.desktop} {
    max-width: 50rem;
  }
  border-style: dashed;
  margin: 0 auto;
`
type Props = {
  post: PostOrPage
  nextPosts: PostOrPage[]
}
export const BlogDetail: React.FC<Props> = ({ post, nextPosts }) => {
  const tags = useMemo(() => {
    return post?.tags?.filter(({ visibility }) => visibility === 'internal')
  }, [post])
  return (
    <>
      <Wrapper>
        <Container maxWidth="lg">
          {/* <Breadcrumb /> */}
          <Title>{post?.title}</Title>
        </Container>
        {post?.feature_image && (
          <TopImage>
            <Image
              src={post?.feature_image}
              width={2400}
              height={1256}
              layout="responsive"
              quality={100}
            />
          </TopImage>
        )}

        <Container maxWidth="lg">
          <GhostContent>
            <LeftRight>
              <DateTime>
                <Icon src="/icons/clock.svg" alt="clock" />
                <Date>{dayjs(post?.published_at).format('DD MMMM YYYY')}</Date>
              </DateTime>
              <ShareButton />
            </LeftRight>
            <div dangerouslySetInnerHTML={{ __html: post?.html }} className="gh-content gh-canvas" />
          </GhostContent>
          <Tag>
            <span style={{ marginRight: '16px' }}>Tags:</span>
            {tags?.map(({ name, slug }) => (
              <Link key={name} href={`/blog/tag/${slug}`} passHref>
                <TagA>{`${name} `}</TagA>
              </Link>
            ))}
          </Tag>
          <Divider />
          <AuthorWrapper>
            <AuthorBanner
              link={`/blog/author/${post?.authors[0]?.slug}`}
              authorName={post?.authors[0]?.name}
              description={post?.authors[0]?.bio}
              image={post?.authors[0]?.profile_image}
              imgSize="small"
            />
          </AuthorWrapper>
        </Container>
        <WhatNext nextPosts={nextPosts} />
      </Wrapper>
      <ContactBanner />
    </>
  )
}
