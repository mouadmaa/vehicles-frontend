import { Fragment } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { StoreProvider, useCreateStore } from '@/store'
import Layout from '@/layout/layout'

const App = ({ Component, pageProps }: AppProps) => {
  const createStore = useCreateStore(pageProps.initialZustandState)

  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, maximum-scale=5, viewport-fit=cover"
        />
        <title>Tonobilat</title>
      </Head>
      <StoreProvider value={createStore}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </Fragment>
  )
}

export default App
