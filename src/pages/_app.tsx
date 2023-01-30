import { Fragment } from 'react'
import type { AppProps } from 'next/app'
import GlobalStyles from '@/styles/GlobalStyles'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default App
