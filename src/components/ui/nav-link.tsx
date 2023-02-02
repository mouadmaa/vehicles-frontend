import { FC } from 'react'
import { StyledNavLink } from '@/styles/components/ui/nav-link'

interface NavLinkProps {
  title: string
  path: string
}

const NavLink: FC<NavLinkProps> = props => {
  const { title, path } = props

  return <StyledNavLink href={path}>{title}</StyledNavLink>
}

export default NavLink
