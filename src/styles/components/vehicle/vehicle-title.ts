import tw, { css, styled } from 'twin.macro'

export const StyledVehicleTitle = styled.section(() => [
  tw`pt-6 pb-2 sm:pt-8 flex flex-col justify-between gap-y-4 sm:flex-row sm:gap-y-0`,
  css`
    h1 {
      ${tw`text-h4 font-semibold capitalize leading-none sm:text-left sm:text-h3 lg:text-h2`}
    }

    > div {
      ${tw`flex w-full items-center justify-between space-x-3 sm:w-auto`}

      button {
        ${tw`scale-90 hover:scale-95`}

        svg {
          ${tw`w-5 h-5`}
        }
      }
    }
  `,
])
