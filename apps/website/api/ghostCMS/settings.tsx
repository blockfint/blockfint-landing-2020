import { ghostApi } from '.'
import { GetStaticProps, GetStaticPropsResult } from 'next'

export interface Meta {
  title?: string
  description?: string
  logo?: string
  icon?: string
  cover_image?: string
  facebook?: string
  twitter?: string
  lang?: string
  timezone?: string
  codeinjection_head?: string
  codeinjection_foot?: any
  navigation?: any[]
  secondary_navigation: any[]
  meta_title?: any
  meta_description?: any
  og_image?: any
  og_title?: any
  og_description?: any
  twitter_image?: any
  twitter_title?: any
  twitter_description?: any
  url: string
}
export const getMetaProps: GetStaticProps = async (): Promise<GetStaticPropsResult<{ meta: Meta }>> => {
  const meta = await ghostApi.settings.browse()
  return {
    props: {
      meta
    }
  }
}
export const getMeta = async () => {
  try {
    return (await ghostApi.settings.browse()) as Meta
  } catch (error) {
    return { title: null, description: null, og_image: null, og_title: null, og_description: null } as Meta
  }
}
