import { Layout } from 'components/layouts'
import { ProductGideon } from 'containers/ProductGideon'
import { NextPage } from 'next'
import React from 'react'

const GideonPage: NextPage = () => {
  return (
    <Layout>
      <ProductGideon />
    </Layout>
  )
}

export default GideonPage
