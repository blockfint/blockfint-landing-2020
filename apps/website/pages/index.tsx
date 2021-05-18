import { Layout } from '@blockfint/website/components/layouts'
import { Home } from '@blockfint/website/containers/Home'
import { NextPage } from 'next'
import { getAllPosts } from '../api/ghostCMS'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config.js'
import { PostResult } from '../api/ghostCMS/posts'

interface Props {
  AllBlogs: PostResult[]
}
const Homepage: NextPage<Props> = (props) => {
  const AllBlogs = props.AllBlogs
  return (
    <Layout transparent>
      <Home blogsData={AllBlogs} />
    </Layout>
  )
}

export default Homepage

export const getStaticProps = async ({ locale }) => {
  const result = await serverSideTranslations(locale, ['common', 'home'], nextI18NextConfig)
  const AllBlogs = await getAllPosts()

  return {
    props: {
      ...result,
      AllBlogs
    }
  }
}
