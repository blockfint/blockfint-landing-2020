import GhostContentAPI from '@tryghost/content-api'
// import GhostAdminAPI from '@tryghost/admin-api'

// Create API instance with site credentials
export const ghostApi = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_BLOG_URL,
  key: process.env.NEXT_PUBLIC_CONTENT_API_KEY,
  version: 'v3'
})

// export const adminApi = new GhostAdminAPI({
//   url: process.env.NEXT_PUBLIC_BLOG_URL,
//   key: process.env.NEXT_PUBLIC_ADMIN_API_KEY,
//   version: 'v3'
// })

export {
  // getDraftPosts,
  getAllPosts,
  getSinglePost,
  getPostsByTag,
  getTags,
  getSingleTag,
  getAuthors,
  getSingleAuthor,
  getPostsByAuthor
} from './posts'
