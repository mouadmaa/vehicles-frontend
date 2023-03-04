import tw, { css, styled } from 'twin.macro'

export const StyledSearchVehicles = styled.section(() => [
  tw`grid grid-cols-vehicles gap-x-10 gap-y-8 pt-2`,
  css`
    article {
      ${tw`w-full`}
    }
  `,
])
