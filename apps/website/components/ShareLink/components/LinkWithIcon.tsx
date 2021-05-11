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
  style?: React.CSSProperties
  disableLink?: boolean
}
export const LinkWithIcon: React.FC<Props> = ({ link, src, alt, style, disableLink = false }) => {
  return (
    <a href={link} style={{ pointerEvents: disableLink ? 'none' : 'auto' }}>
      <IconLink>
        <img src={src} alt={alt} style={style} />
      </IconLink>
    </a>
  )
}
