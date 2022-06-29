import { ComponentStyleConfig, extendTheme } from '@chakra-ui/react'

const Text: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'normal',
    fontSize: 'md',
    lineHeight: '2xl',
    color: 'primary',
  },
  variants: {
    body2: {
      fontWeight: 'normal',
      fontSize: 'smd',
      lineHeight: '2xl',
    },
    body3: {
      fontWeight: 'normal',
      fontSize: 'xxs',
      lineHeight: '2xl',
    },
  },
}

const Button: ComponentStyleConfig = {
  baseStyle: {
    width: '158px',
    height: '44px',
    borderRadius: '10px',
    color: 'transparent.1',
  },
  variants: {
    'button.1': {
      backgroundColor: 'purple.1',
      _hover: {
        backgroundColor: 'purple.2',
      },
    },
    2: {
      backgroundColor: 'blue.1',
    },
    3: {
      backgroundColor: 'blue.3',
    },
    4: {
      backgroundColor: 'red.1',
    },
  },
  defaultProps: {
    variant: 'button.1',
  },
}

const FormLabel: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'normal',
    fontSize: 'md',
    lineHeight: '2xl',
    color: 'primary',
  },
  variants: {
    body2: {
      fontWeight: 'normal',
      fontSize: 'smd',
      lineHeight: '2xl',
    },
    body3: {
      fontWeight: 'normal',
      fontSize: 'xxs',
      lineHeight: '2xl',
    },
  },
}

const fontFamily = 'jost, sans-serif'

export const theme = extendTheme({
  components: { Text, Button, FormLabel },
  colors: {
    primary: '#3A4374',
    transparent: {
      1: '#FFFFFF',
      2: '#F7F8FD',
      3: '#F2F4FF',
    },
    blue: { 1: '#4661E6', 2: '#62BCFA', 3: '#3A4374' },
    red: { 1: '#D73737' },
    purple: {
      1: '#AD1FEA',
      2: '#C75AF6',
    },
  },
  fonts: {
    body: fontFamily,
    heading: fontFamily,
    mono: fontFamily,
  },
  fontSizes: {
    xs: '0.75rem',
    xxs: '0.8125rem',
    sm: '0.875rem',
    smd: '0.9375rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
    '3': '.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '7.5': '1.8125rem',
    '8': '2rem',
    '8.5': '2.1875rem',
    '9': '2.25rem',
    '10': '2.5rem',
  },
  letterSpacings: {
    tight: '-0.01375em',
    tighter: '-0.0125em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  space: {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
})
