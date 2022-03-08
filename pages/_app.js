import { ChakraProvider } from '@chakra-ui/provider'
import { theme } from '../global'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}><Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
