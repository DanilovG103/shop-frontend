import { gql } from '@apollo/client'

import { goodsFragment, userFragment } from '../fragments'

const queryMe = gql`
  ${userFragment}
  query Me {
    authenticatedItem {
      ... on User {
        ...user
      }
    }
  }
`

const myBasket = gql`
  ${goodsFragment}
  query Basket($where: BasketWhereUniqueInput!) {
    basket(where: $where) {
      goods {
        ...goods
      }
      goodsCount
      sum
    }
  }
`

const myFavorites = gql`
  ${goodsFragment}
  query Favorite($where: FavoriteWhereUniqueInput!) {
    favorite(where: $where) {
      goods {
        ...goods
      }
      goodsCount
    }
  }
`

// const myBasket = gql`
//   ${goodsFragment}
//   query MyBasket {
//     myBasket {
//       goods {
//         ...goods
//       }
//       sum
//     }
//   }
// `

// const favorites = gql`
//   ${goodsFragment}
//   query Favorites {
//     myFavorites {
//       goods {
//         ...goods
//       }
//     }
//   }
// `
