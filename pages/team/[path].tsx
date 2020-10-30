import { TeamDetailpage } from 'containers/TeamDetail/components/index'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { peopleInfos, PeopleInfo } from 'contents/PeopleInfo'
import { Layout } from 'components/layouts'

const TeamDetailPage: NextPage<PeopleInfo> = (props) => {
  return (
    <Layout>
      <TeamDetailpage {...props} />
    </Layout>
  )
}

export default TeamDetailPage

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(peopleInfos).map((path) => ({
    params: {
      path
    }
  }))
  return {
    paths,
    fallback: false
  }
}
type Params = {
  params: {
    path: string
  }
}
export const getStaticProps: GetStaticProps = async (ctx: Params) => {
  const props = peopleInfos[ctx.params?.path]
  return { props }
}
