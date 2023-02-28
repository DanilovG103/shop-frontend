import { gql } from '@apollo/client'

import { goodsFragment } from '../fragments'

gql`
  query Requests($where: RequestWhereInput! = {}) {
    requests(where: $where) {
      id
      status
      createdAt
    }
  }
`

gql`
  ${goodsFragment}
  query RequestById($id: ID!) {
    request(where: { id: $id }) {
      id
      status
      goods {
        ...goods
      }
      goodsCount
      createdAt
    }
  }
`
