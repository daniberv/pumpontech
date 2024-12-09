import { types as t } from "mobx-state-tree";

const ChartPointModel = t.model("ChartPointModel", {
    time: t.optional(t.string, ''),
    value: t.optional(t.number, 0),
});

export { ChartPointModel };