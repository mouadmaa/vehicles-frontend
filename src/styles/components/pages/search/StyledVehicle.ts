import tw, { css, styled } from 'twin.macro'
import { Fragment } from 'react'

export const StyledVehicle = styled(Fragment)(() => [
  css`
    > div {
      ${tw`flex w-full items-center justify-between gap-x-3 sm:w-auto`}

      > div:first-child {
        ${tw`col-span-2 space-y-6`}
      }

      > div:last-child {
        ${tw`sticky top-4 hidden h-min space-y-6 lg:block`}
      }
    }
  `,
])
