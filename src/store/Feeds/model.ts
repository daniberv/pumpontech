import { Instance, types as t } from "mobx-state-tree"
import { Syncable } from "@/store/abstract/Syncable"
import { FeedModel } from "./Feed"
import Fetchable from "../abstract/Fetchable"

const FeedsModel = t.compose(
    t.model({
        default: t.maybeNull(FeedModel),
        gainers: t.maybeNull(FeedModel),
        tags: t.maybeNull(FeedModel),
        cap: t.maybeNull(FeedModel),
        favorites: t.maybeNull(FeedModel),
        rockets: t.maybeNull(FeedModel),
    }),
    Syncable,
    Fetchable(),
)

type IFeedsModel = Instance<typeof FeedsModel>

export default FeedsModel

export type { IFeedsModel }
