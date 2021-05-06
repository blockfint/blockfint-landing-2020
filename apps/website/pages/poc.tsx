import { NextPage } from 'next'
import React from 'react'
import { PrimaryButton } from '../components/Buttons'

const POC: NextPage = () => {
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
      <PrimaryButton onClick={handleShare}>Share</PrimaryButton>
    </div>
  )
}

export default POC
