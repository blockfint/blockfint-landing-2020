import { Container } from '@material-ui/core'
import React from 'react'
import { AuthorBanner } from '.'

export default {
  component: AuthorBanner,
  title: 'Components/AuthorBanner'
}

const Template = (args) => (
  <Container maxWidth="sm">
    <AuthorBanner />
  </Container>
)
export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile'
  }
}
export const Tablet = Template.bind({})
Tablet.parameters = {
  viewport: {
    defaultViewport: 'tablet'
  }
}
export const Desktop = Template.bind({})
