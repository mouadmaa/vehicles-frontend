import tw, { css, styled } from 'twin.macro'

export const StyledVehicleFeatures = styled.section(() => [
  tw`space-y-2 sm:space-y-3`,
  css`
    h4 {
      ${tw`font-semibold`}
    }

    > div {
      ${tw`grid gap-x-8 gap-y-4 sm:grid-cols-2`}

      div {
        ${tw`flex items-center justify-between space-x-8 border-b-2 p-1 text-sm sm:text-md`}

        span:first-child {
          ${tw`text-gray-500`}
        }

        span:last-child {
          ${tw`font-bold text-gray-800`}
        }
      }
    }
  `,
])
