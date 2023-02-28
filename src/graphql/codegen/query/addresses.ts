import { gql } from '@apollo/client'

gql`
  query Addresses($query: String) {
    addresses(query: $query) {
      value
    }
  }
`
