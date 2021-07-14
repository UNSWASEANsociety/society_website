import '../styles/globals.css'
import "../styles/MobileMenu.scss";

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>
        UNSW ASEAN Society
      </title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
