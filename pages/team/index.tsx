import { Layout } from 'components/layouts'
import { Team } from 'containers/Team'
import { NextPage } from 'next'
import React from 'react'

const TeamPage: NextPage = () => {
  return (
    <Layout>
      <Team />
    </Layout>
  )
}

export default TeamPage
