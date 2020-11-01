import { Layout } from 'components/layouts'
import { Home } from 'containers/Home'
import { NextPage } from 'next'
import React from 'react'

const Homepage: NextPage = () => {
  return (
    <Layout transparent>
      {JSON.stringify({
        accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
        region: process.env.NEXT_PUBLIC_REGION
      })}
      {/* <Home /> */}
    </Layout>
  )
}

export default Homepage
