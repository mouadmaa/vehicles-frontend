import { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    ...tw`mx-auto max-w-screen-2xl text-black`,
  },
  section: {
    ...tw`mx-auto max-w-screen-xl`
  }
})

const GlobalStyles = () => (
  <Fragment>
    <BaseStyles />
    <CustomStyles />
  </Fragment>
)

export default GlobalStyles
