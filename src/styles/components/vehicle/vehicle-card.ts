import tw, { css, styled } from 'twin.macro'

interface StyledVehicleCardProps {
  isInteractive?: boolean
}

export const StyledVehicleCard = styled.article(
  ({ isInteractive }: StyledVehicleCardProps) => [
    tw`w-80 rounded-lg bg-white shadow-md ring-1 ring-gray-900/5 transition-shadow duration-500`,
    css`
      > div:first-child {
        ${tw`relative w-full overflow-hidden rounded-t-lg`}

        img {
          ${tw`h-48 w-full object-cover duration-500`}
        }

        button {
          ${tw`absolute top-2 right-2 cursor-default flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl`}

          svg {
            ${tw`w-6 h-6 fill-white translate-y-px transition-transform duration-300`}
          }
        }
      }

      > div:last-child {
        ${tw`relative space-y-2 divide-y-2 px-4 py-3`}

        > div:first-child {
          div:first-of-type {
            ${tw`absolute top-0 right-0 flex translate-x-2 -translate-y-[50%] items-center justify-center gap-x-1 rounded-lg rounded-br-none bg-primary-default px-4 py-1.5 text-white`}

            svg:first-of-type {
              ${tw`w-3.5 h-3.5 fill-current`}
            }

            svg:last-of-type {
              ${tw`absolute bottom-0 right-0 h-2 w-2 translate-y-[7.8px] translate-x-[0.2px] fill-primary-dark`}
            }

            span {
              ${tw`text-xs uppercase`}
            }
          }

          div:last-of-type {
            span:first-child {
              ${tw`text-xl font-semibold text-primary-default`}
            }
            span:last-child {
              ${tw`text-sm text-gray-500`}
            }
          }

          span {
            ${tw`text-xl font-semibold capitalize`}
          }
        }

        > div:last-child {
          ${tw`flex items-center justify-between px-0.5 pt-3 pb-1`}

          div {
            ${tw`flex items-center justify-center gap-x-2`}

            svg {
              ${tw`w-4 h-4 fill-primary-default`}
            }

            span {
              ${tw`text-sm capitalize text-gray-500`}
            }
          }
        }
      }
    `,
    isInteractive && [
      tw`hover:shadow-lg cursor-pointer`,
      css`
        > div:first-child button {
          ${tw`cursor-pointer`}

          svg {
            ${tw`hover:scale-110 active:scale-90`}
          }
        }
      `,
    ],
  ],
)
