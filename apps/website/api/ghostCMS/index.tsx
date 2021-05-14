import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
export const ghostApi = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_BLOG_URL,
  key: process.env.NEXT_PUBLIC_CONTENT_API_KEY,
  version: 'v3'
})

export {
  getAllPosts,
  getSinglePost,
  getPostsByTag,
  getTags,
  getSingleTag,
  getAuthors,
  getSingleAuthor,
  getPostsByAuthor
} from './posts'
