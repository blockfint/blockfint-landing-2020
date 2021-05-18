import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import styled from 'styled-components'
export const BlogButton = styled.button`
  cursor: pointer;
  width: 188px;
  height: 50px;
  border-radius: 32px;
  border: solid 1px #bdbdbd;
  background-color: var(--white);
  font-weight: 600;
  font-size: 16px;
  transition: 0.35s ease-in-out;
  :hover {
    background-color: #ececec;
  }
  :active {
    background-color: #d6d3d3;
  }
  @media ${BREAKPOINT.tablet} {
    width: 261px;
  }
`
