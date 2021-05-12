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

const CONTENT_API_KEY = '708ac1173877993307867ac85c'
const BLOG_URL = 'http://localhost:3001'
const api = new GhostContentAPI({
  url: BLOG_URL,
  key: CONTENT_API_KEY,
  version: 'v3'
})

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
}

export interface Dimensions {
  width: number
  height: number
}
export interface NextImage {
  url: string
  dimensions: Dimensions
}
export interface GhostPostOrPage extends PostOrPage {
  featureImage?: NextImage | null
  htmlAst?: Node | null
  // toc?: IToC[] | null;
}
interface Props {
  id?: string
  slug?: string
  page?: string
  limit?: number | 'all'
  include?: string
  filter?: string
}

export const getPosts = async (locale = 'en', props: Props = {}) => {
  const filter = ['tag:main', props.filter].join('+')

  return await ghostApi.posts
    .browse({ ...props, filter })
    .then(async (posts) => {
      const results = posts.map(async (post) => {
        try {
          if (JSON.parse(post?.codeinjection_head)) {
            const i18n = JSON.parse(post.codeinjection_head) as { [id: string]: string }

            if (Object.keys(i18n).includes(locale)) {
              const i18nId = i18n[locale]

              const { title, html } = await ghostApi.posts.read({
                id: i18nId
              })
              return { ...post, title, html }
            }
          }
        } catch (error) {
          return post
        }
        return post
      })
      return await Promise.all(results)
    })
    .catch((err) => {
      console.error(`Can't fetch data from GHOST CMS`)
      return []
    })
}

// export const getSinglePost = async (locale = 'en', props?: Props) => {
//   //? get main language first (EN) then get selected language
//   return await ghostApi.posts
//     .read({
//       ...props
//     })
//     .then(async (post) => {
//       try {
//         if (JSON.parse(post.codeinjection_head)) {
//           const i18n = JSON.parse(post.codeinjection_head) as { [id: string]: string }
//           if (Object.keys(i18n).includes(locale)) {
//             const i18nId = i18n[locale]
//             const i18nPost = await ghostApi.posts.read({
//               id: i18nId
//             })

//             return { ...i18nPost, id: post.id }
//           }
//         }
//       } catch (error) {
//         return post
//       }
//       return post
//     })
//     .catch((err) => {
//       console.error(`Can't fetch data from GHOST CMS`)
//       return {}
//     })
// }

export async function getAllPosts(props?: { limit: number }): Promise<GhostPostOrPage> {
  return await ghostApi.posts.browse({ include: 'tags,authors' })
}

export async function getSinglepost(props?: { limit: number }): Promise<GhostPostOrPage> {
  return await ghostApi.posts.read({ slug: 'firstblog' })
}

export async function getPostsByTag(props?: { limit: number }): Promise<GhostPostOrPage> {
  return await ghostApi.posts.browse({ filter: 'tags:[firstcontent]' })
}
export async function getTags(props?: { limit: number }): Promise<GhostPostOrPage> {
  return await ghostApi.tags.browse()
}
export async function getSingleTag(props?: { limit: number }): Promise<GhostPostOrPage> {
  return await ghostApi.tags.read({ slug: 'Ghost' }, { include: 'count.posts' })
}

export async function getAuthors(props?: { limit: number }): Promise<GhostPostOrPage> {
  return await ghostApi.authors.browse()
}
export async function getSingleAuthor(props?: { limit: number }): Promise<GhostPostOrPage> {
  return await ghostApi.authors.read({ slug: 'theeraphat' }, { include: 'count.posts' }) // include can be array for any of these
}
export async function getPostsByAuthor(props?: { limit: number }): Promise<GhostPostOrPage> {
  const post = await ghostApi.posts.browse({ filter: 'primary_author:theeraphat' })
  return post
}
