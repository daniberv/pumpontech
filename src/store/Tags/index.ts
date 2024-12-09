import { Instance } from "mobx-state-tree"

import TagsModel from "./model"
import actions from "./actions"
import views from "./views"

const Tags = TagsModel.views(views).actions(actions)

type ITags = Instance<typeof Tags>

export { Tags }
export type { ITags }