import tw, { css, styled } from 'twin.macro'

export const StyledHeroSearch = styled.article(() => [
  tw`mx-auto md:mx-0 w-min`,
  css`
    > div:first-child {
      ${tw`w-full md:w-min flex justify-center rounded-tl-lg rounded-tr-lg bg-white shadow-md md:w-min`}
    }
  }

  > div:last-child {
    ${tw`w-min flex flex-col items-center rounded-lg rounded-tl-none bg-white shadow-md md:flex-row`}
    label {
      ${tw`flex cursor-pointer flex-col py-4 px-8`}
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
      ${tw`py-5 px-5 w-full`}
      button {
        ${tw`px-12 py-3 w-full`}
      }
    }
  `,
])

interface StyledHeroSearchTabProps {
  active: boolean
}

export const StyledHeroSearchTab = styled.button(
  ({ active }: StyledHeroSearchTabProps) => [
    tw`capitalize border-b-2 py-3 px-6 font-semibold transition-all duration-300 hover:border-primary-default hover:text-primary-default active:scale-95`,
    active && tw`border-primary-default text-primary-default`,
  ],
)
