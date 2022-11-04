import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../page-components/NavBar'
import Footer from '../page-components/Footer'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <title>Rokto</title>
      <link rel="shortcut icon" href="/rokto.png" type="image/x-icon" />
    </Head>
    <NavBar />
    <main>
      <Component {...pageProps} />
    </main>
    <Footer />
  </>)
}
