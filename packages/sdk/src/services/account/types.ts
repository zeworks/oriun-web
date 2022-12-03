import { gql } from "urql";

export type AccountMeData = {
  me?: {
    id: string;
    email: string;
    username: string;
    accessToken?: string;
    profile: {
      picture: string;
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
      profile {
        picture
      }
    }
  }
`
