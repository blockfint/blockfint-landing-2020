import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
const Card = styled.div`
  border-radius: 1rem;
  box-shadow: 0 8px 16px 0 #f0f3fa;
  border: solid 1px #fafafa;
  background-color: var(--blockfint-grey-white-2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 35.625rem;
  height: 12.75rem;
  overflow: hidden;
`

const Image = styled.img`
  background: blue;
  width: 100%;
  height: 12.75rem;
`

const Content = styled.div`
  margin: 1.5rem;
`

interface Props {
  title?: string
  desc?: string
  link?: string
  imgSrc?: string
}
export const PostCard: React.FC<Props> = ({ title, desc, link = '/', imgSrc }) => {
  return (
    <Card>
      <Image src={imgSrc} />
      <Content>
        <span>{title}</span>
        <span>{desc}</span>
        <Link href={link} passHref>
          <a>See more</a>
        </Link>
      </Content>
    </Card>
  )
}
