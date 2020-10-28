import { Home } from 'containers/Home'
import { NextPage } from 'next'
import React from 'react'
import { Navbar } from '../components/layouts/Navbar'

const Homepage: NextPage = () => {
  return (
    <div>
      <Navbar transparent={false} />
      <Home />
    </div>
  )
}

export default Homepage
