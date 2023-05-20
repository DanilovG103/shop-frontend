import { gql } from '@apollo/client'

gql`
  mutation Request($data: RequestCreateInput!) {
    createRequest(data: $data) {
      id
    }
  }
`

gql`
  mutation UpdateRequest(
    $where: RequestWhereUniqueInput!
    $data: RequestUpdateInput!
  ) {
    updateRequest(where: $where, data: $data) {
      id
    }
  }
`
