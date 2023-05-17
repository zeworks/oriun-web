import { GraphQLClient, Variables } from "graphql-request"

export const httpFetch = async <TData = any, TVariables = any>(
	url: string,
	query: any,
	variables?: TVariables,
	options?: any
) => {
	const client = new GraphQLClient(url, options)
	try {
		const result = (await client.request(
			query,
			variables as any
		)) as Promise<TData>
		return result
	} catch (error: any) {
		throw error?.response?.errors?.[0] || error?.message || error
	}
}
