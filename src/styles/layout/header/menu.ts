import tw, { css, styled } from 'twin.macro'

interface StyledMenuProps {
  height?: number
}

export const StyledMenu = styled.div(({ height }: StyledMenuProps) => [
  tw`absolute right-0 z-50 flex w-full max-w-sm flex-col items-center justify-between border-2 bg-gray-50 p-8 shadow lg:hidden`,
  css`
    height: calc(100vh - ${height}px);

    ul {
      ${tw`flex w-full flex-col items-center justify-center gap-y-6`}
    }
    li {
      ${tw`w-full cursor-pointer rounded-md py-1 text-center transition-all duration-300 hover:bg-gray-100`}
    }
    > div:last-child {
      ${tw`flex w-full flex-col gap-y-4`}
    }
  `,
])
