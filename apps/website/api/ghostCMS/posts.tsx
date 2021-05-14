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

export const getAllPosts = async (props?: { limit: number }): Promise<GhostPostOrPage> => {
  return await ghostApi.posts.browse({ include: 'tags,authors' })
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
