import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ORIUN_AUTHTOKEN_KEY } from "@/config/constants";
import { useMe } from "@oriun/sdk/lib/services/account"
import { AccountMeData } from "@oriun/sdk/lib/services/account/types";

type Session = {
  loading: boolean;
  error?: any;
  data?: Pick<AccountMeData, "me">;
  loaded: boolean;
}

interface ContextSession {
  session?: Session,
  setAuthenticationToken: (token: string) => void;
  checkAuthentication: () => boolean | undefined;
  hasAuthenticationToken?: boolean;
  closeAuthentication: () => void;
  loadAuthentication: () => void;
}

const defaultSessionContext: ContextSession = {
  session: {
    loading: true,
    data: undefined,
    error: undefined,
    loaded: false
  },
  setAuthenticationToken: () => null,
  checkAuthentication: () => false,
  loadAuthentication: () => null,
  closeAuthentication: () => null
}

export const SessionContext = createContext<ContextSession>(defaultSessionContext);

export function SessionProvider(props: PropsWithChildren) {
  const { data, refetch: loadAuthentication, isLoading, error, isFetched, } = useMe();
  const [session, setSession] = useState<Session["data"]>();

  const hasAuthenticationToken = useMemo(() => !!localStorage.getItem(ORIUN_AUTHTOKEN_KEY) || undefined, []);

  const setAuthenticationToken = useCallback((accessToken: string = "") => {
    localStorage.setItem(ORIUN_AUTHTOKEN_KEY, accessToken);

    if (accessToken) {
      loadAuthentication()
    }
  }, [loadAuthentication])

  const checkAuthentication = useCallback(() => {
    return !!session?.me
  }, [session?.me])

  const closeAuthentication = useCallback(() => {
    setAuthenticationToken();
    setSession(undefined)
  }, [setAuthenticationToken, setSession])

  const sessionObj = useMemo(() => ({
    loading: isLoading,
    loaded: isFetched,
    data: session,
    error
  }), [session, isLoading, error, isFetched])

  useEffect(() => {
    if (error)
      closeAuthentication()
  }, [error, closeAuthentication]);

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
    <SessionContext.Provider value={{
      session: sessionObj,
      hasAuthenticationToken,
      setAuthenticationToken,
      checkAuthentication,
      closeAuthentication,
      loadAuthentication
    }}>
      {props.children}
    </SessionContext.Provider>
  )
}

export const useSession = () => useContext(SessionContext);
