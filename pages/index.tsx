import React from 'react'
import { ReactComponent as Logo } from 'assets/logos/blockfint-small.svg'
import { SecondaryButton, PrimaryButton } from 'components/Buttons'
import { PostCard } from 'components/PostCard'
import React from 'react'
export default function Home() {
  return (
    <div style={{ margin: '2rem' }}>
      <SecondaryButton>SSS</SecondaryButton>
      <PrimaryButton logo={<Logo style={{ fontSize: '1.5rem' }} />}>Label</PrimaryButton>
      <PostCard title="Gideon" desc="Energy Trading Without Barriers" />
    </div>
  )
}
