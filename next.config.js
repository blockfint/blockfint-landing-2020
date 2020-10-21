module.exports = {
  basePath: '/blockfint',
  assetPrefix: '/blockfint/',
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader']
    })
    return config
  }
}
