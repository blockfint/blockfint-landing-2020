import { NextPage } from 'next'
import React from 'react'
import { typography } from '@blockfint/website/styles/typography'
import { createGlobalStyle } from 'styled-components'
import { getAllPosts, getSinglepost, getPostsByAuthor, getPostsByTag } from './ghostCMS/index'

const Global = createGlobalStyle`
body{
  ${typography}
}
`
type Post = {}

export const getStaticProps = async ({ params }) => {
  const AllBlogs = await getAllPosts()
  const SingleBlog = await getSinglepost()
  const AuthorPost = await getPostsByAuthor()
  const TagPost = await getPostsByTag()
  // console.log(TagPost)
  return {
    props: { AllBlogs, SingleBlog, AuthorPost, TagPost }
  }
}

const BlogPage: React.FC<{ blogs: Post[] }> = (props) => {
  console.log(props)
  return (
    <>
      <Global />
      <div>BlogPage</div>
    </>
  )
}

export default BlogPage
