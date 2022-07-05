import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

const Container = styled.h6`
  color: var(--primary);
  display: flex;
  gap: 0.5ch;
  text-transform: capitalize;
  justify-content: center;
  margin-bottom: 0.625rem;
`
const A = styled.a`
  text-decoration: inherit;
  color: inherit;
`
export const Breadcrumb = () => {
  const router = useRouter()
  // const [category] = router.query.slug
  return (
    <Container>
      <Link href="/" passHref>
        <A>Home</A>
      </Link>
      /{' '}
      <Link href="/blog" passHref>
        <A>Blog</A>
      </Link>{' '}
      {/* /{' '}
      <Link href={{ pathname: `/blog`, query: { category } }} as={`/blog/${category}`} passHref>
        <A>{category}</A>
      </Link> */}
    </Container>
  )
}
