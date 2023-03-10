import { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

export const PrimaryColor = '#EF233C'
export const ShadeColor90 = '#F4D5D9'

const CustomStyles = createGlobalStyle({
  html: {
    ...tw`scroll-smooth`,
  },
  body: {
    ...tw`text-gray-900 overflow-x-hidden`,
  },
  header: {
    ...tw`mx-auto max-w-[1920px]`,
  },
  main: {
    ...tw`px-4 md:px-6`,
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
  *, ::before, ::after {
    --nextui-colors-primary: ${PrimaryColor};
    --nextui-colors-primaryShadow: ${PrimaryColor};
  }

  main > * {
    max-width: 1536px;
    margin: 0 auto;
  }

  /* NProgress */
  #nprogress > div.bar {
    background-color: ${PrimaryColor};
  }
  #nprogress > div.spinner > div {
    border-top-color: ${PrimaryColor};
    border-left-color: ${PrimaryColor};
  }
  
  /* Input range */
  .input-range__track--active {
    background-color: ${ShadeColor90};
  }
  .input-range__slider {
    background-color: ${ShadeColor90};
    border-color: ${PrimaryColor};
    border-width: 2px;
  }
  .input-range__label-container {
    transform: translateY(36px);
    display: inline-block;
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
