import tw, { css, styled } from 'twin.macro'

interface StyledBurgerProps {
  showMenu: boolean
}

export const StyledBurger = styled.div(({ showMenu }: StyledBurgerProps) => [
  tw`flex w-12 cursor-pointer flex-col rounded-md p-2 transition-all duration-300 hover:bg-gray-100 lg:hidden`,
  css`
    div {
      ${tw`my-0.5 h-1 rounded-sm bg-gray-700 transition-all duration-500 ease-in`}
    }
    div:nth-of-type(1) {
      ${tw`w-2/3`}
    }
    div:nth-of-type(2) {
      ${tw`w-full`}
    }
    div:nth-of-type(3) {
      ${tw`w-4/5`}
    }
  `,
  showMenu && [
    css`
      div {
        ${tw`scale-75`}
      }
      div:nth-of-type(1) {
        ${tw`w-1/2 origin-bottom translate-x-1 translate-y-0.5 rotate-45`}
      }
      div:nth-of-type(2) {
        ${tw`origin-top -rotate-45`}
      }
      div:nth-of-type(3) {
        ${tw`w-1/2 origin-bottom translate-x-[12.5px] -translate-y-[5px] rotate-45`}
      }
    `,
  ],
])
