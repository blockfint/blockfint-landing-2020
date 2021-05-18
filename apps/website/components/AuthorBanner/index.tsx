import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-gap: 1rem 1.5rem;
  justify-items: center;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  @media ${BREAKPOINT.tablet} {
    grid-template-rows: auto;
    grid-template-columns: max-content 400px;
    text-align: start;
  }
  @media ${BREAKPOINT.tablet} {
    justify-items: baseline;
    grid-template-rows: auto;
    max-width: 50rem;
    grid-template-columns: max-content 1fr;
    text-align: start;
  }
`
const ImageBorder = styled.div`
  border-radius: 50%;
  &.large {
    width: 156px;
    height: 156px;
  }
  background-color: skyblue;
  overflow: hidden;
  @media ${BREAKPOINT.tablet} {
    &.large {
      width: 136px;
      height: 136px;
    }
  }
  @media ${BREAKPOINT.desktop} {
    &.large {
      width: 164px;
      height: 164px;
    }
    &.large {
      width: 90px;
      height: 90px;
    }
  }
`
const TextSection = styled.div`
  align-self: center;
`
const Description = styled.p`
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  max-height: 120px;
  overflow: hidden;
  @media ${BREAKPOINT.tablet} {
    padding-right: 1rem;
    -webkit-line-clamp: 3;
    max-height: 90px;
  }
  @media ${BREAKPOINT.desktop} {
    padding-right: 0;
    -webkit-line-clamp: 2;
    max-height: 60px;
  }
`
interface AuthorBannerProps {
  imgSize?: 'small' | 'large'
  image?: string
  authorName: string
  description: string
}
export const AuthorBanner: React.FC<AuthorBannerProps> = ({
  image = '/images/thumbnail.png',
  imgSize = 'large',
  authorName,

  description
}) => {
  return (
    <Container>
      <ImageBorder className={imgSize}>
        <Image
          src={image ?? '/images/thumbnail.png'}
          width={180}
          height={180}
          alt="Author"
          layout="responsive"
          objectPosition="top center"
          objectFit="cover"
        />
      </ImageBorder>
      <TextSection>
        <h5>{authorName}</h5>
        <Description>{description}</Description>
      </TextSection>
    </Container>
  )
}
