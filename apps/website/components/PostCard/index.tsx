import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLink } from '@blockfint/website/components/ArrowLink'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
const Card = styled(motion.div)`
  cursor: pointer;
  border-radius: 1rem;
  box-shadow: 0 8px 16px 0 #f0f3fa;
  border: solid 1px #fafafa;
  background-color: var(--white);
  display: grid;
  grid-template-rows: 15.375rem 1fr;
  overflow: hidden;
  width: 100%;
  position: relative;
  @media ${BREAKPOINT.tablet} {
    grid-template-columns: 17.5rem 1fr;
    grid-template-rows: auto;
    width: 42.875rem;
    height: 14rem;
  }
  @media ${BREAKPOINT.desktop} {
    grid-template-columns: 1fr 1fr;
    height: 14rem;
    width: 37.5rem;
  }
`

// const ImageWrapper = styled.div`
//   position: relative;
// `

const Content = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  margin: 1.5rem 1.25rem 1.3125rem;
  @media ${BREAKPOINT.tablet} {
    grid-template-rows: max-content auto max-content;
    margin: 2.5rem;
  }
  @media ${BREAKPOINT.desktop} {
    margin: 1.5rem;
  }
`
const Title = styled.h6`
  line-height: 1.8;
  font-weight: bold;
  letter-spacing: -0.4px;
  color: var(--primary);
  font-size: 1.25rem;
`
const Desc = styled.p`
  font-weight: 600;
  line-height: 1.88;
  padding-bottom: 0.8rem;
`

interface Props {
  title?: string
  desc?: string
  link?: string
  imgSrc?: string
}
export const PostCard: React.FC<Props> = ({ title, desc, link = '/', imgSrc }) => {
  const { t } = useTranslation()
  return (
    <Link href={link} passHref>
      <Card initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} whileTap={{ backgroundColor: '#f3f3f3' }}>
        {/* <ImageWrapper> */}
          <Image src={imgSrc} layout="responsive" objectFit="cover" width='100%' height='100%' />
        {/* </ImageWrapper> */}
        <Content>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
          <ArrowLink>{t('common.see-more')}</ArrowLink>
        </Content>
      </Card>
    </Link>
  )
}
