import { Instance, types as t } from "mobx-state-tree"
import { Syncable } from "@/store/abstract/Syncable"
import { Jetton } from "./Jetton"
import Fetchable from "../abstract/Fetchable"
import { Collection } from "../abstract/Collection"

const JettonsModel = t.compose(
    Collection(Jetton),
    Syncable,
    Fetchable(),
)

type IJettonsModel = Instance<typeof JettonsModel>

export default JettonsModel

export type { IJettonsModel }
