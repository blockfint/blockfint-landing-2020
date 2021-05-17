import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
const A = styled.a`
  cursor: pointer;
  border-radius: 32px;
  border: solid 1px #bdbdbd;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  transition: 0.2s ease;
  width: min-content;
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
export const Category = React.forwardRef<HTMLAnchorElement, Props>(({ text, href, selected }, ref) => {
  const router = useRouter()
  return (
    <A className={selected && 'selected'} href={href} ref={ref}>
      <Text onClick={() => router.push(`#${text.toLowerCase()}`, null, { shallow: true })}>{text}</Text>
    </A>
  )
})
