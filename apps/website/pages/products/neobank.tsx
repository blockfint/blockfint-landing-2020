import { Layout } from '@blockfint/website/components/layouts'
import { ProductNeoBank } from '@blockfint/website/containers/ProductNeoBank'
import { NextPage } from 'next'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../next-i18next.config'
const GideonPage: NextPage = () => {
  return (
    <Layout>
      <ProductNeoBank />
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
