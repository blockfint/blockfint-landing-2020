import { GetStaticPaths, NextPage } from 'next'
import React from 'react'
import { typography } from '@blockfint/website/styles/typography'
import { createGlobalStyle } from 'styled-components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '@blockfint/website/next-i18next.config'
const Global = createGlobalStyle`
body{
  ${typography}
}
`
const BlogByTagPage: NextPage<{ name: string }> = ({ name }) => {
  return (
    <>
      <Global />
      <div>BlogByTagPage {name}</div>
    </>
  )
}

export default BlogByTagPage

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    //TODO get all tag
    paths: [{ params: { name: 'defi' } }],
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
