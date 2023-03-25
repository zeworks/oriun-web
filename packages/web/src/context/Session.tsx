import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react"
import { useMe } from "@oriun/sdk/lib/services/account"
import { AccountMeData } from "@oriun/sdk/lib/services/account/types"
import { getOriunToken, setOriunToken } from "@oriun/sdk/src/main/helpers/token"

type Session = {
	loading: boolean
	error?: any
	data?: Pick<AccountMeData, "me">
	loaded: boolean
}

interface ContextSession {
	session?: Session
	setAuthenticationToken: (token: string) => void
	checkAuthentication: () => boolean | undefined
	hasAuthenticationToken?: boolean
	closeSession: () => void
	loadAuthentication: () => void
}

const defaultSessionContext: ContextSession = {
	session: {
		loading: true,
		data: undefined,
		error: undefined,
		loaded: false,
	},
	setAuthenticationToken: () => null,
	checkAuthentication: () => false,
	loadAuthentication: () => null,
	closeSession: () => null,
}

export const SessionContext = createContext<ContextSession>(
	defaultSessionContext
)

export function SessionProvider(props: PropsWithChildren) {
	const {
		data,
		refetch: loadAuthentication,
		isLoading,
		error,
		isFetched,
	} = useMe()
	const [session, setSession] = useState<Session["data"]>()

	const hasAuthenticationToken = useMemo(
		() => !!getOriunToken() || undefined,
		[]
	)

	const setAuthenticationToken = useCallback(
		(accessToken: string = "") => {
			setOriunToken(accessToken)

			if (accessToken) {
				loadAuthentication()
			}
		},
		[loadAuthentication]
	)

	const checkAuthentication = useCallback(() => {
		return !!session?.me
	}, [session?.me])

	const closeSession = useCallback(() => {
		setAuthenticationToken()
		setSession(undefined)
	}, [setAuthenticationToken, setSession])

	const sessionObj = useMemo(
		() => ({
			loading: isLoading,
			loaded: isFetched,
			data: session,
			error,
		}),
		[session, isLoading, error, isFetched]
	)

	useEffect(() => {
		// this will close the session, with ANY error
		if (error) closeSession()
	}, [error, closeSession])

	useEffect(() => {
		if (hasAuthenticationToken) {
			loadAuthentication()
		}
	}, [hasAuthenticationToken])

	useEffect(() => {
		if (data?.me) {
			setSession(data)
		}
	}, [data?.me])

	return (
		<SessionContext.Provider
			value={{
				session: sessionObj,
				hasAuthenticationToken,
				setAuthenticationToken,
				checkAuthentication,
				closeSession,
				loadAuthentication,
			}}
		>
			{props.children}
		</SessionContext.Provider>
	)
}

export const useSession = () => useContext(SessionContext)
