import { Layout } from '@blockfint/website/components/layouts'
import { Team } from '@blockfint/website/containers/Team'
import { NextPage } from 'next'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../next-i18next.config'
const TeamPage: NextPage = () => {
  return (
    <Layout>
      <Team />
    </Layout>
  )
}

export default TeamPage
export const getStaticProps = async ({ locale }) => {
  const result = await serverSideTranslations(locale, ['common', 'team'], nextI18NextConfig)

  return {
    props: {
      ...result
    }
  }
}
