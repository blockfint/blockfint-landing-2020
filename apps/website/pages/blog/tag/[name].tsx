import { NextPage } from 'next'
import React from 'react'
import { typography } from '@blockfint/website/styles/typography'
import { createGlobalStyle } from 'styled-components'
import { Tag } from '@blockfint/website/containers/Tag'
import { Layout } from '@blockfint/website/components/layouts'

const Global = createGlobalStyle`
body{
  ${typography}
}
`
const BlogByTagPage: NextPage = () => {
  return (
    <>
      <Global />
      <Layout transparent>
        <Tag />
      </Layout>
    </>
  )
}

export default BlogByTagPage
