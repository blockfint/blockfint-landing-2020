/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import { Popover, Snackbar } from '@material-ui/core'

const IconLink = styled.button`
  cursor: pointer;
  background-color: var(--white);
  height: 100%;
  width: 100%;
  border: 0;
`
const StyledPopover = styled(Popover)`
  .MuiPaper-rounded {
    border-radius: 0.25rem;
  }
`
const Popup = styled.div`
  padding: 0.375rem 1rem;
  box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.1);
  background-color: #333333;
  color: #ffffff;
  display: grid;
  justify-content: center;
  align-items: center;
`
interface Props {
  link?: string
  src: string
  alt: string
  style?: React.CSSProperties
  disableLink?: boolean
}
export const LinkWithIcon: React.FC<Props> = ({ link, src, alt, style, disableLink = false }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const handleClickCopy = (event) => {
    setAnchorEl(event.currentTarget)
    navigator.clipboard.writeText(window.location.href)
    setTimeout(() => setAnchorEl(null), 1000)
  }
  const handleClose = () => {
    if (anchorEl !== null) setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'popover' : undefined
  if (alt === 'clipboard')
    return (
      <>
        <a onClick={handleClickCopy}>
          <IconLink>
            <img src={src} alt={alt} style={style} />
          </IconLink>
        </a>
        <StyledPopover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
        >
          <Popup>
            <h6>Copied</h6>
          </Popup>
        </StyledPopover>
      </>
    )
  return (
    <a href={link} style={{ pointerEvents: disableLink ? 'none' : 'auto' }} target="__blank" rel="noopener noreferrer">
      <IconLink>
        <img src={src} alt={alt} style={style} />
      </IconLink>
    </a>
  )
}
