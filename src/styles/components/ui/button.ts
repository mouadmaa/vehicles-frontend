import tw, { styled } from 'twin.macro'
import { ButtonVariant } from '@/components/ui/button'

interface StyledButtonProps {
  variant: ButtonVariant
}

export const StyledButton = styled.button(({ variant }: StyledButtonProps) => [
  tw`px-4 py-1.5 whitespace-nowrap rounded-lg border-2 font-medium shadow-md transition-all duration-300 hover:scale-103 hover:shadow-lg active:scale-95`,
  variant === 'Primary' &&
    tw`border-shade-92  text-primary-default hover:border-primary-default hover:bg-primary-default hover:text-white`,
  variant === 'Secondary' &&
    tw`border-transparent bg-primary-default text-white hover:bg-primary-dark`,
])
