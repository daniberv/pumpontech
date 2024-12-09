import { applySnapshot } from "mobx-state-tree"

export const CollectionActions = (self) => 
	({
		add(model: any) {
			self.items.push(model)
		},
		remove(model: any) {
			self.items.splice(self.items.indexOf(model), 1)
		},
		updatePage(page: number) {
			self.page = Number(page)
			if (self.isInitialized && !self.isSyncing) {
				self.fetch()
			}

			return page
		},
		reset() {
			applySnapshot(self, {
				items: [],
				total: 0,
				page: 1,
			})
		},
	})
