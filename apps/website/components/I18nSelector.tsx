import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
const Oval = styled.a`
  width: 2.25rem;
  height: 2.25rem;
  font-weight: 600;

  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-items: center;
  &.selected {
    background: white;
    color: var(--primary);
  }
  text-decoration: none;
  color: inherit;
`
const Container = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 0.5rem;
`
export const I18nSelector = () => {
  const router = useRouter()
  return (
    <Container>
      <Link href={router.asPath} locale="en" passHref>
        <Oval className={router.locale === 'en' && 'selected'}>EN</Oval>
      </Link>
      <Link href={router.asPath} locale="th" passHref>
        <Oval className={router.locale === 'th' && 'selected'}>TH</Oval>
      </Link>
    </Container>
  )
}
