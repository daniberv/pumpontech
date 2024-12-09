import { IFavoritesModel } from "./model"
import { applySnapshot } from "mobx-state-tree"

export default (self: IFavoritesModel) => 
	({
		toggle(newItem) {
			const isExist = self.items.find(item => item.id === newItem.id)
			let newItems = [];

			if (isExist) {
				newItems = self.items.filter(item => item.id !== newItem.id)
			} else {
				newItems = [...self.items, newItem];
			}

			applySnapshot(self, { ...self, items: newItems })
		},
	})