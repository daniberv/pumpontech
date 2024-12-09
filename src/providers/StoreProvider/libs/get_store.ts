import { IAnyModelType, getRoot } from "mobx-state-tree"

export function getStore<RootStoreType>(node: any): RootStoreType {
	return getRoot<IAnyModelType>(node)
}