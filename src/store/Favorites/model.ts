import { Instance, types as t } from "mobx-state-tree"
import { Jettons } from "../Jettons"

const FavoritesModel = t.model({
    items: t.array(t.reference(t.late(() => Jettons))),
})

type IFavoritesModel = Instance<typeof FavoritesModel>

export default FavoritesModel

export type { IFavoritesModel }
