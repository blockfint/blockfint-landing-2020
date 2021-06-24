import { getAllPosts, getDraftPosts } from '@blockfint/website/api/ghostCMS'
import { Layout } from '@blockfint/website/components/layouts'
import { BlogDetail } from '@blockfint/website/containers/BlogDetail'
import { typography } from '@blockfint/website/styles/typography'
import { PostOrPage } from '@tryghost/content-api'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '@blockfint/website/next-i18next.config'

const Global = createGlobalStyle`
body{
  ${typography}
}
`
const PreviewPage: NextPage<{ post: PostOrPage; nextPosts: PostOrPage[] }> = ({ post, nextPosts }) => {
  if (post) {
    return (
      <>
        <Global />
        <Layout>
          <BlogDetail post={post} nextPosts={nextPosts} />
        </Layout>
      </>
    )
  }

  return (
    <>
      <Global />
      <Layout>
        <p>Loading</p>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const i18nContext = await serverSideTranslations(locale, ['common', 'about'], nextI18NextConfig)
  const uuid = params?.uuid ?? ''
  const allPosts = await getDraftPosts()
  const post = allPosts.find((post) => post.uuid === uuid)
  if (post) {
    const nextPosts = await getAllPosts({ filter: [`posts.slug:-${post.slug}`], limit: 6 })
    return {
      props: { ...i18nContext, post, nextPosts },
      revalidate: 5
    }
  }
  return {
    props: { ...i18nContext },
    revalidate: 5
  }
}

export default PreviewPage
