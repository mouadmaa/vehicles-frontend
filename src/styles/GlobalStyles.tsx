import { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    ...tw`mx-auto max-w-screen-2xl text-gray-700 bg-gray-50`,
  },
  section: {
    ...tw`mx-auto max-w-screen-xl`,
  },
})

const GlobalStyles = () => (
  <Fragment>
    <BaseStyles />
    <CustomStyles />
  </Fragment>
)

export default GlobalStyles
