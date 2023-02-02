import { FC, useRef, useState } from 'react'
import Logo from '@/layout/header/logo'
import Nav from '@/layout/header/nav'
import Sign from '@/layout/header/sign'
import Burger from '@/layout/header/burger'
import { StyledHeader } from '@/styles/layout/header/header'
import Menu from '@/layout/header/menu'

const Header: FC = () => {
  const headerRef = useRef(null)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <StyledHeader ref={headerRef}>
      <div>
        <Logo />
        <Nav />
        <Sign />
        <Burger showMenu={showMenu} toggleMenu={() => setShowMenu(!showMenu)} />
      </div>

      <Menu headerRef={headerRef} />
    </StyledHeader>
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
