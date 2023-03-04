import tw, { css, styled } from 'twin.macro'

export const StyledSearchPagination = styled.section(() => [
  tw`flex justify-center`,
  css`
    > nav {
      ${tw`z-0`}
    }
  `,
])
