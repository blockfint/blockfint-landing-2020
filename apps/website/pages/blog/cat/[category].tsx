import { GetStaticPaths, NextPage } from 'next'
import React from 'react'
import { typography } from '@blockfint/website/styles/typography'
import { createGlobalStyle } from 'styled-components'
import { getPostsByTag, getTags } from '@blockfint/website/api/ghostCMS'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '@blockfint/website/next-i18next.config'
import { Blog } from '@blockfint/website/containers/Blog'
import { Layout } from '@blockfint/website/components/layouts'
import { PostsOrPages, SettingsResponse } from '@tryghost/content-api'
import { getMeta } from '@blockfint/website/api/ghostCMS/settings'
import { NextSeo, NextSeoProps } from 'next-seo'
const Global = createGlobalStyle`
body{
  ${typography}
}
`
interface Props {
  meta?: SettingsResponse
  category?: string
  categoryList?: string[]
  posts?: PostsOrPages
}
const BlogByCategoryPage: NextPage<Props> = ({ meta, category, categoryList, posts }) => {
  const SEO = {
    title: meta?.title,
    description: meta?.description,
    openGraph: {
      title: meta?.og_title,
      description: meta?.og_description,
      images: [{ url: meta?.og_image, alt: meta?.og_title }]
    }
  } as NextSeoProps
  if (!category || !categoryList || !posts) {
    return (
      <>
        {Global}
        <Layout transparent>
          <p>Loading</p>
        </Layout>
      </>
    )
  }
  return (
    <>
      {Global}
      <Layout transparent>
        <NextSeo {...SEO} />
        <Blog category={category} categoryList={categoryList} posts={posts} />
      </Layout>
    </>
  )
}

export default BlogByCategoryPage
const createCatList = (ghostCat) => {
  const listCat = [] // ['financial', 'energy', 'transformation', 'blockchain']
  const categoryList = [
    ...listCat,
    ...ghostCat
      .filter((tag) => tag.visibility === 'public' && !listCat.includes(tag.slug))
      .map(({ slug }) => {
        return slug
      })
  ]
  return categoryList
}
export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const results = await getTags()
  const allCat = createCatList(results)
  const paths = locales.flatMap((locale) =>
    allCat.map((category) => {
      return { params: { category }, locale }
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
  const ghostCat = await getTags()
  const categoryList = createCatList(ghostCat)
  const { category } = params
  const posts = await getPostsByTag(category)
  return {
    props: { ...result, meta, category, categoryList, posts },
    revalidate: 5
  }
}
