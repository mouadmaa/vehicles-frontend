import tw, { styled } from 'twin.macro'

interface StyledButtonGroupProps {
  width: 'full' | 'fit'
}

export const StyledButtonGroup = styled.article(
  ({ width }: StyledButtonGroupProps) => [
    tw`flex items-center border-2 border-shade-90 rounded-lg divide-x-2 divide-shade-90 overflow-hidden`,
    width === 'full' && 'w-full',
    width === 'fit' && 'w-fit',
  ],
)

interface StyledButtonGroupItemProps {
  active: boolean
}

export const StyledButtonGroupItem = styled.button(
  ({ active }: StyledButtonGroupItemProps) => [
    tw`text-gray-600 w-full px-5 py-1.5 flex items-center justify-center gap-x-2 text-sm lg:text-md capitalize whitespace-nowrap font-medium transition-all duration-300 hover:scale-102 active:scale-95`,
    active && tw`text-primary-default bg-shade-94`,
  ],
)
