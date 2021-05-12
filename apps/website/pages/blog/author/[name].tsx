import { NextPage } from 'next'
import React from 'react'
import { typography } from '@blockfint/website/styles/typography'
import { createGlobalStyle } from 'styled-components'
import { getPosts } from '../ghostCMS/index'

const Global = createGlobalStyle`
body{
  ${typography}
}
`
const BlogByAuthorNamePage: NextPage = () => {
  return (
    <>
      <Global />
      <div>BlogByAuthorNamePage</div>
    </>
  )
}

export default BlogByAuthorNamePage
