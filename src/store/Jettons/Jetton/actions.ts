import api from "@/api";
import { IJettonModel } from "./model";
import { flow } from "lodash";
import { applySnapshot } from "mobx-state-tree";

export default (self: IJettonModel) => 
	({
        fetch: flow(function* fetchById(params, options) {
            try {
                self.startFetching();

                const { data } = yield self.sync(api.jettons.getJetton, { ...params }, options);
                const { dataHolders } = yield self.sync(api.jettons.getJettonHolders, { ...params }, options);
                const { dataTransactions } = yield self.sync(api.jettons.getJettonTransactions, { ...params }, options);

                // applySnapshot(self, {
                //     ...data,
                //     holders: dataHolders,
                //     transactions: dataTransactions,
                // })
                self.finishFetching();
            } catch (error) {
                self.failFetching(error);
            }
        }),
		// fetchHolders: flow(function* fetchHolders() {
        //     console.log('SDASDAS')
        //     try {
        //         self.startFetching();

        //         console.log('GO', self.id)
        //         const { data } = yield self.sync(api.jettons.getJettonHolders, { id: self.id }, null);

        //         // self.holders = data;
        //         self.finishFetching();
        //     } catch (error) {
        //         console.log('ERROR', error)
        //         self.failFetching(error);
        //     }
        // }),
	})