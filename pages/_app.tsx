import 'react-toastify/dist/ReactToastify.min.css'

import { ToastContainer } from 'react-toastify'
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { Roboto } from '@next/font/google'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { FilterProvider, UserProvider } from 'src/context'
import { GlobalStyles, theme } from 'src/theme'
import { env } from 'src/utils'

const httpLink = createHttpLink({
  uri: env.uri,
  // Token is set to cookie by keystone, keystone will take all cookie
  credentials: 'include',
})

const client = new ApolloClient({
  cache: new InMemoryCache({}),
  link: httpLink,
})

const inter = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <FilterProvider>
            <main className={inter.className}>
              <Component {...pageProps} />
            </main>
            <ToastContainer hideProgressBar autoClose={1500} />
          </FilterProvider>
        </ThemeProvider>
      </UserProvider>
    </ApolloProvider>
  )
}
