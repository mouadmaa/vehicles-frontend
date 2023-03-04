import tw, { css, styled } from 'twin.macro'

export const StyledSearchInput = styled.section(() => [
  tw``,
  css`
    > div {
      ${tw`w-full`}
    }

    label {
      ${tw`hidden`}
    }
  `,
])
