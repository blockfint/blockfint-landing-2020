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
  categoryList: string[]
}
const BlogByCategoryPage: NextPage<Props> = ({ category, categoryList }) => {
  return (
    <>
      <Global />
      <Layout transparent>
        <Blog category={category} categoryList={categoryList} />
      </Layout>
    </>
  )
}

export default BlogByCategoryPage
const createCatList = (ghostCat) => {
  const listCat = ['technology', 'business', 'education', 'agriculture', 'inspiration']
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
    fallback: false
  }
}
export async function getStaticProps({ locale, params }) {
  const result = await serverSideTranslations(locale, ['common', 'about'], nextI18NextConfig)
  const { category } = params
  const ghostCat = await getTags()
  const categoryList = createCatList(ghostCat)
  return {
    props: { ...result, category, categoryList }
  }
}
