import React from 'react'
import styled, { css } from 'styled-components'
import dayjs from 'dayjs'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { LinkWrapper } from './components/LinkWrapper'
const Wrapper = styled.div<{ size: 'M' | 'L' }>`
  display: grid;
  grid-gap: 1rem;
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
const ImageWrapper = styled.div<{ imgSrc: string; size: 'M' | 'L' }>`
  height: 172px;
  border-radius: 8px;
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
          border-radius: 0;
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
  grid-area: datetime;
`
const Date = styled.h6`
  color: #bdbdbd;
`
const TextSection = styled.div<{ size: 'M' | 'L' }>`
  display: grid;
  grid-row-gap: 0.5rem;
  align-items: center;
  grid-template-areas:
    'tag'
    'grouptext'
    'datetime';
  ${({ size }) => {
    if (size === 'M') {
      return css`
        @media ${BREAKPOINT.desktop} {
          grid-template-areas:
            'grouptext grouptext grouptext'
            'tag datetime .';
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
const GroupText = styled.div`
  grid-area: grouptext;
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
    margin: 0.5rem 0;
  }
`
const Tag = styled.div`
  width: 134px;
  height: 30px;
  background-color: #e0e0e0;
  text-align: center;
  grid-area: tag;
  color: #4f4f4f;
`
interface Props {
  image?: string
  title?: string
  publishDate?: Date
  size?: 'M' | 'L'
  description?: string
  tag?: string
  tagLink: string
  blogLink?: string
}
export const ThumbnailBlog: React.FC<Props> = ({
  image,
  title = 'No Title',
  publishDate,
  size,
  description,
  tag = 'TECHNOLOGY',
  tagLink,
  blogLink
}) => {
  return (
    <Wrapper size={size}>
      <LinkWrapper href={blogLink}>
        <ImageWrapper imgSrc={image} size={size} />
      </LinkWrapper>
      <TextSection size={size}>
        <Tag>
          <LinkWrapper href={tagLink}>
            <h6>{tag}</h6>
          </LinkWrapper>
        </Tag>
        <GroupText>
          <LinkWrapper href={blogLink}>
            <TitleText>{title}</TitleText>
            {size === 'M' && <Description>{description}</Description>}
          </LinkWrapper>
        </GroupText>
        <DateTime>
          <Icon src="/icons/clock.svg" alt="clock" />
          <Date>{dayjs(publishDate).format('DD MMMM YYYY')}</Date>
        </DateTime>
      </TextSection>
    </Wrapper>
  )
}
