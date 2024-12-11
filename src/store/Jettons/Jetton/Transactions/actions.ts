import { applySnapshot } from "mobx-state-tree";
import { ITransactionsModel } from "./model";
import { ITransactionModel } from "./transactionModel";

export default (self: ITransactionsModel) => 
	({
        add(tx: ITransactionModel) {
            applySnapshot(self.items, {
                ...self.items,
                tx
            });
        }
	})