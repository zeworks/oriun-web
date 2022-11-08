import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from "@urql/core"
import { WINDOW_EXISTS } from "../config/constants";
import { getOriunToken } from "../helpers/token";

export const createUrql = (uri: string) => {
  const ssrCache = ssrExchange({ isClient: WINDOW_EXISTS });

  return createClient({
    url: uri,
    fetchOptions: () => {
      const token = getOriunToken();

      if (!token) return {}

      return {
        headers: {
          authorization: `${token}`
        }
      }
    },
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  })
}
