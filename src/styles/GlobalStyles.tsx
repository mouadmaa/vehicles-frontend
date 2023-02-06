import { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    ...tw`mx-auto max-w-screen-2xl text-black bg-gray-50 overflow-x-hidden`,
  },
  section: {
    ...tw``,
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

const GlobalStyles = () => (
  <Fragment>
    <BaseStyles />
    <CustomStyles />
  </Fragment>
)

export default GlobalStyles
