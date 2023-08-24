import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    fonts: {
      default: 'nunito-sans',
    },

    space: {
      px: '1px',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.125rem',
      10: '2.5rem',
    },

    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
    },

    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },

    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },

    colors: {
      white: '#FFFFFF',
      black: '#000000',

      greenLight100: '#50B2C0',
      greenLight200: '#255D6A',
      greenLight300: '#0A313C',

      purple: '#9120BD',

      gray50: '#D9D9D9',
      gray100: '#F8F9FC',
      gray200: '#E6E8F2',
      gray300: '#D9D9D9',
      gray400: '#C6C6C6',
      
      green100: '#e6f6f4',
      green200: '#d9f2ef',
      green300: '#b0e4dd',
      green400: '#00a991',
      green500: '#009883',
      green600: '#008774',
      green700: '#007f6d',
      green800: '#006557',
      green900: '#004c41',
      greenDark: '#003b33',
    },

    radii: {
      xs: '2.5px',
      sm: '5px',
      md: '10px',
      lg: '20px',
      full: '99999px',
    },
  },
})
