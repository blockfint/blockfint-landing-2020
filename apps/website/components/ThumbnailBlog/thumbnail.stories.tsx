import { ThumbnailBlog } from '.'

export default {
  title: 'Components/ThumbnailBlog'
}

const Template = (args) => (
  <>
    <h1>Size S</h1>
    <ThumbnailBlog
      image="/images/kbtg.jpg"
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor consectetur adipiscing elit,"
      tagLink=""
      blogLink=""
      {...args}
    />
    <hr style={{ margin: '50px' }} />
    <h1>Size M</h1>

    <ThumbnailBlog
      image="/images/kbtg.jpg"
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor consectetur adipiscing elit,sed do eiusmod tempor consectetur adipiscing elit,"
      size="M"
      description="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla"
      tagLink=""
      blogLink=""
      {...args}
    />
    <hr style={{ margin: '50px' }} />
    <h1>Size L</h1>

    <ThumbnailBlog
      image="/images/kbtg.jpg"
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor consectetur adipiscing elit,"
      size="L"
      tagLink=""
      blogLink=""
      {...args}
    />
  </>
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
