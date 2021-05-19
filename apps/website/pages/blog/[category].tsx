import { GetStaticPaths, NextPage } from 'next'
import React from 'react'
import { typography } from '@blockfint/website/styles/typography'
import { createGlobalStyle } from 'styled-components'
import { getTags } from '@blockfint/website/api/ghostCMS'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '@blockfint/website/next-i18next.config'
import { Blog } from '@blockfint/website/containers/Blog'
import { Layout } from '@blockfint/website/components/layouts'
const Global = createGlobalStyle`
body{
  ${typography}
}
`
interface Props {
  category: string
}
const BlogByCategoryPage: NextPage<Props> = ({ category }) => {
  return (
    <>
      <Global />
      <Layout>
        <Blog category={category} />
      </Layout>
    </>
  )
}

export default BlogByCategoryPage
export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const results = await getTags()
  const paths = locales.flatMap((locale) =>
    results
      .filter((tag) => tag.visibility === 'public')
      .map(({ slug }) => {
        return { params: { category: slug }, locale }
      })
      .filter((i) => i !== null)
  )
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({ locale, params }) {
  const result = await serverSideTranslations(locale, ['common', 'about'], nextI18NextConfig)
  const { category } = params
  return {
    props: { ...result, category }
  }
}
