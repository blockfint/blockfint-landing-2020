import { Container } from '@material-ui/core'
import React from 'react'
import { AuthorBanner } from '.'

export default {
  component: AuthorBanner,
  title: 'Components/AuthorBanner'
}

const Template = (args) => (
  <Container {...args}>
    <AuthorBanner
      image="/images/mailbox.png"
      authorName="Nick Suttipong"
      description="Chief Executive Officer. Nick had worked with lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat."
    />
    <AuthorBanner
      imgSize="small"
      image="/images/mailbox.png"
      authorName="Nick Suttipong"
      description="Chief Executive Officer. Nick had worked with lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit "
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
Tablet.args = {
  maxWidth: 'sm'
}
Tablet.parameters = {
  viewport: {
    defaultViewport: 'tablet'
  }
}
export const Desktop = Template.bind({})
Desktop.args = {
  maxWidth: 'lg'
}
