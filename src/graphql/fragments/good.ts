import { gql } from '@apollo/client'

export const goodsFragment = gql`
  fragment goods on Good {
    id
    title
    price
    brand {
      title
    }
    images {
      image {
        id
        url
      }
    }
  }
`
