import { GetStaticPaths, NextPage } from 'next'
import React from 'react'
import { typography } from '@blockfint/website/styles/typography'
import { createGlobalStyle } from 'styled-components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '@blockfint/website/next-i18next.config'
import { Layout } from '@blockfint/website/components/layouts'
import { AuthorBlog } from '@blockfint/website/containers/AuthorBlog'
import { getAllPosts, getAuthors, getSingleAuthor } from '@blockfint/website/api/ghostCMS'
import { Author, PostsOrPages, SettingsResponse } from '@tryghost/content-api'
import { getMeta } from '@blockfint/website/api/ghostCMS/settings'
import { NextSeo, NextSeoProps } from 'next-seo'

const Global = createGlobalStyle`
body{
  ${typography}
}
`

export interface AuthorPageProps {
  meta?: SettingsResponse
  profile?: Author
  posts?: PostsOrPages
}
const BlogByAuthorNamePage: NextPage<AuthorPageProps> = ({ meta, profile, posts }) => {
  const SEO = {
    title: meta?.title,
    description: meta?.description,
    openGraph: {
      title: meta?.og_title,
      description: meta?.og_description,
      images: [{ url: meta?.og_image, alt: meta?.og_title }]
    }
  } as NextSeoProps
  return (
    <>
      {Global}
      <Layout transparent>
        <NextSeo {...SEO} />
        <AuthorBlog profile={profile} posts={posts} />
      </Layout>
    </>
  )
}

export default BlogByAuthorNamePage

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const results = await getAuthors()
  const paths = locales.flatMap((locale) =>
    results
      .map(({ slug }) => {
        return { params: { name: slug }, locale }
      })
      .filter((i) => i !== null)
  )
  return {
    paths,
    fallback: true
  }
}
export async function getStaticProps({ locale, params }) {
  const result = await serverSideTranslations(locale, ['common', 'about'], nextI18NextConfig)
  const meta = await getMeta()
  const name = params?.name
  const profile = await getSingleAuthor(name)
  const posts = await getAllPosts({ filter: `primary_author:${name}` })
  return {
    props: { ...result, meta, profile, posts }
  }
}
