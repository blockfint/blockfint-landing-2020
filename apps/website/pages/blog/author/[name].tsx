import { GetStaticPaths, NextPage } from 'next'
import React from 'react'
import { typography } from '@blockfint/website/styles/typography'
import { createGlobalStyle } from 'styled-components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '@blockfint/website/next-i18next.config'
import { Layout } from '@blockfint/website/components/layouts'
import { Author } from '@blockfint/website/containers/Author'

const Global = createGlobalStyle`
body{
  ${typography}
}
`
const BlogByAuthorNamePage: NextPage<{ name: string }> = ({ name }) => {
  return (
    <>
      <Global />
      <Layout>
        <Author />
      </Layout>
    </>
  )
}

export default BlogByAuthorNamePage

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    //TODO get all author
    paths: [{ params: { name: 'John' } }],
    fallback: false
  }
}
export async function getStaticProps({ locale, params }) {
  const result = await serverSideTranslations(locale, ['common', 'about'], nextI18NextConfig)
  const name = params.name

  return {
    props: { ...result, name }
  }
}
