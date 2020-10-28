import { TeamDetail } from 'containers/TeamDetail'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const TeamDetailPage: NextPage = () => {
  const router = useRouter()
  console.log(router.query)
  return (
    <div>
      <TeamDetail />
    </div>
  )
}

export default TeamDetailPage
