const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200]
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader']
    })
    return config
  }
}
