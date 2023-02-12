import tw, { css, styled } from 'twin.macro'

export const StyledVehicles = styled.section(() => [
  tw``,
  css`
    > div:nth-child(1) {
      ${tw`md:flex justify-between items-center`}

      > div:first-child {
        ${tw`space-y-1`}

        h2 {
          ${tw`text-center md:text-left font-semibold text-gray-800`}
        }

        p {
          ${tw`text-gray-500 text-center md:text-left`}
        }
      }

      > div:last-child {
        ${tw`hidden md:block`}

        button {
          ${tw`px-8 py-3`}
        }
      }
    }

    > div:nth-child(2) {
      ${tw`flex px-1 py-4 md:p-0 my-6 md:my-12 md:grid md:grid-cols-vehicles gap-x-8 md:gap-x-16 md:gap-y-12 overflow-x-auto md:overflow-visible`}

      article {
        ${tw`min-w-fit md:w-full`}
      }
    }

    > div:nth-child(3) {
      ${tw`flex justify-center md:hidden`}

      button {
        ${tw`px-8 py-3`}
      }
    }
  `,
])
