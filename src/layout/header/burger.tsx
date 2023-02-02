import { FC } from 'react'
import { StyledBurger } from '@/styles/layout/header/burger'

interface BurgerProps {
  showMenu: boolean
  toggleMenu: () => void
}

const Burger: FC<BurgerProps> = props => {
  const { showMenu, toggleMenu } = props

  return (
    <StyledBurger showMenu={showMenu} onClick={toggleMenu}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger
