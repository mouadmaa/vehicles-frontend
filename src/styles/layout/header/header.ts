import tw, { css, styled } from 'twin.macro'

export const StyledHeader = styled.header(() => [
  tw`sticky top-0 z-50 border-b-2 shadow-sm backdrop-blur bg-gray-50/70`,
  css`
    > div:first-child {
      ${tw`mx-auto max-w-screen-2xl flex items-center justify-between py-2 pr-2 lg:py-3`}
    }
  `,
])
