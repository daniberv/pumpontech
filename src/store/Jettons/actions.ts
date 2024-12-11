import { flow } from "mobx-state-tree";
import { IJettonModel } from "./Jetton/model";
import { IJettonsModel } from "./model"
import api from "@/api";
import { ITransactionModel } from "./Jetton/Transactions/transactionModel";

export type IJettonTransactionData = {
	id: number
	tx: ITransactionModel

}

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
		add(item: IJettonModel) {
			self.items.set(item.id, item);
		},
		update(item: IJettonModel) {
			self.items.set(item.id, item);
		},
		addTransaction(data: IJettonTransactionData) {
			const { id, tx } = data;

			const jetton = self.findWhere({ id });

			if (jetton) {
				jetton.addTransaction(tx);
			}
		}
	})