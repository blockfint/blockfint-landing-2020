import { GetStaticPaths, NextPage } from 'next'
import React from 'react'
import { typography } from '@blockfint/website/styles/typography'
import { createGlobalStyle } from 'styled-components'
import { getSinglePost } from '@blockfint/website/utils/api'
import { BlogDetail } from '@blockfint/website/containers/BlogDetail'
import { Layout } from '@blockfint/website/components/layouts'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '@blockfint/website/next-i18next.config'
import { Container } from '@material-ui/core'
const Global = createGlobalStyle`
body{
  ${typography}
}
`
const BlogDetailPage: NextPage<{ post: any }> = ({ post }) => {
  return (
    <>
      <Global />
      <Layout>
        <Container maxWidth="lg">{post.html && <BlogDetail html={post.html} />}</Container>
      </Layout>
    </>
  )
}

export default BlogDetailPage

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    //TODO get all slug and category of post and parse like this ['<category>,<slug>]
    paths: [
      { params: { slug: ['blockchain', 'welcome'] } },
      { params: { slug: ['blockchain', 'integrations'] } },
      { params: { slug: ['blockchain', 'design'] } }
    ],
    fallback: false
  }
}
export async function getStaticProps({ locale, params }) {
  const result = await serverSideTranslations(locale, ['common', 'about'], nextI18NextConfig)
  const [category, slug] = params.slug
  console.log(slug)
  //tot
  const post = await getSinglePost(slug)

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: { ...result, post }
  }
}
