import React from 'react'
import { NextPage } from 'next'
import { Works } from '@blockfint/website/containers/Works'
import { Layout } from '@blockfint/website/components/layouts'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config.js'
const work: NextPage = () => {
  return (
    <Layout>
      <Works />
    </Layout>
  )
}

export default work

export const getStaticProps = async ({ locale }) => {
  const result = await serverSideTranslations(locale, ['common', 'home'], nextI18NextConfig)

  return {
    props: {
      ...result
    }
  }
}
