import { Layout } from '@blockfint/website/components/layouts'
import React from 'react'
import { About } from '@blockfint/website/containers/about'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config.js'
import { NextPage } from 'next'
import { NextSeo, NextSeoProps } from 'next-seo'
import { SettingsResponse } from '@tryghost/content-api'
interface Props {
  meta: SettingsResponse
}
const AboutPage: NextPage<Props> = ({ meta }) => {
  const { title, description, og_image, og_title, og_description } = meta
  const SEO = {
    title,
    description,
    openGraph: {
      title: og_title,
      description: og_description,
      images: [{ url: og_image, alt: og_title }]
    }
  } as NextSeoProps
  return (
    <Layout>
      <NextSeo {...SEO} />
      <About />
    </Layout>
  )
}
export default AboutPage
export const getStaticProps = async ({ locale }) => {
  const result = await serverSideTranslations(locale, ['common', 'about'], nextI18NextConfig)

  return {
    props: {
      ...result,
      meta: {}
    }
  }
}
