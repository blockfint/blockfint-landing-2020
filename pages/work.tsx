import React from 'react'
import { NextPage } from 'next'
import { Work } from 'containers/Work'
import { Layout } from 'components/layouts'
const work: NextPage = () => {
  return (
    <Layout>
      <Work />
    </Layout>
  )
}

export default work
