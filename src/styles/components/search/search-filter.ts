import tw, { css, styled } from 'twin.macro'

export const StyledSearchFilter = styled.div(() => [
  tw`px-4 py-1 border-l-2 space-y-6 text-gray-700`,
  css`
    > article:nth-of-type(1) {
      ${tw`flex items-center justify-between`}

      > h6 {
        ${tw`font-medium tracking-wide`}
      }

      > button {
        ${tw`py-1`}
      }
    }

    > article:nth-of-type(2) > div {
      ${tw`w-full`}
    }

    > article:nth-of-type(3) {
      > small {
        ${tw`font-medium block mb-2`}
      }

      > div {
        ${tw`mx-2`}

        > span {
          ${tw`hidden`}
        }
      }

      span {
        ${tw`font-sans text-gray-600`}
      }
    }
  `,
])
