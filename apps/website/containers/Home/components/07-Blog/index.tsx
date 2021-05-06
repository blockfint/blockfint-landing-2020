import { typography } from '@blockfint/website/styles/typography'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
body{
  ${typography}
}
`
export const Blog: React.FC = () => {
  return (
    <>
      <Global />
      <div>
        <h1>H1</h1>
      </div>
    </>
  )
}
