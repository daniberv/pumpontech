import Fetchable from "@/store/abstract/Fetchable";
import { Syncable } from "@/store/abstract/Syncable";
import { types as t } from "mobx-state-tree";

const TagModel = t.compose(
    t
        .model("FeedModel", {
            name: t.maybeNull(t.string),
            slug: t.maybeNull(t.string),
        }),
        Syncable,
        Fetchable(),
    );

export { TagModel };