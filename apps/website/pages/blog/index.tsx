import { NextPage } from 'next'
import React from 'react'
import { typography } from '@blockfint/website/styles/typography'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
body{
  ${typography}
}
`
const BlogPage: NextPage = () => {
  return (
    <>
      <Global />
      <div>BlogPage</div>
    </>
  )
}

export default BlogPage
