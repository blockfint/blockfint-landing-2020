import React from 'react'
import { NextPage } from 'next'
import { Works } from 'containers/Works'
import { Layout } from 'components/layouts'
const work: NextPage = () => {
  return (
    <Layout>
      <Works />
    </Layout>
  )
}

export default work
