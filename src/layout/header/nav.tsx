import { FC } from 'react'
import { StyledNav } from '@/styles/layout/header/nav'

import 'twin.macro'
import NavLink from '@/components/ui/nav-link'

const Nav: FC = () => {
  return (
    <StyledNav>
      {LINKS.map(link => (
        <li key={link.path}>
          <NavLink {...link} />
        </li>
      ))}
    </StyledNav>
  )
}

const LINKS = [
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

export default Nav
