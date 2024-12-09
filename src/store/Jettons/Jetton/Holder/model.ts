import { types as t } from "mobx-state-tree";
import { HolderModel } from "./holderModel";

const HoldersModel = t.model("HoldersModel", {
    items: t.maybeNull(t.array(HolderModel)),
});

export { HoldersModel };