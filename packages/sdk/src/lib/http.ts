import { httpFetch } from "@oriun/core/src/extensions/httpFetch";
import { getOriunToken } from "../main/helpers/token";

export const fetcher: typeof httpFetch = (url: string, query: any, variables) => {
  return httpFetch(url, query, variables, {
    headers: {
      authorization: getOriunToken() || ""
    }
  })
}
