import { Layout } from 'components/layouts'
import { ProductThinker } from 'containers/ProductThinker'
import { NextPage } from 'next'
import React from 'react'

const GideonPage: NextPage = () => {
  return (
    <Layout>
      <ProductThinker />
    </Layout>
  )
}

export default GideonPage
