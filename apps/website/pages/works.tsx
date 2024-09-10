import React from 'react'
import { NextPage } from 'next'
import { Works } from '@blockfint/website/containers/Works'
import { Layout } from '@blockfint/website/components/layouts'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config.js'
import { SettingsResponse } from '@tryghost/content-api'
import { NextSeo, NextSeoProps } from 'next-seo'
interface Props {
  meta: SettingsResponse
}
const work: NextPage<Props> = ({ meta }) => {
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
      <Works />
    </Layout>
  )
}

export default work

export const getStaticProps = async ({ locale }) => {
  const result = await serverSideTranslations(locale, ['common', 'works', 'project'], nextI18NextConfig)
  return {
    props: {
      ...result,
      meta: {}
    }
  }
}
