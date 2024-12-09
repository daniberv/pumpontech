import { applySnapshot, flow } from "mobx-state-tree";
import { IJettonModel } from "./Jetton/model";
import { IJettonsModel } from "./model"
import api from "@/api";

export default (self: IJettonsModel) => 
	({
		addOrUpdateItem(item: IJettonModel) {
            self.items.set(item.id, item);
        },
		fetchById: flow(function* fetchById(params, options) {
			try {
				self.startFetching();

				const { data } = yield self.sync(api.jettons.getJetton, { ...params }, options);
				const { data: dataHolders } = yield self.sync(api.jettons.getJettonHolders, { ...params }, options);
				const { data: dataTransactions } = yield self.sync(api.jettons.getJettonTransactions, { ...params }, options);

                self.addOrUpdateItem({
					...data,
                    holders: { items: dataHolders },
                    transactions: { items: dataTransactions },
				});
				self.finishFetching();
			} catch (error) {
				self.failFetching(error);
			}
		}),
	})