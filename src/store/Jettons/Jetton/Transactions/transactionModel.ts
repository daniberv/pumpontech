import { types as t } from "mobx-state-tree";

const TransactionModel = t.model("TransactionModel", {
    buyer: t.maybeNull(t.string),
    symbol: t.maybeNull(t.string),
    type: t.optional(t.union(t.literal('buy'), t.literal('sell')), 'buy'),
});

export { TransactionModel };