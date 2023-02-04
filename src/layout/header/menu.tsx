import { FC, RefObject, useEffect, useState } from 'react'
import NavLink from '@/components/ui/nav-link'
import { LINKS } from '@/layout/header/header'
import { StyledMenu } from '@/styles/layout/header/menu'
import Sign from '@/layout/header/sign'

interface MenuProps {
  show: boolean
  headerRef: RefObject<HTMLHeadElement> | null
}

const Menu: FC<MenuProps> = props => {
  const { show, headerRef } = props

  const [menuHeight, setMenuHeight] = useState(80)

  useEffect(() => {
    setMenuHeight(headerRef?.current?.clientHeight || menuHeight)
  }, [menuHeight, headerRef])

  return (
    <StyledMenu height={menuHeight} showMenu={show}>
      <ul>
        {LINKS.map(link => (
          <li key={link.path}>
            <NavLink {...link} />
          </li>
        ))}
      </ul>

      <Sign isOnMenu />
    </StyledMenu>
  )
}

export default Menu
