import { gql } from '@apollo/client'

import { userFragment } from '../fragments'

gql`
  ${userFragment}
  mutation Auth($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          ...user
        }
      }

      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`

gql`
  ${userFragment}
  mutation Registration($email: String!, $password: String!, $name: String!) {
    registration(email: $email, name: $name, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          ...user
        }
      }
    }
  }
`

gql`
  mutation UserUpdate($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
    updateUser(where: $where, data: $data) {
      id
      name
      email
    }
  }
`
