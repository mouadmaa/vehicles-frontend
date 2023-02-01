/** @type {import('tailwindcss')} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    fontFamily: {
      sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      h1: '4rem',
      h2: '2.5rem',
      h3: '2rem',
      h4: '1.5rem',
      xl: '1.25rem',
      lg: '1.125rem',
      md: '1rem',
      sm: '0.875rem',
      xs: '0.75rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#0D0D0D',
      white: '#FFFFFF',
      gray: colors.slate,
      primary: {
        default: '#EF233C',
        dark: '#D90429',
      },
      shade: {
        98: '#FAF3F4',
        96: '#FBECEE',
        94: '#F8E5E7',
        92: '#F4DCDF',
        90: '#F4D5D9',
      }
    },
    extend: {
      gridTemplateColumns: {
        'statistic': 'repeat(auto-fit, minmax(120px, 1fr))',
        'vehicles': 'repeat(auto-fit, minmax(320px, 1fr))',
      }
    },
  },
  plugins: [],
}