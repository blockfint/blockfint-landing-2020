// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx')
const { i18n } = require('./next-i18next.config.js')

module.exports = withNx({
  async redirects() {
    return [
      {
        source: '/landing',
        destination: '/',
        permanent: true
      },
      {
        source: '/Landing',
        destination: '/',
        permanent: true
      },
      {
        source: '/brochure',
        destination: 'https://brochure.blockfint.com/',
        permanent: true
      }
    ]
  },
  i18n,
  images: {
    deviceSizes: [320, 420, 600, 768, 1024, 1200, 1920, 2040],
    domains: ['static.ghost.org', 'blog.blockfint.com']
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader']
    })
    return config
  },

  nx: {
    // Set this to false if you do not want to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true
  }
})
