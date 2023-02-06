import { FC } from 'react'
import { StyledBurger } from '@/styles/layout/header/burger'

interface BurgerProps {
  showMenu: boolean
  onToggleMenu: () => void
}

const Burger: FC<BurgerProps> = props => {
  const { showMenu, onToggleMenu } = props

  return (
    <StyledBurger showMenu={showMenu} onClick={onToggleMenu}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger
