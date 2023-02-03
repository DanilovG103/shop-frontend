import { gql } from '@apollo/client'

export const getBrands = gql`
  query Brands {
    brands {
      id
      title
    }
  }
`
