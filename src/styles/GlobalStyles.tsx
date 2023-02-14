import { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  html: {
    ...tw`scroll-smooth`,
  },
  body: {
    ...tw`text-black overflow-x-hidden`,
  },
  header: {
    ...tw`mx-auto max-w-[1920px]`,
  },
  main: {
    ...tw`px-2 sm:px-4 lg:px-6`,
  },
  footer: {
    ...tw`mx-auto max-w-[1920px]`,
  },
  section: {
    ...tw`py-3 md:py-5`,
  },
  h1: {
    ...tw`lg:text-h1 text-h2`,
  },
  h2: {
    ...tw`lg:text-h2 text-h3`,
  },
  h3: {
    ...tw`lg:text-h3 text-h4`,
  },
  h4: {
    ...tw`lg:text-h4 text-xl`,
  },
  h5: {
    ...tw`lg:text-xl text-lg`,
  },
  h6: {
    ...tw`lg:text-lg text-md`,
  },
  p: {
    ...tw`lg:text-md text-sm`,
  },
  small: {
    ...tw`lg:text-sm text-xs`,
  },
})

const CustomCssStyles = createGlobalStyle`
  main > * {
    max-width: 1536px;
    margin: 0 auto;
  }
`

const GlobalStyles = () => (
  <Fragment>
    <BaseStyles />
    <CustomStyles />
    <CustomCssStyles />
  </Fragment>
)

export default GlobalStyles
