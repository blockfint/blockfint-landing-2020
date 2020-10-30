import { Layout } from 'components/layouts'
import { ProductNeoBank } from 'containers/ProductNeoBank'
import { NextPage } from 'next'
import React from 'react'

const GideonPage: NextPage = () => {
  return (
    <Layout>
      <ProductNeoBank />
    </Layout>
  )
}

export default GideonPage
