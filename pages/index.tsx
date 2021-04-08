import { Layout } from 'components/layouts'
import { Home } from 'containers/Home'
import { NextPage } from 'next'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Homepage: NextPage = () => {
  return (
    <Layout transparent>
      <Home />
    </Layout>
  )
}

export default Homepage

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home']))
  }
})
