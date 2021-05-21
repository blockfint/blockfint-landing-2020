import React from 'react'
import { typography } from '@blockfint/website/styles/typography'
import { createGlobalStyle } from 'styled-components'
import { Layout } from '@blockfint/website/components/layouts'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '@blockfint/website/next-i18next.config.js'
import { NextPage } from 'next'
import { Blog } from '@blockfint/website/containers/Blog'
const Global = createGlobalStyle`
body{
  ${typography}
}
`

const BlogPage: NextPage = () => {
  return (
    <>
      <Global />
      <Layout>
        <Blog />
      </Layout>
    </>
  )
}
export default BlogPage
export const getStaticProps = async ({ locale }) => {
  const result = await serverSideTranslations(locale, ['common', 'about'], nextI18NextConfig)
  return {
    props: {
      ...result
    },
    revalidate: 60
  }
}
