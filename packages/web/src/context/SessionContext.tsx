import { ORIUN_AUTHTOKEN_KEY } from "@/config/constants";
import { sdk } from "@/lib/sdk";
import { Session } from "oriun-sdk/src/services/auth";
import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from "react";

interface ContextSession {
  session?: Session,
  setAuthToken: (token: string) => void;
  hasAuthToken: boolean;
  logout: () => void;
  loadSession: () => void;
}

const defaultSessionContext: any = {
  session: undefined,
  hasAuthToken: () => null,
  setAuthToken: () => null,
  logout: () => null
}

export const SessionContext = createContext<ContextSession>(defaultSessionContext);

export function SessionProvider(props: PropsWithChildren) {
  const [session, setSession] = useState<Session>();

  const hasAuthToken = useMemo(() => !!localStorage.getItem(ORIUN_AUTHTOKEN_KEY), []);

  const loadSession = useCallback(() => {
    sdk.auth.me().then(session => setSession(session.data?.me));
  }, [setSession])

  const onSetAuthToken = useCallback((accessToken?: string) => {
    if (!accessToken)
      return localStorage.removeItem(ORIUN_AUTHTOKEN_KEY);

    localStorage.setItem(ORIUN_AUTHTOKEN_KEY, accessToken);
    loadSession();
  }, [loadSession])

  useEffect(() => {
    if (hasAuthToken)
      loadSession()
  }, [])

  const logout = useCallback(() => {
    setSession(undefined);
    onSetAuthToken(undefined);
  }, [onSetAuthToken])

  return (
    <SessionContext.Provider value={{
      session,
      hasAuthToken,
      setAuthToken: onSetAuthToken,
      logout,
      loadSession
    }}>
      {props.children}
    </SessionContext.Provider>
  )
}

export const useSession = () => useContext(SessionContext);
