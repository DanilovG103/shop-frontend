import { gql } from '@apollo/client'

const goodsFragment = gql`
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

const getGoods = gql`
  ${goodsFragment}
  query Goods(
    $where: GoodWhereInput! = {}
    $orderBy: [GoodOrderByInput!]! = []
    $take: Int
    $skip: Int! = 0
  ) {
    goods(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      ...goods
    }
  }
`

const getGoodById = gql`
  ${goodsFragment}
  query Good($id: ID!) {
    good(where: { id: $id }) {
      ...goods
      description
    }
  }
`

const getGoodsCount = gql`
  query GoodsCount($where: GoodWhereInput = {}) {
    goodsCount(where: $where)
  }
`
