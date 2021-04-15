import { Layout } from '@blockfint/website/components/layouts'
import React from 'react'
import { About } from '@blockfint/website/containers/about'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config.js'
export default function AboutPage() {
  return (
    <Layout>
      <About />
    </Layout>
  )
}
export const getStaticProps = async ({ locale }) => {
  const result = await serverSideTranslations(locale, ['common', 'home'], nextI18NextConfig)

  return {
    props: {
      ...result
    }
  }
}
