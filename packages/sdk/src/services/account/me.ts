import { useCore } from "@oriun/core";
import { useQuery } from "react-query";
import { fetcher } from "../../lib/http";
import { getOriunToken } from "../../main/helpers/token";
import { AccountMeData, AccountMeDocument } from "./types";

export function useMe() {
  const { config } = useCore();

  async function fetchData() {
    return fetcher<AccountMeData>(config.api.url, AccountMeDocument);
  }

  return useQuery<AccountMeData>(
    ["me"],
    fetchData,
    { enabled: !!getOriunToken(), retry: false }
  )
}
