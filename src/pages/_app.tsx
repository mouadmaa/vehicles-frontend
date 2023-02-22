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
        <title>Tonobilat</title>
      </Head>
      <StoreProvider createStore={createStore}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </Fragment>
  )
}

export default App
