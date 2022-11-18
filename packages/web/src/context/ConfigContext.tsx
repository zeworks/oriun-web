import { Config } from "@/domain/config";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

export const ConfigContext = createContext<Config>(null as any);

export function ConfigProvider({ children }: PropsWithChildren<any>) {
  const [config, setConfig] = useState<Config>(null as any);

  useEffect(() => {
    if (!config) {
      fetch("/config.json")
        .then(res => res.json())
        .then(setConfig)
    }
  }, [config])

  if (!config) return null;

  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  )
}

export function useConfig() {
  return useContext(ConfigContext);
}
