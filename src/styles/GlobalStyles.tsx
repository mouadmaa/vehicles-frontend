import { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  body {
    ${tw`text-gray-900`}
  }
`

const GlobalStyles = () => (
  <Fragment>
    <BaseStyles />
    <CustomStyles />
  </Fragment>
)

export default GlobalStyles
