import tw, { css, styled } from 'twin.macro'

export const StyledAgencyInfo = styled.section(() => [
  tw`space-y-4 rounded-lg border-2 p-4 shadow-sm`,
  css`
    > div:first-child {
      ${tw`flex h-14 cursor-pointer gap-x-3`}

      > div:first-child {
        ${tw`h-full w-24`}

        img {
          ${tw`h-full w-full rounded-md object-cover`}
        }
      }

      > div:last-child {
        ${tw`flex h-full flex-col justify-around`}

        h3 {
          ${tw`text-md font-semibold capitalize text-gray-700 transition-colors duration-200`}
        }

        p {
          ${tw`text-sm capitalize leading-none text-gray-500`}
        }
      }
    }

    > div:last-child {
      ${tw`space-y-3`}

      small {
        ${tw`text-gray-500`}
      }

      > div {
        ${tw`flex gap-x-3`}

        button {
          ${tw`w-full`}
        }
      }
    }
  `,
])
