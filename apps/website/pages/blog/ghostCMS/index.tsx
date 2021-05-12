import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
export const ghostApi = new GhostContentAPI({
  url: process.env.BLOG_URL,
  key: process.env.CONTENT_API_KEY,
  version: 'v3'
})

export * from './posts'
export * from './tags'
