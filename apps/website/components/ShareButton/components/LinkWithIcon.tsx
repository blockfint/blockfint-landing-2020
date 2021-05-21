import React from 'react'
import styled from 'styled-components'
const IconLink = styled.button`
  cursor: pointer;
  background-color: var(--white);
  height: 100%;
  width: 100%;
  border: 0;
`
interface Props {
  link?: string
  src: string
  alt: string
  style?: React.CSSProperties
  disableLink?: boolean
}
export const LinkWithIcon: React.FC<Props> = ({ link, src, alt, style, disableLink = false }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href)
  }
  if (alt === 'clipboard')
    return (
      <a onClick={handleCopy} href="#copied">
        <IconLink>
          <img src={src} alt={alt} style={style} />
        </IconLink>
      </a>
    )
  return (
    <a href={link} style={{ pointerEvents: disableLink ? 'none' : 'auto' }} target="__blank" rel="noopener noreferrer">
      <IconLink>
        <img src={src} alt={alt} style={style} />
      </IconLink>
    </a>
  )
}
