import { Layout } from '@blockfint/website/components/layouts'
import { Home } from '@blockfint/website/containers/Home'
import { GetStaticProps, NextPage } from 'next'
import { getAllPosts } from '../api/ghostCMS'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config.js'
import { PostOrPage } from '@tryghost/content-api'

interface Props {
  AllBlogs: PostOrPage[]
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const result = await serverSideTranslations(locale, ['common', 'home'], nextI18NextConfig)
  const AllBlogs = await getAllPosts({ limit: 2 })

  return {
    props: {
      ...result,
      AllBlogs
    },
    revalidate: 60
  }
}
