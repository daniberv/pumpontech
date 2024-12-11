import { Instance } from "mobx-state-tree"

import { TransactionsModel } from "./model"
import actions from "./actions"

const Transactions = TransactionsModel.actions(actions)

type ITransactions = Instance<typeof Transactions>

export { Transactions }
export type { ITransactions }