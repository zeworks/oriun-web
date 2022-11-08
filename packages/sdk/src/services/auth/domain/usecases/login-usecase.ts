import { gql, OperationResult } from "@urql/core"

export type LoginUseCase = (email: string, password: string) => Promise<OperationResult<LoginUseCaseMutationData>>;

export type LoginUseCaseMutationData = {
  session?: {
    accessToken?: string;
  }
}

export type LoginUseCaseMutationVariables = {
  email: string;
  password: string;
}

export const LoginUseCaseMutationDocument = gql`
  mutation CreateAuthentication($email: String, $password: String) {
    session: createAuthentication(email: $email, password: $password) {
      accessToken
    }
  }
`
