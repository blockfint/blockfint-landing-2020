import { NextPage } from 'next'
import React, { useMemo } from 'react'
import { PrimaryButton } from '../components/Buttons'

const POC: NextPage = () => {
  const isSupportShare = useMemo(() => {
    if (navigator.share) {
      return true
    }
    return false
  }, [])
  const handleShare = async () => {
    console.log('hello')
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
    <div>
      {isSupportShare ? <PrimaryButton onClick={handleShare}>Share</PrimaryButton> : <h1>Not Support Share API</h1>}
    </div>
  )
}

export default POC
