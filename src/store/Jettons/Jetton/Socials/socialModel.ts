import { types as t } from "mobx-state-tree";

const SocialModel = t.model("SocialModel", {
    title: t.maybeNull(t.string),
    link: t.maybeNull(t.string),
    type: t.optional(t.union(t.literal('website'), t.literal('twitter'), t.literal('telegram')), 'website'),
});

export { SocialModel };