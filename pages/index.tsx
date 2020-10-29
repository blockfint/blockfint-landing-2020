import { Layout } from 'components/layouts'
import { Home } from 'containers/Home'
import { NextPage } from 'next'
import React from 'react'

const Homepage: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default Homepage
