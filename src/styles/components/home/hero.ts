import tw, { css, styled } from 'twin.macro'

export const StyledHero = styled.section(() => [
  tw`relative max-w-screen-2xl h-[700px] lg:h-[850px] pt-4 xl:pt-8 pb-16 px-2 sm:px-4 md:px-8`,
  css`
    > div:nth-of-type(1) {
      ${tw`absolute top-0 right-0 -z-10 h-full w-2/3 xl:w-1/2 hidden lg:block overflow-hidden`}

      img {
        ${tw`h-auto w-full object-cover`}
      }
    }

    > div:nth-of-type(2) {
      ${tw`mx-auto max-w-screen-xl flex flex-col justify-around h-full`}

      > div:first-child {
        ${tw`w-full space-y-10 text-center md:w-1/2 md:text-start`}

        h1 {
          ${tw`text-gray-900 whitespace-normal sm:whitespace-nowrap font-semibold leading-[1.2]`}
        }

        h5 {
          ${tw`px-4 sm:px-24 md:w-3/4 md:px-0`}
        }

        > div {
          ${tw`hidden w-2/3 lg:w-1/2 items-center justify-between md:flex`}

          div {
            ${tw`flex flex-col rounded-sm border-l-4 border-shade-94 pl-6`}

            span:first-child {
              ${tw`text-h4 font-semibold text-primary-default xl:text-h3`}
            }

            span:last-child {
              ${tw`text-gray-500`}
            }
          }
        }
      }
    }

    > div:nth-of-type(3) {
        ${tw`absolute top-[18%] right-[7%] hidden lg:block`}

        svg:nth-of-type(1) {
          ${tw`absolute -top-14 -translate-x-4`}
        }

        svg:nth-of-type(3) {
          ${tw`translate-x-1 -translate-y-7`}
        }
      }
    }
  
    > div:nth-of-type(4) {
        ${tw`absolute top-[10%] right-[16%] hidden md:top-[20%] md:block xl:top-[11%] xl:right-[27%]`}
      }
  `,
])
