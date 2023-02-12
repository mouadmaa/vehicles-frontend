import tw, { css, styled } from 'twin.macro'

export const StyledHeader = styled.header(() => [
  tw`sticky top-0 z-50 border-b-2 shadow-sm backdrop-blur bg-gray-50/70`,
  css`
    > div:first-child {
      ${tw`flex items-center justify-between p-2 lg:px-6 lg:py-3`}
    }
  `,
])
