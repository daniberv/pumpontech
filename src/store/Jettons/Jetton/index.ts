import { Instance } from "mobx-state-tree"

import { JettonModel } from "./model"
import actions from "./actions"
import views from "./views"

const Jetton = JettonModel.views(views).actions(actions)

type IJetton = Instance<typeof Jetton>

export { Jetton }
export type { IJetton }