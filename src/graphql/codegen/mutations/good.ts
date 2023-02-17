import { gql } from '@apollo/client'

gql`
  mutation FavoriteUpdate($id: ID!) {
    updateMyFavorite(id: $id) {
      id
      isInFavorite
    }
  }
`

gql`
  mutation BasketUpdate($id: ID!) {
    updateMyBasket(id: $id) {
      id
      isInBasket
    }
  }
`
