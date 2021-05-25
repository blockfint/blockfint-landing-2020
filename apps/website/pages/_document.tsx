import React, { ReactElement } from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheets } from '@material-ui/core/styles'

export default class CustomDocument extends Document<{
  styleTags: ReactElement[]
}> {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const materialSheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(materialSheets.collect(<App {...props} />))
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            {materialSheets.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="/fonts/fonts.css" />
        </Head>
        <body>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-1YDP043C7H" />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-1YDP043C7H');
`
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
