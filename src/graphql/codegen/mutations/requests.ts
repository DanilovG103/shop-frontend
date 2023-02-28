import { gql } from '@apollo/client'

gql`
  mutation Request($data: RequestCreateInput!) {
    createRequest(data: $data) {
      id
    }
  }
`
