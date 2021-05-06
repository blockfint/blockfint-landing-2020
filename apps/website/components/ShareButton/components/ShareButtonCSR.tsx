import React, { useMemo } from 'react'
import { PrimaryButton } from '../../Buttons'

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
  return isSupportShare ? <PrimaryButton onClick={handleShare}>Share</PrimaryButton> : <h1>Not Support Share API</h1>
}

export default ShareButtonCSR
