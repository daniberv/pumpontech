import { Instance, types as t } from "mobx-state-tree";

const TransactionModel = t.model("TransactionModel", {
    buyer: t.maybeNull(t.string),
    symbol: t.maybeNull(t.string),
    type: t.optional(t.union(t.literal('buy'), t.literal('sell')), 'buy'),
});

type ITransactionModel = Instance<typeof TransactionModel>

export type { ITransactionModel }

export { TransactionModel };