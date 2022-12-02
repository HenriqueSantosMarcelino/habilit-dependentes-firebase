import { extendTheme } from 'native-base'

export const THEME = extendTheme({
  colors: {
    orange: {
      500: '#f07e26' //PANTONE 158C
    },
    green: {
      100: '#adcc53', //PANTONE 2298C
      500: '#7aa62c', //PANTONE 4212C
      600: '#125428' //PANTONE 3435C
    },
    white: '#FFFFFF',
    gray: {
      200: '#f1f1f1',
      300: '#d4d4d4',
      500: '#706f6f',
      800: '#3c3c3b'
    }
  },

  fontConfig: {
    Roboto: {
      400: {
        normal: 'Roboto_400Regular'
      },
      700: {
        normal: 'Roboto_700Bold'
      },
      900: {
        normal: 'Roboto_900Black'
      }
    },
    Inconsolata: {
      400: {
        normal: 'Inconsolata_400Regular'
      },
      500: {
        normal: 'Inconsolata_500Medium'
      },
      600: {
        normal: 'Inconsolata_600SemiBold'
      }
    }
  },

  fonts: {
    heading: 'Roboto_900Black',
    text: 'Roboto',
    complement: 'Roboto_700Bold',
    virtualCard: 'Inconsolata'
  }
})