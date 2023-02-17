import { gql } from '@apollo/client'

gql`
  query Brands {
    brands {
      id
      title
    }
  }
`
