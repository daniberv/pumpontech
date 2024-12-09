import { Instance } from "mobx-state-tree"

import PointTasksModel from "./model"
// import actions from "./actions"
// import views from "./views"

const PointTasks = PointTasksModel
    // .views(views).actions(actions)

type IPointTasks = Instance<typeof PointTasks>

export { PointTasks }
export type { IPointTasks }