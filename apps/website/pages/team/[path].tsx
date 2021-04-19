import { TeamDetailpage } from '@blockfint/website/containers/TeamDetail/components/index'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { peopleInfos, PeopleInfo } from '@blockfint/website/contents/PeopleInfo'
import { Layout } from '@blockfint/website/components/layouts'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../next-i18next.config'
const TeamDetailPage: NextPage<PeopleInfo> = (props) => {
  return (
    <Layout>
      <TeamDetailpage {...props} />
    </Layout>
  )
}

export default TeamDetailPage

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = locales.flatMap((locale) =>
    Object.keys(peopleInfos).map((path) => ({
      params: {
        path
      },
      locale
    }))
  )
  return {
    paths,
    fallback: false
  }
}
type Params = {
  locale: string
  params: {
    path: string
  }
}
export const getStaticProps: GetStaticProps = async (ctx: Params) => {
  const result = await serverSideTranslations(ctx.locale, ['common', 'team-details'], nextI18NextConfig)
  const props = { ...peopleInfos[ctx.params?.path], ...result }
  return { props }
}
