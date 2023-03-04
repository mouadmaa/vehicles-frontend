import tw, { css, styled } from 'twin.macro'

export const StyledSearch = styled.div(() => [
  tw`grid lg:grid-cols-4 gap-8 pt-6 sm:pt-8`,
  css`
    > div:first-child {
      ${tw`col-span-3`}
    }

    > div:last-child {
      ${tw`sticky top-0 h-min hidden lg:block`}
    }
  `,
])
