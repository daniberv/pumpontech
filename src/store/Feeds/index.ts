import { Instance } from "mobx-state-tree"

import FeedsModel from "./model"
import actions from "./actions"

const Feeds = FeedsModel.actions(actions)

type IFeeds = Instance<typeof Feeds>

export { Feeds }
export type { IFeeds }