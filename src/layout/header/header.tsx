import { FC } from 'react'
import Logo from '@/layout/header/logo'
import Nav from '@/layout/header/nav'
import { StyledHeader } from '@/styles/layout/header/header'
import Sign from '@/layout/header/sign'

const Header: FC = () => {
  return (
    <StyledHeader>
      <div>
        <Logo />
        <Nav />
        <Sign />
      </div>
    </StyledHeader>
  )
}

export default Header
