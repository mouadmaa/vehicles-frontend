import { ButtonHTMLAttributes, FC } from 'react'
import { StyledButton } from '@/styles/components/ui/button'

export type ButtonVariant = 'Primary' | 'Secondary' | 'Tertiary'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant
}

const Button: FC<ButtonProps> = props => {
  return (
    <StyledButton {...props} className="group">
      {props.children}
    </StyledButton>
  )
}

export default Button
