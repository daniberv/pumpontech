import { Instance } from "mobx-state-tree"

import JettonsModel from "./model"
import actions from "./actions"
import views from "./views"

const Jettons = JettonsModel.views(views).actions(actions)

type IJettons = Instance<typeof Jettons>

export { Jettons }
export type { IJettons }