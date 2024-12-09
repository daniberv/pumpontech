import { types as t } from "mobx-state-tree";
import { TransactionModel } from "./transactionModel";

const TransactionsModel = t.model("TransactionsModel", {
    items: t.maybeNull(t.array(TransactionModel)),
});

export { TransactionsModel };