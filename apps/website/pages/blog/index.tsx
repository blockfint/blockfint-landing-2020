import { NextPage } from 'next'
import React from 'react'
import { typography } from '@blockfint/website/styles/typography'
import { createGlobalStyle } from 'styled-components'
import { getAllPosts } from '../../api/ghostCMS/index'
import { TestContents } from '../../containers/blog'
import { typeOf } from 'react-is'

const Global = createGlobalStyle`
body{
  ${typography}
}
`

export const getStaticProps = async ({ params }) => {
  const AllBlogs = await getAllPosts()

  return {
    props: { AllBlogs }
  }
}

const BlogPage: React.FC = (props) => {
  return (
    <>
      <Global />
      <TestContents data={props} />
      <div>BlogPage</div>
    </>
  )
}

export default BlogPage
