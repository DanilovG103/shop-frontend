import 'react-toastify/dist/ReactToastify.min.css'

import { ToastContainer } from 'react-toastify'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { Inter } from '@next/font/google'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { BasketProvider, FilterProvider } from 'src/context'
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
        <FilterProvider>
          <BasketProvider>
            <main className={inter.className}>
              <Component {...pageProps} />
            </main>
            <ToastContainer />
          </BasketProvider>
        </FilterProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}
