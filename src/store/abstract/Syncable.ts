import axios from "axios"
import { Instance, types as t } from "mobx-state-tree"

export const needToSyncTime = Date.now()

const Syncable = t
	.model({})
	.volatile(() => 
		({
			transport: undefined,
			controller: new AbortController(),
			// error: null,
			isSyncing: false,
			isSynced: false,
			isFailed: false,
			syncParams: "{}",
			lastTimeSynced: needToSyncTime,
			retries: 0,
		}))
	.views((self) => 
		({
			get signal() {
				return self.controller.signal
			},
			get http() {
				return self.transport
			},
		}))
	.actions((self) => {
		function setLastTimeSynced(date: number) {
			self.lastTimeSynced = date
		}
		function invalidate() {
			self.isSynced = false
		}
		function finishSyncing() {
			self.isSyncing = false
			self.isSynced = true
			self.isFailed = false
			setLastTimeSynced(Date.now())
		}
		return {
			sync(api, ...args) {
				const [request, ...requestArgs] = api(...args)
				const options = { signal: self.signal }
				let requestArgsWithSignal

				switch (requestArgs.length) {
				case 2 :
					// e.x. request('get', 'users', null, { signal })
					requestArgsWithSignal = [...requestArgs, null, options]
					break
				case 3 :
					// e.x. request('get', 'users', params, { signal })
					requestArgsWithSignal = [...requestArgs, options]
					break
				case 4 :
					// e.x. request('get', 'users', params, { ...options, signal })s
					requestArgsWithSignal = [
						...requestArgs.slice(0, -1),
						{ ...requestArgs.slice(-1)[0], ...options },
					]
					break
				default :
					throw Error("Wrong arguments")
				}
				return request(...requestArgsWithSignal)
			},
			startSyncing() {
				self.isSyncing = true
				self.isSynced = false
				self.controller = new AbortController()
			},
			invalidate,
			finishSyncing,
			abortSyncing() {
				self.controller.abort()
			},
			failSyncing(thrown: any) {
				self.isSyncing = false
				self.isSynced = false
				if (!axios.isCancel(thrown)) {
					// console.log("self HERE ::", self.toJSON())
					// self.error = thrown;
					self.retries += 1
					if (self.retries >= 3) {
						finishSyncing()
						self.isFailed = true
					}
					throw new Error(thrown)
				}
			},
			setSyncParams(params: string) {
				self.syncParams = params
			},
			resetLastTimeSynced() {
				setLastTimeSynced(needToSyncTime)
			},
			setLastTimeSynced,
		}
	})

export type ISyncable = Instance<typeof Syncable>

export { Syncable }
