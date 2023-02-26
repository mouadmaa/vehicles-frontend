import tw, { css, styled } from 'twin.macro'

interface StyledAgencyInfoProps {
  inMainContent: boolean
}

export const StyledAgencyInfo = styled.section(
  ({ inMainContent }: StyledAgencyInfoProps) => [
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
          ${tw`flex h-full flex-col justify-around text-gray-700`}

          h3 {
            ${tw`text-md font-semibold capitalize transition-colors duration-200`}
          }

          p {
            ${tw`text-sm capitalize leading-none text-gray-500`}
          }
        }
      }

      > div:last-child {
        ${tw`flex gap-x-3`}

        button {
          ${tw`w-full`}
        }
      }
    `,
    inMainContent && [
      tw`block lg:hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 space-y-0 my-3 md:my-5`,
      css`
        > div {
          ${tw`w-full self-end`}

          small {
            ${tw`hidden`}
          }
        }
      `,
    ],
  ],
)
