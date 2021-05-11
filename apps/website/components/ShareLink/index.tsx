import React from 'react'
import styled from 'styled-components'
import { LinkWithIcon } from './components/LinkWithIcon'
import { linkShareList } from './constants/linkShareList'
const Wrapper = styled.div`
  height: 44px;
  width: 277px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 69px);
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px #eaeaea;
  background-color: var(--white);
  a {
    :not(:first-child) {
      border-left: solid 1px #eaeaea;
    }
  }
`

export const ShareLink: React.FC = () => {
  return (
    <Wrapper>
      {linkShareList.map(({ name, link, src }) => (
        <LinkWithIcon link={link} alt={name} src={src} />
      ))}
      {/* <TagLink href={facebookLink}>
        <IconLink>
          <img src="/icons/facebook-colored.svg" alt="facebook share link" />
        </IconLink>
      </TagLink>
      <TagLink href={twiiterLink}>
        <IconLink>
          <img src="/icons/twitter-colored.svg" alt="twitter share link" />
        </IconLink>
      </TagLink>
      <TagLink href={lineLink}>
        <IconLink>
          <img src="/icons/line-colored.svg" alt="line share link" />
        </IconLink>
      </TagLink>
      <TagLink href={clipboardLink}>
        <IconLink>
          <img src="/icons/clipboard.svg" alt="copy to clipboard" />
        </IconLink>
      </TagLink> */}
    </Wrapper>
  )
}
