import { Layout } from '@blockfint/website/components/layouts'
import { Home } from '@blockfint/website/containers/Home'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config.js'
import { PostOrPage, SettingsResponse } from '@tryghost/content-api'
import { NextSeo, NextSeoProps } from 'next-seo'

interface Props {
  Blogs: PostOrPage[]
  meta: SettingsResponse
}
const Homepage: NextPage<Props> = ({ Blogs, meta }) => {
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
      <Home blogsData={Blogs} />
    </Layout>
  )
}

export default Homepage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const result = await serverSideTranslations(locale, ['common', 'home'], nextI18NextConfig)

  return {
    props: {
      ...result,
      meta: {}
    },
    revalidate: 5
  }
}
