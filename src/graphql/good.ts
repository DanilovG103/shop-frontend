import { gql } from '@apollo/client'

const getGoods = gql`
  query Goods(
    $where: GoodWhereInput! = {}
    $orderBy: [GoodOrderByInput!]! = []
    $take: Int
    $skip: Int! = 0
  ) {
    goods(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
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
  }
`

const getGoodsCount = gql`
  query GoodsCount {
    goodsCount
  }
`

export { getGoods, getGoodsCount }
