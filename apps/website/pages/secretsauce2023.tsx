import { Layout } from '@blockfint/website/components/layouts'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config.js'
import { PostOrPage, SettingsResponse } from '@tryghost/content-api'
import { getMeta } from '@blockfint/website/api/ghostCMS/settings'
import { NextSeo, NextSeoProps } from 'next-seo'
import { SecretSauce } from '@blockfint/website/containers/SecretSauce'

interface Props {
  Blogs: PostOrPage[]
  meta: SettingsResponse
}
const SecretSaucePage: NextPage<Props> = ({ Blogs, meta }) => {
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
    <Layout transparent>
      <NextSeo {...SEO} />
      <SecretSauce />
    </Layout>
  )
}

export default SecretSaucePage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const result = await serverSideTranslations(locale,['common','home','secret-sauce'],nextI18NextConfig)
  const meta = await getMeta()

  return {
    props: {
      ...result,
      meta,
    },
    revalidate: 5
  }
}
