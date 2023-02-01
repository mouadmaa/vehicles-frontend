import { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    ...tw``,
  },
})

const GlobalStyles = () => (
  <Fragment>
    <BaseStyles />
    <CustomStyles />
  </Fragment>
)

export default GlobalStyles
