import { ButtonHTMLAttributes, FC } from 'react'
import { StyledButton } from '@/styles/components/ui/button'

export type ButtonVariant = 'Primary' | 'Secondary'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant
}

const Button: FC<ButtonProps> = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

export default Button
