import { useConfig } from "@/context/ConfigContext";
import { createOriunSdk } from "oriun-sdk";

export const sdk = createOriunSdk({ apiUri: "http://localhost:4000" })

export const useSdkClient = () => {
  const { api } = useConfig()

  return createOriunSdk({ apiUri: api?.uri });
}
