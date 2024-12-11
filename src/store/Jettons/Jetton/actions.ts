import api from "@/api";
import { IJettonModel } from "./model";
import { flow } from "lodash";
import { applySnapshot } from "mobx-state-tree";
import { ITransactionModel } from "./Transactions/transactionModel";

export default (self: IJettonModel) => 
	({
        fetch: flow(function* fetchById(params, options) {
            try {
                self.startFetching();

                const { data } = yield self.sync(api.jettons.getJetton, { ...params }, options);
                const { dataHolders } = yield self.sync(api.jettons.getJettonHolders, { ...params }, options);
                const { dataTransactions } = yield self.sync(api.jettons.getJettonTransactions, { ...params }, options);

                applySnapshot(self, {
                    ...data,
                    holders: dataHolders,
                    transactions: dataTransactions,
                })
                self.finishFetching();
            } catch (error) {
                self.failFetching(error);
            }
        }),
        addTransaction(tx: ITransactionModel) {
            self.transactions?.add(tx);
        }
	})