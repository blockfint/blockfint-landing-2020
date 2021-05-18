import { ghostApi } from '.'
import GhostContentAPI, {
  Params,
  PostOrPage,
  SettingsResponse,
  Pagination,
  PostsOrPages,
  Tag,
  Author
} from '@tryghost/content-api'
interface Dimensions {
  width: number
  height: number
}
interface BrowseResults<T> extends Array<T> {
  meta: { pagination: Pagination }
}
interface NextImage {
  url: string
  dimensions: Dimensions
}
interface GhostPostOrPage extends PostOrPage {
  featureImage?: NextImage | null
  htmlAst?: Node | null
}
interface GhostTag extends Tag {
  featureImage?: NextImage
}

interface GhostTags extends BrowseResults<GhostTag> {
  featureImage?: NextImage
}

const postAndPageSlugOptions: Params = {
  limit: 'all',
  fields: 'slug'
}

const tagAndAuthorFetchOptions: Params = {
  limit: 'all',
  include: 'count.posts'
}
const postAndPageFetchOptions: Params = {
  limit: 'all',
  include: ['tags', 'authors', 'count.posts'],
  order: ['featured DESC', 'published_at DESC']
}

export interface PostResult {
  id: string
  uuid: string
  title: string
  slug: string
  html: string
  comment_id: string
  feature_image: string
  featured: boolean
  visibility: string
  send_email_when_published: boolean
  created_at: Date
  updated_at: Date
  published_at: Date
  custom_excerpt: string
  codeinjection_head?: any
  codeinjection_foot?: any
  custom_template?: any
  canonical_url?: any
  url: string
  excerpt: string
  reading_time: number
  og_image?: any
  og_title?: any
  og_description?: any
  twitter_image?: any
  twitter_title?: any
  twitter_description?: any
  meta_title?: any
  meta_description?: any
  email_subject?: any
  tags?: tagsProps[]
  authors?: authorProps[]
}

export interface authorProps {
  bio?: string
  cover_image?: string
  facebook?: string
  id?: string
  meta_description?: string
  meta_title?: string
  name?: string
  profile_image?: string
  slug?: string
  twitter?: string
  url?: string
}

export interface tagsProps {
  accent_color?: string
  canonical_url?: string
  codeinjection_foot?: string
  codeinjection_head?: string
  description?: string
  feature_image?: string
  id?: string
  meta_description?: string
  meta_title?: string
  name?: string
  og_description?: string
  og_image?: string
  og_title?: string
  slug?: string
  twitter_description?: string
  twitter_image?: string
  twitter_title?: string
  url?: string
  visibility?: string
}

export const getAllPosts = async (props?: { limit: number }): Promise<GhostPostOrPage> => {
  return await ghostApi.posts.browse({ include: 'tags,authors', order: 'published_at DESC' })
  // return await ghostApi.posts.browse({ include: 'tags,authors', order: 'updated_at DESC' })
}

export const getSinglePost = async (props?: { id: string }): Promise<GhostPostOrPage> => {
  return await ghostApi.posts.read({ id: `${props}` })
}

// export const getPostsNoCurrent = async (props?: { limit }) => {}
export async function getPostsByTag(slug: string, limit?: number, excludeId?: string): Promise<GhostPostOrPage> {
  const exclude = (excludeId && `+id:-${excludeId}`) || ``
  const posts = await ghostApi.posts.browse({
    ...postAndPageFetchOptions,
    ...(limit && { limit: `${limit}` }),
    filter: `tags.slug:${slug}${exclude}`
  })
  return await posts
}

export async function getTags(): Promise<GhostTags> {
  return await ghostApi.tags.browse(tagAndAuthorFetchOptions)
}
export async function getSingleTag(props?: { limit: number }): Promise<GhostPostOrPage> {
  return await ghostApi.tags.read({ slug: `${props}` }, { include: 'count.posts' })
}

export async function getAuthors() {
  return await ghostApi.authors.browse(tagAndAuthorFetchOptions)
}
export async function getSingleAuthor(props?: { limit: number }): Promise<GhostPostOrPage> {
  return await ghostApi.authors.read({ slug: `${props}` }, { include: 'count.posts' }) // include can be array for any of these
}
export async function getPostsByAuthor(props?: { limit: number }): Promise<GhostPostOrPage> {
  const post = await ghostApi.posts.browse({ filter: `primary_author:${props}` })
  return post
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await ghostApi.posts.browse(postAndPageSlugOptions)
  return posts.map((p) => p.slug)
}
