import React from 'react'
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog'
import { linkShareList } from '../constants/linkShareList'
import { LinkWithIcon } from './LinkWithIcon'
import Snackbar from '@material-ui/core/Snackbar'
const Button = styled.button`
  width: 70px;
  height: 44px;
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: solid 1px #eaeaea;
  background-color: var(--white);
`
const CardWrapper = styled.div`
  width: 327px;
  height: 264px;
  padding: 24px 59px 32px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const LinkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-column-gap: 2rem;
  margin-top: 1.5rem;
`
const ClipboardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 0.5rem;
`
const TextFieldLink = styled.input`
  width: 209px;
  height: 44px;
  padding: 10px;
  border-radius: 4px;
  border: solid 1px #eaeaea;
  background-color: var(--white);
  margin: 1rem 0;
`
const CopyButton = styled.button`
  background-color: var(--white);
  border: 0;
  cursor: pointer;
`

export const ShareWithModal = () => {
  const textLink = window.location.href
  const [open, setOpen] = React.useState(false)
  const [showAlert, setShowAlert] = React.useState({ open: false, massage: 'Copy to Clipboard!' })
  const handleOpen = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          // title: 'Title share API POC',
          // text: 'Text share API POC',
          url: textLink
        })
      } catch (error) {
        console.log(error)
      }
    } else {
      setOpen(true)
    }
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleClickCopy = () => {
    navigator.clipboard.writeText(textLink).then(
      function () {
        setShowAlert((prev) => {
          return { ...prev, open: true }
        })
      },
      function () {
        setShowAlert({ open: true, massage: 'Error to copy!' })
      }
    )
  }
  const handleAlertClose = () => {
    setShowAlert((prev) => {
      return { ...prev, open: false }
    })
  }
  return (
    <div>
      <Button onClick={handleOpen}>
        <img src="/icons/shareIcon.svg" alt="share icon" />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <CardWrapper>
          <h5>Share</h5>
          <LinkWrapper>
            {linkShareList.slice(0, 3).map(({ name, link, src }) => (
              <LinkWithIcon key={name} alt={name} src={src} link={link} style={{ width: '40px' }} />
            ))}
          </LinkWrapper>
          <TextFieldLink value={textLink} onChange={() => null} />
          <ClipboardWrapper>
            <LinkWithIcon
              key={linkShareList[3].name}
              alt={linkShareList[3].name}
              src={linkShareList[3].src}
              link={linkShareList[3].link}
              style={{ width: '24px' }}
              disableLink
            />
            <CopyButton onClick={handleClickCopy}>
              <h6>Copy Link</h6>
            </CopyButton>
            <Snackbar
              open={showAlert.open}
              message={showAlert.massage}
              autoHideDuration={2000}
              onClose={handleAlertClose}
            />
          </ClipboardWrapper>
        </CardWrapper>
      </Dialog>
    </div>
  )
}
