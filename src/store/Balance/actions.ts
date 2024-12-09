import { IBalanceModel } from "./model"
import { applySnapshot } from "mobx-state-tree"

export default (self: IBalanceModel) => 
	({
		update(patch) {
			applySnapshot(self, { ...self, ...patch })
			self.isSynced = true
		},
	})