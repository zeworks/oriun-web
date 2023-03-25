import { useCore } from "@oriun/core"
import { useMutation } from "react-query"
import { fetcher } from "../../lib/http"
import {
	CreateAuthenticationData,
	CreateAuthenticationDocument,
	CreateAuthenticationVariables,
} from "./types"

export const useCreateAuthentication = () => {
	const { config } = useCore()

	async function createAuthentication(
		variables: CreateAuthenticationVariables
	) {
		return fetcher<CreateAuthenticationData>(
			config.api.url,
			CreateAuthenticationDocument,
			variables
		)
	}

	return useMutation<
		CreateAuthenticationData,
		any,
		CreateAuthenticationVariables
	>(createAuthentication)
}
