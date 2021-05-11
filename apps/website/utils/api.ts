import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: 'b3bbf796a0a3d33c551daccc88',
  version: 'v3'
})

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch((err) => {
      console.error(err)
    })
}
