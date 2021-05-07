import { Container } from '@material-ui/core'
import React from 'react'
import { AuthorBanner } from '.'

export default {
  component: AuthorBanner,
  title: 'Components/AuthorBanner'
}

export const Basic = () => (
  <Container maxWidth="sm">
    <AuthorBanner />
  </Container>
)
