import 'react-toastify/dist/ReactToastify.min.css'
import 'react-phone-input-2/lib/material.css'

import { ToastContainer } from 'react-toastify'
import { ApolloProvider } from '@apollo/client'
import createCache from '@emotion/cache'
import { CacheProvider, Global } from '@emotion/react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import { Roboto } from '@next/font/google'
import type { AppProps } from 'next/app'

import { FilterProvider, UserProvider } from 'src/context'
import { client } from 'src/graphql'
import { globalStyles, muiTheme } from 'src/theme'

const inter = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '700'],
})

const emotionCache = createCache({ key: 'css', prepend: true })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <CacheProvider value={emotionCache}>
          <MuiThemeProvider theme={muiTheme}>
            <Global styles={globalStyles} />
            <FilterProvider>
              <main className={inter.className}>
                <Component {...pageProps} />
              </main>
              <ToastContainer
                position="bottom-right"
                hideProgressBar
                autoClose={1500}
              />
            </FilterProvider>
          </MuiThemeProvider>
        </CacheProvider>
      </UserProvider>
    </ApolloProvider>
  )
}
