import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { Inter } from '@next/font/google'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, theme } from 'src/theme'
import { env } from 'src/utils'

const client = new ApolloClient({
  cache: new InMemoryCache({}),
  uri: env.uri,
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </ApolloProvider>
  )
}
