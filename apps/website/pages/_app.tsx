import Head from 'next/head'
import { AllStyleProvider } from '@blockfint/website/styles/globalStyle'
import React from 'react'
import { ContactDialog } from '@blockfint/website/components/ContactDialog'
import { DefaultSeo } from 'next-seo'
import App from 'next/app'
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config.js'
class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <link rel="shortcut icon" href="/favicon/favicon.png" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <DefaultSeo
          title="Blockfint"
          titleTemplate="%s | Make Future Innovations Happen Today"
          description="Make Future Innovations Happen Today"
        />

        <AllStyleProvider>
          <ContactDialog>
            <Component {...pageProps} />
          </ContactDialog>
        </AllStyleProvider>
      </>
    )
  }
}

export default appWithTranslation(MyApp, nextI18NextConfig)
