import Head from 'next/head'
import { AllStyleProvider } from 'assets/globalStyle'
import React from 'react'
import { ContactDialog } from 'components/ContactDialog'
import { DefaultSeo } from 'next-seo'
import { css } from 'styled-components'
import App from 'next/app'
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
          <script
            async
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              WebFontConfig = {
                google: { families: [ 'Lato:400,400i,700|Roboto+Slab:400,700' ] }
              };
              (function() {
                var wf = document.createElement('script');
                wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
                wf.type = 'text/javascript';
                wf.async = 'true';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(wf, s);
              })();
`
            }}
          />
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

export default MyApp
