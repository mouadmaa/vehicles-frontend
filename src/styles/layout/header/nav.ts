import tw, { css, styled } from 'twin.macro'

export const StyledNav = styled.ul(() => [
  tw`hidden items-center justify-between gap-x-6 lg:flex`,
  css`
    svg {
      ${tw`h-10 w-32`}
    }
  `,
])
