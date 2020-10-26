import { JoinUsBanner } from 'components/JoinUsBanner'
import { TeamLead } from './components/teamLead'
import React from 'react'

export const Team: React.FC = () => {
  return (
    <>
      <TeamLead />
      <JoinUsBanner />
    </>
  )
}
