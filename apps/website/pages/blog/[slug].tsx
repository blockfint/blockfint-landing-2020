import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { typography } from '@blockfint/website/styles/typography'
import { createGlobalStyle } from 'styled-components'
import { getSinglePost, getAllPosts } from '@blockfint/website/api/ghostCMS'
import { BlogDetail } from '@blockfint/website/containers/BlogDetail'
import { Layout } from '@blockfint/website/components/layouts'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '@blockfint/website/next-i18next.config'
import { PostOrPage } from '@tryghost/content-api'
import { NextSeo, NextSeoProps } from 'next-seo'
const Global = createGlobalStyle`
body{
  ${typography}
}
`
const BlogDetailPage: NextPage<{ post: PostOrPage; nextPosts: PostOrPage[] }> = ({ post, nextPosts }) => {
  const SEO = {
    title: post?.title,
    canonical: post?.canonical_url,
    description: post?.excerpt,
    openGraph: {
      title: post?.og_title,
      description: post?.og_description,
      images: [{ url: post?.og_image, height: 630, width: 1200 }]
    }
  } as NextSeoProps
  if (post) {
    return (
      <>
        <Global />
        <Layout>
          <NextSeo {...SEO} />
          <BlogDetail post={post} nextPosts={nextPosts} />
        </Layout>
      </>
    )
  }

  return (
    <>
      <Global />
      <Layout>
        <NextSeo {...SEO} />
        <BlogDetail post={post} nextPosts={nextPosts} />
      </Layout>
    </>
  )
}

export default BlogDetailPage

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const results = await getAllPosts()
  const paths = locales.flatMap((locale) =>
    results
      .map((post) => {
        try {
          const tags = post?.tags ?? []
          const slug = post?.slug ?? ''
          const mainTag = tags?.find(({ visibility }) => visibility === 'public') // find categories
          if (!mainTag) return null
          return { params: { slug: slug }, locale }
        } catch (error) {
          console.log(error)
          return null
        }
      })
      .filter((i) => i !== null)
  )
  return {
    paths,
    fallback: true
  }
}
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { locale, params } = ctx
  const i18nContext = await serverSideTranslations(locale, ['common', 'about'], nextI18NextConfig)

  const slug = params.slug as string

  const post = await getSinglePost({ slug })
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
