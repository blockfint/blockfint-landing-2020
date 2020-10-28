import { TeamDetailpage } from 'containers/TeamDetail/components/index'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const TeamDetailPage: NextPage = () => {
  const router = useRouter()
  // console.log(router.query)
  return (
    <div>
      <TeamDetailpage name={router.query} />
    </div>
  )
}

export default TeamDetailPage
