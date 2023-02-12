import { gql } from '@apollo/client'

const favorite = gql`
  mutation FavoriteUpdate(
    $where: FavoriteWhereUniqueInput!
    $data: FavoriteUpdateInput!
  ) {
    updateFavorite(where: $where, data: $data) {
      id
    }
  }
`

const basket = gql`
  mutation BasketUpdate(
    $where: BasketWhereUniqueInput!
    $data: BasketUpdateInput!
  ) {
    updateBasket(where: $where, data: $data) {
      id
    }
  }
`
