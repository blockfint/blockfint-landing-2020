import { Layout } from 'components/layouts'
import { ProductAgriTrac } from 'containers/ProductAgriTrac'
import { NextPage } from 'next'
import React from 'react'

const GideonPage: NextPage = () => {
  return (
    <Layout>
      <ProductAgriTrac />
    </Layout>
  )
}

export default GideonPage
