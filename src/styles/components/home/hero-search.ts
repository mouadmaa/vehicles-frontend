import tw, { css, styled } from 'twin.macro'

export const StyledHeroSearch = styled.article(() => [
  tw`max-w-fit bg-white rounded-lg shadow-lg overflow-hidden`,
  css`
      > div:first-child {
        ${tw`flex justify-center items-center`}}
      }

      > div:last-child {
        ${tw`flex flex-col items-center md:flex-row`}
        
        label {
          ${tw`flex cursor-pointer flex-col py-6 px-8`}
          
          span {
            ${tw`mb-0.5 text-gray-600`}
          }
          
          input {
            ${tw`font-semibold outline-0`}
          }
        }
        
        div:not(:last-child) {
          ${tw`h-0.5 w-4/5 rounded bg-gray-200 md:h-10 md:w-0.5`}
        }
        
        div:last-child {
          ${tw`py-6 px-8`}
          
          button {
            ${tw`px-8 py-3`}
          }
        }
    `,
])

interface StyledHeroSearchButtonProps {
  active: boolean
}

export const StyledHeroSearchButton = styled.button(
  ({ active }: StyledHeroSearchButtonProps) => [
    tw`capitalize border-b-2 py-3 px-6 font-semibold transition-all duration-300 hover:border-primary-default hover:text-primary-default active:scale-95`,
    active && tw`border-primary-default text-primary-default`,
  ],
)
