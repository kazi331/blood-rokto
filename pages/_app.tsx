import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from '../page-components/Footer'
import NavBar from '../page-components/NavBar'
import '../styles/globals.css'



const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <title>Rokto</title>
      <link rel="shortcut icon" href="/rokto.png" type="image/x-icon" />
    </Head>
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <main> <Component {...pageProps} /> </main>
      <Footer />
    </QueryClientProvider>
  </>)
}
