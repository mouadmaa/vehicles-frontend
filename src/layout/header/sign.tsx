import { FC } from 'react'
import { StyledSign } from '@/styles/layout/header/sign'
import Button from '@/components/ui/button'

const Sign: FC = () => {
  return (
    <StyledSign>
      <Button variant="Primary">Sign in</Button>
      <Button variant="Secondary">Sign up</Button>
    </StyledSign>
  )
}

export default Sign
