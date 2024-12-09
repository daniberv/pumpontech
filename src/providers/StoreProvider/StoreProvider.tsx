import React, {ReactNode, createContext, PropsWithChildren} from "react"

import { IRootStore } from "./config/store.types"

type StoreProviderProps = PropsWithChildren<{
	store: IRootStore
}>

const StoreContext = createContext<IRootStore | null>(null)

const StoreProvider = (props: StoreProviderProps) => {
	const { children, store } = props

	return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export { StoreProvider, StoreContext }
export type { StoreProviderProps }