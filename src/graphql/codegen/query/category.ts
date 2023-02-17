import { gql } from '@apollo/client'

gql`
  query Categories {
    categories(orderBy: { title: asc }) {
      id
      title
    }
  }
`
