import { Layout } from '@blockfint/website/components/layouts'
import { Team } from '@blockfint/website/containers/Team'
import { NextPage } from 'next'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../next-i18next.config'
import { getMeta } from '@blockfint/website/api/ghostCMS/settings'
import { SettingsResponse } from '@tryghost/content-api'
import { NextSeo, NextSeoProps } from 'next-seo'
interface Props {
  meta: SettingsResponse
}
const TeamPage: NextPage<Props> = ({ meta }) => {
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
      <Team />
    </Layout>
  )
}

export default TeamPage
export const getStaticProps = async ({ locale }) => {
  const result = await serverSideTranslations(locale, ['common', 'team'], nextI18NextConfig)
  const meta = await getMeta()
  return {
    props: {
      ...result,
      meta
    }
  }
}
