import tw, { css, styled } from 'twin.macro'

export const StyledSearch = styled.div(() => [
  tw`grid gap-6 lg:grid-cols-4 pt-6 sm:pt-8`,
  css`
    > div:first-child {
      ${tw`col-span-3`}
      > section:first-child {
        ${tw`grid grid-cols-vehicles gap-x-12 gap-y-10`}
        article {
          ${tw`w-full`}
        }
      }

      > section:nth-child(2) {
        ${tw`flex justify-center`}
        > nav {
          ${tw`z-0`}
        }
      }
    }

    > div:last-child {
      ${tw`sticky top-0 h-min hidden lg:block`}
    }
  `,
])
