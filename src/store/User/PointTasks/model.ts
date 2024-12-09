import { Instance, types as t } from "mobx-state-tree"
import { Syncable } from "@/store/abstract/Syncable"

const PointTask = t.model({
    task: t.maybeNull(t.string),
    reward_amount: t.maybeNull(t.number),
    status: t.maybeNull(t.string),
});

const PointTasksModel = t.compose(
    t.model({
        items: t.array(PointTask),
    }),
    Syncable,
)

type IPointTasksModel = Instance<typeof PointTasksModel>

export default PointTasksModel

export type { IPointTasksModel }
