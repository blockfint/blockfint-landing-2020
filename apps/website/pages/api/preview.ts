import { getAllPosts, getSinglePost } from '@blockfint/website/api/ghostCMS'
import { NextApiRequest, NextApiResponse } from 'next'

// The preview mode cookies expire in 1 hour

export default async (req: NextApiRequest, res: NextApiResponse): Promise<NextApiResponse | void> => {
  if (req.query.secret !== process.env.JAMIFY_PREVIEW_TOKEN || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const slug = Array.isArray(req.query.slug) ? req.query.slug[0] : req.query.slug

  const post = await getSinglePost({ slug })
  const mainTag = post?.tags?.find(({ visibility }) => visibility === 'public') // find categories

  if (!post && !mainTag) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  const url = `/blog/p/${mainTag.slug}/${post.slug}`

  res.setPreviewData({})
  res.writeHead(307, { Location: url })
  res.end()
  // TODO: Option for cookie clearing
  // res.clearPreviewData()
}
