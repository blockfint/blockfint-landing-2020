import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'
const A = styled.a`
  cursor: pointer;
  border-radius: 32px;
  border: solid 1px #bdbdbd;
  transition: 0.2s ease;
  height: fit-content;
  margin: 0 0.5rem;
  margin-bottom: 1rem;
  :hover,
  :focus,
  &.selected {
    color: var(--white);
    background-color: var(--primary);
    border-color: var(--primary);
  }
`
const Text = styled.h6`
  padding: 0.625rem 1.5rem;
`
interface Props {
  href?: string
  text: string
  selected?: boolean
}
export const Category = React.forwardRef<HTMLAnchorElement, Props>(({ text, href = null, selected = false }, ref) => {
  const router = useRouter()
  const path = text === 'All' ? '/blog' : `/blog/${text.toLowerCase()}`
  return (
    <A className={selected && 'selected'} href={href} ref={ref}>
      <Text
        onClick={() =>
          router.push(path, null, {
            shallow: true
          })
        }
      >
        {text}
      </Text>
    </A>
  )
})
