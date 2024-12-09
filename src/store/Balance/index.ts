import { Instance } from "mobx-state-tree"

import BalanceModel from "./model"
import actions from "./actions"
import views from "./views"

const Balance = BalanceModel.views(views).actions(actions)

type IBalance = Instance<typeof Balance>

export { Balance }
export type { IBalance }