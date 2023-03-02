import { FC, Fragment, ReactNode } from 'react'
import { Open_Sans } from '@next/font/google'
import GlobalStyles from '@/styles/GlobalStyles'
import Header from '@/layout/header/header'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = props => {
  const { children } = props

  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <main className={openSans.className}>{children}</main>
    </Fragment>
  )
}

export default Layout
