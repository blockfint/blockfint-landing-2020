import { ThumbnailBlog } from '.'

export default {
  title: 'Components/ThumbnailBlog'
}

const Template = (args) => (
  <ThumbnailBlog
    imgSrc="/images/kbtg.jpg"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  />
)
export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile'
  }
}
