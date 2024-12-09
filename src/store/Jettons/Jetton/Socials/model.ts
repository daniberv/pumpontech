import { types as t } from "mobx-state-tree";
import { SocialModel } from "./socialModel";

const SocialsModel = t.model("SocialsModel", {
    items: t.maybeNull(t.array(SocialModel)),
});

export { SocialsModel };