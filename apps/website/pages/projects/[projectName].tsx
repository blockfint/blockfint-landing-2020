import { ProjectDetail } from '@blockfint/website/containers/ProjectDetail'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { projectInfos, ProjectInfo } from '@blockfint/website/contents/projects'
import { Layout } from '@blockfint/website/components/layouts'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../next-i18next.config'
import { getMeta } from '@blockfint/website/api/ghostCMS/settings'
import { NextSeo, NextSeoProps } from 'next-seo'
const ProjectDetailPage: NextPage<ProjectInfo> = (props) => {
  const { title, description, og_image, og_title, og_description } = props?.meta
  const SEO = {
    title,
    description,
    openGraph: {
      title: og_title,
      description: og_description,
      images: [{ url: og_image, alt: og_title }]
    }
  } as NextSeoProps
  return (
    <Layout>
      <NextSeo {...SEO} />
      <ProjectDetail {...props} />
    </Layout>
  )
}

export default ProjectDetailPage

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = locales.flatMap((locale) =>
    Object.keys(projectInfos).map((projectName) => ({
      params: {
        projectName
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
    projectName: string
  }
}
export const getStaticProps: GetStaticProps = async (ctx: Params) => {
  const result = await serverSideTranslations(ctx.locale, ['common', 'project'], nextI18NextConfig)
  const meta = await getMeta()
  const props = { ...projectInfos[ctx.params?.projectName], ...result, meta }
  return { props }
}
