import { types as t } from "mobx-state-tree";
import { ChartPointModel } from "./ChartPoint";

const JettonChartModel = t.model("JettonChartModel", {
    items: t.maybeNull(t.array(ChartPointModel)),
});

export { JettonChartModel };