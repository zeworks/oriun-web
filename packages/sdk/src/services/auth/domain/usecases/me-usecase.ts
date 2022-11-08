import { gql, OperationResult } from "@urql/core"

export type MeUseCaseQuery = () => Promise<OperationResult<MeUseCaseQueryData>>;

export type MeUseCaseQueryData = {
  me?: {
    id: string;
    email: string;
    username: string;
    accessToken?: string;
  }
}

export const MeUseCaseQueryDocument = gql`
  query getSession {
    me {
      id
      email
      username
      accessToken
    }
  }
`
