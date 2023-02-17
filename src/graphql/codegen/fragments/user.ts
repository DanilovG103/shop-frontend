import { gql } from '@apollo/client'

export const userFragment = gql`
  fragment user on User {
    id
    name
    email
    basketId
    favoritesId
  }
`
