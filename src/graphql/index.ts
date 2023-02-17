import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

import { env } from 'src/utils'

const httpLink = createHttpLink({
  uri: env.uri,
  // Token is set to cookie by keystone, keystone will take all cookie
  credentials: 'include',
})

export const client = new ApolloClient({
  cache: new InMemoryCache({}),
  link: httpLink,
  connectToDevTools: process.env.NODE_ENV !== 'production',
})
