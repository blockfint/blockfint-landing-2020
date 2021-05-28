import React from 'react'
import styled, { css } from 'styled-components'
import dayjs, { Dayjs } from 'dayjs'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { LinkWrapper } from './components/LinkWrapper'
const Wrapper = styled.div<{ size: sizeType }>`
  display: grid;
  grid-gap: 1rem;
  grid-auto-rows: max-content;
  ${({ size }) => {
    if (size === 'M') {
      return css`
        @media ${BREAKPOINT.tablet} {
          grid-template-columns: 362px auto;
        }
        @media ${BREAKPOINT.desktop} {
          grid-template-columns: 485px auto;
        }
      `
    } else if (size === 'L') {
      return css`
        display: flex;
        flex-direction: column-reverse;
        grid-row-gap: 1.5rem;
      `
    }
  }};
`
const ImageWrapper = styled.div<{ imgSrc: string; size: sizeType }>`
  height: 172px;
  background-color: #c4c4c4;
  background-image: url(${({ imgSrc }) => imgSrc});
  background-position: center;
  background-size: cover;
  @media ${BREAKPOINT.desktop} {
    height: 196px;
  }
  ${({ size }) => {
    if (size === 'M') {
      return css`
        @media ${BREAKPOINT.tablet} {
          height: 190px;
        }
        @media ${BREAKPOINT.desktop} {
          height: 254px;
        }
      `
    } else if (size === 'L') {
      return css`
        border-radius: 0;
        @media ${BREAKPOINT.tablet} {
          height: 360px;
        }
        @media ${BREAKPOINT.desktop} {
          height: 644px;
        }
      `
    }
  }}
`

const DateTime = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  grid-column-gap: 0.5rem;
  /* grid-area: datetime; */
`
const Date = styled.h6`
  color: #bdbdbd;
`
const TextSection = styled.div<{ size: sizeType }>`
  display: grid;
  grid-row-gap: 0.5rem;
  align-items: center;

  ${({ size }) => {
    if (size === 'M') {
      return css`
        @media ${BREAKPOINT.desktop} {
          grid-column-gap: 0.5rem;
          h5 {
            font-size: 32px;
            line-height: 1.44;
            max-height: 138px;
          }
        }
      `
    } else if (size === 'L') {
      return css`
        justify-items: center;
        text-align: center;
        h5 {
          -webkit-line-clamp: 6;
          max-height: 252px;
        }
        @media ${BREAKPOINT.tablet} {
          justify-items: start;
          text-align: start;
          h5 {
            -webkit-line-clamp: 3;
            max-height: 138px;
          }
        }
      `
    }
  }};
`
const Icon = styled.img`
  width: 16px;
  height: 16px;
`
const TitleText = styled.h5`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  max-height: 114px;
  overflow: hidden;
`
const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 60px;
  overflow: hidden;
  display: none;
  @media ${BREAKPOINT.desktop} {
    display: block;
    margin-top: 0.5rem;
  }
`
const Tag = styled.div`
  width: min-content;
  padding: 0 0.5rem;
  height: 30px;
  background-color: #e0e0e0;
  text-align: center;
  color: #4f4f4f;
  @media ${BREAKPOINT.desktop} {
    margin-bottom: 0.5rem;
  }
`
type sizeType = 'S' | 'M' | 'L'
interface Props {
  title: string
  description: string
  publishDate: Date | Dayjs | string
  tagLink: string
  blogLink: string
  image?: string
  size?: sizeType
  tag?: string
  className?: string
}
export const ThumbnailBlog: React.FC<Props> = ({
  image,
  title,
  description,
  publishDate,
  size = 'S',
  tag,
  tagLink,
  blogLink,
  className
}) => {
  return (
    <Wrapper size={size} className={className}>
      <LinkWrapper href={blogLink}>
        <ImageWrapper className="imageWrapper" imgSrc={image} size={size} />
      </LinkWrapper>
      <TextSection size={size}>
        <Tag>
          <LinkWrapper href={tagLink}>
            <h6>{tag}</h6>
          </LinkWrapper>
        </Tag>
        <LinkWrapper href={blogLink}>
          <TitleText>{title}</TitleText>
          {size === 'M' && <Description>{description}</Description>}
        </LinkWrapper>
        <DateTime>
          <Icon src="/icons/clock.svg" alt="clock" />
          <Date>{dayjs(publishDate).format('DD MMMM YYYY')}</Date>
        </DateTime>
      </TextSection>
    </Wrapper>
  )
}
