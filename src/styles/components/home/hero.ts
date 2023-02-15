import tw, { css, styled } from 'twin.macro'

export const StyledHero = styled.section(() => [
  tw`relative h-[700px] lg:h-[850px] pt-4 xl:pt-8 pb-16 px-2 sm:px-4 md:px-8`,
  css`
    > div:nth-of-type(1) {
      ${tw`absolute top-0 right-0 -z-10 h-full w-2/3 xl:w-1/2 hidden xl:block overflow-hidden`}

      img {
        ${tw`h-full w-full object-cover`}
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
        ${tw`absolute top-[14%] right-[7%] hidden xl:block`}

        svg:nth-of-type(1) {
          ${tw`absolute -top-14 -translate-x-4`}
        }
      
        svg:nth-of-type(2) {
          ${tw``}
        }

        svg:nth-of-type(3) {
          ${tw`translate-x-1 -translate-y-7`}
        }
      }
    }
  
    > div:nth-of-type(4) {
      ${tw`absolute top-[16%] right-[12%] hidden md:block lg:top-[26%] xl:top-[12%] xl:right-[26%]`}
      
      article > div:first-child button {
        ${tw`hidden`}
      }
    }
    
    > div:nth-of-type(5) {
      ${tw`absolute bottom-[4%] right-[8%] hidden xl:block`}
      
      article {
        ${tw`scale-75 border-4 border-transparent shadow-lg ring-4 ring-primary-default`}

        // > div:first-child button svg {
        //   ${tw`fill-primary-default`}
        // }

        > div:last-child > div:first-child > div:first-of-type {
          ${tw`hidden`}
        }
      }
    }
    
      > div:nth-of-type(6) {
        ${tw`absolute inset-0 -z-20 bg-gray-50`}
    }
  `,
])
