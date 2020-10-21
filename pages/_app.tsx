import Head from 'next/head'
import GlobalStyle from 'assets/globalStyle'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </>
  )
}

export default MyApp
