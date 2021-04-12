import { Layout } from '@blockfint/website/components/layouts'
import { Home } from '@blockfint/website/containers/Home'
import { NextPage } from 'next'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config.js'
const Homepage: NextPage = () => {
  return (
    <Layout transparent>
      <Home />
    </Layout>
  )
}

export default Homepage

export const getStaticProps = async ({ locale }) => {
  try {
    const result = await serverSideTranslations(locale, ['common', 'home'], nextI18NextConfig)

    return {
      props: {
        ...result
      }
    }
  } catch (error) {
    console.log(error)
    return { props: {} }
  }
}
