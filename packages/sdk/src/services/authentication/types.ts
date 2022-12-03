import { gql } from "@apollo/client";

export type CreateAuthenticationData = {
  session?: {
    accessToken?: string;
  }
}

export type CreateAuthenticationVariables = {
  email: string;
  password: string;
}

export const CreateAuthenticationDocument = gql`
  mutation CreateAuthentication($email: String, $password: String) {
    session: createAuthentication(email: $email, password: $password) {
      accessToken
    }
  }
`
