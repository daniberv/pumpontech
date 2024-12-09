import { Instance, types as t } from "mobx-state-tree";
import { AuthorModel } from "./Author/model";
import { SocialsModel } from "./Socials/model";
import { JettonChartModel } from "../JettonChart";
import { HoldersModel } from "./Holder/model";
import { TransactionsModel } from "./Transactions/model";
import Fetchable from "@/store/abstract/Fetchable";
import { Syncable } from "@/store/abstract/Syncable";

const JettonModel = t.compose(
    t.model("JettonModel", {
        id: t.identifier,
        image: t.maybeNull(t.string),
        title: t.maybeNull(t.string),
        description: t.maybeNull(t.string),
        legend: t.maybeNull(t.string),
        symbol: t.maybeNull(t.string),
        price: t.maybeNull(t.number),
        marketCap: t.maybeNull(t.number),
        author: t.maybeNull(AuthorModel),
        bonding: t.maybeNull(t.number),
        points: t.maybeNull(t.number),
        grow24: t.maybeNull(t.number),
        isGainer: t.maybeNull(t.boolean),
        booster: t.maybeNull(t.number),
        supply: t.maybeNull(t.number),
        totalSupply: t.maybeNull(t.number),
        liquidity: t.maybeNull(t.number),
        contract: t.maybeNull(t.string),
        links: t.maybeNull(SocialsModel),
        chart: t.maybeNull(JettonChartModel),
        holders: t.maybeNull(HoldersModel),
        transactions: t.maybeNull(TransactionsModel),
    }),
    Fetchable(),
    Syncable,
);

type IJettonModel = Instance<typeof JettonModel>

export type { IJettonModel }
export { JettonModel };