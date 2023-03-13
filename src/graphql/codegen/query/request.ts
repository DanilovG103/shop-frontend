import { gql } from '@apollo/client'

import { goodsFragment } from '../fragments'

gql`
  query Requests($take: Int = 12, $skip: Int = 0) {
    myRequests(take: $take, skip: $skip) {
      id
      status
      createdAt
      sum
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
