import { extendTheme } from '@chakra-ui/react'
const config = {
  initialColorMode: 'light',
}

const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1512px',
}

const theme = extendTheme({
  config,
  colors: {
    black: '#111111',
    white: '#ffffff',
    mainColor: '#1A202C',
    secondaryColor: '#00295d',
    backgroundGrey: '#f7fafc',
    logoColor: '#8DA2FB',
    lowPriority: '#FAC16B',
    mediumPriority: '#FF816F',
    highPriority: '#FF4667',
    noPriority: '#8F8E8D',
  },
  sizes: {
    breakpoints,
  },
  fonts: {
    roboto: `'Roboto Mono',  monospace`,
    plusJakarta: `'Plus Jakarta Sans', sans-serif`,
    interVariable: `'InterVariable', sans-serif`,
  },
})

export { theme }
