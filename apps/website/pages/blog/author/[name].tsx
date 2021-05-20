import { GetStaticPaths, NextPage } from 'next'
import React from 'react'
import { typography } from '@blockfint/website/styles/typography'
import { createGlobalStyle } from 'styled-components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '@blockfint/website/next-i18next.config'
import { Layout } from '@blockfint/website/components/layouts'
import { Author } from '@blockfint/website/containers/Author'
import { getAuthors } from '@blockfint/website/api/ghostCMS'

const Global = createGlobalStyle`
body{
  ${typography}
}
`
const BlogByAuthorNamePage: NextPage<{ name: string }> = ({ name }) => {
  return (
    <>
      <Global />
      <Layout transparent>
        <Author />
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
