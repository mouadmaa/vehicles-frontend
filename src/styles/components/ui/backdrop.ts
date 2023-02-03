import tw, { styled } from 'twin.macro'

export const StyledBackdrop = styled.div(() => [
  tw`absolute left-0 z-40 w-full h-[90vh] backdrop-blur-3xl`,
])
