import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css';
import '../styles/Tooltip..css';
import '../styles/Tooltip..css';
import '../styles/tailwindGlobal.css';
import '../styles/dashboard.scss';
import Head from 'next/head';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)

  return getLayout(<>
    <Head>
      <title>Rokto</title>
      <link rel="shortcut icon" href="/rokto.png" type="image/x-icon" />
    </Head>
    <QueryClientProvider client={queryClient}>
      <main> <Component {...pageProps} /> </main>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  </>)
}
