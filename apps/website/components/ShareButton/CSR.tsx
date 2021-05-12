import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import { ShareLink } from './components/ShareLink'
import { ShareWithModal } from './components/ShareWithModal'

const Container = styled.div`
  .small {
    display: block;
    visibility: visible;
  }
  .long {
    display: none;
    visibility: hidden;
  }
  @media ${BREAKPOINT.tablet} {
    .small {
      display: none;
      visibility: hidden;
    }
    .long {
      visibility: visible;
      display: block;
    }
  }
`
const ShareButtonCSR: React.FC = () => {
  const isSupportShare = useMemo(() => {
    if (navigator && navigator.share) {
      return true
    }
    return false
  }, [])
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Title share API POC',
          text: 'Text share API POC',
          url: 'https://blockfint.com'
        })
      } catch (error) {
        console.log(error)
      }
    } else {
      alert('Not Support')
    }
  }
  return (
    <>
      {isSupportShare && <ShareWithModal />}
      {!isSupportShare && (
        <Container>
          <div className="long">
            <ShareLink />
          </div>
          <div className="small">
            <ShareWithModal />
          </div>
        </Container>
      )}
    </>
  )
}

export default ShareButtonCSR
