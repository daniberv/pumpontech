import { SnapshotOut, types as t } from "mobx-state-tree"

import {
	Cart,
	Favorites,
	Balance,
	Tags,
	Jettons,
	Feeds,
	User,
} from "@/store/index"

import type { IRootStore } from "./store.types"

export const RootStore = t.model({
	cart: t.optional(Cart, {}),
	favorites: t.optional(Favorites, {}),
	balance: t.optional(Balance, {}),
	tags: t.optional(Tags, {}),
	jettons: t.optional(Jettons, {}),
	user: t.optional(User, {
		points_completed: {
			items: [
				{
					task: 'Create 1 Jetton',
					reward_amount: 150,
					status: 'completed',
				},
				{
					task: 'Create 2 Jetton',
					reward_amount: 350,
					status: 'completed',
				}
			]
		},
		points_available: {
			items: [
				{
					task: 'Create 1 Jetton',
					reward_amount: 150,
					status: 'avaiable',
				},
				{
					task: 'Create 2 Jetton',
					reward_amount: 350,
					status: 'avaiable',
				}
			]
		}
	}),
	feeds: t.optional(Feeds, {
		"default": {itemIds: []},
		"gainers": {itemIds: []},
		"rockets": {itemIds: []},
		"cap": {itemIds: []},
		"tags": {itemIds: []},
		"favorites": {itemIds: []},
	}),
})

export type IRootStoreSnapshotOut = SnapshotOut<typeof RootStore>

export const createStore = (): IRootStore => {
	return RootStore.create()
}
