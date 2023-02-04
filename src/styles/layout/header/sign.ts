import tw, { styled } from 'twin.macro'

interface StyledSignProps {
  isOnMenu: boolean
}

export const StyledSign = styled.div(({ isOnMenu }: StyledSignProps) => [
  isOnMenu
    ? tw`flex w-full flex-col gap-y-4`
    : tw`hidden items-center justify-center gap-x-4 lg:flex`,
])
