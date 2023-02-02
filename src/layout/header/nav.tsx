import { FC } from 'react'
import NavLink from '@/components/ui/nav-link'
import { LINKS } from '@/layout/header/header'
import { StyledNav } from '@/styles/layout/header/nav'

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

export default Nav
