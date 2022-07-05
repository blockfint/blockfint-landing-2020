import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const A = styled.a`
  text-decoration: none;
  color: inherit;
`
interface Props {
  href: string
  children: React.ReactNode
}
export const LinkWrapper = ({ href, children }: Props) => {
  return (
    <Link href={href} passHref>
      <A>{children}</A>
    </Link>
  )
}
