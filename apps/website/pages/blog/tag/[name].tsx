import React from 'react'
import { GetStaticPaths, NextPage } from 'next'
import { typography } from '@blockfint/website/styles/typography'
import { createGlobalStyle } from 'styled-components'
import { Tag } from '@blockfint/website/containers/Tag'
import { Layout } from '@blockfint/website/components/layouts'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '@blockfint/website/next-i18next.config'
import { getPostsByTag, getTags } from '@blockfint/website/api/ghostCMS'
const Global = createGlobalStyle`
body{
  ${typography}
}
`
interface Props {
  name: string
  posts: any
}
const BlogByTagPage: NextPage<Props> = ({ name, posts }) => {
  return (
    <>
      <Global />
      <Layout transparent>
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
  const { name } = params
  const posts = await getPostsByTag(name)
  return {
    revalidate: 5,
    props: { ...result, name, posts }
  }
}
