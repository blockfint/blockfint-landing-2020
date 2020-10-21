const withImages = require('next-images')
module.exports = withImages({
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: '/blockfint/',
  dynamicAssetPrefix: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader']
    })
    return config
  }
})
