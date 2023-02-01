import { FC, Fragment, ReactNode } from 'react'
import GlobalStyles from '@/styles/GlobalStyles'
import Header from '@/layout/header/header'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = props => {
  const { children } = props

  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      {children}
    </Fragment>
  )
}

export default Layout
