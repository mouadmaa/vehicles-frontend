import tw, { css, styled } from 'twin.macro'

export const StyledHeader = styled.header(() => [
  tw`sticky top-0 z-50 mx-auto max-w-screen-2xl border-b-2 shadow-sm backdrop-blur bg-gray-50/70`,
  css`
    > div {
      ${tw`flex items-center justify-between p-2 sm:px-6 sm:py-3`}
    }
  `,
])
