import { gql } from '@apollo/client'

const getPostById = gql`
  query Post($id: ID!) {
    post(id: $id) {
      author {
        name
      }
    }
  }
`
