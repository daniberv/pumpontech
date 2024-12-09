import { Instance } from "mobx-state-tree"

import UserModel from "./model"
import actions from "./actions"
// import views from "./views"

const User = UserModel
    // .views(views)
    .actions(actions)

type IUser = Instance<typeof User>

export { User }
export type { IUser }