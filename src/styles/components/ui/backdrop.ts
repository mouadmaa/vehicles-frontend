import tw, { styled } from 'twin.macro'

interface StyledBackdropProps {
  show: boolean
}

export const StyledBackdrop = styled.div(({ show }: StyledBackdropProps) => [
  tw`fixed inset-0 z-40 backdrop-blur-sm transition-all duration-500`,
  show ? [tw`opacity-100 scale-100`] : [tw`opacity-0 scale-0`],
])
