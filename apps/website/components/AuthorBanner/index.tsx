import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { LinkWrapper } from '../LinkWrapper'
const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  justify-items: center;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  &.large {
    grid-gap: 1rem 1.5rem;
  }
  &.small {
    grid-gap: 1.5rem 1rem;
  }
  @media ${BREAKPOINT.tablet} {
    justify-items: baseline;
    grid-template-rows: auto;
    grid-template-columns: max-content auto;
    text-align: start;
    &.large {
      max-width: 34.375rem;
    }
    &.small {
      max-width: 31.875rem;
    }
  }
  @media ${BREAKPOINT.tablet} {
    &.large {
      max-width: 50rem;
    }
    &.small {
      max-width: 36.875rem;
    }
  }
`
const ImageBorder = styled.div`
  border-radius: 50%;
  align-self: center;
  &.large {
    width: 156px;
    height: 156px;
  }
  &.small {
    width: 100px;
    height: 100px;
  }
  background-color: skyblue;
  overflow: hidden;
  @media ${BREAKPOINT.tablet} {
    &.large {
      width: 136px;
      height: 136px;
    }
    &.small {
      width: 90px;
      height: 90px;
    }
  }
  @media ${BREAKPOINT.desktop} {
    &.large {
      width: 164px;
      height: 164px;
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
  link?: string
}
export const AuthorBanner: React.FC<AuthorBannerProps> = ({
  image = '/images/thumbnail.png',
  imgSize = 'large',
  authorName,
  description,
  link = ''
}) => {
  const WriterText = () => (imgSize === 'large' ? <h5>{authorName}</h5> : <h6>{`Writer: ${authorName}`}</h6>)
  return (
    <Container className={imgSize}>
      <ImageBorder className={imgSize}>
        {link !== '' ? (
          <LinkWrapper href={link}>
            <Image
              src={image ?? '/images/thumbnail.png'}
              width={180}
              height={180}
              alt="Author"
              layout="responsive"
              objectPosition="top center"
              objectFit="cover"
            />
          </LinkWrapper>
        ) : (
          <Image
            src={image ?? '/images/thumbnail.png'}
            width={180}
            height={180}
            alt="Author"
            layout="responsive"
            objectPosition="top center"
            objectFit="cover"
          />
        )}
      </ImageBorder>
      <TextSection>
        {link !== '' ? (
          <LinkWrapper href={link}>
            <WriterText />
          </LinkWrapper>
        ) : (
          <WriterText />
        )}
        <Description>{description}</Description>
      </TextSection>
    </Container>
  )
}
