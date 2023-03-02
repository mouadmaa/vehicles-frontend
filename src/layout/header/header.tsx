import { FC, Fragment, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Open_Sans } from '@next/font/google'
import Logo from '@/layout/header/logo'
import Nav from '@/layout/header/nav'
import Sign from '@/layout/header/sign'
import Burger from '@/layout/header/burger'
import Menu from '@/layout/header/menu'
import Backdrop from '@/components/ui/backdrop'
import { StyledHeader } from '@/styles/layout/header/header'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

const Header: FC = () => {
  const router = useRouter()
  const headerRef = useRef(null)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    setShowMenu(false)
  }, [router])

  const handleToggleMenu = () => setShowMenu(!showMenu)

  return (
    <Fragment>
      <StyledHeader ref={headerRef} className={openSans.className}>
        <div>
          <Logo />
          <Nav />
          <Sign />
          <Burger showMenu={showMenu} onToggleMenu={handleToggleMenu} />
        </div>
        <Menu headerRef={headerRef} show={showMenu} />
      </StyledHeader>
      <Backdrop show={showMenu} onHide={handleToggleMenu} />
    </Fragment>
  )
}

export default Header

export const LINKS = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Search',
    path: '/search',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'About',
    path: '/about',
  },
]
