import { gql } from "urql";

export type AccountMeData = {
  me?: {
    id: string
    email: string
    username: string
    accessToken?: string
    status: boolean
    role?: {
      id: string
      key: string
      name: string
    }
    profile: {
      firstName: string
      lastName?: string
      picture: string
    }
  }
}

export const AccountMeDocument = gql`
  query getSession {
    me {
      id
      email
      username
      accessToken
      status
      role {
        name,
        permissions {
          id
          key
          name
        }
      }
      profile {
        picture
        firstName
        lastName
      }
    }
  }
`
