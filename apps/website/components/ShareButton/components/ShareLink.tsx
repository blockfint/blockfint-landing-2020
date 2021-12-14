import React from 'react'
import styled from 'styled-components'
import { LinkWithIcon } from './LinkWithIcon'
import { linkShareList } from '../constants/linkShareList'

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
        <LinkWithIcon key={name} link={`${link}${window.location.href}`} alt={name} src={src} />
      ))}
    </Wrapper>
  )
}
