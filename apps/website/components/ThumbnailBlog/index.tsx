import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
const ImageWrapper = styled.div<{ imgSrc: string }>`
  width: 328px;
  height: 172px;
  border-radius: 8px;
  background-color: #c4c4c4;
  background-image: url(${({ imgSrc }) => imgSrc});
  background-position: center;
  background-size: cover;
`
const Tag = styled.div`
  width: 134px;
  height: 30px;
  background-color: #e0e0e0;
  text-align: center;
  color: #4f4f4f;
`
const DateTime = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  grid-column-gap: 0.5rem;
`
const Date = styled.h6`
  color: #bdbdbd;
`
const TextSection = styled.div`
  display: gird;
  grid-auto-rows: max-content;
  grid-row-gap: 0.5rem;
  margin-top: 1rem;
`
const Icon = styled.img`
  width: 16px;
  height: 16px;
`
interface Props {
  imgSrc?: string
  tag?: string
  description?: string
  publishDate?: Date
}
export const ThumbnailBlog: React.FC<Props> = ({
  imgSrc,
  tag = 'TECHNOLOGY',
  description = 'No Description',
  publishDate
}) => {
  return (
    <div>
      <ImageWrapper imgSrc={imgSrc}></ImageWrapper>
      <TextSection>
        <Tag>
          <h6>{tag}</h6>
        </Tag>
        <h5>{description}</h5>
        <DateTime>
          <Icon src="/icons/clock.svg" alt="clock" />
          <Date>{dayjs(publishDate).format('DD MMMM YYYY')}</Date>
        </DateTime>
      </TextSection>
    </div>
  )
}
