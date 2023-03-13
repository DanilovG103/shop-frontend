import { toast } from 'react-toastify'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

import { env } from 'src/utils'

const httpLink = createHttpLink({
  uri: env.uri,
  // Token is set to cookie by keystone, keystone will take all cookie
  credentials: 'include',
})

// eslint-disable-next-line promise/prefer-await-to-callbacks
const errorLink = onError((error) => {
  if (error.networkError) {
    toast('Произошла ошибка', { type: 'error' })
  }
})

export const client = new ApolloClient({
  cache: new InMemoryCache({}),
  link: errorLink.concat(httpLink),
  connectToDevTools: process.env.NODE_ENV !== 'production',
})
