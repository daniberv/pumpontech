import { Instance, types as t } from "mobx-state-tree"
import { Syncable } from "@/store/abstract/Syncable"
import Fetchable from "../abstract/Fetchable"
import { Collection } from "../abstract/Collection"
import { TagModel } from "./Tag"

const TagsModel = t.compose(
    t.model({
        selected: t.maybeNull(t.string),
    }),
    Collection(TagModel),
    Syncable,
    Fetchable(),
)

type ITagsModel = Instance<typeof TagsModel>

export default TagsModel

export type { ITagsModel }
