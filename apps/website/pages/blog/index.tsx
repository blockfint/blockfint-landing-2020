import React from 'react'
import { typography } from '@blockfint/website/styles/typography'
import { createGlobalStyle } from 'styled-components'
import { Layout } from '@blockfint/website/components/layouts'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '@blockfint/website/next-i18next.config.js'
import { NextPage } from 'next'
import { Blog } from '@blockfint/website/containers/Blog'
import { getAllPosts, getTags } from '@blockfint/website/api/ghostCMS'
import { SettingsResponse, PostsOrPages } from '@tryghost/content-api'
import { NextSeo, NextSeoProps } from 'next-seo'
import { getMeta } from '@blockfint/website/api/ghostCMS/settings'
const Global = createGlobalStyle`
body{
  ${typography}
}
`
interface Props {
  meta: SettingsResponse
  categoryList: string[]
  posts: PostsOrPages
}
const BlogPage: NextPage<Props> = ({ categoryList, posts, meta }) => {
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
        <Blog categoryList={categoryList} posts={posts} />
      </Layout>
    </>
  )
}
export default BlogPage
export const getStaticProps = async ({ locale }) => {
  const result = await serverSideTranslations(locale, ['common', 'about'], nextI18NextConfig)
  const meta = await getMeta()
  const ghostCat = await getTags()
  const listCat = ['technology', 'business', 'education', 'agriculture', 'inspiration']
  const categoryList = [
    ...listCat,
    ...ghostCat
      .filter((tag) => tag.visibility === 'public' && !listCat.includes(tag.slug))
      .map(({ slug }) => {
        return slug
      })
  ]
  const posts = await getAllPosts()
  return {
    props: {
      ...result,
      meta,
      categoryList,
      posts
    },
    revalidate: 60
  }
}
