import { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    ...tw`mx-auto max-w-screen-2xl text-gray-700 bg-gray-50 overflow-x-hidden`,
  },
  section: {
    ...tw`mx-auto max-w-screen-xl`,
  },
  h1: {
    ...tw`text-h1`,
  },
  h2: {
    ...tw`text-h2`,
  },
  h3: {
    ...tw`text-h3`,
  },
  h4: {
    ...tw`text-h4`,
  },
  h5: {
    ...tw`text-xl`,
  },
  h6: {
    ...tw`text-lg`,
  },
  p: {
    ...tw`text-md`,
  },
  small: {
    ...tw`text-sm`,
  },
})

const GlobalStyles = () => (
  <Fragment>
    <BaseStyles />
    <CustomStyles />
  </Fragment>
)

export default GlobalStyles
