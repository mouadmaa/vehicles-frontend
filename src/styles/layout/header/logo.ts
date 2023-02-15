import tw, { css, styled } from 'twin.macro'
import Link from 'next/link'

export const StyledLogo = styled(Link)(() => [
  tw`p-1`,
  css`
    svg {
      ${tw`h-10 w-36`}
    }
  `,
])
