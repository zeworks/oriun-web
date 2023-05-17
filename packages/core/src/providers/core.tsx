import React, {
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from "react"
import { createContext } from "react"
import { Config } from "../domain/config"
import { Extension } from "../domain/config/extension"
import { storage } from "../extensions/storage"

interface CoreInterface {
	config: Config
	extension: Extension
}

type CoreProps = {
	config?: any
}

const extension = { storage }

export const CoreContext = createContext<CoreInterface>(null as any)
export const CoreProvider = ({
	children,
	config: defaultConfig,
}: PropsWithChildren<CoreProps>) => {
	const [config, setConfig] = useState<Config | undefined>(undefined)

	useEffect(() => {
		if (!config) {
			fetch("/config.json")
				.then((res) => res.json())
				.then((config) => setConfig({ ...defaultConfig, ...config }))
		}
	}, [config])

	if (!config) return null

	return (
		<CoreContext.Provider
			value={{
				config,
				extension,
			}}
		>
			{children}
		</CoreContext.Provider>
	)
}

export const useCore = () => useContext(CoreContext)
