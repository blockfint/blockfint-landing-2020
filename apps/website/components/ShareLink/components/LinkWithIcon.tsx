import React from 'react'
import styled from 'styled-components'
const IconLink = styled.button`
  background-color: var(--white);
  height: 100%;
  width: 100%;
  border: 0;
`
interface Props {
  link: string
  src: string
  alt: string
}
export const LinkWithIcon: React.FC<Props> = ({ link, src, alt }) => {
  return (
    <a href={link}>
      <IconLink>
        <img src={src} alt={alt} />
      </IconLink>
    </a>
  )
}
