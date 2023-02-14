import tw, { css, styled } from 'twin.macro'

export const StyledVehicleOrder = styled.section(() => [
  tw`space-y-6 rounded-lg border-2 p-4 shadow-sm`,
  css`
    > div:nth-of-type(1) {
      ${tw`flex items-center justify-between`}

      small {
        ${tw`text-gray-500`}
      }

      > div {
        span:first-child {
          ${tw`text-lg font-semibold text-primary-default`}
        }
        span:last-child {
          ${tw`text-sm text-gray-500 capitalize`}
        }
      }
    }

    > div:nth-of-type(2) {
      ${tw`sticky top-16 hidden h-min space-y-6 lg:block`}

      label {
        ${tw`flex cursor-pointer flex-col rounded-lg border-2 px-4 py-3`}

        input {
          ${tw`w-full text-sm text-gray-500 outline-0`}
        }
      }
    }

    > button {
      ${tw`w-full`}
    }
  `,
])
