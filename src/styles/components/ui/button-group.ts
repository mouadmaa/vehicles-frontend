import tw, { styled } from 'twin.macro'

export const StyledButtonGroup = styled.div(() => [
  tw`w-fit flex items-center border-2 border-shade-90 rounded-lg divide-x-2 divide-shade-90 overflow-hidden`,
])

interface StyledButtonGroupItemProps {
  active: boolean
}

export const StyledButtonGroupItem = styled.button(
  ({ active }: StyledButtonGroupItemProps) => [
    tw`text-gray-600 w-full px-5 py-1.5 flex items-center justify-center gap-x-2 text-sm lg:text-md capitalize whitespace-nowrap font-medium transition-all duration-300 hover:text-primary-default`,
    active && tw`text-primary-default bg-shade-96`,
  ],
)
