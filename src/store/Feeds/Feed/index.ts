import Fetchable from "@/store/abstract/Fetchable";
import { Syncable } from "@/store/abstract/Syncable";
import { types as t } from "mobx-state-tree";

const FeedModel = t.compose(
    t
        .model("FeedModel", {
            itemIds: t.array(t.string),
        }),
        Syncable,
        Fetchable(),
    )
    .actions((self) => ({
        setItems(newItemIds) {
            self.itemIds = newItemIds;
        },
    }));

export { FeedModel };