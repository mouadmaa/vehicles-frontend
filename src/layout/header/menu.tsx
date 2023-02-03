import { FC, RefObject, useEffect, useState } from 'react'
import NavLink from '@/components/ui/nav-link'
import { LINKS } from '@/layout/header/header'
import { StyledMenu } from '@/styles/layout/header/menu'
import Button from '@/components/ui/button'

interface MenuProps {
  showMenu: boolean
  headerRef: RefObject<HTMLHeadElement> | null
}

const Menu: FC<MenuProps> = props => {
  const { showMenu, headerRef } = props

  const [menuHeight, setMenuHeight] = useState(80)

  useEffect(() => {
    setMenuHeight(headerRef?.current?.clientHeight || menuHeight)
  }, [menuHeight, headerRef])

  return (
    <StyledMenu height={menuHeight} showMenu={showMenu}>
      <ul>
        {LINKS.map(link => (
          <li key={link.path}>
            <NavLink {...link} />
          </li>
        ))}
      </ul>

      <div>
        <Button variant="Primary">Sign in</Button>
        <Button variant="Secondary">Sign up</Button>
      </div>
    </StyledMenu>
  )
}

export default Menu
