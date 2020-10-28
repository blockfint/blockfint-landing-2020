import { Container } from '@material-ui/core'
import React from 'react'
import { ProductDetail } from 'templates/productDetail'

export const ProductGideon: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <ProductDetail
        {...{
          name: 'Gideon',
          title: 'Energy Trading Without Barriers',
          description:
            'Imagine a world where producers and buyers trade smartly with ease in a trusted secure environment. With the advent of blockchain technology, we realized such an environment could be built, a digital marketplace where people are empowered to transact without barriers. ',
          linkHref: 'https://gideon.energy',
          secondaryTitle:
            'The multi-dimensional energy trading platform where everyone can easily buy and sell electrical energy.'
        }}
      />
    </Container>
  )
}
