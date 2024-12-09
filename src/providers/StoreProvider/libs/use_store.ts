import { useContext } from "react"

import { IRootStore } from "../config/store.types"
import { StoreContext } from "../StoreProvider"

const useStore = (): IRootStore | null =>
	useContext(StoreContext)

export { useStore }
