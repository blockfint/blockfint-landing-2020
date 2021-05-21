import { GetStaticPaths, NextPage } from 'next'
import React from 'react'
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
const BlogByTagPage: NextPage<{ name: string }> = ({ name }) => {
  return (
    <>
      <Global />
      <Layout transparent>
        <Tag />
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
    fallback: false
  }
}
export async function getStaticProps({ locale, params }) {
  const result = await serverSideTranslations(locale, ['common', 'about'], nextI18NextConfig)
  const { name } = params
  const posts = await getPostsByTag(name)
  return {
    props: { ...result, name, posts }
  }
}
