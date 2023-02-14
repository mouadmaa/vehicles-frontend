import tw, { css, styled } from 'twin.macro'

export const StyledVehicleDesc = styled.section(() => [
  tw`space-y-2 sm:space-y-3`,
  css`
    h4 {
      ${tw`font-semibold`}
    }

    p {
      ${tw`text-gray-500`}
    }
  `,
])
