import { types as t } from "mobx-state-tree";

const AuthorModel = t.model("AuthorModel", {
    name: t.maybeNull(t.string),
    wallet: t.maybeNull(t.string),
});

export { AuthorModel };