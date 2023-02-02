import tw, { styled } from 'twin.macro'
import Link from 'next/link'

export const StyledNavLink = styled(Link)(() => [
  tw`relative px-2 py-1.5 font-medium text-gray-700 transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-0.5 before:w-0 before:bg-primary-default before:opacity-0 before:transition-all before:duration-300 before:content-[''] after:absolute after:right-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary-default after:opacity-0 after:transition-all after:duration-300 after:content-[''] hover:text-primary-default hover:before:w-full hover:before:opacity-100 hover:after:w-full hover:after:opacity-100`,
])
