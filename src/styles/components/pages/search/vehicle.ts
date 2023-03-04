import tw, { css, styled } from 'twin.macro'

export const StyledVehicle = styled.div(() => [
  tw`grid gap-6 lg:grid-cols-3`,
  css`
    > div:first-child {
      ${tw`col-span-2`}
    }

    > div:last-child {
      ${tw`sticky top-[74px] hidden h-min lg:block`}

      > section {
        ${tw`mt-4`}
      }
    }
  `,
])
