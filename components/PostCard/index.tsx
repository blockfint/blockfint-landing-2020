import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { ReactComponent as Arrow } from 'assets/icons/arrow.svg'
import { motion } from 'framer-motion'
const Card = styled(motion.div)`
  border-radius: 1rem;
  box-shadow: 0 8px 16px 0 #f0f3fa;
  border: solid 1px #fafafa;
  background-color: var(--white);
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 37.5rem;
  height: 13.375rem;
  overflow: hidden;
`

const Image = styled.img`
  background: blue;
  width: 100%;
  height: 12.75rem;
`

const Content = styled.div`
  margin: 1.5rem;
  display: grid;
  grid-template-rows: max-content auto max-content;
  grid-gap: 0.5rem;
`
const Title = styled.h3`
  color: var(--primary);
`
const Desc = styled.p``
const A = styled.a`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: max-content max-content;
  align-items: center;
  text-decoration: none;
  color: var(--primary);
  font-weight: 600;
`
interface Props {
  title?: string
  desc?: string
  link?: string
  imgSrc?: string
}
export const PostCard: React.FC<Props> = ({ title, desc, link = '/', imgSrc }) => {
  return (
    <Card initial={{ scale: 0.95 }} whileHover={{ scale: 1 }} whileTap={{ backgroundColor: '#f3f3f3' }}>
      <Image src={imgSrc} />
      <Content>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <Link href={link} passHref>
          <A>
            See more <Arrow />
          </A>
        </Link>
      </Content>
    </Card>
  )
}
