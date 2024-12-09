import { Instance } from "mobx-state-tree"

import FavoritesModel from "./model"
import actions from "./actions"
import views from "./views"

const Favorites = FavoritesModel.views(views).actions(actions)

type IFavorites = Instance<typeof Favorites>

export { Favorites }
export type { IFavorites }