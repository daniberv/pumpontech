import { Instance, types as t } from "mobx-state-tree"
import { Syncable } from "@/store/abstract/Syncable"

const BalanceModel = t.compose(
    t.model({
        ton: t.optional(t.number, 0),
        points: t.optional(t.number, 0),
    }),
    Syncable,
)

type IBalanceModel = Instance<typeof BalanceModel>

export default BalanceModel

export type { IBalanceModel }
