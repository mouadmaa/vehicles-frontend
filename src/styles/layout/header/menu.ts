import tw, { css, styled } from 'twin.macro'

interface StyledMenuProps {
  height?: number
  showMenu: boolean
}

export const StyledMenu = styled.section(
  ({ height, showMenu }: StyledMenuProps) => [
    tw`absolute right-0 z-50 flex w-full max-w-sm flex-col items-center justify-between border-l-2 border-t-2 bg-gray-50 p-8 shadow transition-all duration-500`,
    css`
      height: calc(100vh - ${height}px);

      ul {
        ${tw`flex w-full flex-col items-center justify-center gap-y-6`}
        li {
          ${tw`w-full cursor-pointer rounded-md py-1 text-center transition-all duration-300`}
          a {
            ${tw`w-full block`}
          }
        }
      }
    `,
    showMenu
      ? [tw`translate-x-0 opacity-100 visible`]
      : [tw`translate-x-full opacity-0 invisible`],
  ],
)
