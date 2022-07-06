// pages/api/revalidate.js

export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    res.send(process.env.MY_SECRET_TOKEN, req.query.secret)
    await res.revalidate('/blog')
    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    res.send(process.env.MY_SECRET_TOKEN, req.query.secret)

    return res.status(500).send('Error revalidating', err)
  }
}