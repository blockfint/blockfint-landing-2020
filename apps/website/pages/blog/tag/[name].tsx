import { NextPage } from 'next'
import React from 'react'
import { typography } from '@blockfint/website/styles/typography'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
body{
  ${typography}
}
`
const BlogByTagPage: NextPage = () => {
  return (
    <>
      <Global />
      <div>BlogByTagPage</div>
    </>
  )
}

export default BlogByTagPage
