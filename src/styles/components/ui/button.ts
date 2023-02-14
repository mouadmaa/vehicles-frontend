import tw, { css, styled } from 'twin.macro'
import { ButtonVariant } from '@/components/ui/button'

interface StyledButtonProps {
  variant: ButtonVariant
}

export const StyledButton = styled.button(({ variant }: StyledButtonProps) => [
  tw`px-4 py-1.5 flex items-center justify-center gap-x-2 text-xs sm:text-sm lg:text-md whitespace-nowrap rounded-lg font-medium shadow transition-all duration-300 hover:scale-102 hover:shadow-md active:scale-95`,
  variant === 'Primary' &&
    tw`border-transparent bg-primary-default text-white border-2 hover:bg-primary-dark`,
  variant === 'Secondary' &&
    tw`border-shade-92 text-primary-default border-2 hover:border-primary-default hover:bg-primary-default hover:text-white`,
  variant === 'Tertiary' &&
    tw`bg-shade-96 text-primary-default hover:border-primary-default hover:bg-primary-default hover:text-white`,
  css`
    svg {
      ${tw`h-5 w-5 fill-transparent stroke-primary-default transition-all duration-300`}
    }
  `,
])
