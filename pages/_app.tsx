import Head from 'next/head'
import { AllStyleProvider } from 'assets/globalStyle'
import React from 'react'
import { DefaultSeo } from 'next-seo'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DefaultSeo
        title="Blockfint"
        titleTemplate="%s | Make Future Innovations Happen Today"
        description="Make Future Innovations Happen Today"
      />
      <AllStyleProvider>
        <Component {...pageProps} />
      </AllStyleProvider>
    </>
  )
}

export default MyApp
