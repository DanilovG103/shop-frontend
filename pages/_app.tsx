import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, theme } from 'src/theme'

const client = new ApolloClient({
  cache: new InMemoryCache({}),
  uri: process.env.BASE_URL,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}
