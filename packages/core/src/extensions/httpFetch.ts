import { GraphQLClient } from "graphql-request";

export const httpFetch = <TData = any, TVariables = any>(url: string, query: any, variables?: TVariables, options?: any) => {
  const client = new GraphQLClient(url, options);
  return client.request(query, variables) as Promise<TData>;
}
