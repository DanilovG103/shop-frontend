import { gql } from '@apollo/client'

const getBrands = gql`
  query Brands {
    brands {
      id
      title
    }
  }
`
