import { types as t } from "mobx-state-tree";

const HolderModel = t.model("HolderModel", {
    address: t.maybeNull(t.string),
    percentage: t.maybeNull(t.number),
});

export { HolderModel };