import { Fragment } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@/layout/layout'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, maximum-scale=5, viewport-fit=cover"
        />
        <title>Tonobilat</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}

export default App
