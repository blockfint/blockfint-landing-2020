import { Container } from '@material-ui/core'
import React from 'react'
import { AuthorBanner } from '.'

export default {
  component: AuthorBanner,
  title: 'Components/AuthorBanner'
}

const Template = (args) => (
  <Container maxWidth="sm">
    <AuthorBanner
      image="/images/mailbox.png"
      authorName="Nick Suttipong"
      description="Chief Executive Officer. Nick had worked with lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat."
    />
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
