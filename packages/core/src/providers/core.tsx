import React, { PropsWithChildren, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Config } from "../domain/config";
import { Extension } from "../domain/config/extension";
import { storage } from "../extensions/storage";

interface CoreInterface {
  config: Config,
  extension: Extension
}

export const CoreContext = createContext<CoreInterface>({} as any);

const extension = {
  storage
}

const queryClient = new QueryClient();

export const CoreProvider = (props: PropsWithChildren<any>) => {
  const [config, setConfig] = useState<Config | undefined>(undefined);

  useEffect(() => {
    if (!config) {
      fetch("/config.json")
        .then(res => res.json())
        .then(setConfig)
    }
  }, [config])

  if (!config) return null;

  return (
    <CoreContext.Provider value={{
      config,
      extension
    }}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </CoreContext.Provider>
  )
}

export const useCore = () => useContext(CoreContext);
