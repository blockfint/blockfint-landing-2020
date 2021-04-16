import { Layout } from '@blockfint/website/components/layouts'
import { ProductGideon } from '@blockfint/website/containers/ProductGideon'
import { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../next-i18next.config'
import React from 'react'

const GideonPage: NextPage = () => {
  return (
    <Layout>
      <ProductGideon />
    </Layout>
  )
}

export default GideonPage

export const getStaticProps = async ({ locale }) => {
  const result = await serverSideTranslations(locale, ['common', 'work-details'], nextI18NextConfig)

  return {
    props: {
      ...result
    }
  }
}
