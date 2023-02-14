import tw, { css, styled } from 'twin.macro'

export const StyledVehicleImages = styled.section(() => [
  tw`grid grid-cols-4 grid-rows-2 gap-3 sm:gap-6 lg:grid-cols-3`,
  css`
    > div {
      ${tw`overflow-hidden rounded-lg shadow-md ring-2 ring-gray-900/5 cursor-pointer`}

      > img {
        ${tw`h-full w-full object-cover hover:scale-110 transition-transform duration-500`}
      }
    }

    > div:nth-child(1) {
      ${tw`col-span-full row-span-2 max-h-[300px] min-h-[200px] lg:col-span-2 lg:max-h-[600px] lg:min-h-[300px]`}
    }

    > div:nth-child(2),
    > div:nth-child(3) {
      ${tw`col-span-2 lg:col-span-1 max-h-[200px] min-h-[120px] lg:max-h-[280px] lg:min-h-[160px]`}
    }
  `,
])
