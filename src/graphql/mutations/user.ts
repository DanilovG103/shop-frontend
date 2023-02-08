import { gql } from '@apollo/client'

const auth = gql`
  mutation Auth($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
      }

      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`

const register = gql`
  mutation Registration($data: UserCreateInput!) {
    createUser(data: $data) {
      id
    }
  }
`
