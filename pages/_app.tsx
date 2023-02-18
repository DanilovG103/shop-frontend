import 'react-toastify/dist/ReactToastify.min.css'

import { ToastContainer } from 'react-toastify'
import { ApolloProvider } from '@apollo/client'
import createCache from '@emotion/cache'
import { CacheProvider, Global, ThemeProvider } from '@emotion/react'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { Roboto } from '@next/font/google'
import type { AppProps } from 'next/app'

import { FilterProvider, UserProvider } from 'src/context'
import { client } from 'src/graphql'
import { globalStyles, theme } from 'src/theme'

const inter = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

const muiTheme = createTheme({
  breakpoints: {
    values: {
      xs: 319,
      sm: 577,
      md: 769,
      lg: 1023,
      xl: 1231,
    },
  },
})

const emotionCache = createCache({ key: 'css', prepend: true })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <MuiThemeProvider theme={muiTheme}>
          <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
              <Global styles={globalStyles} />
              <FilterProvider>
                <main className={inter.className}>
                  <Component {...pageProps} />
                </main>
                <ToastContainer hideProgressBar autoClose={1500} />
              </FilterProvider>
            </ThemeProvider>
          </CacheProvider>
        </MuiThemeProvider>
      </UserProvider>
    </ApolloProvider>
  )
}
