import { globalCss } from '.'

export const stylesGlobalCss = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    'text-rendering': 'optimizeLegibility',
    background: '$gray400',
  },

  'body, input, button, textarea': {
    fontFamily: '$default',
    fontSize: '1rem',
    color: '$gray200',

    "@media (max-width: 1000px)": {
      fontSize: '86.75%',
    },
    "@media (max-width: 750px)": {
      fontSize: '75%',
    }
  },
})
