import { FC } from 'react'
import { StyledSign } from '@/styles/layout/header/sign'
import Button from '@/components/ui/button'

interface SignProps {
  isOnMenu?: boolean
}

const Sign: FC<SignProps> = props => {
  const { isOnMenu = false } = props

  return (
    <StyledSign isOnMenu={isOnMenu}>
      <Button variant="Primary">Sign in</Button>
      <Button variant="Secondary">Sign up</Button>
    </StyledSign>
  )
}

export default Sign
