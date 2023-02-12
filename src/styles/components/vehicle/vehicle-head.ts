import tw, { css, styled } from 'twin.macro'

export const StyledVehicleHead = styled.section(() => [
  tw`flex flex-col justify-between gap-y-4 sm:flex-row sm:gap-y-0 pt-6 sm:pt-10`,
  css`
    h1 {
      ${tw`text-h4 font-semibold capitalize leading-none sm:text-left sm:text-h3 lg:text-h2`}
    }

    > div {
      ${tw`flex w-full items-center justify-between gap-x-3 sm:w-auto`}
    }
  `,
])
