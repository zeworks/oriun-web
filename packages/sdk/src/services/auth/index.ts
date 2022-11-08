import { Client } from "urql";
import {
  LoginUseCase,
  LoginUseCaseMutationData,
  LoginUseCaseMutationDocument,
  LoginUseCaseMutationVariables
} from "./domain/usecases/login-usecase";
import { Session } from "./domain/entities/session";
import { MeUseCaseQuery, MeUseCaseQueryData, MeUseCaseQueryDocument } from "./domain/usecases/me-usecase";

export interface AuthService {
  login: LoginUseCase,
  me: MeUseCaseQuery,
}

export class AuthService implements AuthService {
  constructor(
    private readonly client: Client
  ) { }
  
  login: LoginUseCase = async (email, password) => {
    return this.client.mutation<LoginUseCaseMutationData, LoginUseCaseMutationVariables>(LoginUseCaseMutationDocument, { email, password }).toPromise()
  }

  me: MeUseCaseQuery = async () => {
    return this.client.query<MeUseCaseQueryData>(MeUseCaseQueryDocument, {}).toPromise();
  }
}

export type { Session }
