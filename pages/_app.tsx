import 'react-toastify/dist/ReactToastify.min.css'

import { ToastContainer } from 'react-toastify'
import { ApolloProvider } from '@apollo/client'
import { Roboto } from '@next/font/google'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { FilterProvider, UserProvider } from 'src/context'
import { client } from 'src/graphql'
import { GlobalStyles, theme } from 'src/theme'

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
