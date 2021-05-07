import { NextPage } from 'next'
import React from 'react'
import { typography } from '@blockfint/website/styles/typography'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
body{
  ${typography}
}
`
const BlogDetailPage: NextPage = () => {
  return (
    <>
      <Global />
      <div>BlogDetailPage</div>
    </>
  )
}

export default BlogDetailPage
