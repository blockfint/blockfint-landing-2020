import React from 'react'
import styled from 'styled-components'
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
`
const IconLink = styled.button`
  background-color: var(--white);
  height: 100%;
  width: 100%;
  border: 0;
`
const TagLink = styled.a`
  :not(:first-child) {
    border-left: solid 1px #eaeaea;
  }
`
interface Props {
  facebookLink: string
  twiiterLink: string
  lineLink: string
  clipboardLink: string
}
export const ShareLink: React.FC<Props> = ({ facebookLink, twiiterLink, lineLink, clipboardLink }) => {
  return (
    <Wrapper>
      <TagLink href={facebookLink}>
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
      </TagLink>
    </Wrapper>
  )
}
