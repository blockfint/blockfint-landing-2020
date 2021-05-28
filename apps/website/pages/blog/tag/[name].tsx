import React from 'react'
import { GetStaticPaths, NextPage } from 'next'
import { typography } from '@blockfint/website/styles/typography'
import { createGlobalStyle } from 'styled-components'
import { Tag } from '@blockfint/website/containers/Tag'
import { Layout } from '@blockfint/website/components/layouts'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '@blockfint/website/next-i18next.config'
import { getPostsByTag, getTags } from '@blockfint/website/api/ghostCMS'
import { PostsOrPages, SettingsResponse } from '@tryghost/content-api'
import { getMeta } from '@blockfint/website/api/ghostCMS/settings'
import { NextSeo, NextSeoProps } from 'next-seo'
const Global = createGlobalStyle`
body{
  ${typography}
}
`
interface Props {
  meta: SettingsResponse
  name: string
  posts: PostsOrPages
}
const BlogByTagPage: NextPage<Props> = ({ meta, name, posts }) => {
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
    <>
      <Global />
      <Layout transparent>
        <NextSeo {...SEO} />
        <Tag tag={name} posts={posts} />
      </Layout>
    </>
  )
}

export default BlogByTagPage

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const results = await getTags()
  const paths = locales.flatMap((locale) =>
    results
      .filter((tag) => tag.visibility === 'internal')
      .map(({ slug }) => {
        return { params: { name: slug }, locale }
      })
  )
  return {
    paths,
    fallback: true
  }
}
export async function getStaticProps({ locale, params }) {
  const result = await serverSideTranslations(locale, ['common', 'about'], nextI18NextConfig)
  const meta = await getMeta()
  const { name } = params
  const posts = await getPostsByTag(name)
  return {
    revalidate: 5,
    props: { ...result, meta, name, posts }
  }
}
